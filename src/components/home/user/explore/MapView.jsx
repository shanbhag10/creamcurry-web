import { useEffect, useRef } from "react";
import { useState } from "react";
import mapboxgl from 'mapbox-gl'


const MapView = (props) => {

    mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhbmJoYWcxMCIsImEiOiJjbGxpaWgzajExMHU3M21ycmRxMWVtdzR3In0.mZKC7ywOrqtu4LkIwfLw3w';

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-122.05);
    const [lat, setLat] = useState(37.45);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        // if (!map.current) {// initialize map only once

        // // const zipCode = "95111";
        // // const latLng =  await ReactGeocoder.geoCode(zipCode);
        // // console.log(latLng)
        // // let lat = latLng[0].geometry.location.lat;
        // // let lng = latLng[0].geometry.location.lng;
        
        //     map.current = new mapboxgl.Map({
        //         container: mapContainer.current,
        //         style: 'mapbox://styles/mapbox/streets-v12',
        //         center: [lng, lat],
        //         zoom: zoom
        //     });
        // }
    });

    // const renderMap = () => {
    //     mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhbmJoYWcxMCIsImEiOiJjbGxpaWgzajExMHU3M21ycmRxMWVtdzR3In0.mZKC7ywOrqtu4LkIwfLw3w';
    //     const map = new mapboxgl.Map({
    //     container: 'map', // container ID
    //     // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    //     style: 'mapbox://styles/mapbox/streets-v12', // style URL
    //     center: [-74.5, 40], // starting position [lng, lat]
    //     zoom: 9 // starting zoom
    //     });
    // }

    return (
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
    )
}

export default MapView;
