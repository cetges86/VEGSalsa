import React, { Component } from 'react';
import portfolio1 from "../images/portfolio-1.jpg"
import portfolio2 from "../images/portfolio-2.jpg"
import portfolio3 from "../images/portfolio-3.jpg"
import portfolio4 from "../images/portfolio-4.jpg"
import portfolio5 from "../images/portfolio-5.jpg"
import portfolio6 from "../images/portfolio-6.jpg"

class Assets extends Component {


    render() {
        return(
            <section id="portfolio" className="dark-bg">
			<div className="container">
			<div className="row">
				<div className="col-lg-12 text-center">
					<div className="section-title">
						<h2 className="light-txt">Our Assets</h2>
						<p className="light-txt">Though we are headquartered in Denver, Colorado our asset portfolio extends to various other markets located in the United States.</p>
					</div>
				</div>
			</div>
			<div className="row">
				{/* start portfolio item */}
				<div className="col-md-4">
					<div className="ot-portfolio-item">
						<figure className="effect-bubba">
							<img src={portfolio1} alt="img02" className="img-responsive" />
							<figcaption>
								<h2>Dean & Letter</h2>
								<p>Branding, Design</p>
								<a href="#" data-toggle="modal" data-target="#Modal-1">View more</a>
							</figcaption>
						</figure>
					</div>
				</div>
				{/* end portfolio item */}
				{/* start portfolio item */}
				<div className="col-md-4">
					<div className="ot-portfolio-item">
						<figure className="effect-bubba">
							<img src={portfolio2} alt="img02" className="img-responsive" />
							<figcaption>
								<h2>Startup Framework</h2>
								<p>Branding, Web Design</p>
								<a href="#" data-toggle="modal" data-target="#Modal-2">View more</a>
							</figcaption>
						</figure>
					</div>
				</div>
				{/* end portfolio item */}
				{/* start portfolio item */}
				<div className="col-md-4">
					<div className="ot-portfolio-item">
						<figure className="effect-bubba">
							<img src={portfolio3} alt="img02" className="img-responsive" />
							<figcaption>
								<h2>Lamp & Velvet</h2>
								<p>Branding, Web Design</p>
								<a href="#" data-toggle="modal" data-target="#Modal-3">View more</a>
							</figcaption>
						</figure>
					</div>
				</div>
				{/* end portfolio item */}
			</div>
			<div className="row">
				{/* start portfolio item */}
				<div className="col-md-4">
					<div className="ot-portfolio-item">
						<figure className="effect-bubba">
							<img src={portfolio4} alt="img02" className="img-responsive" />
							<figcaption>
								<h2>Smart Name</h2>
								<p>Branding, Design</p>
								<a href="#" data-toggle="modal" data-target="#Modal-4">View more</a>
							</figcaption>
						</figure>
					</div>
				</div>
				{/* end portfolio item */}
				{/* start portfolio item */}
				<div className="col-md-4">
					<div className="ot-portfolio-item">
						<figure className="effect-bubba">
							<img src={portfolio5} alt="img02" className="img-responsive" />
							<figcaption>
								<h2>Fast People</h2>
								<p>Branding, Web Design</p>
								<a href="#" data-toggle="modal" data-target="#Modal-5">View more</a>
							</figcaption>
						</figure>
					</div>
				</div>
				{/* end portfolio item */}
				{/* start portfolio item */}
				<div className="col-md-4">
					<div className="ot-portfolio-item">
						<figure className="effect-bubba">
							<img src={portfolio6} alt="img02" className="img-responsive" />
							<figcaption>
								<h2>Kites & Stars</h2>
								<p>Branding, Web Design</p>
								<a href="#" data-toggle="modal" data-target="#Modal-2">View more</a>
							</figcaption>
						</figure>
					</div>
				</div>
				{/* end portfolio item */}
			</div>
			</div>{/* end container */}
		</section>
        )
    }
}

export default Assets;