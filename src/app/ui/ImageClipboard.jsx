"use client";
import { useState } from 'react';
import Image from 'next/image';
function ImageClipboard({image_path}) {
  const [textToCopy] = useState('simon3421');
  const [copied, setCopied] = useState(false);

  const copyText = async () => {
    try {
      // Use the Clipboard API to copy text
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      alert('Text copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
  };

  return (
    <div>
        <Image className=' transition-transform duration-100 transform hover:scale-110' src={image_path} onClick={copyText} width={40} height={40} alt="Clipboard" />
      {/* <p>{textToCopy}</p>
      <button onClick={copyText}>
        {copied ? 'Text Copied!' : 'Copy Text'}
      </button> */}
    </div>
  );
}


export default ImageClipboard