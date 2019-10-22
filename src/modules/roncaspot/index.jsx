import React from 'react';
import { sEvtMgr, Events } from "@hw-core/react-platform/src/platform/EventManager"
import Home from "./routes/Home"
import { Route } from 'react-router';
import Helmet from "react-helmet"
import useScript from "@hw-core/react-platform/src/libs/useScript"

sEvtMgr.on(Events.route_load_static, (routes) => {
    routes.push(<Route exact path="/" component={Home} />)
})

function ScriptLoader() {
    useScript("assets/js/jquery.min.js");
    useScript("assets/js/popper.min.js")
    useScript("assets/js/bootstrap.min.js");
    useScript("assets/js/typed.js");
    useScript("assets/js/jquery.easy-pie-chart.js");
    useScript("assets/js/owl.carousel.min.js");
    useScript("assets/js/wow.js");
    useScript("assets/js/fancybox/jquery.fancybox.pack.js");
    //useScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBkdsK7PWcojsO-o_q2tmFOLBfPGL8k8Vg");
    //useScript("assets/js/gmap3.js");
    useScript("assets/js/init.js");
    useScript("assets/js/script.js");

    return <></>
}

sEvtMgr.on(Events.app_load_helmet, (helmet) => {
    helmet.push(
        <>
            <Helmet defer={false}>
                <title>Roncaspot CV</title>
                <meta name="description" content="Roncaspot Resume and Portfolio" />
                <meta name="theme-color" content="#000000" />
            </Helmet>
            <ScriptLoader />
        </>)
})
