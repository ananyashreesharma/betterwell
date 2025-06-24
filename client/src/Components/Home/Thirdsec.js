import React from "react";
// css is in the home css part
import '../../css/home.css'
import homepic from '../../icons/homepic.jpg'

const Thirdsec = () => {
    return (
        <div className="Thirdsec">
            <div className="ts-wrapper">
                <div className="ts-icon">
                    <img src={homepic} alt="Mental health support" />
                </div>

                <div className="ts-info">
                    <div className="info-container">
                        <div className="ts-basic-info">
                            <em>Mental health encompasses our emotional, psychological, and social well-being. It affects how we think, feel, and act. Good mental health is essential for leading a balanced life, maintaining relationships, and achieving our full potential. It's not just the absence of mental illness—it's about thriving and finding meaning in life.</em>
                        </div>
                        <div className="ts-basic-info-button">
                            <a href="/find-support">Get Support</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Thirdsec;