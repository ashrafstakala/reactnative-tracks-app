import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { ActivityIndicator } from 'react-native';
import { Context as LocationContext } from '../context/LocationContext';

const Maps = () => {
  const {
    state: { currentLocation },
  } = useContext(LocationContext);
  console.log(currentLocation);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 20 }} />;
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    ></MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Maps;
