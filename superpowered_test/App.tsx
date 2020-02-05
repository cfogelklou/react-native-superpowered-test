/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import * as Superpowered from 'react-native-superpowered';

const track = require('./resources/track.mp3');

declare var global: {HermesInternal: null | {}};

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <TouchableOpacity style={styles.sectionContainer}
              onPress={()=>{
                let a = Superpowered.Recorder.inst();                                
              }}
              >
              <Text style={styles.sectionTitle}>Init Recorder</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionContainer}
              onPress={()=>{
                Superpowered.Recorder.inst().start(48000, 10, 2, false);
              }} >
              <Text style={styles.sectionTitle}>Start Recording 10s</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionContainer}
              onPress={()=>{
                Superpowered.Recorder.inst().stop();
              }} >
              <Text style={styles.sectionTitle}>Stop Recording</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionContainer}
              onPress={()=>{
                Superpowered.Api.GenerateTone(1000, 0.5);
              }} >
              <Text style={styles.sectionTitle}>jsonCommand</Text>
            </TouchableOpacity>            
            <TouchableOpacity style={styles.sectionContainer}
              onPress={()=>{
                Superpowered.Api.StartPlayback(track);
              }} >
              <Text style={styles.sectionTitle}>mp3</Text>
            </TouchableOpacity>               
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
