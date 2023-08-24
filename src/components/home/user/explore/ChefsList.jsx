import { useEffect, useRef } from "react";
import { useState } from "react";
import mapboxgl from 'mapbox-gl'


const ChefsList = (props) => {

    const ChefListItem = (props) => {
        return <tr>
            {/* <td><button style={clearButton} onClick={() => props.navigate('/view/' + props.item.listId)}>{props.item.listId}</button></td> */}
            <td>{props.item.name}</td>
            <td>{props.item.zip}</td>
            {/* <td>{props.item.speciality}</td> */}
        </tr>
    }

    return (
        <div className="scroll-table">
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Speciality</th>
                    <th>Reviews</th>
                </tr>
                </thead>
                <tbody>
                    <ChefListItem item = {{name : "mit", zip : 8712}} />
                    <ChefListItem item = {{name : "mit", zip : 8713}} />
                    <ChefListItem item = {{name : "mit", zip : 8712}} />
                    {/* { recents.map((item) => (
                        <RecentListItem item={item} key={item.listId} navigate={props.navigate}/>
                    ))} */}
                </tbody>
            </table>
        </div>
    )
}

export default ChefsList;
