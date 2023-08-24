import { useEffect } from "react";

const NavBar = (props) => {

    useEffect(
        () => {
            const navigation_items_elms = document.querySelectorAll(
                ".navigation-bar .list-items .item"
            );

            navigation_items_elms.forEach((item) => {
                if (item.id == props.selectedTab) {
                    item.classList.add("active");
                } else {
                    item.classList.remove("active");
                }
            });

            navigation_items_elms.forEach((item) => {
                item.addEventListener("click", (e) => {
                    e.preventDefault();
                    navigation_items_elms.forEach((itm) => itm.classList.remove("active"));
                    item.classList.add("active");
                    console.log("selected : " + item.id);
                    props.selectTab(item.id);
                    props.navigate('/' + item.id);
                });
            });
            
        }
    );

    return (
        <div className="menu">
            <nav className="navigation-bar">
                <ul className="list-items">
                    <li className="item" id="orders">
                    <a className="link" href="#">
                        <i className="fa fa-file-text-o fa-2x"></i>
                    </a>                    
                    </li>
                    <li className="item" id="search">
                    <a className="link" href="#">
                        <i className="fa fa-search fa-2x"></i>
                    </a>
                    </li>
                    <li className="item active" id="home">
                    <a className="link" href="#">
                        <i className="fa fa-home fa-2x"></i>
                    </a>
                    </li>
                    <li className="item" id="notifications">
                    <a className="link" href="#">
                        <i className="fa fa-bell fa-2x"></i>
                    </a>
                    </li>
                    <li className="item" id="account">
                    <a className="link" href="#">
                        <i className="fa fa-user fa-2x"></i>
                    </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;