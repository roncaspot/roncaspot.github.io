import React from "react"

import { jsx2Html } from "@this/src/modules/roncaspot/libs/helpers"

export const skills = {
    mainSkills: [
        {
            name: "Main Development Skills", icon: "fa fa-code", list: [
                { name: "JavaScript / NodeJS", value: 95, icon: "fa fa-code" },
                { name: "React & Redux stack", value: 90, icon: "fab fa-react" },
                { name: "GraphQL / Apollo Framework", value: 80, icon: "fa fa-code" },
                { name: "SQL Databases (MySQL, PostgreSQL, Access etc.)", value: 86, icon: "fa fa-code" },
                { name: "Angular framework", value: 72, icon: "fa fa-code" },
                { name: "jQuery", value: 83, icon: "fa fa-code" },
                { name: "HTML & CSS", value: 70, icon: "fa fa-code" },
                { name: "Bootstrap framework", value: 60, icon: "fa fa-code" },
                { name: "PHP", value: 85, icon: "fa fa-code" },
                { name: "Symfony framework", value: 76, icon: "fa fa-code" },
                { name: "Unit testing (PHPunit, MochaJS)", value: 60, icon: "fa fa-code" },
                { name: "C/C++", value: 72, icon: "fa fa-code" },
                { name: "Docker", value: 85, icon: "fa fa-code" },
                { name: "Apache Cordova/Phonegap", value: 80, icon: "fa fa-code" },
                { name: "Electron", value: 78, icon: "fa fa-code" },
                { name: "Bash Language", value: 82, icon: "fa fa-code" },
                { name: "Visual Studio / Visual Studio Code", value: 90, icon: "fa fa-code" },
                { name: "Java", value: 68, icon: "fa fa-code" },
            ]
        },
    ],
    secondarySkills: [
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
        { name: "Delphi" },
    ]
}

export const services = [
    {
        name: "Universal Applications",
        icon: "fa fa-code",
        description: "Thankfully to new technologies reactjs etc..."
    },
    {
        name: "DevOps & System Admin",
        icon: "fa fa-cogs",
        description: "Thankfully to new technologies Docker etc..."
    },
    {
        name: "Server Developer",
        icon: "fa fa-server",
        description: "Lorem Ipsum"
    },
    {
        name: "Technical Assistance",
        icon: "fa fa-wrench",
        description: `I'm able to operate in any kind of fields when talking about Hardware and Software assistance. 
            Working on computer repair since i was 13`
    },
]

export const SoftSkills = [
    {
        name: "Communication",
        icon: "fa fa-code",
        value: 75,
        description: <>
            <ul>
                <li>Good communication skills acquired during salesperson job with an insurance company
            after hundreds hours of meetings.</li>
                <li><strong>05/03/2015 </strong> - Seminar speaker on modular / distributed systems and virtual reality</li>
                <li><strong>09/2018 - 01/2019</strong> - Manager & Main Speaker on Enterprise Programming Seminar</li>
            </ul>
        </>
    },
    {
        name: "Organisational",
        icon: "fa fa-cogs",
        value: 90,
        description: <>
            <p>Experience as administrator of teams related to MMORPG community
                <br />Manager and Lead Programmer of MMO Server Development Team.
                <br />I have an efficient research method for information on internet.
                <br />I really believe in the importance of company intercommunication and project documentation.
                <br />
                I am a big fan of version control systems for team and personal development.
                <br />
                I love to find solutions to any kind of problems.
                </p>
        </>
    },
    {
        name: "JobRelated",
        icon: "fa fa-server",
        description: <>
            <p>Excellent ability to work in teams, organization of group work,
               use of tools for code versioning (<strong>git, svn, CSV, Mercurial HG</strong>),
               use of tools for debugging, testing and documentation of the code.</p>
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
