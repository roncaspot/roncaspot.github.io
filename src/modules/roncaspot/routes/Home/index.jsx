import React from 'react';

import HomeBg from "../../data/pictures/home_bg.jpg";

import Curriculum from "./curriculum"
/*import Testimonials from "./testimonials"
import Contact from "./contact"
import Blog from "./blog"*/
import Footer from "./footer"
import Intro from "./intro"
import Menu from "../../components/Menu"

function Home() {

    return <div>
        <div id="loading">
            <img src="assets/images/loading.gif" alt="loading" />
        </div>

        <div className="responsive-menu"> <b>JOSEPH ROY</b><a id="menu-icon" className="but" href="/"><span className="ti-menu"><img src="assets/images/menu.png" alt="Menu" /></span> </a></div>
        <div className="container-fluid">
            <div className="row">
                {/* START CONTENT  */}
                <div className="main scroll-page">
                    {/* START HOME SECTION*/}
                    <section id="home" className="home" style={{ backgroundImage: `url(${HomeBg})` }}>
                        <Intro />
                        <Menu />
                    </section>
                    <Curriculum display={true} />
                    {/*<Blog/>
                    <Testimonials/>
                    <Contact/>*/}
                    <Footer />
                </div>
                {/* END CONTENT  */}
            </div>
        </div>
    </div>
}


export default Home;
