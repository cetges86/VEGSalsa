import React, { Component } from 'react';

class Contact extends Component {

    render() {

        return(
            <section id="contact">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 text-center">
						<div className="section-title">
							<h2>Contact Us</h2>
							<p>If you have some Questions or need Help! Please Contact Us!<br />We make Cool and Clean Design for your Business</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-3">
						<h3>Our Business Office</h3>
						<p>3422 Street, Barcelona 432, Spain, New Building North, 15th Floor</p>
						<p><i className="fa fa-phone"></i> +101 377 655 22125</p>
						<p><i className="fa fa-envelope"></i> mail@yourcompany.com</p>
					</div>
					<div className="col-md-3">
						<h3>Business Hours</h3>
						<p><i className="fa fa-clock-o"></i> <span className="day">Weekdays:</span><span>9am to 8pm</span></p>
						<p><i className="fa fa-clock-o"></i> <span className="day">Saturday:</span><span>9am to 2pm</span></p>
						<p><i className="fa fa-clock-o"></i> <span className="day">Sunday:</span><span>Closed</span></p>
					</div>
					<div className="col-md-6">
						<form name="sentMessage" id="contactForm" noValidate="">
							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Your Name *" id="name" required="" data-validation-required-message="Please enter your name." />
										<p className="help-block text-danger"></p>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<input type="email" className="form-control" placeholder="Your Email *" id="email" required="" data-validation-required-message="Please enter your email address." />
										<p className="help-block text-danger"></p>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									<div className="form-group">
										<textarea className="form-control" placeholder="Your Message *" id="message" required="" data-validation-required-message="Please enter a message."></textarea>
										<p className="help-block text-danger"></p>
									</div>
								</div>
								<div className="clearfix"></div>
							</div>
							<div className="row">
								<div className="col-lg-12 text-center">
									<div id="success"></div>
									<button type="submit" className="btn">Send Message</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
        )
    }
}
export default Contact;