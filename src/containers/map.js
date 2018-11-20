import React, { Component} from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hpbmlucyIsImEiOiJjam4xaHdleWI0a2U4M3FueDgwM2ptN2VtIn0.r0ypAbepxGXZvEwJBR3amg';

class Map extends Component {
  state = {
    coords: []
  }
  map = {};

  addPlan = () => {
    this.map.addLayer({
      'id': 'flight-plan',
      'type': 'line',
      'layout': {
        'line-join': 'round',
        'line-cap': 'round',
      },
      'paint': {
          'line-color': 'red',
          'line-width': 3
      },
      'source': 'flight-plan'
    });

    this.map.addLayer({
      'id': 'flight-points',
      'type': 'circle',
      'source': 'flight-plan',
      'paint': {
        'circle-color': 'red'
      }
    })
  }

  componentDidMount () {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [6.142624, 46.201603],
      zoom: 17.5
    });

    this.map.on('load', () => {
      this.map.addSource('flight-plan', {
        'type': 'geojson',
        'data': this.props.plan,
      });

      this.addPlan();

      this.map.addSource('new-plan', {
        'type': 'geojson',
        'data': {
          "type": "Feature",
          "properties": {
            "name": "new-route"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": this.state.coords
          }
        }
      })

      this.map.addLayer({
        'id': 'new-plan',
        'type': 'line',
        'layout': {
          'line-join': 'round',
          'line-cap': 'round',
        },
        'paint': {
            'line-color': 'black',
            'line-width': 3
        },
        'source': 'new-plan'
      })

      this.map.addLayer({
        'id': 'new-points',
        'type': 'circle',
        'source': 'new-plan',
        'paint': {
          'circle-color': 'black'
        }
      })
    });

    this.map.on('click', e => {
      const { lng, lat } = e.lngLat;
      console.log(lng, lat);
      const coords = this.state.coords.slice();
      coords.push([lng, lat])
      console.log(coords);
      this.setState({ coords })

    })
  }

  componentDidUpdate (prevProps) {
    if (prevProps !== this.props) {
      this.map.getSource('flight-plan').setData(this.props.plan);
    }

    this.map.getSource('new-plan').setData({
      "type": "Feature",
      "properties": {
        "name": "new-route"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": this.state.coords
      }
    });
  };

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
