import React from 'react';
import { useTheme } from '../ThemeContext';

const Education = () => {
  const {isDarkMode} = useTheme();
  const bodyStyle = {
    backgroundColor: isDarkMode ? 'darkolivegreen' : '#333', // Change colors as needed
  };
  const cardStyle: React.CSSProperties = {
    backgroundColor:'rgba(0,0,0,0.75)',
    color: 'white',
    width: '1000px', // Set the card's width
    padding: '20px', // Add padding for spacing
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', // Add a shadow for a card-like effect
    filter: isDarkMode ? 'grayScale(0%)' : 'grayScale(100%)',
  };

  const imageContainerStyle: React.CSSProperties = {
    display: 'flex', // Display the images horizontally
    justifyContent: 'space-between', // Add space between the images
    marginTop: '10px', // Add some spacing below the text
  };

  const imageStyle: React.CSSProperties = {
    width: '300px', // Adjust the image width as needed
    height: 'auto', // Maintain the image aspect ratio
    border: '4px solid #000',
    borderRadius: '10px',
    transition: 'transform 0.2s'
  };
  // Function to handle hover effect
  const handleImageHover = (event:React.MouseEvent<HTMLImageElement>)=> {
    event.currentTarget.style.transform = 'scale(2)'; // Increase the image size by 10% on hover
    event.currentTarget.style.zIndex= '1';
  };
   // Function to handle hover out effect
   const handleImageHoverOut = (event: React.MouseEvent<HTMLImageElement>) => {
    event.currentTarget.style.transform = 'scale(1)'; // Restore the original image size on hover out
    event.currentTarget.style.zIndex= '0';
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
        <h1 style={{textAlign:'center'}}><b>Education</b></h1>
        <h2><b>Computer Programming, 2022-2023</b></h2>
        <h2>Seneca College - 1750 Finch Ave E, North York</h2>
        <ul>
          <li>President's Honours List: Three consecutive semesters in recognition of outstanding academic achievement</li>
          <li>Cumulative GPA: 3.9/4.0</li>
        </ul>
        {/* Flex container for images */}
        <div style={imageContainerStyle}>
          <img
            src="Honors Fall.jpeg"
            alt="Honors 1"
            style={imageStyle}
            onMouseEnter={handleImageHover} // Add hover effect on mouse enter
            onMouseLeave={handleImageHoverOut} // Restore original size on mouse leave
          />
          <img
            src="Honors Summer.jpeg"
            alt="Honors 2"
            style={imageStyle}
            onMouseEnter={handleImageHover} // Add hover effect on mouse enter
            onMouseLeave={handleImageHoverOut} // Restore original size on mouse leave
          />
          <img
            src="Winter Honors.JPG"
            alt="Honors 3"
            style={imageStyle}
            onMouseEnter={handleImageHover} // Add hover effect on mouse enter
            onMouseLeave={handleImageHoverOut} // Restore original size on mouse leave
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Education;





