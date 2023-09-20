import React from 'react';

const AboutMe = () => {
  const containerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "white",
    paddingTop: "50px",
  };
  const headerStyle = {
    marginTop: "20px",
  };
  const cardStyle: React.CSSProperties = {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    borderRadius: "10px",
    padding: "20px",
    width: "700px",
    margin: "70px auto 20px", // Add margin to the top, and keep margin auto for centering
    position: "absolute", // Position the card absolutely
    left: 0,
    right: 0,
  };
  const techStyle: React.CSSProperties = {
    backgroundColor: "rgba(255, 255, 255)",
    borderRadius: "10px",
    padding: "20px",
    width: "700px",
    margin: "70px auto 20px", // Add margin to the top, and keep margin auto for centering
    position: "absolute", // Position the card absolutely
    left: 0,
    right: 0,
  };
  return (
      <div className="container">
        <div className="card" style={cardStyle}>
          <div className="card-body">
            <section id="aboutMe" style={containerStyle}>
              <div style={headerStyle}>
                <a href="lorenz">
                  <img src="./src/assets/lorenz.jpg" alt="Lorenz" width={300} />
                </a>
                <h1>About Me</h1>
                <p>I'm a full-stack software developer that just recently graduated with honors from Seneca College, ready to embark on my digital journey one step at a time. All coding projects are coded by me from the ground up for school workshops, school projects, personal projects, tutorials, and code reviews, from ideation and planning, all the way to finalizing the project with my own personal touches. Welcome, and let's start this journey together!</p>
              </div>
              <h3>Connect with me:</h3>
              <p>
                <a href="https://lorenzalvintubo@gmail.com" target="blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/google.svg" alt="lorenzalvintubo" height="30" width="40" /></a>
                <a href="https://linkedin.com/in/lorenzalvintubo" target="blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="lorenzalvintubo" height="30" width="40" /></a>
                <a href="https://fb.com/angel.on.the.beach" target="blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="angel.on.the.beach" height="30" width="40" /></a>
                <a href="https://instagram.com/lorenzoinked" target="blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="lorenzoinked" height="30" width="40" /></a>
              </p>
              <div style={techStyle}>
              <h3 style={{color:'black'}}>Languages and Tools:</h3>
              
                <p> <a href="https://developer.android.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg" alt="android" width="40" height="40" /> </a> <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40" /> </a> <a href="https://www.cprogramming.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="40" height="40" /> </a> <a href="https://www.w3schools.com/cpp/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="40" height="40" /> </a> <a href="https://www.w3schools.com/cs/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp" width="40" height="40" /> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" /> </a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40" /> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40" /> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" /> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" /> </a> <a href="https://www.linux.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40" /> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40" /> </a> <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40" /> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="60" height="60" /> </a> <a href="https://www.oracle.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg" alt="oracle" width="40" height="40" /> </a> <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40" /> </a> <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40" /> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" /> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40" /> </a> <a href="https://unity.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg" alt="unity" width="40" height="40" /> </a> </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      
  );
};

export default AboutMe;