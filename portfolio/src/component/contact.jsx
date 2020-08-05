import React from 'react';
import PropTypes from 'prop-types';

export default class Contact extends React.Component {
    render() {
        return(
            <div 
            id="my-contact" 
            className="container text-center my-5"
            >
                <h1 
                id="contact" 
                style={{padding: 0, scrollMarginTop: 3+ "em"}}
                className={"mb-3 " + this.props.fadeInLeft}
                >
                    Conatct Me
                    </h1>
                    <hr/>
                    <form
                    id="form"
					className={this.props.shake}
					action="https://formspree.io/xrgyjora"
					method="POST">
					<div className="form-group">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-6 mx-auto">
								<input
									type="text"
									name="name"
									className="form-control form-control-lg"
									id="name"
									placeholder="Name"
								/>
							</div>
						</div>
					</div>
					<div className="form-group hidden">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-6 mx-auto">
								<input
									type="email"
									name="_replyto"
									className="form-control form-control-lg"
									id="exampleFormControlInput1"
									placeholder="Your email"
								/>
							</div>
						</div>
					</div>
					<div className="form-group hiddenRight">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-6 mx-auto">
								<textarea
									name="message"
									className="form-control form-control-lg"
									id="exampleFormControlTextarea1"
									rows="3"
									placeholder="Write your message..."
								/>
							</div>
						</div>
					</div>
					<div className="row text-md-right text-sm-center">
						<div className="col-12 col-sm-12 col-md-6 mx-auto">
							<button style={{backgroundColor: "white", color: "black", border: "#ADEFD1FF", marginTop: 1 + "em",marginRight: 15 + "em"}}
								type="submit"
								className="btn btn-primary mb-2 hidden">
								Submit
							</button>
						</div>
					</div>
				</form>

              </div>
        )
    }
}

Contact.propTypes = {
	fadeInLeft: PropTypes.string,
	shake: PropTypes.string
};