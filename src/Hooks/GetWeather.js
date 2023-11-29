import {useState, useEffect} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {PermissionsAndroid} from 'react-native';
import config from '../../config';
import {data} from '../Components/data';

export const GetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [location, getLocation] = useState(null);
  const [weather, setweather] = useState(null);
  const [Error, setError] = useState(null);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Cool Photo App Location Permission',
          message:
            'Cool Photo App needs access to your Location ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Location');
        Geolocation.getCurrentPosition(
          position => {
            console.log(position);
            getLocation([
              position['coords'].latitude,
              position['coords'].longitude,
            ]);
            setLoading(false);
          },
          error => {
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const fetchData = async () => {
    try {
      const datal = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${location[0]}&lon=${location[1]}&appid=34a67ecbac3d6c8e64745381681a078c`,
      );
      const response = await datal.json();
      setweather(response);
      console.log(response);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    if (location !== null) {
      fetchData();
    }
  }, [location]);

  useEffect(() => {
    requestCameraPermission();
  }, []);
  return [loading, weather, Error];
};
