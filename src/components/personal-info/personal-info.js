import React, {Component} from 'react';
import myImage from '../personal-info/my-pic.jpg'

class PersonalInfo extends React.Component{
    render(){
        return (
            <div className="info-container-personal">
                <div className="my-image">
                    <img src={myImage}></img>

                </div>
                <div className="personal-info">
                    <p>An enthusiast individual with positive motivation. Always willing to learn new things and stay updated with latest technologies. 
                    <br/> Hobbies include singing, playing outdoor games such as Cricket & Football and also computer games. Apart from them photography, playing guitar and listening to music releases my stress<br/>.</p>
                </div>
            </div>
        )
    }
}

export default PersonalInfo;