import React from "react"

import { jsx2Html } from "@this/src/modules/roncaspot/libs/helpers"

export const skills = {
    mainSkills: [
        {
            name: "Main Development Skills", icon: "fa fa-code", list: [
                { name: "JavaScript / NodeJS", value: 95, icon: "fab fa-js" },
                { name: "ReactJS", value: 90, icon: "fab fa-react" },
                { name: "GraphQL / Apollo Framework", value: 80, icon: "fa fa-code" },
                { name: "SQL Databases", value: 86, icon: "fa fa-database" },
                { name: "TypeScript / Angular", value: 67, icon: "fab fa-angular" },
                { name: "jQuery", value: 83, icon: "fab fa-js-square" },
                { name: "HTML & CSS", value: 70, icon: "fab fa-html5" },
                { name: "Bootstrap framework", value: 78, icon: "fab fa-bootstrap" },
                { name: "PHP", value: 85, icon: "fab fa-php" },
                { name: "Symfony framework", value: 76, icon: "fab fa-symfony" },
                { name: "Testing / Debugging", value: 88, icon: "fas fa-bug" },
                { name: "C/C++", value: 72, icon: "fa fa-code" },
                { name: "Docker", value: 85, icon: "fab fa-docker" },
                { name: "Apache Cordova/Phonegap", value: 80, icon: "fa fa-code" },
                { name: "Electron", value: 78, icon: "fas fa-atom" },
                { name: "Bash Language", value: 82, icon: "fa fa-terminal" },
                { name: "VS / VS Code", value: 90, icon: "fa fa-code" },
                { name: "Java", value: 68, icon: "fab fa-java" },
            ]
        },
    ],
    secondarySkills: [
        { name: "Webmin" },
        { name: "Proxmox" },
        { name: "Python" },
        { name: "Firebase" },
        { name: "Adobe Suite (Photoshop, Illustrator)" },
        { name: "Netbeans" },
        { name: "Eclipse" },
        { name: "L/W/X AMP" },
        { name: "Microsoft Office / Libre Office" },
        { name: "Unix-like & Windows OS" },
        { name: "ASP" },
        { name: "Pascal" },
        { name: "TCL" },
        { name: "Matlab / Octave" },
        { name: "Android Studio" },
        { name: "Delphi" }
    ]
}

export const services = [
    {
        name: "Universal Applications",
        icon: "fa fa-code",
        description: `I can create applications that run of Browser, Mobile, and Desktop using technologies
        such as ReactJS, Electron, Phonegap, GraphQL and microservices.
        `
    },
    {
        name: "DevOps & System Admin",
        icon: "fa fa-cogs",
        description: `I can setup complex local and virtual networks on Linux OS. 
            I love to dockerize applications and use container to create high-performance inftrastructures.
        `
    },
    {
        name: "Server Developer",
        icon: "fa fa-server",
        description: `I've developed various server applications using C++, NodeJS, Java, and PHP with
        API protocolos such as SOAP, REST, GraphQL and TCP Sockets
        `
    },
    {
        name: "Technical Assistance",
        icon: "fa fa-wrench",
        description: `I'm able to operate in any kind of fields when talking about Hardware and Software assistance. 
            Working on computer repair since i was 13 years old`
    },
]

export const SoftSkills = [
    {
        name: "Communication",
        icon: "fa fa-comments",
        value: 75,
        description: <>
            <ul>
                <li>Good communication skills acquired during salesperson job with an insurance company
            after a series of meetings.</li>
                <li><strong>05/03/2015 </strong> - Seminar speaker on modular & distributed systems and virtual reality</li>
                <li><strong>09/2018 - 01/2019</strong> - Manager & Main Speaker on Enterprise Programming Seminar</li>
            </ul>
        </>
    },
    {
        name: "Organisational",
        icon: "fa fa-sitemap",
        value: 90,
        description: <>
            <p>Experience as administrator of teams related to MMORPG community
                <br />Manager and Lead Programmer of MMO Server Development Team.
                <br />I have an efficient research method for information on the Internet.
                <br />I really believe in the importance of intercommunication and project documentation.
                <br />
                I am a big fan of version control systems for team and personal development.
                <br />
                I love to find solutions to any kind of problem.
                </p>
        </>
    },
    {
        name: "Job related",
        icon: "fa fa-briefcase",
        description: <>
            <p>Excellent skills to work in teams, organizing of working groups.
               <br /> Expertise in using code versioning tools (<strong>git, svn, CSV, Mercurial HG</strong>).
               <br /> Great ability in using debugging tools, testing, and documentation tools.</p>
            <p>Advanced Experience with GNU/Linux</p>
        </>
    }
]

export const Computer = () => {
    return <>
        {skills.mainSkills.map((value, key) => {
            return <>
                <p><strong>{value.name}:</strong></p>
                <ul>
                    {value.list.map((s, k) => {
                        return <li>{s.name}</li>
                    })}
                </ul>
            </>
        })}
        <p><strong>Secondary Skills:</strong></p>
        <ul>
            {skills.secondarySkills.map((value, key) => <li>{value.name}</li>)}
        </ul>
        <p><strong>Services:</strong></p>
        <ul>
            {services.map((value, key) => <li>{value.name}: {value.description}</li>)}
        </ul>
    </>
}

export default {
    "Communication": {
        "Description": jsx2Html(SoftSkills[0].description)
    },
    "Organisational": {
        "Description": jsx2Html(SoftSkills[1].description)
    },
    "JobRelated": {
        "Description": jsx2Html(SoftSkills[2].description)
    },
    "Computer": {
        "Description": jsx2Html(<Computer />),
        "ProficiencyLevel": {
            "Information": "C",
            "Communication": "C",
            "ContentCreation": "C",
            "Safety": "C",
            "ProblemSolving": "C"
        }
    },
}
