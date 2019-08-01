import React, { Component } from 'react';
import jsImage from '../img/js-brands.svg';
import reactImg from '../img/react-brands.svg'


class TechnicalQualifications extends React.Component {
    render() {
        return (
            <div className="tech-qualification-container">
                {/* <div className="container"> */}
                <div className="tech-qualification-heading">
                    <h1>Technical qualifications</h1>
                </div>
                <div className="tech-stack-images">
                    {/* <div className="row">
                            <div className="tech-images"> */}
                    <div className="js">
                        <img src={jsImage} alt="pic1" width="15%"></img>
                    </div>
                    <div className="react">
                        <img src={reactImg} alt="pic2" width="15%"></img>
                    </div>


                    {/* </div>
                        </div> */}

                </div>
                {/* </div> */}
            </div>
        )
    }
}


export default TechnicalQualifications;