import React from 'react'
import "./Profile.scss"
function Profile() {
    return (
        <div>
            <div className="background"></div>

<div className="outer-div">
  <div className="inner-div">
    <div className="front">
      <div className="front__bkg-photo"></div>
      <div className="front__face-photo"></div>
      <div className="front__text">
        <h3 className="front__text-header">Bobby Korec</h3>
        <p className="front__text-para"><i className="fas fa-map-marker-alt front-icons"></i>Seattle</p>
        
        <span className="front__text-hover">Hover to Find Me</span>
      </div>
    </div>
    <div className="back">
      <div className="social-media-wrapper">
        <a href="#" className="social-icon"><i className="fab fa-codepen" aria-hidden="true"></i></a> 
        <a href="#" className="social-icon"><i className="fab fa-github-square" aria-hidden="true"></i></a>
        <a href="#" className="social-icon"><i className="fab fa-linkedin-square" aria-hidden="true"></i></a>
         <a href="#" className="social-icon"><i className="fab fa-instagram" aria-hidden="true"></i></a>
      </div>
    </div>

  </div>
</div>
        </div>
    )
}

export default Profile
