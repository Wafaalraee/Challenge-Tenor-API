import React from 'react';

const SearchInput = ({ searchTerm, onInputChange, onSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder='Search for your lovely Dogs , Cats and Birds'
        value={searchTerm}
        onChange={onInputChange}
        style={{
          padding: '15px',
          marginRight: '15px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
      <button
        onClick={onSearch}
        style={{
          padding: '15px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchInput;
