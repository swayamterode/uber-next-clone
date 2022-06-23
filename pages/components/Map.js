import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1Ijoic3d5bSIsImEiOiJjbDRweWg5b3gwMXJiM21rMm8xMzRsZjNiIn0.ZVZJzsLLOc2lpq71Uq9hsw";

const Map = (props) => {
  
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-99.29011, 39.39172],
      zoom: 3,
    });

    if (props.pickupCoordinates) {
      addtoMap(map, props.pickupCoordinates);
    }

    if (props.dropoffCoordinates) {
      addtoMap(map, props.dropoffCoordinates);
    }


    if(props.pickupCoordinates && props.dropoffCoordinates){
      map.fitBounds([
        props.dropoffCoordinates,
        props.pickupCoordinates
      ], {
        padding: 60
      })
    }
  }, [props.pickupCoordinates, props.dropoffCoordinates]);

  const addtoMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker()
    .setLngLat(coordinates)
    .addTo(map);
  };

  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
flex-1 h-1/2
`;
