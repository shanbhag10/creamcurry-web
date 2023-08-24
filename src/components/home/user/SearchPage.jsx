import TitleBar from "../../common/TitleBar";
import ChefsList from "./explore/ChefsList";


const SearchPage = () => {

    return (
        <div>
            <TitleBar title="Search"/>
            <div className="box">
                <div className="search">
                    <div className="left search-label">
                    <label className="keyword label">Keyword</label>
                    </div>
                    <div className="right">
                        <input className="search-box" placeholder="Enter search keyword" name="keyword" id="keyword" type="text"/>
                    </div>
                </div>
            </div>
            <div className="box">
                <ChefsList />
            </div>
        </div>
    )
}

export default SearchPage;