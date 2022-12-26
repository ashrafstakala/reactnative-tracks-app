import '../_mockLocation';
import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Text } from 'react-native-elements';
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from 'expo-location';
import Maps from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) {
        throw new Error('Location permission not granted');
      }
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          addLocation(location);
        }
      );
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={styles.title} h2>
        Create a Track
      </Text>
      <Maps />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 30,
  },
});

export default TrackCreateScreen;
