import { useEffect } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import debounce from 'lodash.debounce';
import { db } from '../firebase/config';

function useCanvasAutosave(fabricRef, sceneId) {
    useEffect(() => {
        if (!fabricRef.current) return;
        const canvas = fabricRef.current;
        const saveCanvas = debounce(async () => {
            try {
                const json = canvas.toJSON();
                const clearedJson = JSON.parse(JSON.stringify(json));

                const docRef = doc(db, 'scenes', sceneId);

                await setDoc(docRef, { json: JSON.stringify(clearedJson) });

                console.log('Canvas autosaved');
            } catch (error) {
                console.error('Error saving canvas:', error);
            }
        }, 1000);
        canvas.on('canvas:changed', saveCanvas);
        return () => {
            canvas.off('canvas:changed', saveCanvas);
            saveCanvas.cancel();
        };
    }, [fabricRef, sceneId]);
}

export default useCanvasAutosave;
