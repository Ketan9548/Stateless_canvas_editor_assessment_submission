import React from 'react';
import {
    addRectangle,
    addCircle,
    addText,
    enablePen,
    disablePen,
    deleteSelected
} from '../utils/canvasHelpers';

const Toolbar = ({ fabricRef }) => {
    const canvas = fabricRef?.current;
    const handleColorChange = (color) => {
        const activeObject = canvas.getActiveObject();
        if (activeObject) {
            activeObject.set({ fill: color });
            canvas.requestRenderAll();
        }
    };


    if (!canvas) {
        return (
            <div className="text-red-500 font-semibold">
                Canvas not initialized yet.
            </div>
        );
    }

    return (
        <div className="flex gap-2 flex-wrap">
            <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                onClick={() => addRectangle(canvas)}
            >Add Rect</button>

            <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                onClick={() => addCircle(canvas)}
            >Add Circle</button>

            <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                onClick={() => addText(canvas)}
            >Add Text</button>

            <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                onClick={() => enablePen(canvas)}
            >Pen Tool</button>
            <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                onClick={() => disablePen(canvas)}
            >Disable Pen</button>
            <input
                type="color"
                className='border-2 size-10 border-gray-300 rounded p-1'
                onChange={(e) => handleColorChange(e.target.value)}
                title="Pick a color"
                style={{ marginLeft: '10px' }}
            />

            <button
                className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                onClick={() => deleteSelected(canvas)}
            >Delete</button>
        </div>
    );
};

export default Toolbar;
