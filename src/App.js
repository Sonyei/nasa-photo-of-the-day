import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Displays from './Displays'
import Carousel from './Carousel'
import styled from 'styled-components'
import './App.css';

const StyledHeader = styled.div`
  color: ${pr => pr.theme.nasaTitle};
  font-weight: ${pr => pr.bold};
`

function App() {
  const [image, setImage] = useState({})


useEffect(() => {
const fetchPicture = () => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=11MZcjXaDbde3HCr8PtHAUd95sM1ug2yTqFNVQeN')
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
    <StyledHeader className="App">
      <h1>
        NASA: Astronomy Picture of the Day
      </h1>
    <Displays imgInfo={image.url} title={image.title} copyright={image.copyright} date={image.date} imageDesc={image.explanation}/>
    </StyledHeader>
  );
}

export default App;
