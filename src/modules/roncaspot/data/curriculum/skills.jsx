import React from "react"

import { jsx2Html } from "@this/src/modules/roncaspot/libs/helpers"

export const skills = {
    mainSkills: [
        {
            name: "Main Development Skills", 
            
            icon: "fa fa-code", list: [
                { name: "TypeScript & NestJS", firstYear: 2017, lastYear: -1, proficiency: 90, interest: 100, icon: "fab fa-js" },
                { name: "JavaScript / NodeJS", firstYear: 2011, lastYear: -1, proficiency: 95, interest: 100, icon: "fab fa-js" },
                { name: "ReactJS", firstYear: 2017, lastYear: -1, proficiency: 95, interest: 90, icon: "fab fa-react" },
                { name: "GraphQL / Apollo Framework", firstYear: 2018, lastYear: -1, proficiency: 95, interest: 95, icon: "fa fa-code" },
                { name: "SQL Databases", firstYear: 2006, lastYear: -1, proficiency: 95, interest: 70, icon: "fa fa-database" },
                { name: "Kafka", firstYear: 2021, lastYear: -1, proficiency: 50, interest: 70, icon: "fa fa-exchange" },
                { name: "CI/CD Pipeline", firstYear: 2016, lastYear: -1, proficiency: 90, interest: 90, icon: "fab fa-github" },
                { name: "HTML & CSS", firstYear: 2011, lastYear: -1, proficiency: 70, interest: 70, icon: "fab fa-html5" },
                { name: "PHP", firstYear: 2007, lastYear: -1, proficiency: 95,  interest: 70, icon: "fab fa-php" },
                { name: "Symfony framework", firstYear: 2016, lastYear: -1, proficiency: 70, interest: 70, icon: "fab fa-symfony" },
                { name: "Testing / Debugging", firstYear: 2006, lastYear: -1, proficiency: 70, interest: 95, icon: "fas fa-bug" },
                { name: "C/C++", firstYear: 2006, lastYear: -1, proficiency: 80, interest: 90, icon: "fa fa-code" },
                { name: "Docker", firstYear: 2016, lastYear: -1, proficiency: 85, interest: 90, icon: "fab fa-docker" },
                { name: "Bash Language", firstYear: 2009, lastYear: -1, proficiency: 85, interest: 85, icon: "fa fa-terminal" },
                { name: "Java", firstYear: 2007, lastYear: 2017, proficiency: 70, interest: 60, icon: "fab fa-java" },
                { name: "VueJS", firstYear: 2019, lastYear: -1, proficiency: 85, interest: 85, icon: "fab fa-vuejs" },
                { name: "Angular", firstYear: 2014, lastYear: 2017, proficiency: 70, interest: 80, icon: "fab fa-angular" }
            ]
        },
    ],
    secondarySkills: [
        { name: "Google Cloud" },
        { name: "AWS Cloud" },
        { name: "System management with proxmox, webmin etc." },
        { name: "Productivity platforms: Clickup, Jira etc." },
        { name: "Unix-like & Windows OS" },
        { name: "VS / VSCode" },
        { name: "Firebase" },
        { name: "Electron & Cordova/Phonegap" },
        { name: "Android Studio" },
        { name: "Bootstrap Framework"}
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
            I love to dockerize applications and use containers to create high-performance inftrastructures.
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
                <li><strong>05/03/2015 </strong> - Seminar speaker on modular & distributed systems and virtual reality</li>
                <li><strong>09/2018 - 01/2019</strong> - Manager & Main Speaker on Enterprise Programming Seminar</li>
                <li>Good communication skills acquired during salesperson job for an insurance company.</li>
                <li>I've managed several big MMO communities acquiring good communication skills</li>
            </ul>
        </>
    },
    {
        name: "Organisational",
        icon: "fa fa-sitemap",
        value: 90,
        description: <>
            <p>Experiences as Project Manager and Scrum Master for several teams.
                <br />I really believe in the importance of intercommunication and project documentation.
                <br /> I am a big fan of version control systems and organizational boards for team and personal development.
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
