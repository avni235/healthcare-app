import React from 'react';
import care24Logo from '../../assets/Images/care24-logo.png'; // Updated import

const TopHeader = () => {
  const headerStyle = {
    display: 'flex',
    height: '80px',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0C2F62', // Blue background
    padding: '10px 20px',
    color: 'white',
    borderBottomLeftRadius: '40px', // Adjust as needed
    borderBottomRightRadius: '40px',
  };

  const logoStyle = {
    height: '40px', // Adjust the height of the logo
  };

  const contactStyle = {
    fontSize: '16px',
  };

  return (
    <div style={headerStyle}>
      <img src={care24Logo} alt="Logo" style={logoStyle} /> {/* Use imported logo */}
      <div style={contactStyle}>Contact: (123) 456-7890</div>
    </div>
  );
};

export default TopHeader;
