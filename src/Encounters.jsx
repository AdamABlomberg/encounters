import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import UploadModal from './subroutines/Upload.jsx'
const axios = require('axios');
import moment from 'moment'

function Images(props) {

  const [encounters, setEncounters] = useState();
  const [upload, setUpload] = useState(false);  // refactor this!!

  var setStateOfUpload = (click) => {
    setUpload(click);
  }

  useEffect(() => {
    //console.log('setStateOfUpload should change upload =', upload)
    axios.get(`/encounters`)
      .then(response => {
        //console.log('this is the response data from encounters =', response)
        setEncounters(response.data);
        //console.log(response.data);
      })
      .catch(err => console.log('this is the err from encounters', err));
  }, [upload]);




  return (
    <div>
      {!encounters ? <div></div> :
        <div>
          <Carousel autoPlay={false}>
            {
              encounters.map((item, i) => {
                return (<Item setStateOfUpload = {setStateOfUpload} data-index={i} key={i} item={item}
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
  //console.log('props =', props);
  return (
    <div>
      <div className='box'>
        <div>
          <UploadModal setStateOfUpload = {props.setStateOfUpload}/>
        </div>
        <h4 >{props.item.description}</h4>
        <img id='fishPic' className='photos' src={props.item.photourl} />
        <table className='table'>
          <tbody>
            <tr>
              <td width='200' align='left' >lake/river: {props.item.waterway}</td><td width='200' align='left'>date: {moment(props.item.date).format("MMM Do, YYYY")}</td><td width='200' align='left'>location: {props.item.location}</td>
            </tr>
            <tr>
              <td width='200' align='left' >rating: {props.item.rating}</td><td width='200' align='left'>lure: {props.item.lure}</td><td width='200' align='left'>length: {props.item.length}"</td>
            </tr>
            <tr>
              <td width='200' align='left' >weight: {props.item.weight}lbs</td><td width='200' align='left'>pressure: {props.item.pressure}mb </td><td width='200' align='left'>moon phase: {props.item.moonphase}</td>
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