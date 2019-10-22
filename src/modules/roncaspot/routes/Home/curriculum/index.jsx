import React from "react"

import Data from "./data/data.jsx"
import { hobbies } from "./data/hobbies"

import SignImg from "../../../data/pictures/sign.png"
import BigAvatar from "../../../data/pictures/big_avatar.jpg"

import { chunk, html } from "@this/src/modules/roncaspot/libs/helpers"

import { services, SoftSkills, skills } from "./data/skills"
import { achievements } from "./data/achievements"
import OtherExp from "./data/experiences/other"

var SkillsPassport = Data.SkillsPassport;
var LearnerInfo = SkillsPassport.LearnerInfo;
var Identification = LearnerInfo.Identification;
var BirthDate = Identification.Demographics.Birthdate;
var Address = Identification.ContactInfo.Address.Contact;
var WorkExperiences = LearnerInfo.WorkExperience;
var Educations = LearnerInfo.Education;
var Skills = LearnerInfo.Skills;
var Languages = Skills.Linguistic.MotherTongue.concat(Skills.Linguistic.ForeignLanguage)

export default (props) => {
    var toPrint = props.print;

    return (
        <div style={{ display: (toPrint ? "none" : "block") }}>
            <div ref={props.innerRef}>
                {/* START HOME SECTION*/}
                {/* START ABOUT SECTION*/}
                <section id="about" className="section wow ">
                    <div className="container-section">
                        <div className="row">
                            <div className="section-title">
                                <h4>About Me</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3 profile-pic">
                                <a className="profile-img" href="index.html"><img src={BigAvatar} alt="BigAvatar" /></a>
                                <h3 className="info-position">JS Full Stack Developer</h3>
                            </div>
                            <div className="col-sm-9">
                                <div className="about-info row">
                                    <div className="col-sm-6 info-block wow ">
                                        <div className="info-icon hvr-trim"> <i className="fa fa-user" aria-hidden="true" /></div>
                                        <div className="info-text">
                                            <span>Name</span>
                                            {Identification.PersonName.FirstName} {Identification.PersonName.Surname}
                                        </div>
                                    </div>
                                    <div className="col-sm-6 info-block wow ">
                                        <div className="info-icon hvr-trim"> <i className="fa fa-envelope" aria-hidden="true" /></div>
                                        <div className="info-text">
                                            <span>Email</span>
                                            {Identification.ContactInfo.Email.Contact}
                                        </div>
                                    </div>
                                    <div className="col-sm-6 info-block wow ">
                                        <div className="info-icon hvr-trim"><i className="fas fa-phone-volume" aria-hidden="true" /></div>
                                        <div className="info-text">
                                            <span>Phone</span>
                                            {Identification.ContactInfo.Telephone[0].Contact}
                                        </div>
                                    </div>
                                    <div className="col-sm-6 info-block wow ">
                                        <div className="info-icon hvr-trim"> <i className="fa fa-calendar" aria-hidden="true" /></div>
                                        <div className="info-text">
                                            <span>Date Of Birthday</span>
                                            {BirthDate.Year}/{BirthDate.Month}/{BirthDate.Day}
                                        </div>
                                    </div>
                                    <div className="col-sm-6 info-block wow ">
                                        <div className="info-icon hvr-trim"><i className="fa fa-map-marker" aria-hidden="true" /> </div>
                                        <div className="info-text">
                                            <span>Address</span>
                                            {Address.Municipality}, {Address.Country.Label}
                                        </div>
                                    </div>
                                    <div className="col-sm-6 info-block wow ">
                                        <div className="info-icon hvr-trim"> <i className="fa fa-flag" aria-hidden="true" /></div>
                                        <div className="info-text">
                                            <span>Nationality</span>
                                            {Identification.Demographics.Nationality[0].Label}
                                        </div>
                                    </div>
                                    <div className="col-sm-12 social-profiles">
                                        <span>Social Profiles </span>
                                        {Identification.ContactInfo.Website.map((value, key) => {
                                            return <>
                                                {toPrint && <br />}
                                                <a rel="noopener noreferrer" target="_blank" className={"hvr-pulse-grow " + value.__hwc_type} href={value.Contact} title={value.__hwc_name}>
                                                    <i className={value.__hwc_icon} aria-hidden="true" />
                                                </a>
                                                {toPrint && <a style={{ border: "none", width: "auto" }} href={value.Contact}>{value.Contact}</a>}
                                            </>
                                        })}
                                    </div>
                                    <div className="col-sm-12 about-content">
                                        {html(Data.CV.about)}
                                        <p className="twke3">
                                            <span>Yours sincerely,</span>
                                            <img src={SignImg} style={{ maxWidth: '266px' }} className="img-responsive" alt="Sign" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* END ABOUT SECTION*/}
                {/* START SKILLS SECTION*/}
                <section id="skills" className={"section wow " + !toPrint ? "fadeInUp" : ""}>
                    <div className="container-section">
                        <div className="row">
                            <div className="section-title">
                                <h4>Skills</h4>
                            </div>
                        </div>
                        <div className="row">
                            {skills.mainSkills.map((main, key) => {
                                return <div className="col-sm-12">
                                    <h2>{main.name}</h2>
                                    <div className="row">
                                        {chunk(main.list, 6).map((row) => {
                                            return <div className="skill">
                                                {row.map((skill, key2) => <div className="col-sm-6 skill-bar">
                                                    <div className="progress">
                                                        <div className="lead"> <i className={skill.icon} aria-hidden="true" /> {skill.name} </div>
                                                        <div className={"progress-bar " + (!toPrint && "wow fadeInLeft")} data-progress={skill.value + '%'} style={{ width: skill.value + '%' }} data-wow-duration="1.5s" data-wow-delay="1.2s"> <span>{skill.value + '%'} </span></div>
                                                    </div>
                                                </div>
                                                )}
                                            </div>
                                        })
                                        }
                                    </div>
                                </div>
                            })}
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <h2>Secondary Skills</h2>
                                <div className="row">
                                    {skills.secondarySkills.map((skill, key) => {
                                        return <div className="col-sm-1">{skill.name}</div>
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="row skill-language">
                            <div className="col-sm-12">
                                <h2>Soft skills</h2>
                                {chunk(SoftSkills, 3).map((row) => {
                                    return <div className="row">
                                        {row.map((value, key) => <div key={key} className={"col-md-4 col-sm-4 wow " + (!toPrint && "flipInX")} data-delay={100}>
                                            <div className="service-box">
                                                <span className="service-icon pull-left"><i className={value.icon} /></span>
                                                <div className="service-box-content">
                                                    <h3>{value.name}</h3>
                                                    <p>{value.description}</p>
                                                </div>
                                            </div>
                                        </div>)}
                                    </div>
                                })}
                            </div>
                        </div>
                        <div className="row skill-language">
                            <h2>LANGUAGE SKILLS &amp; KNOWLEDGE</h2>
                            <div className="col-sm-12">
                                <div className={"skills wow " + !toPrint ? "fadeInUp" : ""}>
                                    <div className="row">
                                        {Languages.map((value, key) => {
                                            return <div className="col-md-3">
                                                <small>{value.Description.Label}</small>
                                                <div className="percentage easyPieChart" data-percent={value.Description.__hwc_value} data-delay={100}><span>95</span>%<canvas width={165} height={165} /></div>
                                            </div>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* END SKILLS SECTION*/}
                {/* START SERVICES SECTION*/}
                <section id="services" className={"section wow " + !toPrint ? "fadeInUp" : ""}>
                    <div className="container-section">
                        <div className="row">
                            <div className="section-title">
                                <h4>Services</h4>
                            </div>
                        </div>
                        {chunk(services, 3).map((row) => {
                            return <div className="row">
                                {row.map((value, key) => <div key={key} className={"col-md-4 col-sm-4 wow " + (!toPrint && "flipInX")} data-delay={100}>
                                    <div className="service-box">
                                        <span className="service-icon pull-left"><i className={value.icon} /></span>
                                        <div className="service-box-content">
                                            <h3>{value.name}</h3>
                                            <p>{value.description}</p>
                                        </div>
                                    </div>
                                </div>)}
                            </div>
                        })}
                    </div>
                </section>
                {/* END SERVICES SECTION*/}
                {/* START ACHIEVEMENTS SECTION*/}
                <section id="achievements" className={"section wow " + !toPrint ? "fadeInUp" : ""}>
                    <div className="container-section">
                        <div className="row">
                            <div className="section-title">
                                <h4>Achievements</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="grid">
                                {achievements.map((value, key) => {
                                    return <div className="col-lg-4 col-md-6 col-sm-12">
                                        <figure className={"achi" + value.Title.Label + " effect-winston wow " + !toPrint ? "fadeInUp" : ""}>
                                            <img style={{ minWidth: 303, minHeight: 230, maxWidth: "100%" }} src={value.__hwc_img || "assets/images/trophy_a.png"} alt="Achi" />
                                            <figcaption>
                                                <h2>{value.Title.Label} {value.__hwc_name && "-" + value.__hwc_name}</h2>
                                                <span>
                                                    {html(value.Description)}
                                                    <br />
                                                </span>
                                                <p>
                                                    {!toPrint && value.__hwc_img && <a className="fancybox" data-fancybox-group="group" href={value.__hwc_img}><i className="fa fa-fw fa-search" /></a>}
                                                    {value.__hwc_url && <a target="_blank" rel="noopener noreferrer" href={value.__hwc_url}><i className="fa fa-fw fa-link" /></a>}
                                                </p>
                                            </figcaption>
                                        </figure>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </section>
                {/* END ACHIEVEMENTS SECTION*/}
                {/* START HOBBIES SECTION */}
                <section id="hobbies" className={"section wow " + !toPrint ? "fadeInUp" : ""}>
                    <div className="container-section">
                        <div className="row">
                            <div className="section-title">
                                <h4>Hobbies</h4>
                            </div>
                        </div>
                        <div className="row">
                            {chunk(hobbies, 3).map((row) => {
                                return <div className="row">
                                    {row.map((value, key) => <div key={key} className={"col-md-4 col-sm-4 wow " + (!toPrint && "flipInX")} data-delay={100}>
                                        <div className="service-box">
                                            <span className="service-icon pull-left"><i className={value.icon} /></span>
                                            <div className="service-box-content">
                                                <h3>{value.name}</h3>
                                                <p>{value.description}</p>
                                            </div>
                                        </div>
                                    </div>)}
                                </div>
                            })}
                        </div>
                    </div>
                </section>
                {/* END HOBBIES SECTION */}
                {/* START RESUMES SECTION*/}
                <section id="resumes" className={"section wow " + !toPrint ? "fadeInUp" : ""}>
                    <div className="container-section">
                        <div className="row">
                            <div className="section-title">
                                <h4>Resumes</h4>
                            </div>
                        </div>
                        <div className="resume-section education">
                            <div className="timeline-container">
                                {WorkExperiences.map((value, key) => {
                                    const effect = key % 2 === 0 ? "fadeInLeft" : "fadeInRight"

                                    return <div className={"timeline-block wow " + (!toPrint && effect)}>
                                        <div className="timeline-img" data-anim-effect="zoomIn">
                                            <i>{value.Period.Current ? "Now" : value.Period.To.Year} </i>
                                        </div>
                                        <div className="timeline-content" data-anim-effect={effect}>
                                            <h2>{value.Employer.Name} ({value.Period.From.Year} {!value.Period.Current && " - " + value.Period.To.Year})</h2>
                                            <p style={{ fontWeight: "bold" }}>Role: {value.Position.Label}</p>
                                            {html(value.Activities)}
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </section>
                <section id="other-experiences" className={"section wow " + !toPrint ? "fadeInUp" : ""}>
                    <div className="container-section">
                        <div className="row">
                            <div className="section-title">
                                <h4>Other Experiences</h4>
                            </div>
                            <div className="row">
                                {OtherExp.map((value, key) => <div className="col-sm-1">{value}</div>)}
                            </div>
                        </div>
                    </div>
                </section>
                {/* END RESUMES SECTION*/}
                {/* START EDUCATION SECTION*/}
                <section id="education" className={"section wow " + !toPrint ? "fadeInUp" : ""}>
                    <div className="container-section">
                        <div className="row">
                            <div className="section-title">
                                <h4>Education</h4>
                            </div>
                        </div>
                        <div className="resume-section education">
                            <div className="timeline-container">
                                {Educations.map((value, key) => {
                                    const effect = key % 2 === 0 ? "fadeInLeft" : "fadeInRight"

                                    return <div className={"timeline-block wow " + (!toPrint && effect)}>
                                        <div className="timeline-img" data-anim-effect="zoomIn">
                                            <i>{value.Period.Current ? "Now" : value.Period.To.Year} </i>
                                        </div>
                                        <div className="timeline-content" data-anim-effect={effect}>
                                            <h2>{value.Organisation.Name} - {value.Title} ({value.Period.From.Year} {!value.Period.Current && " - " + value.Period.To.Year})</h2>
                                            <p>{html(value.Activities)}</p>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </section>
                {/* END EDUCATION SECTION*/}
            </div >
        </div >
    )
}
