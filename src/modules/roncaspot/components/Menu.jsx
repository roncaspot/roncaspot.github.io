import React from "react"

import { HashLink as Link } from 'react-router-hash-link';

export default () => {
    return (
        <div className="menu_area" id="stick_menu">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <nav className="navbar navbar-default" role="navigation">
                            <div className="container-fluid">
                                <div className="navbar-collapse mainnavmenu" id="bs-example-navbar-collapse-1">
                                    <div id="menu-center">
                                        <ul className="nav navbar-nav mainnav">
                                            <li className="active"><Link smooth to="/#home">Home <span className="sr-only">(current)</span></Link></li>
                                            <li><Link smooth to="/#about">About</Link></li>
                                            <li><Link smooth to="#skills" >Skills</Link></li>
                                            <li><Link smooth to="#services" >Services</Link></li>
                                            <li><Link smooth to="#achievements" >Achievements</Link></li>
                                            <li><Link smooth to="#hobbies" >Hobbies</Link></li>
                                            <li><Link smooth to="#resumes" >Resumes</Link></li>
                                            <li><Link smooth to="#education" >Education</Link></li>
                                            {/*
                                            <li><HashLink smooth to="#blog" >Blog</HashLink></li>
                                            <li><HashLink smooth to="#testimonials" >Testimonials</HashLink></li>
                                            <li><HashLink smooth to="#contact" >Contact</HashLink></li>
                                            */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
