import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

import { connect } from 'react-redux';
import {
  selectedResourant
} from '../../store/action/action';
const containerStyle = {
  width: '50%',
  height: '600px'
};


const MyComponent = (props) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyC5qzCExWx7OlPdwh-pCPZ3LVjClBfPSyE"
  })
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(props.center);
    map.fitBounds(bounds);
    setMap(map)
  }, [props])

  const onUnmount = React.useCallback(() => {
    setMap(null)
  }, [])
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={props.center}
      onLoad={onLoad}
      zoom={10}
      // maxZoom={10}
      onUnmount={onUnmount}
    >
      {props.restourant.map((i) => {
        return <Marker key={i._id}
          position={{ lat: i.location.lat, lng: i.location.lng }}
          clickable={true}
          onClick={() => props.selectedResourant(i)}
        ></Marker>
      })}
      <></>
    </GoogleMap>
  ) : <></>
}

const mapStateToProps = (state) => ({
  restourant: state.restourant,
  center: state.center
});

const mapDispatchToProps = (dispatch) => ({
  selectedResourant: (i) => dispatch(selectedResourant(i))
});

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(MyComponent));

