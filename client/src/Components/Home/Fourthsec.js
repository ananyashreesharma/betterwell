import React from "react";
import '../../css/home.css';
import  aimlogo from '../../icons/betterwellnessaim.jpg';

const Fourthsec = () => {
    return (
      <div className="fs-wrapper">
        <div className="fs-container">
          <div className="fs-first-heading">
            <h1>Actually try writing your thoughts down...When you're super stressed and overwhelmed, see if there's any way to put a positive spin on it.</h1>
          </div>
        </div>

      {/* section 2 */}
      <div className="fs-two-container">
        <div className="fs-two-content">
          <div className="fs-two-cntn1">
              <h1>BetterWellness Moto</h1>
              <em>To Make The World A Better Place.
              We have assembled and created unique Mental Health Slogans for your campaigns. These mental health slogans will surely inspire thousand to take better care of their and their loved one’s mental health through you
              </em>
          </div>
          <div className="fs-two-cntn2">
            <img src={aimlogo} alt="" />
          </div>
        </div>
      </div>

      </div>
    )
}

export default Fourthsec;