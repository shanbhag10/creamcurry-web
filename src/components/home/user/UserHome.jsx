import { useState } from "react";
import NavBar from "../../common/NavBar";
import HeaderBar from "../../common/HeaderBar";
import ExplorePage from "./explore/ExplorePage";
import AccountPage from "./account/AccountPage";
import SearchPage from "./SearchPage";
import OrdersPage from "./orders/OrdersPage";
import NotificationsPage from "./NotificationsPage";
import ChefPage from "./explore/ChefPage";
import BottomBanner from "../../common/BottomBanner";

const UserHome = (props) => {

    const [selectedTab, setSelectedTab] = useState(props.selectedTab ? props.selectedTab : "home");
    const [subPage, setSubPage] = useState(props.subPage);
    const [chefId, setChefId] = useState(props.chefId);

    const Mainpage = () => {
        switch(props.selectedTab) {
            case "orders":
                return <OrdersPage navigate={props.navigate}/>
            case "search":
                return <SearchPage navigate={props.navigate}/>
            case "home":
                if (subPage === "chef") {
                    return <ChefPage navigate={props.navigate} chefId={chefId}/>
                }
                return <ExplorePage navigate={props.navigate} />;
            case "notifications":
                return <NotificationsPage navigate={props.navigate}/>
            case "account":
                return <AccountPage navigate={props.navigate}/>
            default:
                return <ExplorePage navigate={props.navigate}/>
        }
    }

    return (
        <div className="userHome">
            <div>
                <HeaderBar/>
            </div>
            <div>
                <Mainpage />
            </div>
            <div className="bottom nav">
                <NavBar navigate={props.navigate} selectTab={setSelectedTab} selectedTab={props.selectedTab}/>
            </div>
            <div className="bottom bottom-banner">
                <BottomBanner navigate={props.navigate}/>
            </div>
        </div>
    )
}

export default UserHome;