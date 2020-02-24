import { LoadScript, GoogleMap as LibGoogleMap, Polygon } from "@react-google-maps/api";
import React, { useCallback, useState, useRef, useMemo} from "react";
import styles from './googleMap.module.scss'

export const GoogleMap = ({ latLng, polygon }) => {
    const [[lat, lng], setLatLng] = useState([0, 0]);
    const [path, setPath] = useState([]);
    useMemo(()=>{ {
        console.log(latLng);
        latLng && setLatLng(latLng)
    }}, [latLng]);
    useMemo(()=>setPath(polygon), [polygon]);
    const polygonRef = useRef(null);
    const listenersRef = useRef([]);
    const onUnmount = useCallback(() => {
        listenersRef.current.forEach(lis => lis.remove());
        polygonRef.current = null;
    }, []);
    return (
            <LoadScript
                id="script-loader"
                googleMapsApiKey=""
                language="en"
                region="us"
            >
                <LibGoogleMap
                    mapContainerClassName={styles.map}
                    center={{ lat, lng }}
                    zoom={5}
                    version="weekly"
                    on
                >
                    {
                        path && path.map( (item, index)=> <Polygon key={index} path={item} onUnmount={onUnmount}/>)
                    }
                </LibGoogleMap>
            </LoadScript>
    );
}