import TitleBar from "../../common/TitleBar";
import ChefsList from "./explore/ChefsList";


const NotificationsPage = () => {

    return (
        <div>
            <TitleBar title="Notifications"/>

            <div className="box">
                <div className="map-header">
                    <label className="label">Results</label>
                </div>
                <ChefsList />
            </div>
        </div>
    )
}

export default NotificationsPage;