import React from "react"

export const hobbies = [
    {
        name: "Travel",
        icon: "fa fa-plane-departure",
        description: "Exploration is in my blood"
    },
    {
        name: "Photography",
        icon: "fa fa-camera",
        description: "I love to take photos at world's beatiful things and places with my Lumix DSLR. I Love movies and any kind of visual art"
    },
    {
        name: "Music & Instruments",
        icon: "fa fa-music",
        description: "I'm tone-deaf. I love to play guitar and listen to music"
    },
    {
        name: "Videogames",
        icon: "fa fa-gamepad",
        description: "Single player game lover and MMO developer"
    },
    {
        name: "Technology and hardware mods",
        icon: "fa fa-microchip",
        description: "I love technology stuff! I often repair hardware and software of any kind of device"
    },
    {
        name: "Science",
        icon: "fa fa-flask",
        description: "I'm a science enthusiast! I love to pull information online about new scientific research"
    },
]

export default () => (<div>
    <p>Hobbies:</p>
    <ul>
        {hobbies.map((value, key) => <li key={key}>{value.name}: {value.description}</li>)}
    </ul>
</div>)
