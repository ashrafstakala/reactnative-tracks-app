import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Text } from 'react-native-elements';
import Maps from '../components/Map';

const TrackCreateScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Create a TRack</Text>
      <Maps />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
