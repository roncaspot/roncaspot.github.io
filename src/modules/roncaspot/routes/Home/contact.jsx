import React from "react"

export default () => {
    return (
        <section id="contact" className="section wow fadeInUp">
            <div className="container-section">
                <div className="row">
                    <div className="section-title">
                        <h4>Contact Me </h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 map" id="map" style={{ pointerEvents: 'none' }} />
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h2>Contact Address</h2>
                        <div className="contact-block wow fadeInLeft">
                            <i className="fa fa-map-marker" aria-hidden="true" />
                            <p><b>Address: </b> 635 Elraml, South Corner Street, Alexandria, Egypt. </p>
                        </div>
                        <div className="contact-block wow fadeInLeft">
                            <i className="fa fa-phone" aria-hidden="true" />
                            <p><b>Phone: </b> +20 012 345 6789</p>
                        </div>
                        <div className="contact-block wow fadeInLeft">
                            <i className="fa fa-whatsapp" aria-hidden="true" />
                            <p><b>Whatsapp: </b> +20 012 859 7859</p>
                        </div>
                        <div className="contact-block wow fadeInLeft">
                            <i className="fa fa-skype" aria-hidden="true" />
                            <p><b>Skype: </b> e.example</p>
                        </div>
                        <div className="contact-block wow fadeInLeft">
                            <i className="fa fa-envelope-o" aria-hidden="true" />
                            <p><b>Email: </b> <a href="mailto:someone@website.com">someone@website.com</a></p>
                        </div>
                        <div className="contact-block wow fadeInLeft">
                            <i className="fa fa-home" aria-hidden="true" />
                            <p><b>Website </b> <a href="#">www.website.com</a></p>
                        </div>
                        <div className="contact-block wow fadeInLeft">
                            <div className="social-profiles">
                                <a className="hvr-pulse-grow facebook" href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                                <a className="hvr-pulse-grow twitter" href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                                <a className="hvr-pulse-grow linkedin" href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a>
                                <a className="hvr-pulse-grow behance" href="#"><i className="fa fa-behance" aria-hidden="true" /></a>
                                <a className="hvr-pulse-grow pinterest" href="#"><i className="fa fa-pinterest-p" aria-hidden="true" /></a>
                                <a className="hvr-pulse-grow vimeo" href="#"><i className="fa fa-vimeo" aria-hidden="true" /></a>
                                <a className="hvr-pulse-grow rss" href="#"><i className="fa fa-rss" aria-hidden="true" /></a>
                                <a className="hvr-pulse-grow google" href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
                                <a className="hvr-pulse-grow snapchat" href="#"><i className="fa fa-snapchat" aria-hidden="true" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h2>LET’S HAVE A FUN</h2>
                        <div id="show_contact_msg" />
                        <form method="post" id="contact_form" action="contact.php">
                            <input type="text" name="name" id="contact_name" placeholder="Your Name" className="wow " />
                            <input type="text" name="email" id="contact_email" placeholder="Email" className="wow " />
                            <input type="text" name="phone" id="contact_phone" placeholder="Phone" className="wow " />
                            <textarea name="message" id="contact_text" placeholder="Your Message" className="wow " defaultValue={""} />
                            <button className="btn btn-primary wow " type="submit" value="Send Now">Send Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
