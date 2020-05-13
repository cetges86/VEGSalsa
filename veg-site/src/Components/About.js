import React, { Component } from 'react';

class About extends Component {

    render() {

        return (
            <section id="about" className="light-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="section-title">
                                <h2>ABOUT</h2>
                                <p>A creative agency based on Candy Land, ready to boost your business with some beautifull templates. Lattes Agency is one of the best in town see more you will be amazed.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* about module */}
                        <div className="col-md-3 text-center">
                            <div className="mz-module-about">
                                <i className="fa fa-briefcase ot-circle"></i>
                                <h3>Web Development</h3>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                            </div>
                        </div>
                        {/* end about module */}
                        {/* about module */}
                        <div className="col-md-3 text-center">
                            <div className="mz-module-about">
                                <i className="fa fa-photo ot-circle"></i>
                                <h3>Visualisation</h3>
                                <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe</p>
                            </div>
                        </div>
                        {/* end about module */}
                        {/* about module */}
                        <div className="col-md-3 text-center">
                            <div className="mz-module-about">
                                <i className="fa fa-camera-retro ot-circle"></i>
                                <h3>Photography</h3>
                                <p>Accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                            </div>
                        </div>
                        {/* end about module */}
                        {/* about module */}
                        <div className="col-md-3 text-center">
                            <div className="mz-module-about">
                                <i className="fa fa-cube ot-circle"></i>
                                <h3>UI/UX Design</h3>
                                <p> Itaque earum rerum hic tenetur a sapiente, ut aut reiciendis maiores</p>
                            </div>
                        </div>
                        {/* end about module */}
                    </div>
                </div>
                {/* /.container */}
            </section>
        )
    }

}

export default About;