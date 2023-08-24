            
const TitleBar = (props) => {
    return (
        <div className="page-title-div">
            <label className="page-title"> {props.title} </label>
            <a className="filters white-box" href="#">
                <i className="fa fa-sliders"></i>
            </a>
            <a className="filters white-box" href="#">
                <i className="fa fa-sort-amount-asc"></i>
            </a>
        </div>
    );
}

export default TitleBar;
            
            
