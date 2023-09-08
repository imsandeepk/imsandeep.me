import React from 'react';

function Status() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',// Center vertically in the viewport
    textAlign: 'center',
  };

  const imageStyle = {
    maxWidth: '50%', // Limit image width to its container's width
    maxHeight: '50%', // Limit image height to its container's height
  };

  const textStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  return (
    <div style={containerStyle}>
      <h3 style={textStyle}>Ping Me on Discord!!<a href='discord://discord.com/channels/@me/759800813378863115'> sandeep_</a></h3>
      <img
        src="https://lanyard.cnrad.dev/api/428805362422906880"
        alt="status"
        style={imageStyle}
      />
    </div>
  );
}

export default Status;
