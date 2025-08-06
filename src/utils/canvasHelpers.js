// src/utils/canvasHelpers.js
import * as fabric from 'fabric';

// this for adding shapes and text to the canvas
export const addRectangle = (canvas) => {
    console.log('Adding rectangle to canvas');
    const rect = new fabric.Rect({
        width: 100,
        height: 100,
        fill: 'red',
        left: 50,
        top: 50,
    });
    canvas.add(rect);
};

// this for adding circles to the canvas
export const addCircle = (canvas) => {
    console.log('Adding circle to canvas');
    const circle = new fabric.Circle({
        radius: 50,
        fill: 'blue',
        left: 150,
        top: 150,
    });
    canvas.add(circle);
};


// this for adding text to the canvas
export const addText = (canvas) => {
    console.log('Adding text to canvas');
    const text = new fabric.IText('Edit me', {
        left: 200,
        top: 200,
        fontSize: 24,
        fill: 'black',
    });
    canvas.add(text);
};

// this for enabling and disabling the pen tool
export const enablePen = (canvas) => {
    if (!canvas) return;

    canvas.isDrawingMode = true; // ✅ Enable drawing mode
    canvas.freeDrawingBrush = new fabric.PencilBrush(canvas); // ✅ Use PencilBrush

    canvas.freeDrawingBrush.color = '#000000'; // Or any color
    canvas.freeDrawingBrush.width = 2; // Brush width in pixels

    canvas.renderAll(); // Optional but good
};

// this for disabling the pen tool
export const disablePen = (canvas) => {
    console.log('Disabling pen tool');
    canvas.isDrawingMode = false;
};

// this for clearing the canvas
export const deleteSelected = (canvas) => {
    console.log('Deleting selected object(s) from canvas');
    const activeObject = canvas.getActiveObject();

    if (activeObject) {
        if (activeObject.type === 'activeSelection') {
            activeObject.forEachObject(obj => canvas.remove(obj));
        } else {
            canvas.remove(activeObject);
        }
        canvas.discardActiveObject();
        canvas.renderAll();
    }
};

