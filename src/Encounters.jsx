import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import UploadModal from './subroutines/Upload.jsx'
const axios = require('axios');

function Images(props) {

  const [encounters, setEncounters] = useState();
  const [submitClicked, setSubmitClicked] = useState(false);  // refactor this!!

  useEffect(() => {
    axios.get(`/encounters`)
      .then(response => {
        //log('this is the response data from encounters =', response)
        setEncounters(response.data);
      })
      .catch(err => console.log('this is the err from encounters', err));
  }, [submitClicked]);




  return (
    <div>
      {!encounters ? <div></div> :
        <div>
          <Carousel autoPlay={false}>
            {
              encounters.map((item, i) => {
                return (<Item data-index={i} key={i} item={item}
                />)
              })
            }
          </Carousel>
        </div>
      }
    </div>
  )
}

//console.log(document.getElementById('fishPic').src);

function Item(props) {

  return (
    <div>
      <div className='box'>
        <div>
          <UploadModal />
        </div>
        <h4 >{props.item.description}</h4>
        <img id='fishPic' className='photos' src={props.item.photourl} />
        <table className='table'>
          <tbody>
            <tr>
              <td width='200' align='left' >lake/river: {props.item.waterway}</td><td width='200' align='left'>date: {props.item.date}</td><td width='200' align='left'>location: {props.item.location}</td>
            </tr>
            <tr>
              <td width='200' align='left' >rating: {props.item.rating}</td><td width='200' align='left'>lure: {props.item.lure}</td><td width='200' align='left'>length: {props.item.length}"</td>
            </tr>
            <tr>
              <td width='200' align='left' >weight: {props.item.weight}lbs</td><td width='200' align='left'>pressure: {props.item.pressure}mb</td><td width='200' align='left'>moon phase: {props.item.moonphase}</td>
            </tr>
            <tr>
              <td width='200' align='left' >temperature: {props.item.temperature}</td><td width='200' align='left'>weather: {props.item.weathertype}</td><td width='200' align='left'>wind speed: {props.item.windspeed}mph</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Images