import React from 'react';
import ProfilePicture from '../../assets/images/profile-picture.png';

const Home = () => {
  return (
    <div className='container-fluid vh-100 bg-black text-white'>
      <div class="text-center">
        <img class="d-block mx-auto mb-4" src={ProfilePicture} alt="" width="300" height="300" />
        <h2 class="display-5">hi, I'm</h2>
        <h1 class="display-1 fw-bold">Bruno Silva</h1>
        <h3 class="display-5">'FRONT-END DEVELOPER'</h3>
        <h4 class="display-5">+</h4>
        <h4 class="display-5">'UI DESIGNER'</h4>
      </div>
    </div>
  );
};

export default Home;