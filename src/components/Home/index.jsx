import React from 'react';
import ProfilePicture from '../../assets/images/profile-picture.png';
import CubeOne from '../../assets/images/icons/cube-1.png';
import CubeTwo from '../../assets/images/icons/cube-2.png';
import CubeThree from '../../assets/images/icons/cube-3.png';
import CubeFour from '../../assets/images/icons/cube-4.png';
import './index.css';

const Home = () => {
  return (
    <div className='d-grid container-fluid my-5 text-white'>
      <div className="text-center">
        <img className="d-block mx-auto mb-5" src={ProfilePicture} alt="" width="300" height="300" />
        <h2 className="display-2 spacing-05 roboto-thin">hi, I'm</h2>
        <h1 className="display-1 spacing-10 roboto-bold">BRUNO SILVA</h1>
        <h3 className="fs-3 spacing-05 roboto-thin"><span className='color-3'>'FRONT-END</span> DEVELOPER'</h3>
        <h4 className="fs-3 roboto-thin">+</h4>
        <h4 className="fs-6 spacing-05 roboto-thin">'UI DESIGNER'</h4>
      </div>
      <div className="col-12 col-sm-4">
        <div className="d-flex mt-5 gap-3 flex-column flex-sm-row">
            <button type="button" className="btn btn-outline-light col-10 mx-auto px-3"><img className="me-2" src={CubeOne} alt="" width="32" height="32" />Resume</button>
            <button type="button" className="btn btn-outline-light col-10 mx-auto px-3"><img className="me-2" src={CubeTwo} alt="" width="32" height="32" />GitHub</button>
            <button type="button" className="btn btn-outline-light col-10 mx-auto px-3"><img className="me-2" src={CubeThree} alt="" width="32" height="32" />LinkedIn</button>
            <button type="button" className="btn btn-outline-light col-10 mx-auto px-3"><img className="me-2" src={CubeFour} alt="" width="32" height="32" />Hi, Bruno!</button>
        </div>
      </div>
    </div>
  );
};

export default Home;