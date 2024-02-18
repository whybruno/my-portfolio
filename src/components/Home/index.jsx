import React from 'react';
import ProfilePicture from '../../assets/images/profile-picture.png';
import CubeOne from '../../assets/images/icons/cube-1-orange.png';
import CubeTwo from '../../assets/images/icons/cube-2-orange.png';
import CubeThree from '../../assets/images/icons/cube-3-orange.png';
import CubeFour from '../../assets/images/icons/cube-4-orange.png';
import './index.css';

const Home = () => {
  return (
    <main className='container-fluid py-md-5'>
      <div className="d-flex justify-content-center align-items-center flex-column px-4 py-5 text-center">
			<img className="d-block mx-auto mb-4 rounded-5" src={ProfilePicture} alt="" width="250" height="250"></img>
			<h1 className="display-1 fw-bold">BRUNO SILVA</h1>
			<div className="col-lg-8 mx-auto">
				<h2 className="fs-6 fs-sm-4 mb-5">FRONT-END DEVELOPER</h2>
				<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
					<a href="https://drive.google.com/file/d/1lzJUOp3Lb_uEPJW_YmAY--1uOB9QQ8VA/view?usp=sharing" target="_blank" type="button" className="btn btn-dark btn-sm px-4 gap-3"><img className="me-2" src={CubeOne} alt="" width="32" height="32" />Resume</a>
					<a href="https://github.com/whybruno/" type="button" className="btn btn-dark btn-sm px-4"><img className="me-2" src={CubeTwo} alt="" width="32" height="32" />GitHub</a>
					<a href="https://www.linkedin.com/in/whybruno/" type="button" className="btn btn-dark btn-sm px-4"><img className="me-2" src={CubeThree} alt="" width="32" height="32" />LinkedIn</a>
					<a href="mailto:whybruno.dev@gmail.com" type="button" className="btn btn-dark btn-sm px-4"><img className="me-2" src={CubeFour} alt="" width="32" height="32" />Hi, Bruno!</a>
				</div>
			</div>
		</div>
    </main>
  );
};

export default Home;