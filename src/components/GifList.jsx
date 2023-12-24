import React from 'react';

const GifList = ({ gifResults }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      {gifResults.map((gifUrl, index) => (
        <img
          key={index}
          src={gifUrl}
          alt={`GIF ${index + 1}`}
          style={{ width: '150px', height: '150px', margin: '5px', borderRadius: '4px' }}
        />
      ))}
    </div>
  );
};

export default GifList;

