import React from 'react';
import '../App.css'; // Ensure this is imported to apply styles

export default function About(props) {
  const myStyle = {
    color: props.mode === 'light' ? '#072942' : 'white',
    backgroundColor: props.mode === 'dark' ? '#212529' : 'white',
    padding: '0 1rem 1rem 1rem',
    borderRadius: '8px',
    textAlign: 'center',
    fontFamily: 'monospace',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease',
  };

  const accordionItemStyle = {
    backgroundColor: props.mode === 'dark' ? '#354365' : 'white',
    color: props.mode === 'dark' ? 'white' : '#072942',
  };

  const accordionBodyStyle = {
    backgroundColor: props.mode === 'dark' ? '#555' : '#f9f9f9',
    color: props.mode === 'dark' ? 'white' : 'black',
  };

  return (
    <div className='container mx-2' style={myStyle}>
      <h1 className='my-2' >About Us</h1>
      <div className=" accordion"  id="accordionExample">
        <div className="accordion-item" style={accordionItemStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={accordionItemStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong>Analyze Your text</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={accordionBodyStyle}>
            TextWiz gives you a way to analyze your text quickly and efficiently. Be it word count, character count or more.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={accordionItemStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={accordionItemStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Free to use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={accordionBodyStyle}>
            TextWiz is a free character counter tool that provides instant character count and word count statistics for a given text.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={accordionItemStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={accordionItemStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={accordionBodyStyle}>
              This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}