import React from "react";
import "./Profile.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { fab } from "@fortawesome/free-brands-svg-icons";
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
              <h3 className="front__text-header">Dustin Moskovitz</h3>
              <p className="front__text-para">
                <i className="fas fa-map-marker-alt front-icons"></i>Dustin@Moskovitz.ke
              </p>

              <span className="front__text-hover btn-color">Hover to Find Me</span>
            </div>
          </div>
          <div className="back">
            <div className="social-media-wrapper">
              <a href="#" className="social-icon">
                <FontAwesomeIcon
                  icon={["fab", "facebook-f"]}
                  style={{ color: "red" }}
                />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={["fab", "facebook-f"]} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <span className="front__text-hover">Go back</span>
    </div>
  );
}

export default Profile;
