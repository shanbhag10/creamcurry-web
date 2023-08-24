import MapView from "./MapView";
import ChefsList from "./ChefsList";
import TitleBar from "../../../common/TitleBar";

const ExplorePage = () => {

    return (
        <div>
            <TitleBar title="Explore"/>

            <div className="box">
                <div className="map-header">
                    <label className="label">Near You</label>
                </div>
                <MapView/>
            </div>
            <div className="box">
                <div className="map-header">
                    <label className="label">Homechefs</label>
                </div>
                <ChefsList/>
            </div>
        </div>
    )
}

export default ExplorePage;