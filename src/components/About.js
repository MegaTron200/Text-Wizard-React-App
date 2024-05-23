import React from 'react';
import girlIcon from './girl-icon.jpeg';

export default function About(props) {
  const isDarkMode = props.mode === 'dark';

  return (
    <>
      <div className={`about-section ${isDarkMode ? 'dark' : ''}`}>
        <h1 style={{ textAlign: 'center', color: isDarkMode ? 'white' : 'white', transition: 'all 0.5s ease' }}>About Us Page</h1>
        <p>
          Text Wizard is a versatile text manipulation tool designed to help users easily modify and analyze text according to their needs. The development of Text Wizard involved thorough research into the existing text manipulation tools, identifying the key features and functionalities that users find most useful.
        </p>
        <p>
          The design of Text Wizard prioritizes simplicity and functionality. We opted for a clean and intuitive interface, with easy-to-use controls and clear visual feedback. The dark mode feature enhances readability and reduces eye strain during prolonged use.
        </p>
      </div>
      <h2 className="my-3" style={{ textAlign: 'center', color: isDarkMode ? 'white' : 'black', transition: 'all 0.5s ease' }}>
        About Creator
      </h2>
      <div className="row">
        <div className="column">
          <div className={`card ${isDarkMode ? 'dark' : ''}`}>
            <div className={`card-header ${isDarkMode ? 'dark' : ''}`}>
              <img src={girlIcon} alt="Suhani" style={{ width: '50px', borderRadius: '50%' }} />
              <div style={{ marginLeft: '10px', transition: 'all 0.5s ease' }}>
                <h2 style={{ color: isDarkMode ? 'white' : 'black' }}>Suhani Gupta</h2>
                <p className={`title ${isDarkMode ? 'dark' : ''}`}>React Developer</p>
              </div>
            </div>
            <div className="container" style={{ color: isDarkMode ? 'white' : 'black', transition: 'all 0.5s ease' }}>
              <p>Hi, I created this as a hobby project while learning React.</p>
              <p>suhanig200@gmail.com</p>
              <p>
                <a href="mailto:suhanig200@gmail.com">
                  <button className="button">Contact</button>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
