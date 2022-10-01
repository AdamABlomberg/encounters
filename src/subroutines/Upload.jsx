import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ImageWidget from './ImageWidget.jsx'
import StarRating from './StarRating.jsx'
const axios = require('axios');

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function UploadModal({setStateOfUpload}) {
  //console.log('setStateOfUpload =', setStateOfUpload);
  //modal variables
  const [open, setOpen] = useState(false);
  const [photo, setPhoto] = useState();
  const [lure, setLure] = useState(`it's a secret`);
  const [location, setLocation] = useState(`Ogema, Wi`);
  const [length, setLength] = useState(`bigger than it looks in the pic`);
  const [weight, setWeight] = useState(`unknown`);
  const [rating, setRating] = useState();
  const [waterWay, setWaterWay] = useState(`it's a big secret`);
  const [description, setDescription] = useState(`Musky Encounter at ${location}`);
  const [pressure, setPressure] = useState();
  const [moonPhase, setMoonPhase] = useState('');
  const [temperature, setTemperature] = useState();
  const [weatherType, setWeatherType] = useState('');
  const [windSpeed, setWindSpeed] = useState();
  const [date, setDate] = useState();
  const [upload, setUpload] = useState(false);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  var setStateOfPhoto = (newUrl) => {
    setPhoto(newUrl);
  }
  useEffect(() => {
    //console.log('setStateOfPhoto new photo url =', photo);
  }, [photo]);

  var setStateOfRating = (newRating) => {
    setRating(newRating);
  }

  useEffect(() => {
    //console.log('setStateOfRating new rating =', rating);
  }, [rating]);


  var handleSubmit = () => {
    handleClose();
    postData();
    setStateOfUpload(!upload);
  }

  var postData = () => {

    axios.get(`https://api.worldweatheronline.com/premium/v1/astronomy.ashx?key=e027b9c710c5444a96d211931222709&q=${location}&date=${date}&format=JSON`)
      .then(res => {
        //console.log(res.data);
        //console.log(res.data.data.time_zone[0].moon_phase);
        setMoonPhase(res.data.data.time_zone[0].moon_phase);
      })

    axios.get(`https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=${date}&aggregateHours=24&location=${location}`,
      {
        headers: {
          'X-RapidAPI-Key': '17784bc1e1mshe7d0c4d9ad6c702p1e5185jsnc6bca7d8af3a',
        }
      })
      .then(res => {
        const weatherArray = res.data.split(',');
        //console.log('res', res);
        //console.log('weatherArray ', weatherArray);
        setPressure(Math.round(weatherArray[42]));
        setWeatherType(weatherArray[weatherArray.length - 1]);
        setTemperature(Math.round(weatherArray[29]));
        setWindSpeed(Math.round(weatherArray[33]));
      })
  }

  const previousValues = useRef({pressure, moonPhase});

  useEffect(() => {
    if (
      previousValues.current.pressure !== pressure && previousValues.current.moonPhase !== moonPhase
    ) {
      // console.log('photo = ', photo);
      // console.log('lure = ', lure);
      // console.log('location = ', location);  // required
      // console.log('length = ', length);
      // console.log('weight = ', weight);
      // console.log('rating = ', rating);
      // console.log('waterWay = ', waterWay);
      // console.log('description = ', description);
      // console.log('date = ', date); // required
      // console.log('pressure = ', pressure);
      // console.log('moonPhase = ', moonPhase);
      // console.log('temperature = ', temperature);
      // console.log('weatherType = ', weatherType);
      // console.log('windSpeed = ', windSpeed);

      axios.post('/encounters',
        {
          'photourl': photo,
          'lure': lure,
          'location': location,
          'length': length,
          'weight': weight,
          'rating': rating,
          'waterway': waterWay,
          'description': description,
          'pressure': pressure,
          'moonphase': moonPhase,
          'temperature': temperature,
          'weathertype': weatherType,
          'windspeed': windSpeed,
          'date': date
        })
      // .then(res => console.log(res))
      // .catch(err => console.log(err));
    }
    })

  return (
    <div>
      <button className='button-review' onClick={handleOpen}>Upload Information About A Catch</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            * Upload Information About A Catch
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <div>
              * Title<input className='button-review' type='text' size='45' placeholder='enter a title for your experience...' onChange={(e) => {
                setDescription(e.target.value)
              }} />
            </div>
            <div>
              * Rate the Experience <StarRating setStateOfRating={setStateOfRating} />
            </div>
            <div>
              * Location <input className='button-review' type='text' size='25' placeholder='City, State...' onChange={(e) => {
                setLocation(e.target.value)
              }} />
            </div>
            <div>
              * Date<input className='button-review' type='text' size='25' placeholder='YYYY-DD-MM...' onChange={(e) => {
                setDate(e.target.value)
              }} />
            </div>
            <div>
              * Lake/River <input className='button-review' type='text' size='25' placeholder='enter water way here...' onChange={(e) => {
                setWaterWay(e.target.value)
              }} />
            </div>
            <div>
              * Lure<input className='button-review' type='text' size='45' placeholder='describe your lure here...' onChange={(e) => {
                setLure(e.target.value)
              }} />
            </div>
            <div>
              * Length<input className='button-review' type='text' size='35' placeholder='enter the length of your fish here in inches...' onChange={(e) => {
                setLength(e.target.value)
              }} />
            </div>
            <div>
              * Weight<input className='button-review' type='text' size='40' placeholder='enter the weight of your fish here in pounds...' onChange={(e) => {
                setWeight(e.target.value)
              }} />
            </div>
            <div> * Upload Photo
              <button
                className="button-review"
                onClick={() => { ImageWidget(setStateOfPhoto = { setStateOfPhoto }) }}
              >
                Upload
              </button>
            </div>

            <div>
              <button className='button-review' onClick={handleSubmit}>
                SUBMIT
              </button>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
export default UploadModal;

