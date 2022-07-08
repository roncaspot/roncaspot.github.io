import React from "react"
import ReactMarkdown from "react-markdown";

import data from "@this/src/modules/roncaspot/data/curriculum/data.jsx"
import { hobbies } from "@this/src/modules/roncaspot/data/curriculum/hobbies"

import SignImg from "@this/src/modules/roncaspot/data/pictures/sign.png"
import BigAvatar from "@this/src/modules/roncaspot/data/pictures/big_avatar.jpg"

import { chunk, html } from "@this/src/modules/roncaspot/libs/helpers"

import { services, SoftSkills, skills } from "@this/src/modules/roncaspot/data/curriculum/skills"
import { achievements } from "@this/src/modules/roncaspot/data/curriculum/achievements"
import AboutDescr from "@this/src/modules/roncaspot/data/curriculum/about_descr"
import OtherExp from "@this/src/modules/roncaspot/data/curriculum/experiences/other"

var Identification = data.Identification;
var BirthDate = Identification.Demographics.Birthdate;
var Address = Identification.ContactInfo.Address.Contact;
var WorkExperiences = data.WorkExperience;
var Educations = data.Education;
var Skills = data.Skills;
var Languages = Skills.Linguistic.MotherTongue.concat(Skills.Linguistic.ForeignLanguage)

export default (props) => {
    var toPrint = props.print;
    var display = props.display;

    return (
        <div style={{ display: (!display ? "none" : "block") }}>
            <div ref={props.innerRef}>
                {/* START HOME SECTION*/}
                {/* START ABOUT SECTION*/}
                <section id="about" className={!toPrint ? "section wow fadeInUpBig" : ""}>
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
                                    <div className={"col-sm-4 info-block  " + (!toPrint ? "wow fadeInRight" : "")}>
                                        <div className="info-icon hvr-trim"> <i className="fa fa-user" aria-hidden="true" /></div>
                                        <div className="info-text">
                                            <span><strong>Name</strong></span>
                                            {Identification.PersonName.FirstName} {Identification.PersonName.Surname}
                                        </div>
                                    </div>
                                    <div className={"col-sm-4 info-block  " + (!toPrint ? "wow fadeInRight" : "")}>
                                        <div className="info-icon hvr-trim"> <i className="fa fa-envelope" aria-hidden="true" /></div>
                                        <div className="info-text">
                                            <span><strong>Email</strong></span>
                                            {Identification.ContactInfo.Email.Contact}
                                        </div>
                                    </div>
                                    {/* <div className={"col-sm-4 info-block  " + (!toPrint ? "wow fadeInRight" : "")}>
                                        <div className="info-icon hvr-trim"><i className="fas fa-phone-volume" aria-hidden="true" /></div>
                                        <div className="info-text">
                                            <span><strong>Phone</strong></span>
                                            {Identification.ContactInfo.Telephone[0].Contact}
                                        </div>
                                    </div> */}
                                    <div className={"col-sm-4 info-block  " + (!toPrint ? "wow fadeInRight" : "")}>
                                        <div className="info-icon hvr-trim"> <i className="fa fa-calendar" aria-hidden="true" /></div>
                                        <div className="info-text">
                                            <span><strong>Date Of Birthday</strong></span>
                                            {BirthDate.Year}/{BirthDate.Month}/{BirthDate.Day}
                                        </div>
                                    </div>
                                    <div className={"col-sm-4 info-block  " + (!toPrint ? "wow fadeInRight" : "")}>
                                        <div className="info-icon hvr-trim"><i className="fa fa-map-marker" aria-hidden="true" /> </div>
                                        <div className="info-text">
                                            <span><strong>Address</strong></span>
                                            {Address.Municipality}, {Address.Country.Label}
                                        </div>
                                    </div>
                                    <div className={"col-sm-4 info-block  " + (!toPrint ? "wow fadeInRight" : "")}>
                                        <div className="info-icon hvr-trim"> <i className="fa fa-flag" aria-hidden="true" /></div>
                                        <div className="info-text">
                                            <span><strong>Nationality</strong></span>
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
                                        <AboutDescr />
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
                <section id="skills" className={(!toPrint ? "section wow fadeInUp" : "")}>
                    <div className="container-section">
                        <div className="row">
                            <div className="section-title">
                                <h4>Skills</h4>
                                <h5><b>Skill formula:</b> (1 - tanh(expYear / expDecay)) * avg(proficiencyPerc, interestPerc)</h5>
                            </div>
                        </div>
                        <div className="row">
                            {skills.mainSkills.map((main, key) => {
                                let maxExp = 0, currentYear = new Date().getFullYear();

                                // experience formula
                                main.list.forEach(skill => {
                                    skill.lastYear = skill.lastYear > skill.firstYear ? skill.lastYear : currentYear;
                                    let expYears = skill.lastYear - skill.firstYear;
                                    let expDecay = currentYear - skill.lastYear;
                                    let expMul = expDecay ? 1 - Math.tanh(expYears / expDecay) : 1;
                                    skill.expValue = (expMul + 1) * ((skill.proficiency + skill.interest) / 2);

                                    if (skill.expValue > maxExp)
                                        maxExp = skill.expValue;
                                });

                                // experience percentage
                                main.list.forEach(skill => {
                                    skill.expPercentage = Math.round(skill.expValue / maxExp * 100);
                                });

                                return <div className="col-sm-12" key={key}>
                                    <h2>{main.name}</h2>
                                    <div className="row">
                                        {chunk(main.list, 6).map((row) => {
                                            return <div className="skill">
                                                {row.map((skill, key2) => <div className="col-sm-6 skill-bar">
                                                    <div className="progress">
                                                        <div className="lead"> <i className={skill.icon} aria-hidden="true" /> {skill.name}: years {skill.firstYear}-{skill.lastYear}, interest: {skill.interest}%, skill: {skill.expPercentage + '%'} </div>
                                                        <div className={"progress-bar " + (!toPrint ? "wow fadeInLeft" : "")} data-progress={skill.expPercentage + '%'} style={{ width: skill.expPercentage + '%' }} data-wow-duration="1.5s" data-wow-delay="1.2s"></div>
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
                                        {row.map((value, key) => <div key={key} className={"col-md-4 col-sm-4 " + (!toPrint ? "wow flipInX" : "")} data-delay={100}>
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
                                <div className={"skills " + (!toPrint ? "wow fadeInUp" : "")}>
                                    <div className="row">
                                        {Languages.map((value, key) => {
                                            return <div className="col-sm-3">
                                                <small>{value.Description.Label}</small>
                                                <div className="percentage easyPieChart" data-percent={value.Description.__hwc_value} data-animate={toPrint} data-delay={100}><span>{value.Description.__hwc_value}</span>%<canvas width={165} height={165} /></div>
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
                <section id="services" className={(!toPrint ? "section wow fadeInUp" : "")}>
                    <div className="container-section">
                        <div className="row">
                            <div className="section-title">
                                <h4>Services</h4>
                            </div>
                        </div>
                        {chunk(services, 3).map((row) => {
                            return <div className="row">
                                {row.map((value, key) => <div key={key} className={"col-md-4 col-sm-4 " + (!toPrint ? "wow flipInX" : "")} data-delay={100}>
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
                <section id="achievements" className={(!toPrint ? "section wow fadeInUp" : "")}>
                    <div className="container-section">
                        <div className="row">
                            <div className="section-title">
                                <h4>Achievements</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="grid">
                                {achievements.map((value, key) => {
                                    return <div className="col-lg-4 col-md-4 col-sm-4">
                                        <figure className={"achi" + value.Title.Label + " " + (!toPrint ? "effect-winston wow fadeInUp" : "")}>
                                            <img style={{ minWidth: 303, minHeight: 230, maxWidth: "100%" }} src={value.__hwc_img || "assets/images/trophy_a.png"} alt="Achi" />
                                            <figcaption>
                                                <h2 style={{ paddingBottom: 10, fontSize: "22px" }}>{value.Title.Label} {value.__hwc_name && "-" + value.__hwc_name}</h2>
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
                <section id="hobbies" className={(!toPrint ? "section wow fadeInUp" : "")}>
                    <div className="container-section">
                        <div className="row">
                            <div className="section-title">
                                <h4>Hobbies</h4>
                            </div>
                        </div>
                        <div className="row">
                            {chunk(hobbies, 3).map((row) => {
                                return <div className="row">
                                    {row.map((value, key) => <div key={key} className={"col-md-4 col-sm-4 " + (!toPrint ? "wow flipInX" : "")} data-delay={100}>
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
                <section id="resumes" className={(!toPrint ? "section wow fadeInUp" : "")}>
                    <div className="container-section">
                        <div className="row">
                            <div className="section-title">
                                <h4>Resumes</h4>
                            </div>
                        </div>
                        <div className="resume-section education">
                            <div className={(!toPrint ? "timeline-container" : "")}>
                                {WorkExperiences.map((value, key) => {
                                    const effect = key % 2 === 0 ? "fadeInLeft" : "fadeInRight"

                                    return <div className={"timeline-block " + (!toPrint ? "wow " + effect : "")}>
                                        {toPrint || <div className="timeline-img" data-anim-effect="zoomIn">
                                            <i>{value.Period.Current ? "Now" : value.Period.To.Year} </i>
                                        </div>}
                                        <div className="timeline-content" data-anim-effect={effect}>
                                            <h2>{value.Employer.Name} ({value.Period.Current && "Since "}{value.Period.From.Year}{!value.Period.Current && " - " + value.Period.To.Year})</h2>
                                            <p style={{ fontWeight: "bold" }}>Role: {value.Position.Label}</p>
                                            {<ReactMarkdown linkTarget="_blank" children={html(value.Activities)} />}
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </section>
                <section id="other-experiences" className={"section" + (!toPrint ? " wow fadeInUp" : "")}>
                    <div className="container-section">
                        <div className="row">
                            <div className="section-title">
                                <h4>Other Experiences</h4>
                            </div>
                            <div className="row">
                                {OtherExp.map((value, key) => <div className="col-sm-3">{value}</div>)}
                            </div>
                        </div>
                    </div>
                </section>
                {/* END RESUMES SECTION*/}
                {/* START EDUCATION SECTION*/}
                <section id="education" className={(!toPrint ? "section wow fadeInUp" : "")}>
                    <div className="container-section">
                        <div className="row">
                            <div className="section-title">
                                <h4>Education</h4>
                            </div>
                        </div>
                        <div className="resume-section education">
                            <div className={(!toPrint ? "timeline-container" : "")}>
                                {Educations.map((value, key) => {
                                    const effect = key % 2 === 0 ? "fadeInLeft" : "fadeInRight"

                                    return <div className={"timeline-block " + (!toPrint ? "wow " + effect : "")}>
                                        {toPrint || <div className="timeline-img" data-anim-effect="zoomIn">
                                            <i>{value.Period.Current ? "Now" : value.Period.To.Year} </i>
                                        </div>}
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
