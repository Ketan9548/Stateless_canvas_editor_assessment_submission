import React from 'react'

const ShareButton = () => {
    const handleShare = async () => {
        await navigator.clipboard.writeText(window.location.href);
        alert('Canvas link copied to clipboard!');
    };
    return (
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleShare}>
            Share Canvas
        </button>
    )
}

export default ShareButton
