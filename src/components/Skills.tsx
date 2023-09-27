import { useTheme } from '../ThemeContext';

const Skills = () => {
  const {isDarkMode} = useTheme();
  const bodyStyle = {
    backgroundColor: isDarkMode ? 'darkolivegreen' : '#333', // Change colors as needed
  };
  const cardStyle = {
    backgroundColor:'rgba(0,0,0,0.75)',
    color: 'white',
    width: '500px', // Set a fixed width for all cards
    height: '100%', // Make the height 100% to ensure equal height
  };
  const cardBodyStyle:React.CSSProperties = {
    flex: '1', // Make the card body grow to fill the available space
    overflow: 'hidden', // Hide content overflow
    whiteSpace: 'nowrap', // Prevent text from wrapping
  };
  return (
    <div>
      <style>
        {`body{
          background-color:${bodyStyle.backgroundColor}
        }`}
      </style>
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>

      <div className="card" style={cardStyle}>
        <div className="row no-gutters">
        <div className="d-flex flex-column">
        <div className="card-body" style={cardBodyStyle}>
              <h5 className="card-title">Technologies Stack</h5>
              <p className="card-text">
                <ul><li>Express JS, React JS, Node JS</li>
                  <li>Code Debugging</li>
                  <li>Design and Development</li>
                  <li>Git (Github, Gitlab)</li>
                  <li>PL/SQL</li>
                  <li>JavaScript, Python, C++, Java</li>
                  <li>Mobile Application Development</li>
                  <li>HTML, XML and CSS</li></ul></p>
            </div>
          </div>
        </div>
      </div>

      <div className="card" style={cardStyle}>
        <div className="row no-gutters">
        <div className="d-flex flex-column">
        <div className="card-body" style={cardBodyStyle}>
              <h5 className="card-title">Software Tools</h5>
              <p className="card-text">                <ul><li>Microsoft Office Suite
              </li>
                <li>Google Workspace</li>
                <li>Microsoft OneDrive</li>
                <li>Google Drive</li>
                <li>Microsoft Teams</li>
                <li>Microsoft SharePoint</li>
                <li>Visual Studio Code
                </li>
                <li>Visual Paradigm</li></ul></p>
            </div>
          </div>
        </div>
      </div>

      <div className="card" style={cardStyle}>
        <div className="row no-gutters">
        <div className="d-flex flex-column">
        <div className="card-body" style={cardBodyStyle}>
              <h5 className="card-title">Relevant Skills</h5>
              <p className="card-text">
                <ul><li>Typing</li>
                  <li>Computer Skills</li>
                  <li>Organizational Skills
                  </li>
                  <li>Self-Management</li>
                  <li>Attention to Detail</li>
                  <li>Remote Collaboration</li>
                  <li>Multitasking</li>
                  <li>Communication</li></ul></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Skills;