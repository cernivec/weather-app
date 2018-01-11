import React, { Component } from "react";
import GoogleMapsLoader from "google-maps";

class GoogleMap extends Component {
  componentDidMount() {
    const that = this
    GoogleMapsLoader.load(function(google) {
     new google.maps.Map(that.refs.map,
        {
          zoom: 12,
          center: {
            lat: that.props.lat,
            lng: that.props.lon
          }
        });
    });
  }

  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap;
