import React from "react";

import github from "../img/github.png";
import linkedin from "../img/linkedin.png";

class Footer extends React.Component {
	render() {
		return (
			<div style={{marginTop: 50 + "px"}} id="footer" className="container-fluid text-center py-3">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-8 mx-auto">
							<a
								className="px-3"
								href="https://github.com/ibrahem-tech"
								target="_blank"
								rel="noopener noreferrer">
								<img src={github} alt=""/>
							</a>
							<a
								href="https://www.linkedin.com/in/ibrahemrayan/"
								target="_blank"
								rel="noopener noreferrer">
								<img src={linkedin} alt=""/>
							</a>
						</div>
					</div>
					<h5 className="pt-4">Ebrahim Rian &copy; 2020</h5>
				</div>
			</div>
		);
	}
}

export default Footer;