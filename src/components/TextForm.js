import React, { useState } from 'react';
import './TextForm.css'; // Import the CSS file for styling

export default function TextForm(props) {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Upper Case!", "success");
  };

  const handleloClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lower Case!", "success");
  };

  const clearText = () => {
    setText('');
    setCopied(false);
    props.showAlert("Text Cleared!", "success");
  };

  const reverseOnClick = () => {
    const reversedText = text.split('').reverse().join('');
    setText(reversedText);
    props.showAlert("Text Reversed!", "success");
  };

  const sortOnClick = () => {
    const sortedText = text.split(/\s+/).sort((a, b) => a.localeCompare(b)).join(' ');
    setText(sortedText);
    props.showAlert("Words Sorted!", "success");
  };

  const copyOnClick = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const handleExtraSpaces = () => {
    const newText = text.split(/[ ]+/).filter(word => word !== '').join(' ');
    setText(newText);
    props.showAlert("Extra Spaces Removed!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <h1 className='mb-3' style={{ textAlign: 'center', fontFamily: 'monospace' }}>{props.heading}</h1>
      <div className={`container text-form-container ${props.mode === 'dark' ? 'dark-mode' : 'light-mode'}`} style={{ bottom: '50px' }}>
        <div className="mb-3 textarea-container" style={{ fontFamily: 'monospace' }}>
          <textarea
            className="form-control"
            style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212529', color: props.mode === 'dark' ? 'white' : 'black', fontFamily: 'monospace' }}
            placeholder='Type or paste your content here'
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="5"
          ></textarea>
        </div>
        <div className="button-container">
          <button disabled={text.length === 0} style={{ fontFamily: 'monospace' }} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>UPPERCASE</button>
          <button disabled={text.length === 0} style={{ fontFamily: 'monospace' }} className="btn btn-primary mx-1 my-1" onClick={handleloClick}>lowercase</button>
          <button disabled={text.length === 0} style={{ fontFamily: 'monospace' }} className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear text</button>
          <button disabled={text.length === 0} style={{ fontFamily: 'monospace' }} className="btn btn-primary mx-1 my-1" onClick={reverseOnClick}>Reverse text</button>
          <button disabled={text.length === 0} style={{ fontFamily: 'monospace' }} className="btn btn-primary mx-1 my-1" onClick={sortOnClick}>Sort Words</button>
          <button disabled={text.length === 0} style={{ fontFamily: 'monospace' }} className="btn btn-primary mx-1 my-1" onClick={copyOnClick}>{copied ? "Copied to Clipboard" : "Copy to Clipboard"}</button>
          <button disabled={text.length === 0} style={{ fontFamily: 'monospace' }} className="btn btn-primary mx-1 my-1" onClick={speak}>Speak</button>
          <button disabled={text.length === 0} style={{ fontFamily: 'monospace' }} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
        </div>
      </div>
      <div className="container my-3 preview-container" style={{ fontFamily: 'monospace' }}>
        <p><b>Word count:</b> {text.split(/\s+/).filter(word => word !== '').length} | <b>Character count:</b> {text.length}</p>
        <h3>Preview</h3>
        <div className="preview-text">{text.length > 0 ? text : "Nothing to preview!"}</div>
      </div>
    </>
  );
}