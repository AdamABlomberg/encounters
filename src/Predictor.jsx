import React, { useState, useEffect } from 'react';
const axios = require('axios');
import MoonFill from './subroutines/MoonFill.jsx';
import moment from 'moment'
import { rapidapiConfig } from './rapidapiConfig.js'

var Predictor = (props) => {

  var location = 'Ogema,Wi';

  const [maxPressureIndex, setMaxPressureIndex] = useState();
  const [minPressureIndex, setMinPressureIndex] = useState();
  const [moonPhaseMonth1, setMoonPhaseMonth1] = useState();
  const [moonPhaseMonth2, setMoonPhaseMonth2] = useState();

  var day = moment().format('Do').split('th')[0];
  var month = moment().format('MMMM');
  var monthNumber = moment().format('MM');

  useEffect(() => {
    axios.get(`https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=${location}&contentType=json`,
      {
        headers: {
          'X-RapidAPI-Key': 'e61b0a9f09mshdb58f5e2ab6d180p1d7582jsn13186e52753c',
        }
      })
      .then((res => {
        var extendedForecast = res.data;
        var extendedForecastValues = extendedForecast.locations[location].values;
        var arraySeaLevelPressure = [];
        for (var i = 0; i < extendedForecastValues.length; i++) {
          arraySeaLevelPressure.push(extendedForecastValues[i].sealevelpressure);
        }
        var maxPressure = Math.max(...arraySeaLevelPressure);
        setMaxPressureIndex(arraySeaLevelPressure.indexOf(maxPressure));
        var maxIndex = arraySeaLevelPressure.indexOf(maxPressure);
        var maxPressureDate = moment().add(maxIndex, 'days').format('MMMM Do');
        var minPressure = Math.min(...arraySeaLevelPressure);
        setMinPressureIndex(arraySeaLevelPressure.indexOf(minPressure));
        var minIndex = arraySeaLevelPressure.indexOf(minPressure);
        var minPressureDate = moment().add(minIndex, 'days').format('MMMM Do');
      }))


    axios.get(`https://www.icalendar37.net/lunar/api/?lang=en&month=${monthNumber}&year=2022&size=100%25&lightColor=white&shadeColor=black&texturize=true`)
      .then(res => {
        setMoonPhaseMonth1(res.data);
      })
      .catch(err => console.log(err));
    axios.get(`https://www.icalendar37.net/lunar/api/?lang=en&month=11&year=2022&size=100%25&lightColor=white&shadeColor=black&texturize=true`)
      .then(res => {
        setMoonPhaseMonth2(res.data);
      })
      .catch(err => console.log(err));

  }, [])

  var nextMoons = [];
  if (moonPhaseMonth1 && moonPhaseMonth2) {
    var objectMoonPhase = {};
    for (var key in moonPhaseMonth1.phase) {
      objectMoonPhase[`${moonPhaseMonth1.monthName},${key}`] = moonPhaseMonth1.phase[key]['phaseName'];
    }
    for (var key in moonPhaseMonth2.phase) {
      objectMoonPhase[`${moonPhaseMonth2.monthName},${key}`] = moonPhaseMonth2.phase[key]['phaseName'];
    }
    var next = moment().add(1, 'months');
    var nextMonth = moment(next).format('MMMM');

    for (var key in objectMoonPhase) {
      var arrayDate = key.split(',')
      if (arrayDate[0] === month && parseInt(arrayDate[1]) >= parseInt(day) && objectMoonPhase[key] === 'Full moon') {
        var moonDate = moment(key).format('MMMM Do');
        nextMoons.push(`The next full moon is on ${moonDate}.`);
      }
      if (arrayDate[0] === month && parseInt(arrayDate[1]) >= parseInt(day) && objectMoonPhase[key] === 'New Moon') {
        var moonDate = moment(key).format('MMMM Do');
        nextMoons.push(`The next new moon is on ${moonDate}.`);
      }
      if (arrayDate[0] === nextMonth && parseInt(arrayDate[1]) <= parseInt(day) && objectMoonPhase[key] === 'Full moon') {
        var moonDate = moment(key).format('MMMM Do');
        nextMoons.push(`The next full moon is on ${moonDate}.`);
      }
      if (arrayDate[0] === nextMonth && parseInt(arrayDate[1]) <= parseInt(day) && objectMoonPhase[key] === 'New Moon') {
        var moonDate = moment(key).format('MMMM Do');
        nextMoons.push(`The next new moon is on ${moonDate}.`);
      }
    }
  }
  return (
    <div>

      {!nextMoons ? <div></div> :
        <div className='predictor'>
          <div className='box'>Predictor</div>
          <div className='table'>
            <ul >
              <li className='data'>The day in the extended forecast with maximum barometric pressure is {moment().add(maxPressureIndex, 'days').format('MMMM Do')}.</li>
              <li className='data'>The day in the extended forecast with minimum barometric pressure is {moment().add(minPressureIndex, 'days').format('MMMM Do')}.</li>
              <li className='data'> 🌕 {nextMoons[0]}</li>
              <li className='data'> 🌑 {nextMoons[1]}</li>
            </ul>
          </div>
          <div>

          </div>
        </div>}

    </div>
  );
}

export default Predictor;