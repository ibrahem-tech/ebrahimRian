import React from 'react';
import WOW from 'wowjs';
import About from "./about.jsx";
import BackGround from './background'



class Navbar extends React.Component {
render() {
    return(
        <div>
            <BackGround
            	ref={this.navEffect}
                id="my-background"
                aboutRef={this.about}
                bounceIn={"wow bounceIn"}
            />
            <About/>
        </div>
    );
}
};

export default Navbar;
