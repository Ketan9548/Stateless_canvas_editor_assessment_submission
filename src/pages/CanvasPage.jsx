// src/pages/CanvasPage.jsx
import { useParams } from "react-router-dom";
import React, { useRef, useState } from 'react';
import CanvasEditor from "../Components/CanvasEditor";
import Toolbar from "../Components/Toolbar";
import ShareButton from "../Components/ShareButton";

const CanvasPage = () => {
  const { id } = useParams();
  const fabricRef = useRef(null);
  const [isCanvasReady, setIsCanvasReady] = useState(false);

  // Called when canvas is initialized in CanvasEditor
  const handleCanvasReady = (canvasInstance) => {
    fabricRef.current = canvasInstance;
    setIsCanvasReady(true);
  };

  if (!id) {
    return (
      <div className="text-center mt-10 text-red-500">
        Error: No scene ID provided in the URL.
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="p-2 border-b flex gap-2 items-center bg-gray-100">
        {isCanvasReady ? (
          <Toolbar fabricRef={fabricRef} />
        ) : (
          <p className="text-gray-500">Loading canvas...</p>
        )}
        <ShareButton />
      </div>

      <CanvasEditor
        sceneId={id}
        fabricRef={fabricRef}
        onCanvasReady={handleCanvasReady}
      />
    </div>
  );
};

export default CanvasPage;
