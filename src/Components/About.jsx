import React from 'react'

const About = () => {
    return (
        <div>
            <main id="main">
                {/* ======= About Section ======= */}
                <section id="about" className="about-mf sect-pt4 route">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="box-shadow-full">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-sm-6 col-md-5">
                                                    <div className="about-img">
                                                        <img src="assets/img/testimonial-2.jpg" className="img-fluid rounded b-shadow-a" alt />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-7">
                                                    <div className="about-info">
                                                        <p><span className="title-s">Name: </span> <span>Zahid Khan</span></p>
                                                        <p><span className="title-s">Profile: </span> <span>full stack developer</span></p>
                                                        <p><span className="title-s">Email: </span> <span>Zahidkhan@gmail.com</span></p>
                                                        <p><span className="title-s">Phone: </span> <span>+92 349-4927404</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="skill-mf">
                                                <p className="title-s">Skill</p>
                                                <span>HTML</span> <span className="pull-right">100%</span>
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                <span>CSS3</span> <span className="pull-right">75%</span>
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                <span>PHP</span> <span className="pull-right">50%</span>
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                <span>JAVASCRIPT</span> <span className="pull-right">90%</span>
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="about-me pt-4 pt-md-0">
                                                <div className="title-box-2">
                                                    <h5 className="title-left">
                                                        About me
                                                    </h5>
                                                </div>
                                                <p className="lead">
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium voluptatum officia quibusdam minima labore velit natus quaerat suscipit? Amet officia laborum consequatur, consectetur magnam assumenda quis praesentium a, possimus voluptas nihil sint officiis totam hic vitae eos minus ratione consequuntur!
                                                </p>
                                                <p className="lead">
                                                    Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis
                                                    porttitor volutpat. Vestibulum
                                                    ac diam sit amet quam vehicula elementum sed sit amet dui. porttitor at sem.
                                                </p>
                                                <p className="lead">
                                                    Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                                                    Nulla porttitor accumsan
                                                    tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* End About Section */}
            </main></div>

    )
}

export default About