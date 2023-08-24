import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import {
  Route,
  Routes
} from "react-router-dom";
import CreateAccount from "../components/account/CreateAccount";
import Login from "../components/account/Login";
import UserHome from "../components/home/user/UserHome";
import ForgotPassword from "../components/account/ForgotPassword";

const RoutingPage = () => {

    const navigate = useNavigate();

    const ViewChef = () => {
        const { chefId } = useParams();
        return <UserHome chefId={chefId} navigate={navigate} selectedTab="home" subPage='chef' />;
    };

    return (
        <div>
        <Routes>
            <Route path="/create_account" element={<CreateAccount navigate={navigate}/>} />
            <Route path="/login" element={<Login navigate={navigate}/>} />
            <Route path="/home" element={<UserHome navigate={navigate} selectedTab="home"/>} />
            <Route path="/" element={<UserHome navigate={navigate} selectedTab="home"/>} />
            <Route path="/forgot_password" element={<ForgotPassword navigate={navigate}/>} />
            <Route path="/orders" element={<UserHome navigate={navigate} selectedTab="orders"/>} />
            <Route path="/notifications" element={<UserHome navigate={navigate} selectedTab="notifications"/>} />
            <Route path="/search" element={<UserHome navigate={navigate} selectedTab="search"/>} />
            <Route path="/account" element={<UserHome navigate={navigate} selectedTab="account"/>} />
            <Route path="/chef/:chefId" element={<ViewChef/>} />
        </Routes>
    </div>
    );
}

export default RoutingPage;