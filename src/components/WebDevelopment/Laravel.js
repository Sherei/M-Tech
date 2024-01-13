import React from 'react';
import { Container, Row, Col, Accordion, Button } from 'react-bootstrap';
import { FaUserTie, FaClock, FaBriefcase, FaBolt } from 'react-icons/fa';
import Laravel from '../../assets/images/laravel.png'
import Faq from '../../assets/images/faq.jpg'



const LaravelService = () => {
    const headerStyle = {
        backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/005/081/900/non_2x/banner-abstract-geometric-white-and-gray-color-background-illustration-free-vector.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        textAlign: 'center',
        paddingTop: '5rem',
        paddingBottom: '5rem',
    };
    return (
        <div>
            <header style={headerStyle}>
                <h1><strong>Laravel Web</strong></h1>
            </header>

            {/* Content Section with Text and Image */}
            <section className="py-5">
                <Container>
                    <Row>
                        <Col md={6}>
                            <h2>
                                <span style={{ color: '#ff6b6b' }}>Expressive Services</span>
                                <span> With Laravel Development</span>
                            </h2>
                            <p>
                                The Laravel web development service is a web application system with an expressive, exquisite language structure. We are the best Laravel web development services in the market.
                                <br />
                                A web system gives your application a construction and beginning stage, permitting you to zero in on making something astounding while we sweat the subtleties.                            </p>
                            {/* Features Section */}
                            <Container id="features" className="mt-1">
                                {/* First row of features */}
                                <Row className="mb-4">
                                    <Col md={6}>
                                        <h6><FaUserTie color='#22a6b3' size={20} className="mr-2" /> Expert Team Member</h6>
                                    </Col>
                                    <Col md={6}>
                                        <h6><FaClock color='#22a6b3' size={20} className="mr-2" /> Time Management</h6>
                                    </Col>
                                    <Col md={6}>
                                        <h6><FaBriefcase color='#22a6b3' size={20} className="mr-2" /> Work Dedication</h6>
                                    </Col>
                                    <Col md={6}>
                                        <h6><FaBolt color='#22a6b3' size={20} className="mr-2" /> Faster Enrollments</h6>
                                    </Col>
                                </Row>
                                <p className="text-justify mt-4">Laravel web development services endeavor to provide an incredible designer experience while giving notable highlights like careful reliance infusion, an expressive data set reflection layer, lines and planned positions, unit and coordination testing, and the sky is the limit.
                                 <br/>
                                Whether you are new to PHP web development with Laravel or have long periods of involvement, here at M Technologies, Laravel web development services is a structure that can develop with you. We’ll help you make your first strides as a web designer or give you a lift as you take your ability to the following level. We can hardly wait to perceive what you assemble.</p>
                            </Container>
                        </Col>
                        <Col md={6}>
                            <img
                                src={Laravel}
                                alt="Sample"
                                className="img-fluid"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* FAQ Section */}
            <Container>
                <Row>
                    <h2>
                        <span>Frequently Asked Questions</span>
                        <br />
                        <span style={{ color: '#ff6b6b' }}> For Laravel</span>
                    </h2>
                    <Col md={6}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Why should You Use Laravel?</Accordion.Header>
                                <Accordion.Body>
                                Laravel attempts to take the pain out of development by easing common tasks used in the majority of web projects. Laravel aims to make the development process a pleasing one for the developer without sacrificing application functionality.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Does Laravel Have A Future?</Accordion.Header>
                                <Accordion.Body>
                                Laravel has a proven stronghold in the market today. It is in the leading position today amongst all web application frameworks available and it is going to get stronger from here on. The future of Laravel in 2021 and ahead is uninhabited and augmented growth.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>How M Technologies Help You For Laravel?</Accordion.Header>
                                <Accordion.Body>
                                Laravel PHP framework is versatile that helps in programming conveyance quickly and practically. We at M Technologies have a gifted task force, which can transform your thoughts into the real world.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>What Are The Benefits Of choosing M Technologies?</Accordion.Header>
                                <Accordion.Body>
                                    Choosing M Technologies is the ultimate decision you will take. We are facilitating our clients over the past few years. We are glad that every client is happy with our services. M Technologies is the only platform that allows you to track your projects while in development. Feel free to contact us on our given number or website. We will be available 24/7 to assist you.
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                    </Col>
                    <Col md={6} className='mb-1'>
                        <img src={Faq} alt="Your Alt Text" className="img-fluid" />
                    </Col>
                </Row>
            </Container>

            {/* Banner Section */}
            <section>
                <div style={{ background: '#e17055', padding: '20px', color: '#fff', textAlign: 'left' }}>
                    <Container>
                        <h1>Bringing Out The Best With Our Expertise</h1>
                        <p className='text-white'>Say goodbye to project hassles and hello to groundbreaking ideas to unlock innovation with M Technologies.</p>
                        <a href="/contact">
                            <Button variant='info'>
                                Start a Project
                            </Button>
                        </a>
                    </Container>
                </div>
            </section>
        </div>
    );
};

export default LaravelService;
