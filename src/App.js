import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Displays from './Displays'
import './App.css';

function App() {
  const [image, setImage] = useState({})

useEffect(() => {
const fetchPicture = () => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
    console.log(res.data)
    setImage(res.data)
    })
    .catch(err => {
    console.log(`This is the error -->`, err)
    })
    }
  fetchPicture()
  }, [])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    <Displays imgInfo={image.url} title={image.title} copyright={image.copyright} date={image.date} imageDesc={image.explanation}/>
    </div>
  );
}

export default App;
