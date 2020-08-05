import React from "react";
import PropTypes from "prop-types";

import WOW from 'wowjs';

export default class Background extends React.Component {
  
  componentDidMount(){
      new WOW.WOW().init();
  }
    render(){
        return(
            <div id="my-background" className="background">
                <div id="stars"/>
                <div id="star2"/>
                <div id="star3"/>
                <div className="top-container flex">
                    <h1>
						Hello, I&apos;m Ebrahim Rian.
						<br />
						Full Stack Web Developer. 
                    </h1>

                    <button
						className={"work-button " + this.props.bounceIn}
						data-wow-offset="0"
						onClick={() => {
							let node = document.getElementById(
								this.props.aboutRef.current.props.id
							);
							window.scrollTo({
								top: node.offsetTop,
								behavior: "auto"
							});
						}}>
						View my work
					</button>
                </div>

            </div>
        )
    }
}


Background.propTypes = {
	aboutRef: PropTypes.object,
	bounceIn: PropTypes.string
};