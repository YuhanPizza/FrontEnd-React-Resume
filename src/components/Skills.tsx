import React from 'react';

const Skills = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <h1>Skills</h1>

      <div className="card" style={{ width: '700px' }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src="image1.jpg" className="card-img" alt="Sample Image 1" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Title 1</h5>
              <p className="card-text">Description 1</p>
              <p className="card-text">Date: September 1, 2023</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card" style={{ width: '700px' }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src="image2.jpg" className="card-img" alt="Sample Image 2" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Title 2</h5>
              <p className="card-text">Description 2</p>
              <p className="card-text">Date: September 15, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;