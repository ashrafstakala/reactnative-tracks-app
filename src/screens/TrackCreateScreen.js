import '../_mockLocation';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { Text } from 'react-native-elements';
import Maps from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = ({ isFocused }) => {
  const { addLocation } = useContext(LocationContext);

  const [err] = useLocation(isFocused, addLocation);

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

export default withNavigationFocus(TrackCreateScreen);
