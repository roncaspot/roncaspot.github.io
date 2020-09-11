import React from "react"

export default () => {
    var start = 2007
    var now = new Date().getFullYear();

    return <><p>
        I'm a  <b>Software Engineer</b> with a Bachelor's Degree in Information Technology.
        <br /><b>I've {now - start} years of experience in software development and
        I usually spend most of my time exploring, making research and working in this field</b></p>
        <p>
            <br />I started to work before my university career. I used to study <b>IT since I was 13 years old</b>.
    <br />    I've started with <b>Pascal, TCL, C++, MySQL</b> with which I've learnt the basics of programming languages, database administration and software architecture.
     <br />   I wrote my <b>first desktop and server applications</b> for enterprises and big open source companies in <b>{start}</b>.
     <br />   Later on, I enrolled at the <b>University of Computer Science</b> in order to improve my <b>software engineering skills, learn the AGILE framework as well as improving
            my skills in UX, Java, and design patterns</b>.
     <br />         I'm involved as the founder, lead developer and administrator of various <b>open-source</b> and non-profit communities with
    <br />          thousands of active users such as <a href="http://azerothcore.org">AzerothCore</a>
            <br />    I had an experience as the <b>Manager</b> of my personal organizations
                (<a href="http://www.hyperweb2.com/">Hyperweb2</a>, <a href="http://www.drassil.org/">Drassil</a>).
    <br />    I've organized <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/pg/redsquarelab/photos/?ref=page_internal">15 days of seminars</a> about <b>ReactJS and NodeJS</b>,
                with which I've created a team of 6 freelancers, the <a href="https://translate.google.com/translate?hl=en&sl=it&tl=en&u=https%3A%2F%2Fsites.google.com%2Fview%2Fredsquarelab/">Red Square team</a>. We've worked on various enterprise projects for which I played the role of both PM
and Lead Developer.
<br/> Currently I'm working for an international company in The Netherlands to move up with my career in this challenging and amazing environment.
    <br /> <b>I always look for perfect, effective and practical solutions to any potential problem.</b>
        </p>
        <p style={{ fontSize: "1em", fontStyle: "Italic" }}>Note: This template has been built using following tools:
            <br />
            <strong>1nd party:</strong> <a rel="noopener noreferrer" target="_blank" href="https://github.com/HW-Core/universal-pwa">Universal-PWA Framework (based on ReactJS)  </a>;
            <br />
            <strong>3rd party:</strong> jsPDF, Europass REST Api, wow.js, fontawesome.js, bootstrap.js, jquery </p>
    </>
}
