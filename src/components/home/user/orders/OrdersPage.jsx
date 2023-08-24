import TitleBar from "../../../common/TitleBar";
import ChefsList from "../explore/ChefsList";


const OrdersPage = () => {

    return (
        <div>
            <TitleBar title="My Orders"/>

            <div className="box">
                <ChefsList/>
            </div>
        </div>
    )
}

export default OrdersPage;