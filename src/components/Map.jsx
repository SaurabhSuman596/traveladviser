import { useEffect, useState } from 'react';
import './globalComp.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getData } from '../redux/mapSlice';
import { useSelector } from 'react-redux';

const Map = () => {
  const dispatch = useDispatch('');
  let map;
  const [latlng, setLatLng] = useState({
    lat: 25.15879305558635,
    lng: 83.61269762272238,
  });

  const renderMap = () => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places&callback=initMap`
    );
    window.initMap = initMap;
  };

  useEffect(() => {
    renderMap();
    fetchData('', dispatch, latlng);
  }, [latlng]);

  const initMap = () => {
    map = new window.google.maps.Map(document.getElementById('map'), {
      center: latlng,
      zoom: 15,
    });

    let marker = new window.google.maps.Marker({
      position: latlng,
      map: map,
    });

    window.google.maps.event.addListener(map, 'click', (event) => {
      setLatLng({
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      });
      console.log(latlng);
      marker = new window.google.maps.Marker({
        position: latlng,
        map: map,
      });
    });
  };

  return <div className="mainMap" id="map"></div>;
};

function loadScript(url) {
  var index = window.document.getElementsByTagName('script')[0];
  var script = window.document.createElement('script');
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export const fetchData = (label, dispatch, latlng) => {
  const options = {
    method: 'GET',
    url: 'https://trueway-places.p.rapidapi.com/FindPlacesNearby',
    params: {
      location: `${latlng.lat},${latlng.lng}`,
      type: label,
      radius: '5000',
      language: 'en',
    },
    headers: {
      'X-RapidAPI-Key': 'b5c414e96dmshccebcc4ae28014bp1918fdjsn6e19b47967ae',
      'X-RapidAPI-Host': 'trueway-places.p.rapidapi.com',
    },
  };

  axios
    .request(options)
    .then(function (response) {
      dispatch(
        getData({ data: response.data.results, label: label, latlng: latlng })
      );
    })
    .catch(function (error) {
      console.log(error);
      dispatch(getData({ data: error }));
    });
};

export default Map;
