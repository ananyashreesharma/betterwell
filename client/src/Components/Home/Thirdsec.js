import React from "react";
// css is in the home css part
import '../../css/home.css'
import homepic from '../../icons/homepic.jpg'
const Thirdsec = () => {
    return (
        <div className="Thirdsec">
            <div className="ts-wrapper">
                <div className="ts-icon">
                    <img src={homepic} alt="" srcset=""/>
                </div>

                <div className="ts-info">
                    <div className="info-container">
                        <div className="ts-basic-info">
                            <em>The WHO stress that mental health is “more than just the absence of mental disorders or disabilities.” Peak mental health is about not only avoiding active conditions but also looking after ongoing wellness and happiness.
                            They also emphasize that preserving and restoring mental health is crucial on an individual basis, as well as throughout different communities and societies the world over.</em>
                        </div>
                        <div className="ts-basic-info-button">
                            <a href="#">Know more</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Thirdsec;