import React from "react";
import '../../css/home.css';
import aimlogo from '../../icons/betterwellnessaim.jpg';

const Fourthsec = () => {
    return (
      <div className="fs-wrapper">
        <div className="fs-container">
          <div className="fs-first-heading">
            <h1>Share Your Story, Find Your Strength</h1>
            <p>Writing down your thoughts can be a powerful tool for mental wellness. When you're feeling overwhelmed, putting your feelings into words can help you gain clarity and perspective.</p>
          </div>
        </div>

        {/* section 2 */}
        <div className="fs-two-container">
          <div className="fs-two-content">
            <div className="fs-two-cntn1">
                <h1>Our Mission</h1>
                <em>To create a supportive community where mental health matters. We believe everyone deserves access to understanding, compassion, and resources for their mental well-being. Through shared experiences and professional support, we're building a world where mental health is prioritized and stigma is eliminated.</em>
            </div>
            <div className="fs-two-cntn2">
              <img src={aimlogo} alt="BetterWellness mission" />
            </div>
          </div>
        </div>
      </div>
    )
}

export default Fourthsec;