// src/components/CanvasEditor.jsx
import { useEffect, useRef } from 'react';
import * as fabric from 'fabric';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import useCanvasAutosave from '../hooks/useCanvasAutosave';

function CanvasEditor({ sceneId, fabricRef, onCanvasReady }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (fabricRef.current) {
      fabricRef.current.dispose();
      fabricRef.current = null;
    }

    const canvas = new fabric.Canvas(canvasRef.current, {
      height: window.innerHeight - 64,
      width: window.innerWidth,
      backgroundColor: '#ffffff',
    });

    fabricRef.current = canvas;

    const loadCanvasData = async () => {
      const docRef = doc(db, 'scenes', sceneId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        canvas.loadFromJSON(docSnap.data().json, () => {
          canvas.renderAll();
          canvas.getObjects().forEach(obj => obj.setCoords());

          if (onCanvasReady) {
            setTimeout(() => onCanvasReady(canvas), 50);
          }
        });
      } else {
        if (onCanvasReady) onCanvasReady(canvas);
      }
    };

    loadCanvasData();

    // Track changes
    canvas.on('object:modified', () => {
      canvas.fire('canvas:changed');
    });
    canvas.on('object:added', () => {
      canvas.fire('canvas:changed');
    });

    // Handle resize
    const handleResize = () => {
      canvas.setWidth(window.innerWidth);
      canvas.setHeight(window.innerHeight - 64);
      canvas.renderAll();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      canvas.dispose();
      window.removeEventListener('resize', handleResize);
      fabricRef.current = null;
    };
  }, [sceneId]);

  useCanvasAutosave(fabricRef, sceneId);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}

export default CanvasEditor;
