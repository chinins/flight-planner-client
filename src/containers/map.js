import React, { Component} from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hpbmlucyIsImEiOiJjam4xaHdleWI0a2U4M3FueDgwM2ptN2VtIn0.r0ypAbepxGXZvEwJBR3amg';

class Map extends Component {
  map = {};

  componentDidMount () {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [6.142624, 46.201603],
      zoom: 17.5
    });

    const { route } = this.props;
    this.map.on('load', () => {
      this.map.addLayer({
        'id': route.properties.name,
        'type': 'line',
        "layout": {
          "line-join": "round",
          'line-round-limit': 25,
          "line-cap": "round",
        },
        "paint": {
            "line-color": "red",
            "line-width": 3
        },
        'source': {
          'type': 'geojson',
          'data': route
        }
      })
    })
  }

  render () {
    return (
      <div className="Map">
        <div
          ref={el => (this.mapContainer = el)}
          className="absolute top right left bottom"
        />
      </div>
    )
  }
}

export default Map;
