import React, {Component} from 'react';
import logo from "../images/VEGlogo-horiz.png";

class Navbar extends Component {

    render() {
        return (
                //  Navigation 
		<nav className="navbar navbar-default navbar-fixed-top">
			<div className="container">
				{/*  Brand and toggle get grouped for better mobile display */}
				<div className="navbar-header page-scroll">
					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					<span className="sr-only">Toggle navigation</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					</button>
					<a className="navbar-brand page-scroll" href="#page-top"><img src={logo} id="nav-logo" alt="VEG Logo" /></a>
				</div>
				{/* <!-- Collect the nav links, forms, and other content for toggling --> */}
				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul className="nav navbar-nav navbar-right">
						<li className="hidden">
							<a href="#page-top"></a>
						</li>
						<li>
							<a className="page-scroll" href="#about">About</a>
						</li>
						{/* <!-- <li>
							<a className="page-scroll" href="#services">Services</a>
						</li> --> */}
						<li>
							<a className="page-scroll" href="#portfolio">Assets</a>
						</li>
						<li>
							<a className="page-scroll" href="#team">Team</a>
						</li>
						<li>
							<a className="page-scroll" href="#contact">Contact</a>
						</li>
					</ul>
				</div>
				{/* <!-- /.navbar-collapse --> */}
			</div>
			{/* <!-- /.container-fluid --> */}
		</nav>
        )
    }
}

export default Navbar;