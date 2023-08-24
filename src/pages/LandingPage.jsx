import { useNavigate } from "react-router-dom";
import React from "react";
import RoutingPage from "./RoutingPage";
import Login from "../components/account/Login";
import * as Constants from "../util/constants";

export default function LandingPage() {
    const navigate = useNavigate();

    const FirstScreen = () => {
        let username = localStorage.getItem(Constants.TOKEN_NAME);

        if (username === null) {
            // Landing page with sign in / sign up button

            return <Login navigate={navigate}/>
        } 

        return <RoutingPage navigate={navigate}/>
    };

    return <FirstScreen/>
}