import React from "react";
import '../../css/findsup.css'
import Navigation from "../navigation";

const Findsupport = () =>{
 
    return(
        <div>
            <Navigation/>
            <div className="findsup-comp">
                <div className="fs-heading">
                    <h1>Mental Health Support in India</h1>
                    <p className="fs-subtitle">You're not alone. Help is available 24/7.</p>
                </div>
                
                <div className="support-sections">
                    {/* Emergency Helplines */}
                    <div className="support-section">
                        <h3>🆘 Emergency Helplines (24/7)</h3>
                        <div className="helpline-cards">
                            <div className="helpline-card">
                                <h4>National Mental Health Helpline</h4>
                                <p className="phone">1800-599-0019</p>
                                <p>Free, confidential support</p>
                            </div>
                            <div className="helpline-card">
                                <h4>Vandrevala Foundation</h4>
                                <p className="phone">1860-266-2345</p>
                                <p>Mental health crisis support</p>
                            </div>
                            <div className="helpline-card">
                                <h4>iCall Helpline</h4>
                                <p className="phone">022-2556-3291</p>
                                <p>Professional counseling</p>
                            </div>
                            <div className="helpline-card">
                                <h4>Fortis Mental Health</h4>
                                <p className="phone">+91-8376804102</p>
                                <p>24/7 crisis intervention</p>
                            </div>
                        </div>
                    </div>

                    {/* Online Support */}
                    <div className="support-section">
                        <h3>💬 Online Support & Messaging</h3>
                        <div className="online-support-cards">
                            <div className="support-card">
                                <h4>YourDOST</h4>
                                <p>Free online counseling platform</p>
                                <a href="https://yourdost.com" target="_blank" rel="noopener noreferrer">Visit Website</a>
                            </div>
                            <div className="support-card">
                                <h4>Wysa</h4>
                                <p>AI-powered mental health chatbot</p>
                                <a href="https://wysa.io" target="_blank" rel="noopener noreferrer">Download App</a>
                            </div>
                            <div className="support-card">
                                <h4>MindPeers</h4>
                                <p>Peer support and professional therapy</p>
                                <a href="https://mindpeers.co" target="_blank" rel="noopener noreferrer">Join Community</a>
                            </div>
                            <div className="support-card">
                                <h4>InnerHour</h4>
                                <p>Digital mental health platform</p>
                                <a href="https://innerhour.com" target="_blank" rel="noopener noreferrer">Get Started</a>
                            </div>
                        </div>
                    </div>

                    {/* Support Groups */}
                    <div className="support-section">
                        <h3>🤝 Support Groups & Communities</h3>
                        <div className="support-groups-cards">
                            <div className="group-card">
                                <h4>Depression & Anxiety Support Group</h4>
                                <p>Weekly online meetings</p>
                                <p>Contact: support@mentalhealthindia.org</p>
                            </div>
                            <div className="group-card">
                                <h4>Bipolar Disorder Support Network</h4>
                                <p>Peer support and resources</p>
                                <p>WhatsApp: +91-98765-43210</p>
                            </div>
                            <div className="group-card">
                                <h4>LGBTQ+ Mental Health Support</h4>
                                <p>Safe space for LGBTQ+ community</p>
                                <p>Contact: lgbtq@mentalhealthindia.org</p>
                            </div>
                            <div className="group-card">
                                <h4>Student Mental Health Network</h4>
                                <p>Support for college students</p>
                                <p>Instagram: @studentmentalhealthindia</p>
                            </div>
                        </div>
                    </div>

                    {/* Government Resources */}
                    <div className="support-section">
                        <h3>🏛️ Government Resources</h3>
                        <div className="govt-resources-cards">
                            <div className="govt-card">
                                <h4>National Institute of Mental Health</h4>
                                <p>Bengaluru, Karnataka</p>
                                <p>Phone: 080-2699-5000</p>
                                <a href="https://nimhans.ac.in" target="_blank" rel="noopener noreferrer">Visit Website</a>
                            </div>
                            <div className="govt-card">
                                <h4>All India Institute of Medical Sciences</h4>
                                <p>New Delhi</p>
                                <p>Phone: 011-2658-8500</p>
                                <a href="https://aiims.edu" target="_blank" rel="noopener noreferrer">Visit Website</a>
                            </div>
                        </div>
                    </div>

                    {/* Self-Help Resources */}
                    <div className="support-section">
                        <h3>📚 Self-Help Resources</h3>
                        <div className="self-help-cards">
                            <div className="resource-card">
                                <h4>Mental Health Apps</h4>
                                <ul>
                                    <li>Calm - Meditation & Sleep</li>
                                    <li>Headspace - Mindfulness</li>
                                    <li>MoodTools - Depression Aid</li>
                                    <li>Pacifica - Stress & Anxiety</li>
                                </ul>
                            </div>
                            <div className="resource-card">
                                <h4>Educational Resources</h4>
                                <ul>
                                    <li>Mental Health Foundation India</li>
                                    <li>NIMHANS Online Courses</li>
                                    <li>WHO Mental Health Guidelines</li>
                                    <li>Mindful.org Articles</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="emergency-notice">
                    <h3>🚨 If you're in immediate crisis:</h3>
                    <p>Call <strong>100</strong> for police emergency</p>
                    <p>Call <strong>108</strong> for ambulance</p>
                    <p>Text <strong>HELP</strong> to <strong>741741</strong> for crisis text line</p>
                </div>
            </div>
        </div>
    )
}

export default Findsupport