import React, { useState, useEffect } from 'react';
const axios = require('axios');
import MoonFill from './subroutines/MoonFill.jsx';



const Predictor = () => {

  //DB routes

  // forecast
  var extendedForecast = {
    "columns": {
      "wdir": {
        "id": "wdir",
        "name": "Wind Direction",
        "type": 2,
        "unit": null
      },
      "uvindex": {
        "id": "uvindex",
        "name": "weather_uvindex",
        "type": 2,
        "unit": null
      },
      "latitude": {
        "id": "latitude",
        "name": "Latitude",
        "type": 2,
        "unit": null
      },
      "preciptype": {
        "id": "preciptype",
        "name": "weather_preciptype",
        "type": 1,
        "unit": null
      },
      "cin": {
        "id": "cin",
        "name": "weather_cin",
        "type": 2,
        "unit": null
      },
      "cloudcover": {
        "id": "cloudcover",
        "name": "Cloud Cover",
        "type": 2,
        "unit": null
      },
      "pop": {
        "id": "pop",
        "name": "Chance Precipitation (%)",
        "type": 2,
        "unit": null
      },
      "mint": {
        "id": "mint",
        "name": "Minimum Temperature",
        "type": 2,
        "unit": "degF"
      },
      "datetime": {
        "id": "datetime",
        "name": "Date time",
        "type": 3,
        "unit": null
      },
      "precip": {
        "id": "precip",
        "name": "Precipitation",
        "type": 2,
        "unit": "in"
      },
      "solarradiation": {
        "id": "solarradiation",
        "name": "Solar Radiation",
        "type": 2,
        "unit": null
      },
      "dew": {
        "id": "dew",
        "name": "Dew Point",
        "type": 2,
        "unit": "degf"
      },
      "humidity": {
        "id": "humidity",
        "name": "Relative Humidity",
        "type": 2,
        "unit": null
      },
      "longitude": {
        "id": "longitude",
        "name": "Longitude",
        "type": 2,
        "unit": null
      },
      "temp": {
        "id": "temp",
        "name": "Temperature",
        "type": 2,
        "unit": "degf"
      },
      "address": {
        "id": "address",
        "name": "Address",
        "type": 1,
        "unit": null
      },
      "maxt": {
        "id": "maxt",
        "name": "Maximum Temperature",
        "type": 2,
        "unit": "degF"
      },
      "visibility": {
        "id": "visibility",
        "name": "Visibility",
        "type": 2,
        "unit": "mi"
      },
      "wspd": {
        "id": "wspd",
        "name": "Wind Speed",
        "type": 2,
        "unit": "mph"
      },
      "severerisk": {
        "id": "severerisk",
        "name": "weather_severerisk",
        "type": 2,
        "unit": null
      },
      "solarenergy": {
        "id": "solarenergy",
        "name": "Solar Energy",
        "type": 2,
        "unit": null
      },
      "resolvedAddress": {
        "id": "resolvedAddress",
        "name": "Resolved Address",
        "type": 1,
        "unit": null
      },
      "heatindex": {
        "id": "heatindex",
        "name": "Heat Index",
        "type": 2,
        "unit": "degf"
      },
      "snowdepth": {
        "id": "snowdepth",
        "name": "Snow Depth",
        "type": 2,
        "unit": "in"
      },
      "sealevelpressure": {
        "id": "sealevelpressure",
        "name": "Sea Level Pressure",
        "type": 2,
        "unit": "mb"
      },
      "snow": {
        "id": "snow",
        "name": "Snow",
        "type": 2,
        "unit": "in"
      },
      "name": {
        "id": "name",
        "name": "Name",
        "type": 1,
        "unit": null
      },
      "wgust": {
        "id": "wgust",
        "name": "Wind Gust",
        "type": 2,
        "unit": "mph"
      },
      "conditions": {
        "id": "conditions",
        "name": "Conditions",
        "type": 1,
        "unit": null
      },
      "windchill": {
        "id": "windchill",
        "name": "Wind Chill",
        "type": 2,
        "unit": "degf"
      },
      "cape": {
        "id": "cape",
        "name": "weather_cape",
        "type": 2,
        "unit": null
      }
    },
    "remainingCost": 0,
    "queryCost": 1,
    "messages": null,
    "locations": {
      "Winter, Wi, USA": {
        "stationContributions": null,
        "values": [
          {
            "wdir": 69.5,
            "uvindex": 0,
            "datetimeStr": "2022-09-27T00:00:00-05:00",
            "preciptype": "",
            "cin": 0,
            "cloudcover": 1.7,
            "pop": 0,
            "mint": 35.9,
            "datetime": 1664236800000,
            "precip": 0,
            "solarradiation": 0,
            "dew": 35.3,
            "humidity": 92.9,
            "temp": 37.2,
            "maxt": 38.6,
            "visibility": 9,
            "wspd": 3.5,
            "severerisk": 10,
            "solarenergy": 0,
            "heatindex": null,
            "snowdepth": 0,
            "sealevelpressure": 1028.7,
            "snow": 0,
            "wgust": 7.4,
            "conditions": "Clear",
            "windchill": 34,
            "cape": 0
          },
          {
            "wdir": 200,
            "uvindex": 2,
            "datetimeStr": "2022-09-28T00:00:00-05:00",
            "preciptype": "",
            "cin": 0,
            "cloudcover": 38.5,
            "pop": 0,
            "mint": 31.7,
            "datetime": 1664323200000,
            "precip": 0,
            "solarradiation": 198.8,
            "dew": 32,
            "humidity": 71.2,
            "temp": 42.3,
            "maxt": 54.6,
            "visibility": 7.6,
            "wspd": 2.8,
            "severerisk": 10,
            "solarenergy": 0.7,
            "heatindex": null,
            "snowdepth": 0,
            "sealevelpressure": 1030.9,
            "snow": 0,
            "wgust": 10.1,
            "conditions": "Partially cloudy",
            "windchill": 27.5,
            "cape": 0
          },
          {
            "wdir": 173.1,
            "uvindex": 2,
            "datetimeStr": "2022-09-29T00:00:00-05:00",
            "preciptype": "",
            "cin": 0,
            "cloudcover": 76.4,
            "pop": 4.8,
            "mint": 37.3,
            "datetime": 1664409600000,
            "precip": 0,
            "solarradiation": 199.7,
            "dew": 36,
            "humidity": 65,
            "temp": 47.9,
            "maxt": 58.2,
            "visibility": 15,
            "wspd": 6.6,
            "severerisk": 10,
            "solarenergy": 0.7,
            "heatindex": null,
            "snowdepth": 0,
            "sealevelpressure": 1029.6,
            "snow": 0,
            "wgust": 26.4,
            "conditions": "Overcast",
            "windchill": 34.2,
            "cape": 0
          },
          {
            "wdir": 171.2,
            "uvindex": 0,
            "datetimeStr": "2022-09-30T00:00:00-05:00",
            "preciptype": "",
            "cin": 0,
            "cloudcover": 50.1,
            "pop": 14.3,
            "mint": 47.6,
            "datetime": 1664496000000,
            "precip": 0,
            "solarradiation": 0,
            "dew": 38.6,
            "humidity": 70.4,
            "temp": 47.7,
            "maxt": 47.9,
            "visibility": 15,
            "wspd": 6.9,
            "severerisk": 92.5,
            "solarenergy": 0,
            "heatindex": null,
            "snowdepth": 0,
            "sealevelpressure": 1026,
            "snow": 0,
            "wgust": 28.2,
            "conditions": "Partially cloudy",
            "windchill": 44.2,
            "cape": 0
          },
          {
            "wdir": 150.4,
            "uvindex": 1.8,
            "datetimeStr": "2022-10-01T00:00:00-05:00",
            "preciptype": "",
            "cin": 0,
            "cloudcover": 34.2,
            "pop": 14.3,
            "mint": 44.7,
            "datetime": 1664582400000,
            "precip": 0,
            "solarradiation": 182.7,
            "dew": 43.5,
            "humidity": 65.8,
            "temp": 56.1,
            "maxt": 71,
            "visibility": 15,
            "wspd": 5.2,
            "severerisk": 10,
            "solarenergy": 0.7,
            "heatindex": null,
            "snowdepth": 0,
            "sealevelpressure": 1021,
            "snow": 0,
            "wgust": 21.5,
            "conditions": "Partially cloudy",
            "windchill": 42.4,
            "cape": 0
          },
          {
            "wdir": 150.2,
            "uvindex": 1.9,
            "datetimeStr": "2022-10-02T00:00:00-05:00",
            "preciptype": "",
            "cin": 0,
            "cloudcover": 22.9,
            "pop": 9.5,
            "mint": 46.8,
            "datetime": 1664668800000,
            "precip": 0,
            "solarradiation": 184.1,
            "dew": 44.8,
            "humidity": 65.4,
            "temp": 57.4,
            "maxt": 70.8,
            "visibility": 15,
            "wspd": 6.7,
            "severerisk": 10,
            "solarenergy": 0.7,
            "heatindex": null,
            "snowdepth": 0,
            "sealevelpressure": 1021.9,
            "snow": 0,
            "wgust": 28.2,
            "conditions": "Clear",
            "windchill": 44.6,
            "cape": 0
          },
          {
            "wdir": 188.9,
            "uvindex": 1.7,
            "datetimeStr": "2022-10-03T00:00:00-05:00",
            "preciptype": "",
            "cin": 0,
            "cloudcover": 72.9,
            "pop": 14.3,
            "mint": 48.6,
            "datetime": 1664755200000,
            "precip": 0,
            "solarradiation": 171.6,
            "dew": 44.5,
            "humidity": 60.8,
            "temp": 59.1,
            "maxt": 71.7,
            "visibility": 15,
            "wspd": 7.8,
            "severerisk": 10,
            "solarenergy": 0.6,
            "heatindex": null,
            "snowdepth": 0,
            "sealevelpressure": 1018,
            "snow": 0,
            "wgust": 28,
            "conditions": "Partially cloudy",
            "windchill": 45.4,
            "cape": 0
          },
          {
            "wdir": 288.9,
            "uvindex": 1.9,
            "datetimeStr": "2022-10-04T00:00:00-05:00",
            "preciptype": "",
            "cin": -0.1,
            "cloudcover": 34.4,
            "pop": 33.3,
            "mint": 42.8,
            "datetime": 1664841600000,
            "precip": 0.04,
            "solarradiation": 184.8,
            "dew": 42.4,
            "humidity": 66.8,
            "temp": 54.3,
            "maxt": 61.1,
            "visibility": 15,
            "wspd": 6.7,
            "severerisk": 10,
            "solarenergy": 0.7,
            "heatindex": null,
            "snowdepth": 0,
            "sealevelpressure": 1014.5,
            "snow": 0,
            "wgust": 20.8,
            "conditions": "Partially cloudy",
            "windchill": 40.1,
            "cape": 0.1
          },
          {
            "wdir": 227.6,
            "uvindex": 1.2,
            "datetimeStr": "2022-10-05T00:00:00-05:00",
            "preciptype": "",
            "cin": 0,
            "cloudcover": 84,
            "pop": 38.1,
            "mint": 38.7,
            "datetime": 1664928000000,
            "precip": 0.01,
            "solarradiation": 112.6,
            "dew": 32.7,
            "humidity": 57.1,
            "temp": 47.9,
            "maxt": 58,
            "visibility": 15,
            "wspd": 4.7,
            "severerisk": 10,
            "solarenergy": 0.4,
            "heatindex": null,
            "snowdepth": 0,
            "sealevelpressure": 1014.6,
            "snow": 0,
            "wgust": 32.7,
            "conditions": "Overcast",
            "windchill": 38.3,
            "cape": 0
          },
          {
            "wdir": 273.3,
            "uvindex": 1.8,
            "datetimeStr": "2022-10-06T00:00:00-05:00",
            "preciptype": "",
            "cin": 0,
            "cloudcover": 50.1,
            "pop": 23.8,
            "mint": 40.4,
            "datetime": 1665014400000,
            "precip": 0,
            "solarradiation": 176.3,
            "dew": 33.4,
            "humidity": 56.8,
            "temp": 48.5,
            "maxt": 56.7,
            "visibility": 15,
            "wspd": 8.6,
            "severerisk": 10,
            "solarenergy": 0.6,
            "heatindex": null,
            "snowdepth": 0,
            "sealevelpressure": 1011.7,
            "snow": 0,
            "wgust": 32,
            "conditions": "Partially cloudy",
            "windchill": 36.7,
            "cape": 0.1
          },
          {
            "wdir": 296.9,
            "uvindex": 1.5,
            "datetimeStr": "2022-10-07T00:00:00-05:00",
            "preciptype": "",
            "cin": 0,
            "cloudcover": 55.7,
            "pop": 14.3,
            "mint": 30.1,
            "datetime": 1665100800000,
            "precip": 0,
            "solarradiation": 139,
            "dew": 20.2,
            "humidity": 48.9,
            "temp": 38.6,
            "maxt": 46.1,
            "visibility": 15,
            "wspd": 6.4,
            "severerisk": 10,
            "solarenergy": 0.5,
            "heatindex": null,
            "snowdepth": 0,
            "sealevelpressure": 1022.5,
            "snow": 0,
            "wgust": 22.6,
            "conditions": "Partially cloudy",
            "windchill": 24.9,
            "cape": 0
          },
          {
            "wdir": 97.5,
            "uvindex": 1.6,
            "datetimeStr": "2022-10-08T00:00:00-05:00",
            "preciptype": "",
            "cin": 0,
            "cloudcover": 45.5,
            "pop": 9.5,
            "mint": 29.6,
            "datetime": 1665187200000,
            "precip": 0,
            "solarradiation": 151.1,
            "dew": 27.7,
            "humidity": 68.1,
            "temp": 38.4,
            "maxt": 49.9,
            "visibility": 15,
            "wspd": 3,
            "severerisk": 10,
            "solarenergy": 0.5,
            "heatindex": null,
            "snowdepth": 0,
            "sealevelpressure": 1029.6,
            "snow": 0,
            "wgust": 8.3,
            "conditions": "Partially cloudy",
            "windchill": 25.8,
            "cape": 1.4
          },
          {
            "wdir": 166.5,
            "uvindex": 0.8,
            "datetimeStr": "2022-10-09T00:00:00-05:00",
            "preciptype": "",
            "cin": 0,
            "cloudcover": 56.9,
            "pop": 19,
            "mint": 31.4,
            "datetime": 1665273600000,
            "precip": 0.01,
            "solarradiation": 86.5,
            "dew": 29.4,
            "humidity": 66.6,
            "temp": 40.1,
            "maxt": 53,
            "visibility": 15,
            "wspd": 6.5,
            "severerisk": 10,
            "solarenergy": 0.3,
            "heatindex": null,
            "snowdepth": 0,
            "sealevelpressure": 1023.6,
            "snow": 0,
            "wgust": 27.3,
            "conditions": "Partially cloudy",
            "windchill": 25.3,
            "cape": 0
          },
          {
            "wdir": 186.5,
            "uvindex": 1.5,
            "datetimeStr": "2022-10-10T00:00:00-05:00",
            "preciptype": "",
            "cin": 0,
            "cloudcover": 24.8,
            "pop": 14.3,
            "mint": 38.9,
            "datetime": 1665360000000,
            "precip": 0,
            "solarradiation": 150.8,
            "dew": 36.4,
            "humidity": 64.8,
            "temp": 48.9,
            "maxt": 64.3,
            "visibility": 15,
            "wspd": 6,
            "severerisk": 10,
            "solarenergy": 0.5,
            "heatindex": null,
            "snowdepth": 0,
            "sealevelpressure": 1013,
            "snow": 0,
            "wgust": 28.2,
            "conditions": "Clear",
            "windchill": 35.1,
            "cape": 0
          },
          {
            "wdir": 131.2,
            "uvindex": 1.7,
            "datetimeStr": "2022-10-11T00:00:00-05:00",
            "preciptype": "",
            "cin": 0,
            "cloudcover": 2.4,
            "pop": 19,
            "mint": 36.8,
            "datetime": 1665446400000,
            "precip": 0,
            "solarradiation": 165.8,
            "dew": 39.9,
            "humidity": 71.4,
            "temp": 50.1,
            "maxt": 65.7,
            "visibility": 15,
            "wspd": 7.9,
            "severerisk": 10,
            "solarenergy": 0.6,
            "heatindex": null,
            "snowdepth": 0,
            "sealevelpressure": 1014,
            "snow": 0,
            "wgust": 38.3,
            "conditions": "Clear",
            "windchill": 32.6,
            "cape": 0
          },
          {
            "wdir": 203.8,
            "uvindex": 0.9,
            "datetimeStr": "2022-10-12T00:00:00-05:00",
            "preciptype": "",
            "cin": -13.3,
            "cloudcover": 70.9,
            "pop": 9.5,
            "mint": 50.4,
            "datetime": 1665532800000,
            "precip": 0.16,
            "solarradiation": 86.4,
            "dew": 53.7,
            "humidity": 82.9,
            "temp": 59,
            "maxt": 69.2,
            "visibility": 14.7,
            "wspd": 11.4,
            "severerisk": 10.5,
            "solarenergy": 0.3,
            "heatindex": null,
            "snowdepth": 0,
            "sealevelpressure": 1003.3,
            "snow": 0,
            "wgust": 44.3,
            "conditions": "Partially cloudy",
            "windchill": null,
            "cape": 191.6
          }
        ],
        "id": "Winter, Wi, USA",
        "address": "Winter, WI, United States",
        "name": "Winter, Wi, USA",
        "index": 0,
        "latitude": 45.82344,
        "longitude": -91.01228,
        "distance": 0,
        "time": 0,
        "tz": "America/Chicago",
        "currentConditions": {
          "wdir": 4,
          "temp": 36.9,
          "sunrise": "2022-09-27T06:57:22-05:00",
          "visibility": 9.9,
          "wspd": 1.5,
          "icon": "clear-night",
          "stations": "",
          "heatindex": null,
          "cloudcover": 0,
          "datetime": "2022-09-27T21:00:04-05:00",
          "precip": 0,
          "moonphase": 0.02,
          "snowdepth": null,
          "sealevelpressure": 1028.6,
          "dew": 34.4,
          "sunset": "2022-09-27T18:51:51-05:00",
          "humidity": 90.7,
          "wgust": null,
          "windchill": null
        },
        "alerts": null
      }
    }
  }

  console.log(extendedForecast.locations["Winter, Wi, USA"].values);
  var extendedForecastValues = extendedForecast.locations["Winter, Wi, USA"].values;
  var arraySeaLevelPressure = [];
  for (var i = 0; i < extendedForecastValues.length; i++) {
    arraySeaLevelPressure.push(extendedForecastValues[i].sealevelpressure);
  }
  var maxPressure = Math.max(...arraySeaLevelPressure);
  var maxPressureIndex = arraySeaLevelPressure.indexOf(maxPressure);
  var minPressure = Math.min(...arraySeaLevelPressure);
  var minPressureIndex = arraySeaLevelPressure.indexOf(minPressure);

  console.log(arraySeaLevelPressure);
  console.log("max pressure = ", maxPressure);
  console.log("min pressure = ", minPressure);
  console.log("max pressure index =", maxPressureIndex);
  console.log("min pressure index =", minPressureIndex);

  // moon phase  // search 2 months for new moons and full moons, record dates and report them below
  var day = 28;
  var month = 'September';
  var moonPhaseMonth1 = {
      "monthName": "September",
      "firstDayMonth": "4",
      "daysMonth": "30",
      "nameDay": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
      ],
      "nameMonth": [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
      ],
      "phase": {
          "1": {
              "phaseName": "Waxing",
              "isPhaseLimit": false,
              "lighting": 25.33058051071173,
              "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A 24.5,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
              "svgMini": false,
              "timeEvent": false,
              "dis": 377211.2731070786,
              "dayWeek": 3,
              "npWidget": "Waxing (25%)"
          },
          "2": {
              "phaseName": "Waxing",
              "isPhaseLimit": false,
              "lighting": 35.37884661650496,
              "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A 14.7,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
              "svgMini": false,
              "timeEvent": false,
              "dis": 372871.3115926515,
              "dayWeek": 4,
              "npWidget": "Waxing (35%)"
          },
          "3": {
              "phaseName": "First quarter",
              "isPhaseLimit": 2,
              "lighting": 46.31570842749767,
              "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A 3.92,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
              "svgMini": "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 100 100'><circle cx='50' cy='50' r='48'  stroke-width='0' fill='white' /><path d='M50,2 A48,48 0 0,0 50,98'  stroke-width='0' fill='black' /></svg>",
              "timeEvent": "20:08:50",
              "dis": 369109.9993797907,
              "dayWeek": 5,
              "npWidget": "First quarter"
          },
          "4": {
              "phaseName": "Waxing",
              "isPhaseLimit": false,
              "lighting": 57.63069513124604,
              "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A -6.86,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
              "svgMini": false,
              "timeEvent": false,
              "dis": 366151.6701984074,
              "dayWeek": 6,
              "npWidget": "Waxing (57%)"
          },
          "5": {
              "phaseName": "Waxing",
              "isPhaseLimit": false,
              "lighting": 68.74015656355877,
              "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A -17.64,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
              "svgMini": false,
              "timeEvent": false,
              "dis": 364180.80350076023,
              "dayWeek": 0,
              "npWidget": "Waxing (68%)"
          },
          "6": {
              "phaseName": "Waxing",
              "isPhaseLimit": false,
              "lighting": 79.00568813038782,
              "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A -28.42,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
              "svgMini": false,
              "timeEvent": false,
              "dis": 363327.4134672948,
              "dayWeek": 1,
              "npWidget": "Waxing (79%)"
          },
          "7": {
              "phaseName": "Waxing",
              "isPhaseLimit": false,
              "lighting": 87.77533355619524,
              "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A -36.26,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
              "svgMini": false,
              "timeEvent": false,
              "dis": 363655.8263076261,
              "dayWeek": 2,
              "npWidget": "Waxing (87%)"
          },
          "8": {
              "phaseName": "Waxing",
              "isPhaseLimit": false,
              "lighting": 94.45563702781507,
              "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A -43.12,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
              "svgMini": false,
              "timeEvent": false,
              "dis": 365157.7527162775,
              "dayWeek": 3,
              "npWidget": "Waxing (94%)"
          },
          "9": {
              "phaseName": "Waxing",
              "isPhaseLimit": false,
              "lighting": 98.602725473132,
              "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A -47.04,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
              "svgMini": false,
              "timeEvent": false,
              "dis": 367750.4691712238,
              "dayWeek": 4,
              "npWidget": "Waxing (98%)"
          },
          "10": {
              "phaseName": "Full moon",
              "isPhaseLimit": 3,
              "lighting": 99.99995935701479,
              "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A -48.02,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
              "svgMini": "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 100 100'><circle cx='50' cy='50' r='48'  stroke-width='0' fill='white' /><path d='M50,2 A48,48 0 0,0 50,98'  stroke-width='0' fill='white' /></svg>",
              "timeEvent": "11:58:51",
              "dis": 371280.86422266095,
              "dayWeek": 5,
              "npWidget": "Full moon"
          },
          "11": {
              "phaseName": "Waning",
              "isPhaseLimit": false,
              "lighting": 98.68730970951383,
              "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A -47.04,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
              "svgMini": false,
              "timeEvent": false,
              "dis": 375535.8138191459,
              "dayWeek": 6,
              "npWidget": "Waning (98%)"
          },
          "12": {
              "phaseName": "Waning",
              "isPhaseLimit": false,
              "lighting": 94.92920341036277,
              "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A -43.12,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
              "svgMini": false,
              "timeEvent": false,
              "dis": 380258.5968164208,
              "dayWeek": 0,
              "npWidget": "Waning (94%)"
          },
          "13": {
              "phaseName": "Waning",
              "isPhaseLimit": false,
              "lighting": 89.13760553386766,
              "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A -38.22,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
              "svgMini": false,
              "timeEvent": false,
              "dis": 385169.86534967745,
              "dayWeek": 1,
              "npWidget": "Waning (89%)"
          },
          "14": {
              "phaseName": "Waning",
              "isPhaseLimit": false,
              "lighting": 81.78388719987535,
              "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A -30.38,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
              "svgMini": false,
              "timeEvent": false,
              "dis": 389990.40772943525,
              "dayWeek": 2,
              "npWidget": "Waning (81%)"
          },
          "15": {
              "phaseName": "Waning",
              "isPhaseLimit": false,
              "lighting": 73.32882994365488,
              "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A -22.54,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
              "svgMini": false,
              "timeEvent": false,
              "dis": 394462.1790671634,
              "dayWeek": 3,
              "npWidget": "Waning (73%)"
          },
          "16": {
              "phaseName": "Waning",
              "isPhaseLimit": false,
              "lighting": 64.18386918839693,
              "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A -13.72,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
              "svgMini": false,
              "timeEvent": false,
              "dis": 398364.3295234195,
              "dayWeek": 4,
              "npWidget": "Waning (64%)"
          },
          "17": {
              "phaseName": "Last quarter",
              "isPhaseLimit": 4,
              "lighting": 54.70143207689122,
              "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A -3.92,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
              "svgMini": "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 100 100'><circle cx='50' cy='50' r='48'  stroke-width='0' fill='black' /><path d='M50,2 A48,48 0 0,0 50,98'  stroke-width='0' fill='white' /></svg>",
              "timeEvent": "23:52:17",
              "dis": 401522.29811124434,
              "dayWeek": 5,
              "npWidget": "Last quarter"
          },
          "18": {
              "phaseName": "Waning",
              "isPhaseLimit": false,
              "lighting": 45.18456616328347,
              "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A 4.9,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
              "svgMini": false,
              "timeEvent": false,
              "dis": 403809.99145704485,
              "dayWeek": 6,
              "npWidget": "Waning (45%)"
          },
          "19": {
              "phaseName": "Waning",
              "isPhaseLimit": false,
              "lighting": 35.90531918703866,
              "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A 14.7,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
              "svgMini": false,
              "timeEvent": false,
              "dis": 405146.86851068266,
              "dayWeek": 0,
              "npWidget": "Waning (35%)"
          },
          "20": {
              "phaseName": "Waning",
              "isPhaseLimit": false,
              "lighting": 27.123976355385874,
              "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A 22.54,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
              "svgMini": false,
              "timeEvent": false,
              "dis": 405492.75664089614,
              "dayWeek": 1,
              "npWidget": "Waning (27%)"
          },
          "21": {
              "phaseName": "Waning",
              "isPhaseLimit": false,
              "lighting": 19.104354090522452,
              "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A 30.38,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
              "svgMini": false,
              "timeEvent": false,
              "dis": 404843.18585382187,
              "dayWeek": 2,
              "npWidget": "Waning (19%)"
          },
          "22": {
              "phaseName": "Waning",
              "isPhaseLimit": false,
              "lighting": 12.122501382064666,
              "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A 37.24,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
              "svgMini": false,
              "timeEvent": false,
              "dis": 403227.1151554327,
              "dayWeek": 3,
              "npWidget": "Waning (12%)"
          },
          "23": {
              "phaseName": "Waning",
              "isPhaseLimit": false,
              "lighting": 6.467133956787769,
              "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A 43.12,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
              "svgMini": false,
              "timeEvent": false,
              "dis": 400707.5460022156,
              "dayWeek": 4,
              "npWidget": "Waning (6%)"
          },
          "24": {
              "phaseName": "Waning",
              "isPhaseLimit": false,
              "lighting": 2.4303401834884717,
              "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A 47.04,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
              "svgMini": false,
              "timeEvent": false,
              "dis": 397384.1252749918,
              "dayWeek": 5,
              "npWidget": "Waning (2%)"
          },
          "25": {
              "phaseName": "New Moon",
              "isPhaseLimit": 1,
              "lighting": 0.2874044133243381,
              "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A 49,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
              "svgMini": "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 100 100'><circle cx='50' cy='50' r='48'  stroke-width='0' fill='black' /><path d='M50,2 A48,48 0 0,0 50,98'  stroke-width='0' fill='black' /></svg>",
              "timeEvent": "23:54:04",
              "dis": 393395.8204818813,
              "dayWeek": 6,
              "npWidget": "New Moon"
          },
          "26": {
              "phaseName": "Waxing",
              "isPhaseLimit": false,
              "lighting": 0.2660591909272869,
              "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A 49,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
              "svgMini": false,
              "timeEvent": false,
              "dis": 388921.3724448979,
              "dayWeek": 0,
              "npWidget": "Waxing (0%)"
          },
          "27": {
              "phaseName": "Waxing",
              "isPhaseLimit": false,
              "lighting": 2.508769824342366,
              "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A 47.04,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
              "svgMini": false,
              "timeEvent": false,
              "dis": 384175.60099692474,
              "dayWeek": 1,
              "npWidget": "Waxing (2%)"
          },
          "28": {
              "phaseName": "Waxing",
              "isPhaseLimit": false,
              "lighting": 7.036075035230793,
              "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A 42.14,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
              "svgMini": false,
              "timeEvent": false,
              "dis": 379400.64437733433,
              "dayWeek": 2,
              "npWidget": "Waxing (7%)"
          },
          "29": {
              "phaseName": "Waxing",
              "isPhaseLimit": false,
              "lighting": 13.721961580148717,
              "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A 36.26,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
              "svgMini": false,
              "timeEvent": false,
              "dis": 374852.5177859472,
              "dayWeek": 3,
              "npWidget": "Waxing (13%)"
          },
          "30": {
              "phaseName": "Waxing",
              "isPhaseLimit": false,
              "lighting": 22.29039065070567,
              "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A 27.44,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
              "svgMini": false,
              "timeEvent": false,
              "dis": 370784.52783367195,
              "dayWeek": 4,
              "npWidget": "Waxing (22%)"
          }
      },
      "month": 9,
      "year": 2022,
      "receivedVariables": {
          "lang": "en",
          "month": "9",
          "year": "2022",
          "size": "100%",
          "lightColor": "white",
          "shadeColor": "black",
          "texturize": "true"
      },
      "lang": "en",
      "language": "English",
      "title": [
          "Moon's calendar",
          "Moon phases"
      ],
      "nextFullMoon": "<svg height=\"18\" width=\"18\" style=\"margin-top:-2px;display:inline-block; vertical-align:middle;stroke:black;stroke-width:px;fill:white\">\r\n<title>Full moon</title>\r\n<circle cx=\"9\" cy=\"9\" r=\"8\" />\r\n</svg> <b>9</b> October",
      "autor": "wdisseny.com",
      "version": "2"
  }
  var objectMoonPhase = {};

  for (var key in moonPhaseMonth1.phase) {
    objectMoonPhase[`${moonPhaseMonth1.monthName},${key}`] = moonPhaseMonth1.phase[key]['phaseName'];
  }



  var moonPhaseMonth2 = {
    "monthName": "October",
    "firstDayMonth": "6",
    "daysMonth": "31",
    "nameDay": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ],
    "nameMonth": [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],
    "phase": {
        "1": {
            "phaseName": "Waxing",
            "isPhaseLimit": false,
            "lighting": 32.33436542793615,
            "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A 17.64,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
            "svgMini": false,
            "timeEvent": false,
            "dis": 367429.6999496243,
            "dayWeek": 5,
            "npWidget": "Waxing (32%)"
        },
        "2": {
            "phaseName": "Waxing",
            "isPhaseLimit": false,
            "lighting": 43.349194990721394,
            "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A 6.86,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
            "svgMini": false,
            "timeEvent": false,
            "dis": 364984.3376031041,
            "dayWeek": 6,
            "npWidget": "Waxing (43%)"
        },
        "3": {
            "phaseName": "First quarter",
            "isPhaseLimit": 2,
            "lighting": 54.76713320061586,
            "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A -3.92,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
            "svgMini": "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 100 100'><circle cx='50' cy='50' r='48'  stroke-width='0' fill='white' /><path d='M50,2 A48,48 0 0,0 50,98'  stroke-width='0' fill='black' /></svg>",
            "timeEvent": "2:15:26",
            "dis": 363594.2989826894,
            "dayWeek": 0,
            "npWidget": "First quarter"
        },
        "4": {
            "phaseName": "Waxing",
            "isPhaseLimit": false,
            "lighting": 65.98586780141326,
            "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A -14.7,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
            "svgMini": false,
            "timeEvent": false,
            "dis": 363344.88746915775,
            "dayWeek": 1,
            "npWidget": "Waxing (65%)"
        },
        "5": {
            "phaseName": "Waxing",
            "isPhaseLimit": false,
            "lighting": 76.39472579615871,
            "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A -25.48,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
            "svgMini": false,
            "timeEvent": false,
            "dis": 364254.7296130536,
            "dayWeek": 2,
            "npWidget": "Waxing (76%)"
        },
        "6": {
            "phaseName": "Waxing",
            "isPhaseLimit": false,
            "lighting": 85.40975489732338,
            "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A -34.3,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
            "svgMini": false,
            "timeEvent": false,
            "dis": 366273.81068923377,
            "dayWeek": 3,
            "npWidget": "Waxing (85%)"
        },
        "7": {
            "phaseName": "Waxing",
            "isPhaseLimit": false,
            "lighting": 92.5240829406708,
            "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A -41.16,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
            "svgMini": false,
            "timeEvent": false,
            "dis": 369285.88485955365,
            "dayWeek": 4,
            "npWidget": "Waxing (92%)"
        },
        "8": {
            "phaseName": "Waxing",
            "isPhaseLimit": false,
            "lighting": 97.36557135651363,
            "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A -46.06,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
            "svgMini": false,
            "timeEvent": false,
            "dis": 373115.5408868659,
            "dayWeek": 5,
            "npWidget": "Waxing (97%)"
        },
        "9": {
            "phaseName": "Full moon",
            "isPhaseLimit": 3,
            "lighting": 99.74165307859307,
            "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A -48.02,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
            "svgMini": "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 100 100'><circle cx='50' cy='50' r='48'  stroke-width='0' fill='white' /><path d='M50,2 A48,48 0 0,0 50,98'  stroke-width='0' fill='white' /></svg>",
            "timeEvent": "22:54:41",
            "dis": 377540.01343835756,
            "dayWeek": 6,
            "npWidget": "Full moon"
        },
        "10": {
            "phaseName": "Waning",
            "isPhaseLimit": false,
            "lighting": 99.65226564089971,
            "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A -48.02,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
            "svgMini": false,
            "timeEvent": false,
            "dis": 382305.22881658154,
            "dayWeek": 0,
            "npWidget": "Waning (99%)"
        },
        "11": {
            "phaseName": "Waning",
            "isPhaseLimit": false,
            "lighting": 97.26569687797732,
            "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A -46.06,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
            "svgMini": false,
            "timeEvent": false,
            "dis": 387144.6471780726,
            "dayWeek": 1,
            "npWidget": "Waning (97%)"
        },
        "12": {
            "phaseName": "Waning",
            "isPhaseLimit": false,
            "lighting": 92.86837686976341,
            "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A -41.16,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
            "svgMini": false,
            "timeEvent": false,
            "dis": 391798.5552970399,
            "dayWeek": 2,
            "npWidget": "Waning (92%)"
        },
        "13": {
            "phaseName": "Waning",
            "isPhaseLimit": false,
            "lighting": 86.80762024013356,
            "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A -35.28,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
            "svgMini": false,
            "timeEvent": false,
            "dis": 396031.0420006376,
            "dayWeek": 3,
            "npWidget": "Waning (86%)"
        },
        "14": {
            "phaseName": "Waning",
            "isPhaseLimit": false,
            "lighting": 79.44371694143271,
            "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A -28.42,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
            "svgMini": false,
            "timeEvent": false,
            "dis": 399642.2884633072,
            "dayWeek": 4,
            "npWidget": "Waning (79%)"
        },
        "15": {
            "phaseName": "Waning",
            "isPhaseLimit": false,
            "lighting": 71.11953320115904,
            "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A -20.58,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
            "svgMini": false,
            "timeEvent": false,
            "dis": 402475.00769745215,
            "dayWeek": 5,
            "npWidget": "Waning (71%)"
        },
        "16": {
            "phaseName": "Waning",
            "isPhaseLimit": false,
            "lighting": 62.14802529032808,
            "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A -11.76,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
            "svgMini": false,
            "timeEvent": false,
            "dis": 404415.4649370784,
            "dayWeek": 6,
            "npWidget": "Waning (62%)"
        },
        "17": {
            "phaseName": "Last quarter",
            "isPhaseLimit": 4,
            "lighting": 52.81381323892154,
            "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A -1.96,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
            "svgMini": "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 100 100'><circle cx='50' cy='50' r='48'  stroke-width='0' fill='black' /><path d='M50,2 A48,48 0 0,0 50,98'  stroke-width='0' fill='white' /></svg>",
            "timeEvent": "19:16:03",
            "dis": 405390.90706798283,
            "dayWeek": 0,
            "npWidget": "Last quarter"
        },
        "18": {
            "phaseName": "Waning",
            "isPhaseLimit": false,
            "lighting": 43.38397615673825,
            "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A 6.86,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
            "svgMini": false,
            "timeEvent": false,
            "dis": 405365.9304829967,
            "dayWeek": 1,
            "npWidget": "Waning (43%)"
        },
        "19": {
            "phaseName": "Waning",
            "isPhaseLimit": false,
            "lighting": 34.123847069270894,
            "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A 15.68,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
            "svgMini": false,
            "timeEvent": false,
            "dis": 404340.12580020976,
            "dayWeek": 2,
            "npWidget": "Waning (34%)"
        },
        "20": {
            "phaseName": "Waning",
            "isPhaseLimit": false,
            "lighting": 25.314243121414293,
            "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A 24.5,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
            "svgMini": false,
            "timeEvent": false,
            "dis": 402348.3723838922,
            "dayWeek": 3,
            "npWidget": "Waning (25%)"
        },
        "21": {
            "phaseName": "Waning",
            "isPhaseLimit": false,
            "lighting": 17.26640351650286,
            "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A 32.34,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
            "svgMini": false,
            "timeEvent": false,
            "dis": 399463.74666836014,
            "dayWeek": 4,
            "npWidget": "Waning (17%)"
        },
        "22": {
            "phaseName": "Waning",
            "isPhaseLimit": false,
            "lighting": 10.329810299328996,
            "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A 39.2,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
            "svgMini": false,
            "timeEvent": false,
            "dis": 395801.5868850869,
            "dayWeek": 5,
            "npWidget": "Waning (10%)"
        },
        "23": {
            "phaseName": "Waning",
            "isPhaseLimit": false,
            "lighting": 4.8867241384643325,
            "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A 45.08,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
            "svgMini": false,
            "timeEvent": false,
            "dis": 391522.26815427333,
            "dayWeek": 6,
            "npWidget": "Waning (4%)"
        },
        "24": {
            "phaseName": "Waning",
            "isPhaseLimit": false,
            "lighting": 1.3272807785594143,
            "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A 48.02,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
            "svgMini": false,
            "timeEvent": false,
            "dis": 386830.05068722734,
            "dayWeek": 0,
            "npWidget": "Waning (1%)"
        },
        "25": {
            "phaseName": "New Moon",
            "isPhaseLimit": 1,
            "lighting": 0.002535757484267709,
            "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 1,0 49,99 A 49,49 0 0,1 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
            "svgMini": "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 100 100'><circle cx='50' cy='50' r='48'  stroke-width='0' fill='black' /><path d='M50,2 A48,48 0 0,0 50,98'  stroke-width='0' fill='black' /></svg>",
            "timeEvent": "12:48:20",
            "dis": 381966.1168537806,
            "dayWeek": 1,
            "npWidget": "New Moon"
        },
        "26": {
            "phaseName": "Waxing",
            "isPhaseLimit": false,
            "lighting": 1.161134254852192,
            "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A 48.02,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
            "svgMini": false,
            "timeEvent": false,
            "dis": 377195.4126864023,
            "dayWeek": 2,
            "npWidget": "Waxing (1%)"
        },
        "27": {
            "phaseName": "Waxing",
            "isPhaseLimit": false,
            "lighting": 4.8860970987821215,
            "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A 45.08,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
            "svgMini": false,
            "timeEvent": false,
            "dis": 372788.6235611326,
            "dayWeek": 3,
            "npWidget": "Waxing (4%)"
        },
        "28": {
            "phaseName": "Waxing",
            "isPhaseLimit": false,
            "lighting": 11.054811243549063,
            "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A 38.22,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
            "svgMini": false,
            "timeEvent": false,
            "dis": 369001.8906698349,
            "dayWeek": 4,
            "npWidget": "Waxing (11%)"
        },
        "29": {
            "phaseName": "Waxing",
            "isPhaseLimit": false,
            "lighting": 19.3401464620382,
            "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A 30.38,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
            "svgMini": false,
            "timeEvent": false,
            "dis": 366057.2710859411,
            "dayWeek": 5,
            "npWidget": "Waxing (19%)"
        },
        "30": {
            "phaseName": "Waxing",
            "isPhaseLimit": false,
            "lighting": 29.25317491798075,
            "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A 20.58,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
            "svgMini": false,
            "timeEvent": false,
            "dis": 364126.44590229983,
            "dayWeek": 6,
            "npWidget": "Waxing (29%)"
        },
        "31": {
            "phaseName": "Waxing",
            "isPhaseLimit": false,
            "lighting": 40.20876275899434,
            "svg": "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><defs><pattern id=\"image11\" x=\"0\" y=\"0\" patternUnits=\"userSpaceOnUse\" height=\"100\" width=\"100\"><image x=\"0\" y=\"0\" height=\"100\" width=\"100\" xlink:href=\"https://www.icalendar37.net/lunar/api/i.png\"></image></pattern></defs><g><circle cx=\"50\" cy=\"50\" r=\"49\" stroke=\"none\"  fill=\"black\"/><path d=\"M 50 1 A 49,49 0 0,1 49,99 A 9.8,49 0 1,0 50,1\" stroke-width=\"0\" stroke=\"none\" fill=\"white\" /><a xlink:href=\"https://www.icalendar37.net/lunar/app/\" rel=\"noopener noreferrer\" target=\"_blank\"><circle cx=\"50\" cy=\"50\" r=\"49\" style=\"pointer-events:all;cursor:pointer\" stroke-width=\"0\"   fill=\"url(#image11)\" /></a></g></svg>",
            "svgMini": false,
            "timeEvent": false,
            "dis": 363319.1642537864,
            "dayWeek": 6,
            "npWidget": "Waxing (40%)"
        }
    },
    "month": 10,
    "year": 2022,
    "receivedVariables": {
        "lang": "en",
        "month": "10",
        "year": "2022",
        "size": "100%",
        "lightColor": "white",
        "shadeColor": "black",
        "texturize": "true"
    },
    "lang": "en",
    "language": "English",
    "title": [
        "Moon's calendar",
        "Moon phases"
    ],
    "nextFullMoon": "<svg height=\"18\" width=\"18\" style=\"margin-top:-2px;display:inline-block; vertical-align:middle;stroke:black;stroke-width:px;fill:white\">\r\n<title>Full moon</title>\r\n<circle cx=\"9\" cy=\"9\" r=\"8\" />\r\n</svg> <b>8</b> November",
    "autor": "wdisseny.com",
    "version": "2"
}
for (var key in moonPhaseMonth2.phase) {
  objectMoonPhase[`${moonPhaseMonth2.monthName},${key}`] = moonPhaseMonth2.phase[key]['phaseName'];
}

console.log(objectMoonPhase);
var nextMoons = [];
for (var key in objectMoonPhase) {
  var arrayDate = key.split(',')
  //console.log(arrayDate);
  if (arrayDate[0] === month && arrayDate[1] >= day && objectMoonPhase[key] === 'Full moon') {
    console.log( `The next full moon is on ${key}.`);
    nextMoons.push(`The next full moon is on ${key}.`);
  }
  if (arrayDate[0] === month && arrayDate[1] >= day && objectMoonPhase[key] === 'New Moon') {
    console.log( `The next new moon is on ${key}.`);
    nextMoons.push(`The next new moon is on ${key}.`);
  }
  if (!(arrayDate[0] === month) && arrayDate[1] <= day && objectMoonPhase[key] === 'Full moon') {
    console.log( `The next full moon is on ${key}.`);
    nextMoons.push(`The next full moon is on ${key}.`);
  }
  if (!(arrayDate[0] === month) && arrayDate[1] <= day && objectMoonPhase[key] === 'New Moon') {
    console.log( `The next new moon is on ${key}.`);
    nextMoons.push(`The next new moon is on ${key}.`);
  }
}


  return (
    <div>
      <h4 className='box'>Predictor</h4>
      <div className = 'table'>
        <ul>
        <li>Days from now for maximum barometric pressure = {maxPressureIndex}.</li>
        <li>Days from now for minimum barometric pressure = {minPressureIndex}.</li>
        <li>{nextMoons[0]}</li>
        <li>{nextMoons[1]}</li>
        </ul>
      </div>
      <div>

      </div>
    </div>
  );
}
Predictor();
export default Predictor;