import React, { useState, useEffect } from 'react';

function MoonFill(props) {

  const rating = .5


  return (
    <div>
      <div className="single-star-fill" style={{ "width": `36px` }}>
        <img className="single-star-outline" src="https://www.icalendar37.net/lunar/api/i.png" ></img>
      </div>
    </div>
  );
};

export default MoonFill;