import React, { useState, useEffect } from 'react';
const axios = require('axios');
import MoonFill from './subroutines/MoonFill.jsx';
import moment from 'moment'


// const date = new Date();

// let day = date.getDate();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();

// // This arrangement can be altered based on how we want the date's format to appear.
// let currentDate = `${day}-${month}-${year}`;
// console.log(currentDate); // "17-6-2022"
// console.log(moment().format('MMMM Do'));
// var newDate = moment().add(11,'days').format('MMMM Do');
// console.log(newDate);
// console.log(moment('October,25').format('MMMM Do'))

var Predictor = (props) => {

  var location = 'Ogema,Wi';

  const [maxPressureIndex, setMaxPressureIndex] = useState();
  const [minPressureIndex, setMinPressureIndex] = useState();
  const [moonPhaseMonth1, setMoonPhaseMonth1] = useState();
  const [moonPhaseMonth2, setMoonPhaseMonth2] = useState();

  var day = moment().format('Do').split('th')[0];
  //var month = 'September';
  var month = moment().format('MMMM');
  var monthNumber = moment().format('MM');
  //console.log(monthNumber);

  useEffect(() => {
    //DB routes
    axios.get(`https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=${location}&contentType=json`,
      {
        headers: {
          'X-RapidAPI-Key': '9902ee0a3fmshd4e111db7197dd9p1804b4jsnb1fc2b449c1c',
        }
      })
      .then((res => {
        //console.log('this is the response from the axios reqest', res.data);
        var extendedForecast = res.data;
        //console.log(extendedForecast.locations[location].values);
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


        // console.log(arraySeaLevelPressure);
        // console.log("max pressure = ", maxPressure);
        // console.log("min pressure = ", minPressure);
        // console.log("max pressure index =", maxPressureIndex);
        // console.log("min pressure index =", minPressureIndex);
        // console.log("max pressure date =", maxPressureDate);
        // console.log("min pressure date =", minPressureDate);
      }))

    // moon phase  // search 2 months for new moons and full moons, record dates and report them below
    //var day = 29;
    // var day = moment().format('Do').split('th')[0];
    // //var month = 'September';
    // var month = moment().format('MMMM');
    // var monthNumber = moment().format('MM');
    // console.log(monthNumber);


    axios.get(`https://www.icalendar37.net/lunar/api/?lang=en&month=${monthNumber}&year=2022&size=100%25&lightColor=white&shadeColor=black&texturize=true`)
      .then(res => {
        //console.log(res.data.phase)
        setMoonPhaseMonth1(res.data);
      })
      .catch(err => console.log(err));
    axios.get(`https://www.icalendar37.net/lunar/api/?lang=en&month=11&year=2022&size=100%25&lightColor=white&shadeColor=black&texturize=true`)
      .then(res => {
        //console.log(res.data)
        setMoonPhaseMonth2(res.data);
      })
      .catch(err => console.log(err));
    //FIX BUG in full moon calculator

    //Find the next two months
    //Call API for these two months
    //

    //   var moonPhaseMonth1 = {
    //       "monthName": "September",
    //       "firstDayMonth": "4",
    //       "daysMonth": "30",
    //       "nameDay": [
    //           "Monday",
    //           "Tuesday",
    //           "Wednesday",
    //           "Thursday",
    //           "Friday",
    //           "Saturday",
    //           "Sunday"
    //       ],
    //       "nameMonth": [
    //           "January",
    //           "February",
    //           "March",
    //           "April",
    //           "May",
    //           "June",
    //           "July",
    //           "August",
    //           "September",
    //           "October",
    //           "November",
    //           "December"
    //       ],
    //       "phase": {
    //           "1": {
    //               "phaseName": "Waxing",
    //               "isPhaseLimit": false,
    //               "lighting": 25.33058051071173,
    //               "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A 24.5,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //               "svgMini": false,
    //               "timeEvent": false,
    //               "dis": 377211.2731070786,
    //               "dayWeek": 3,
    //               "npWidget": "Waxing (25%)"
    //           },
    //           "2": {
    //               "phaseName": "Waxing",
    //               "isPhaseLimit": false,
    //               "lighting": 35.37884661650496,
    //               "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A 14.7,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //               "svgMini": false,
    //               "timeEvent": false,
    //               "dis": 372871.3115926515,
    //               "dayWeek": 4,
    //               "npWidget": "Waxing (35%)"
    //           },
    //           "3": {
    //               "phaseName": "First quarter",
    //               "isPhaseLimit": 2,
    //               "lighting": 46.31570842749767,
    //               "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A 3.92,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //               "svgMini": "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 100 100'><circle cx='50' cy='50' r='48'  stroke-width='0' fill='white' /><path d='M50,2 A48,48 0 0,0 50,98'  stroke-width='0' fill='black' /></svg>",
    //               "timeEvent": "20:08:50",
    //               "dis": 369109.9993797907,
    //               "dayWeek": 5,
    //               "npWidget": "First quarter"
    //           },
    //           "4": {
    //               "phaseName": "Waxing",
    //               "isPhaseLimit": false,
    //               "lighting": 57.63069513124604,
    //               "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A -6.86,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //               "svgMini": false,
    //               "timeEvent": false,
    //               "dis": 366151.6701984074,
    //               "dayWeek": 6,
    //               "npWidget": "Waxing (57%)"
    //           },
    //           "5": {
    //               "phaseName": "Waxing",
    //               "isPhaseLimit": false,
    //               "lighting": 68.74015656355877,
    //               "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A -17.64,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //               "svgMini": false,
    //               "timeEvent": false,
    //               "dis": 364180.80350076023,
    //               "dayWeek": 0,
    //               "npWidget": "Waxing (68%)"
    //           },
    //           "6": {
    //               "phaseName": "Waxing",
    //               "isPhaseLimit": false,
    //               "lighting": 79.00568813038782,
    //               "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A -28.42,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //               "svgMini": false,
    //               "timeEvent": false,
    //               "dis": 363327.4134672948,
    //               "dayWeek": 1,
    //               "npWidget": "Waxing (79%)"
    //           },
    //           "7": {
    //               "phaseName": "Waxing",
    //               "isPhaseLimit": false,
    //               "lighting": 87.77533355619524,
    //               "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A -36.26,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //               "svgMini": false,
    //               "timeEvent": false,
    //               "dis": 363655.8263076261,
    //               "dayWeek": 2,
    //               "npWidget": "Waxing (87%)"
    //           },
    //           "8": {
    //               "phaseName": "Waxing",
    //               "isPhaseLimit": false,
    //               "lighting": 94.45563702781507,
    //               "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A -43.12,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //               "svgMini": false,
    //               "timeEvent": false,
    //               "dis": 365157.7527162775,
    //               "dayWeek": 3,
    //               "npWidget": "Waxing (94%)"
    //           },
    //           "9": {
    //               "phaseName": "Waxing",
    //               "isPhaseLimit": false,
    //               "lighting": 98.602725473132,
    //               "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A -47.04,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //               "svgMini": false,
    //               "timeEvent": false,
    //               "dis": 367750.4691712238,
    //               "dayWeek": 4,
    //               "npWidget": "Waxing (98%)"
    //           },
    //           "10": {
    //               "phaseName": "Full moon",
    //               "isPhaseLimit": 3,
    //               "lighting": 99.99995935701479,
    //               "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A -48.02,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //               "svgMini": "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 100 100'><circle cx='50' cy='50' r='48'  stroke-width='0' fill='white' /><path d='M50,2 A48,48 0 0,0 50,98'  stroke-width='0' fill='white' /></svg>",
    //               "timeEvent": "11:58:51",
    //               "dis": 371280.86422266095,
    //               "dayWeek": 5,
    //               "npWidget": "Full moon"
    //           },
    //           "11": {
    //               "phaseName": "Waning",
    //               "isPhaseLimit": false,
    //               "lighting": 98.68730970951383,
    //               "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A -47.04,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //               "svgMini": false,
    //               "timeEvent": false,
    //               "dis": 375535.8138191459,
    //               "dayWeek": 6,
    //               "npWidget": "Waning (98%)"
    //           },
    //           "12": {
    //               "phaseName": "Waning",
    //               "isPhaseLimit": false,
    //               "lighting": 94.92920341036277,
    //               "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A -43.12,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //               "svgMini": false,
    //               "timeEvent": false,
    //               "dis": 380258.5968164208,
    //               "dayWeek": 0,
    //               "npWidget": "Waning (94%)"
    //           },
    //           "13": {
    //               "phaseName": "Waning",
    //               "isPhaseLimit": false,
    //               "lighting": 89.13760553386766,
    //               "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A -38.22,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //               "svgMini": false,
    //               "timeEvent": false,
    //               "dis": 385169.86534967745,
    //               "dayWeek": 1,
    //               "npWidget": "Waning (89%)"
    //           },
    //           "14": {
    //               "phaseName": "Waning",
    //               "isPhaseLimit": false,
    //               "lighting": 81.78388719987535,
    //               "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A -30.38,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //               "svgMini": false,
    //               "timeEvent": false,
    //               "dis": 389990.40772943525,
    //               "dayWeek": 2,
    //               "npWidget": "Waning (81%)"
    //           },
    //           "15": {
    //               "phaseName": "Waning",
    //               "isPhaseLimit": false,
    //               "lighting": 73.32882994365488,
    //               "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A -22.54,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //               "svgMini": false,
    //               "timeEvent": false,
    //               "dis": 394462.1790671634,
    //               "dayWeek": 3,
    //               "npWidget": "Waning (73%)"
    //           },
    //           "16": {
    //               "phaseName": "Waning",
    //               "isPhaseLimit": false,
    //               "lighting": 64.18386918839693,
    //               "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A -13.72,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //               "svgMini": false,
    //               "timeEvent": false,
    //               "dis": 398364.3295234195,
    //               "dayWeek": 4,
    //               "npWidget": "Waning (64%)"
    //           },
    //           "17": {
    //               "phaseName": "Last quarter",
    //               "isPhaseLimit": 4,
    //               "lighting": 54.70143207689122,
    //               "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A -3.92,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //               "svgMini": "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 100 100'><circle cx='50' cy='50' r='48'  stroke-width='0' fill='black' /><path d='M50,2 A48,48 0 0,0 50,98'  stroke-width='0' fill='white' /></svg>",
    //               "timeEvent": "23:52:17",
    //               "dis": 401522.29811124434,
    //               "dayWeek": 5,
    //               "npWidget": "Last quarter"
    //           },
    //           "18": {
    //               "phaseName": "Waning",
    //               "isPhaseLimit": false,
    //               "lighting": 45.18456616328347,
    //               "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A 4.9,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //               "svgMini": false,
    //               "timeEvent": false,
    //               "dis": 403809.99145704485,
    //               "dayWeek": 6,
    //               "npWidget": "Waning (45%)"
    //           },
    //           "19": {
    //               "phaseName": "Waning",
    //               "isPhaseLimit": false,
    //               "lighting": 35.90531918703866,
    //               "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A 14.7,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //               "svgMini": false,
    //               "timeEvent": false,
    //               "dis": 405146.86851068266,
    //               "dayWeek": 0,
    //               "npWidget": "Waning (35%)"
    //           },
    //           "20": {
    //               "phaseName": "Waning",
    //               "isPhaseLimit": false,
    //               "lighting": 27.123976355385874,
    //               "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A 22.54,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //               "svgMini": false,
    //               "timeEvent": false,
    //               "dis": 405492.75664089614,
    //               "dayWeek": 1,
    //               "npWidget": "Waning (27%)"
    //           },
    //           "21": {
    //               "phaseName": "Waning",
    //               "isPhaseLimit": false,
    //               "lighting": 19.104354090522452,
    //               "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A 30.38,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //               "svgMini": false,
    //               "timeEvent": false,
    //               "dis": 404843.18585382187,
    //               "dayWeek": 2,
    //               "npWidget": "Waning (19%)"
    //           },
    //           "22": {
    //               "phaseName": "Waning",
    //               "isPhaseLimit": false,
    //               "lighting": 12.122501382064666,
    //               "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A 37.24,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //               "svgMini": false,
    //               "timeEvent": false,
    //               "dis": 403227.1151554327,
    //               "dayWeek": 3,
    //               "npWidget": "Waning (12%)"
    //           },
    //           "23": {
    //               "phaseName": "Waning",
    //               "isPhaseLimit": false,
    //               "lighting": 6.467133956787769,
    //               "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A 43.12,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //               "svgMini": false,
    //               "timeEvent": false,
    //               "dis": 400707.5460022156,
    //               "dayWeek": 4,
    //               "npWidget": "Waning (6%)"
    //           },
    //           "24": {
    //               "phaseName": "Waning",
    //               "isPhaseLimit": false,
    //               "lighting": 2.4303401834884717,
    //               "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A 47.04,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //               "svgMini": false,
    //               "timeEvent": false,
    //               "dis": 397384.1252749918,
    //               "dayWeek": 5,
    //               "npWidget": "Waning (2%)"
    //           },
    //           "25": {
    //               "phaseName": "New Moon",
    //               "isPhaseLimit": 1,
    //               "lighting": 0.2874044133243381,
    //               "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A 49,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //               "svgMini": "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 100 100'><circle cx='50' cy='50' r='48'  stroke-width='0' fill='black' /><path d='M50,2 A48,48 0 0,0 50,98'  stroke-width='0' fill='black' /></svg>",
    //               "timeEvent": "23:54:04",
    //               "dis": 393395.8204818813,
    //               "dayWeek": 6,
    //               "npWidget": "New Moon"
    //           },
    //           "26": {
    //               "phaseName": "Waxing",
    //               "isPhaseLimit": false,
    //               "lighting": 0.2660591909272869,
    //               "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A 49,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //               "svgMini": false,
    //               "timeEvent": false,
    //               "dis": 388921.3724448979,
    //               "dayWeek": 0,
    //               "npWidget": "Waxing (0%)"
    //           },
    //           "27": {
    //               "phaseName": "Waxing",
    //               "isPhaseLimit": false,
    //               "lighting": 2.508769824342366,
    //               "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A 47.04,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //               "svgMini": false,
    //               "timeEvent": false,
    //               "dis": 384175.60099692474,
    //               "dayWeek": 1,
    //               "npWidget": "Waxing (2%)"
    //           },
    //           "28": {
    //               "phaseName": "Waxing",
    //               "isPhaseLimit": false,
    //               "lighting": 7.036075035230793,
    //               "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A 42.14,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //               "svgMini": false,
    //               "timeEvent": false,
    //               "dis": 379400.64437733433,
    //               "dayWeek": 2,
    //               "npWidget": "Waxing (7%)"
    //           },
    //           "29": {
    //               "phaseName": "Waxing",
    //               "isPhaseLimit": false,
    //               "lighting": 13.721961580148717,
    //               "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A 36.26,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //               "svgMini": false,
    //               "timeEvent": false,
    //               "dis": 374852.5177859472,
    //               "dayWeek": 3,
    //               "npWidget": "Waxing (13%)"
    //           },
    //           "30": {
    //               "phaseName": "Waxing",
    //               "isPhaseLimit": false,
    //               "lighting": 22.29039065070567,
    //               "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A 27.44,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //               "svgMini": false,
    //               "timeEvent": false,
    //               "dis": 370784.52783367195,
    //               "dayWeek": 4,
    //               "npWidget": "Waxing (22%)"
    //           }
    //       },
    //       "month": 9,
    //       "year": 2022,
    //       "receivedVariables": {
    //           "lang": "en",
    //           "month": "9",
    //           "year": "2022",
    //           "size": "100%",
    //           "lightColor": "white",
    //           "shadeColor": "black",
    //           "texturize": "true"
    //       },
    //       "lang": "en",
    //       "language": "English",
    //       "title": [
    //           "Moon's calendar",
    //           "Moon phases"
    //       ],
    //       "nextFullMoon": "<svg height=\"18\" width=\"18\" style=\"margin-top:-2px;display:inline-block; vertical-align:middle;stroke:black;stroke-width:px;fill:white\">\r\n<title>Full moon</title>\r\n<circle cx=\"9\" cy=\"9\" r=\"8\" />\r\n</svg> <b>9</b> October",
    //       "autor": "wdisseny.com",
    //       "version": "2"
    //   }

  }, [])

  var nextMoons = [];
  if (moonPhaseMonth1 && moonPhaseMonth2) {
    var objectMoonPhase = {};

    for (var key in moonPhaseMonth1.phase) {
      objectMoonPhase[`${moonPhaseMonth1.monthName},${key}`] = moonPhaseMonth1.phase[key]['phaseName'];
    }

    //   var moonPhaseMonth2 = {
    //     "monthName": "October",
    //     "firstDayMonth": "6",
    //     "daysMonth": "31",
    //     "nameDay": [
    //         "Monday",
    //         "Tuesday",
    //         "Wednesday",
    //         "Thursday",
    //         "Friday",
    //         "Saturday",
    //         "Sunday"
    //     ],
    //     "nameMonth": [
    //         "January",
    //         "February",
    //         "March",
    //         "April",
    //         "May",
    //         "June",
    //         "July",
    //         "August",
    //         "September",
    //         "October",
    //         "November",
    //         "December"
    //     ],
    //     "phase": {
    //         "1": {
    //             "phaseName": "Waxing",
    //             "isPhaseLimit": false,
    //             "lighting": 32.33436542793615,
    //             "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A 17.64,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //             "svgMini": false,
    //             "timeEvent": false,
    //             "dis": 367429.6999496243,
    //             "dayWeek": 5,
    //             "npWidget": "Waxing (32%)"
    //         },
    //         "2": {
    //             "phaseName": "Waxing",
    //             "isPhaseLimit": false,
    //             "lighting": 43.349194990721394,
    //             "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A 6.86,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //             "svgMini": false,
    //             "timeEvent": false,
    //             "dis": 364984.3376031041,
    //             "dayWeek": 6,
    //             "npWidget": "Waxing (43%)"
    //         },
    //         "3": {
    //             "phaseName": "First quarter",
    //             "isPhaseLimit": 2,
    //             "lighting": 54.76713320061586,
    //             "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A -3.92,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //             "svgMini": "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 100 100'><circle cx='50' cy='50' r='48'  stroke-width='0' fill='white' /><path d='M50,2 A48,48 0 0,0 50,98'  stroke-width='0' fill='black' /></svg>",
    //             "timeEvent": "2:15:26",
    //             "dis": 363594.2989826894,
    //             "dayWeek": 0,
    //             "npWidget": "First quarter"
    //         },
    //         "4": {
    //             "phaseName": "Waxing",
    //             "isPhaseLimit": false,
    //             "lighting": 65.98586780141326,
    //             "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A -14.7,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //             "svgMini": false,
    //             "timeEvent": false,
    //             "dis": 363344.88746915775,
    //             "dayWeek": 1,
    //             "npWidget": "Waxing (65%)"
    //         },
    //         "5": {
    //             "phaseName": "Waxing",
    //             "isPhaseLimit": false,
    //             "lighting": 76.39472579615871,
    //             "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A -25.48,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //             "svgMini": false,
    //             "timeEvent": false,
    //             "dis": 364254.7296130536,
    //             "dayWeek": 2,
    //             "npWidget": "Waxing (76%)"
    //         },
    //         "6": {
    //             "phaseName": "Waxing",
    //             "isPhaseLimit": false,
    //             "lighting": 85.40975489732338,
    //             "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A -34.3,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //             "svgMini": false,
    //             "timeEvent": false,
    //             "dis": 366273.81068923377,
    //             "dayWeek": 3,
    //             "npWidget": "Waxing (85%)"
    //         },
    //         "7": {
    //             "phaseName": "Waxing",
    //             "isPhaseLimit": false,
    //             "lighting": 92.5240829406708,
    //             "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A -41.16,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //             "svgMini": false,
    //             "timeEvent": false,
    //             "dis": 369285.88485955365,
    //             "dayWeek": 4,
    //             "npWidget": "Waxing (92%)"
    //         },
    //         "8": {
    //             "phaseName": "Waxing",
    //             "isPhaseLimit": false,
    //             "lighting": 97.36557135651363,
    //             "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A -46.06,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //             "svgMini": false,
    //             "timeEvent": false,
    //             "dis": 373115.5408868659,
    //             "dayWeek": 5,
    //             "npWidget": "Waxing (97%)"
    //         },
    //         "9": {
    //             "phaseName": "Full moon",
    //             "isPhaseLimit": 3,
    //             "lighting": 99.74165307859307,
    //             "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A -48.02,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //             "svgMini": "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 100 100'><circle cx='50' cy='50' r='48'  stroke-width='0' fill='white' /><path d='M50,2 A48,48 0 0,0 50,98'  stroke-width='0' fill='white' /></svg>",
    //             "timeEvent": "22:54:41",
    //             "dis": 377540.01343835756,
    //             "dayWeek": 6,
    //             "npWidget": "Full moon"
    //         },
    //         "10": {
    //             "phaseName": "Waning",
    //             "isPhaseLimit": false,
    //             "lighting": 99.65226564089971,
    //             "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A -48.02,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //             "svgMini": false,
    //             "timeEvent": false,
    //             "dis": 382305.22881658154,
    //             "dayWeek": 0,
    //             "npWidget": "Waning (99%)"
    //         },
    //         "11": {
    //             "phaseName": "Waning",
    //             "isPhaseLimit": false,
    //             "lighting": 97.26569687797732,
    //             "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A -46.06,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //             "svgMini": false,
    //             "timeEvent": false,
    //             "dis": 387144.6471780726,
    //             "dayWeek": 1,
    //             "npWidget": "Waning (97%)"
    //         },
    //         "12": {
    //             "phaseName": "Waning",
    //             "isPhaseLimit": false,
    //             "lighting": 92.86837686976341,
    //             "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A -41.16,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //             "svgMini": false,
    //             "timeEvent": false,
    //             "dis": 391798.5552970399,
    //             "dayWeek": 2,
    //             "npWidget": "Waning (92%)"
    //         },
    //         "13": {
    //             "phaseName": "Waning",
    //             "isPhaseLimit": false,
    //             "lighting": 86.80762024013356,
    //             "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A -35.28,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //             "svgMini": false,
    //             "timeEvent": false,
    //             "dis": 396031.0420006376,
    //             "dayWeek": 3,
    //             "npWidget": "Waning (86%)"
    //         },
    //         "14": {
    //             "phaseName": "Waning",
    //             "isPhaseLimit": false,
    //             "lighting": 79.44371694143271,
    //             "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A -28.42,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //             "svgMini": false,
    //             "timeEvent": false,
    //             "dis": 399642.2884633072,
    //             "dayWeek": 4,
    //             "npWidget": "Waning (79%)"
    //         },
    //         "15": {
    //             "phaseName": "Waning",
    //             "isPhaseLimit": false,
    //             "lighting": 71.11953320115904,
    //             "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A -20.58,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //             "svgMini": false,
    //             "timeEvent": false,
    //             "dis": 402475.00769745215,
    //             "dayWeek": 5,
    //             "npWidget": "Waning (71%)"
    //         },
    //         "16": {
    //             "phaseName": "Waning",
    //             "isPhaseLimit": false,
    //             "lighting": 62.14802529032808,
    //             "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A -11.76,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //             "svgMini": false,
    //             "timeEvent": false,
    //             "dis": 404415.4649370784,
    //             "dayWeek": 6,
    //             "npWidget": "Waning (62%)"
    //         },
    //         "17": {
    //             "phaseName": "Last quarter",
    //             "isPhaseLimit": 4,
    //             "lighting": 52.81381323892154,
    //             "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A -1.96,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //             "svgMini": "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 100 100'><circle cx='50' cy='50' r='48'  stroke-width='0' fill='black' /><path d='M50,2 A48,48 0 0,0 50,98'  stroke-width='0' fill='white' /></svg>",
    //             "timeEvent": "19:16:03",
    //             "dis": 405390.90706798283,
    //             "dayWeek": 0,
    //             "npWidget": "Last quarter"
    //         },
    //         "18": {
    //             "phaseName": "Waning",
    //             "isPhaseLimit": false,
    //             "lighting": 43.38397615673825,
    //             "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A 6.86,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //             "svgMini": false,
    //             "timeEvent": false,
    //             "dis": 405365.9304829967,
    //             "dayWeek": 1,
    //             "npWidget": "Waning (43%)"
    //         },
    //         "19": {
    //             "phaseName": "Waning",
    //             "isPhaseLimit": false,
    //             "lighting": 34.123847069270894,
    //             "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A 15.68,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //             "svgMini": false,
    //             "timeEvent": false,
    //             "dis": 404340.12580020976,
    //             "dayWeek": 2,
    //             "npWidget": "Waning (34%)"
    //         },
    //         "20": {
    //             "phaseName": "Waning",
    //             "isPhaseLimit": false,
    //             "lighting": 25.314243121414293,
    //             "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A 24.5,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //             "svgMini": false,
    //             "timeEvent": false,
    //             "dis": 402348.3723838922,
    //             "dayWeek": 3,
    //             "npWidget": "Waning (25%)"
    //         },
    //         "21": {
    //             "phaseName": "Waning",
    //             "isPhaseLimit": false,
    //             "lighting": 17.26640351650286,
    //             "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A 32.34,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //             "svgMini": false,
    //             "timeEvent": false,
    //             "dis": 399463.74666836014,
    //             "dayWeek": 4,
    //             "npWidget": "Waning (17%)"
    //         },
    //         "22": {
    //             "phaseName": "Waning",
    //             "isPhaseLimit": false,
    //             "lighting": 10.329810299328996,
    //             "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A 39.2,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //             "svgMini": false,
    //             "timeEvent": false,
    //             "dis": 395801.5868850869,
    //             "dayWeek": 5,
    //             "npWidget": "Waning (10%)"
    //         },
    //         "23": {
    //             "phaseName": "Waning",
    //             "isPhaseLimit": false,
    //             "lighting": 4.8867241384643325,
    //             "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A 45.08,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //             "svgMini": false,
    //             "timeEvent": false,
    //             "dis": 391522.26815427333,
    //             "dayWeek": 6,
    //             "npWidget": "Waning (4%)"
    //         },
    //         "24": {
    //             "phaseName": "Waning",
    //             "isPhaseLimit": false,
    //             "lighting": 1.3272807785594143,
    //             "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A 48.02,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //             "svgMini": false,
    //             "timeEvent": false,
    //             "dis": 386830.05068722734,
    //             "dayWeek": 0,
    //             "npWidget": "Waning (1%)"
    //         },
    //         "25": {
    //             "phaseName": "New Moon",
    //             "isPhaseLimit": 1,
    //             "lighting": 0.002535757484267709,
    //             "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A 49,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //             "svgMini": "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 100 100'><circle cx='50' cy='50' r='48'  stroke-width='0' fill='black' /><path d='M50,2 A48,48 0 0,0 50,98'  stroke-width='0' fill='black' /></svg>",
    //             "timeEvent": "12:48:20",
    //             "dis": 381966.1168537806,
    //             "dayWeek": 1,
    //             "npWidget": "New Moon"
    //         },
    //         "26": {
    //             "phaseName": "Waxing",
    //             "isPhaseLimit": false,
    //             "lighting": 1.161134254852192,
    //             "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A 48.02,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //             "svgMini": false,
    //             "timeEvent": false,
    //             "dis": 377195.4126864023,
    //             "dayWeek": 2,
    //             "npWidget": "Waxing (1%)"
    //         },
    //         "27": {
    //             "phaseName": "Waxing",
    //             "isPhaseLimit": false,
    //             "lighting": 4.8860970987821215,
    //             "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A 45.08,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //             "svgMini": false,
    //             "timeEvent": false,
    //             "dis": 372788.6235611326,
    //             "dayWeek": 3,
    //             "npWidget": "Waxing (4%)"
    //         },
    //         "28": {
    //             "phaseName": "Waxing",
    //             "isPhaseLimit": false,
    //             "lighting": 11.054811243549063,
    //             "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A 38.22,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //             "svgMini": false,
    //             "timeEvent": false,
    //             "dis": 369001.8906698349,
    //             "dayWeek": 4,
    //             "npWidget": "Waxing (11%)"
    //         },
    //         "29": {
    //             "phaseName": "Waxing",
    //             "isPhaseLimit": false,
    //             "lighting": 19.3401464620382,
    //             "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A 30.38,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //             "svgMini": false,
    //             "timeEvent": false,
    //             "dis": 366057.2710859411,
    //             "dayWeek": 5,
    //             "npWidget": "Waxing (19%)"
    //         },
    //         "30": {
    //             "phaseName": "Waxing",
    //             "isPhaseLimit": false,
    //             "lighting": 29.25317491798075,
    //             "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A 20.58,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //             "svgMini": false,
    //             "timeEvent": false,
    //             "dis": 364126.44590229983,
    //             "dayWeek": 6,
    //             "npWidget": "Waxing (29%)"
    //         },
    //         "31": {
    //             "phaseName": "Waxing",
    //             "isPhaseLimit": false,
    //             "lighting": 40.20876275899434,
    //             "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A 9.8,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
    //             "svgMini": false,
    //             "timeEvent": false,
    //             "dis": 363319.1642537864,
    //             "dayWeek": 6,
    //             "npWidget": "Waxing (40%)"
    //         }
    //     },
    //     "month": 10,
    //     "year": 2022,
    //     "receivedVariables": {
    //         "lang": "en",
    //         "month": "10",
    //         "year": "2022",
    //         "size": "100%",
    //         "lightColor": "white",
    //         "shadeColor": "black",
    //         "texturize": "true"
    //     },
    //     "lang": "en",
    //     "language": "English",
    //     "title": [
    //         "Moon's calendar",
    //         "Moon phases"
    //     ],
    //     "nextFullMoon": "<svg height=\"18\" width=\"18\" style=\"margin-top:-2px;display:inline-block; vertical-align:middle;stroke:black;stroke-width:px;fill:white\">\r\n<title>Full moon</title>\r\n<circle cx=\"9\" cy=\"9\" r=\"8\" />\r\n</svg> <b>8</b> November",
    //     "autor": "wdisseny.com",
    //     "version": "2"
    // }
    for (var key in moonPhaseMonth2.phase) {
      objectMoonPhase[`${moonPhaseMonth2.monthName},${key}`] = moonPhaseMonth2.phase[key]['phaseName'];
    }

    //console.log('objectMoonPhase =', objectMoonPhase);
    var next = moment().add(1, 'months');
    var nextMonth = moment(next).format('MMMM');
    //console.log(nextMonth);


    for (var key in objectMoonPhase) {
      var arrayDate = key.split(',')
      // console.log('arrayData =',arrayDate);
      // console.log('month =', month);
      // console.log('objectMoonPhase[key] =', objectMoonPhase[key]);
      if (arrayDate[0] === month && parseInt(arrayDate[1]) >= parseInt(day) && objectMoonPhase[key] === 'Full moon') {
        var moonDate = moment(key).format('MMMM Do');
        //console.log( `The next full moon is on ${moonDate}.`);
        nextMoons.push(`The next full moon is on ${moonDate}.`);
      }
      if (arrayDate[0] === month && parseInt(arrayDate[1]) >= parseInt(day) && objectMoonPhase[key] === 'New Moon') {
        var moonDate = moment(key).format('MMMM Do');
        //console.log( `The next new moon is on ${moonDate}.`);
        nextMoons.push(`The next new moon is on ${moonDate}.`);
      }
      if (arrayDate[0] === nextMonth && parseInt(arrayDate[1]) <= parseInt(day) && objectMoonPhase[key] === 'Full moon') {
        var moonDate = moment(key).format('MMMM Do');
        //console.log( `The next full moon is on ${moonDate}.`);
        nextMoons.push(`The next full moon is on ${moonDate}.`);
      }
      if (arrayDate[0] === nextMonth && parseInt(arrayDate[1]) <= parseInt(day) && objectMoonPhase[key] === 'New Moon') {
        var moonDate = moment(key).format('MMMM Do');
        //console.log( `The next new moon is on ${moonDate}.`);
        nextMoons.push(`The next new moon is on ${moonDate}.`);
      }
    }
  }
  //console.log(nextMoons);


  return (
    <div>

      {!nextMoons ? <div></div> :
        <div>
          <h4 className='box'>Predictor</h4>
          <div className='table'>
            <ul>
              <li>The day in the extended forecast with maximum barometric pressure is {moment().add(maxPressureIndex, 'days').format('MMMM Do')}.</li>
              <li>The day in the extended forecast with minimum barometric pressure is {moment().add(minPressureIndex, 'days').format('MMMM Do')}.</li>
              <li> 🌕 {nextMoons[0]}</li>
              <li> 🌑 {nextMoons[1]}</li>
            </ul>
          </div>
          <div>

          </div>
        </div>}

    </div>
  );
}

export default Predictor;