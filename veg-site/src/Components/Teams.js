import React, { Component } from 'react';
import member1 from "../images/author-2.jpg"
import member2 from "../images/author-6.jpg"
import member3 from "../images/author-3.jpg"
import member4 from "../images/author-4.jpg"

class Teams extends Component {

    render() {
         return(
            <section id="team" className="light-bg">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 text-center">
						<div className="section-title">
							<h2>Our Team</h2>
							<p>A creative agency based on Candy Land, ready to boost your business with some beautifull templates. Lattes Agency is one of the best in town see more you will be amazed.</p>
						</div>
					</div>
				</div>
				<div className="row">
					{/* team member item */}
					<div className="col-md-3">
						<div className="team-item">
							<div className="team-image">
								<img src={member1} className="img-responsive" alt="author" />
							</div>
							<div className="team-text">
								<h3>TOM BEKERS</h3>
								<div className="team-location">Sydney, Australia</div>
								<div className="team-position">– CEO & Web Design –</div>
								<p>Mida sit una namet, cons uectetur adipiscing adon elit. Aliquam vitae barasa droma.</p>
							</div>
						</div>
					</div>
					{/* end team member item */}
					{/* team member item */}
					<div className="col-md-3">
						<div className="team-item">
							<div className="team-image">
								<img src={member2} className="img-responsive" alt="author" />
							</div>
							<div className="team-text">
								<h3>LINA GOSATA</h3>
								<div className="team-location">Los Angeles, California</div>
								<div className="team-position">– Photography –</div>
								<p>Worsa dona namet, cons uectetur dipiscing adon elit. Aliquam vitae fringilla unda mir.</p>
							</div>
						</div>
					</div>
					{/* end team member item */}
					{/* team member item */}
					<div className="col-md-3">
						<div className="team-item">
							<div className="team-image">
								<img src={member3} className="img-responsive" alt="author" />
							</div>
							<div className="team-text">
								<h3>Larry Parker</h3>
								<div className="team-location">Barcelona, Spain</div>
								<div className="team-position">– Development –</div>
								<p>Aradan bes namet, cons uectetur moiscing adon elit. Aliquam vitae fringilla unda augue.</p>
							</div>
						</div>
					</div>
					{/* end team member item */}
					{/* team member item */}
					<div className="col-md-3">
						<div className="team-item">
							<div className="team-image">
								<img src={member4} className="img-responsive" alt="author" /> 
							</div>
							<div className="team-text">
								<h3>John BEKERS</h3>
								<div className="team-location">Miami, Floria</div>
								<div className="team-position">– Marketing –</div>
								<p>Dolor sit don namet, cons uectetur beriscing adon elit. Aliquam vitae fringilla unda.</p>
							</div>
						</div>
					</div>
					{/* end team member item */}
				</div>
			</div>
		</section>
         )
    }
}

export default Teams;