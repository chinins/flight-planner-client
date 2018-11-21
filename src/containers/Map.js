import React, { Component} from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hpbmlucyIsImEiOiJjam4xaHdleWI0a2U4M3FueDgwM2ptN2VtIn0.r0ypAbepxGXZvEwJBR3amg';

class Map extends Component {
  state = {
    coords: []
  }
  map = {};

  addSource = (source, name, type, coordinates) => {
    this.map.addSource(source, {
      'type': 'geojson',
      'data': {
        "type": "Feature",
        "properties": {
          "name": `${name}`
        },
        "geometry": {
          "type": `${type}`,
          "coordinates": coordinates
        }
      }
    });
  };

  addLineLayer = (id, source, ifNew) => {
    const color = ifNew ? 'black' : 'red';
    this.map.addLayer({
      'id': `${id}`,
      'type': 'line',
      'layout': {
        'line-join': 'round',
        'line-cap': 'round',
      },
      'paint': {
          'line-color': `${color}`,
          'line-width': 3
      },
      'source': `${source}`
    })
  };

  addPointLayer = (id, source, ifNew) => {
    const color = ifNew ? 'black' : 'red';
    this.map.addLayer({
      'id': `${id}`,
      'type': 'circle',
      'source': `${source}`,
      'paint': {
        'circle-color': `${color}`
      }
    });
  };

  setVisibility = () => {
    if (this.props.ifNew) {
      this.map.setLayoutProperty('flight-lines', 'visibility', 'none');
      this.map.setLayoutProperty('flight-points', 'visibility', 'none');
    } else {
      this.map.setLayoutProperty('flight-lines', 'visibility', 'visible');
      this.map.setLayoutProperty('flight-points', 'visibility', 'visible');
    }
  }

  setData = (source, name, type, coordinates) => {
    this.map.getSource(source).setData({
      "type": "Feature",
      "properties": {
        "name": name
      },
      "geometry": {
        "type": type,
        "coordinates": coordinates
      }
    });
  }

  componentDidMount () {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [6.142624, 46.201603],
      zoom: 17
    });

    const { name, coordinates } = this.props.plan;
    this.map.on('load', () => {

      this.addSource('flight-plan', name, 'LineString', coordinates)
      this.addLineLayer('flight-lines', 'flight-plan', false);
      this.addPointLayer('flight-points', 'flight-plan', false);

      this.addSource('new-plan', this.props.newPlanName, 'LineString', this.state.coords);
      this.addLineLayer('new-lines', 'new-plan', true);
      this.addPointLayer('new-points', 'new-plan', true);

      this.addSource('start-point', 'start-point', 'Point', []);
      this.addPointLayer('start-point', 'start-point', true);

      this.map.on('click', e => {
        if (this.props.ifNew) {
          const { lng, lat } = e.lngLat;
          const coords = this.state.coords.slice();
          coords.push([lng, lat])
          this.setState({ coords })

        }
      });

      this.map.on('dblclick', e => {
        if (this.props.ifNew) {
          e.preventDefault();
          const coords = this.state.coords.slice();
          coords.pop();
          this.setState({ coords })
          this.props.onAddCoords(this.state.coords);
          this.setState({ coords: [] });
        }
      })

      this.map.getCanvas().style.cursor = 'pointer';
    });
  }

  componentDidUpdate (prevProps) {
    const { name, coordinates } = this.props.plan;
    this.setVisibility();
    this.setData('flight-plan', name, 'LineString', coordinates);

    this.map.getCanvas().style.cursor = this.props.ifNew ? 'crosshair' : 'pointer';

    if (this.state.coords.length === 1) {
      this.setData('start-point', 'start-point', 'Point', this.state.coords[0])
    } else this.setData('start-point', 'start-point', 'Point', []);

    this.setData('new-plan', this.props.newPlanName, 'LineString',this.state.coords);
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
