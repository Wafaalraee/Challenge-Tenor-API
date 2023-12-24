import React, { useState } from 'react';
import axios from 'axios';
import SearchInput from './components/SearchInput';
import GifList from './components/GifList';

const TenorSearchApp = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [gifResults, setGifResults] = useState([])
  const apiKey = 'LIVDSRZULELA';
  const limit = 8;
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const apiUrl = `https://api.tenor.com/v1/search?q=${searchTerm}&key=${apiKey}&limit=${limit}`;
      const response = await axios.get(apiUrl);
      const gifs = response.data.results.map((result) => result.media[0].gif.url);
      setGifResults(gifs);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1 style={{ color: 'white' , background:'black'}}>Tenor GIF Search</h1>
      <SearchInput searchTerm={searchTerm} onInputChange={handleInputChange} onSearch={handleSearch} />
      <GifList gifResults={gifResults} />
    </div>
  );
};

export default TenorSearchApp;





