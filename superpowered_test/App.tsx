/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Platform,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import * as Superpowered from 'react-native-superpowered';
import * as RNFS from 'react-native-fs';

const track = require('./resources/track.mp3');

declare var global: {HermesInternal: null | {}};

/*
console.log(RNFS.MainBundlePath);
console.log(RNFS.DocumentDirectoryPath);

let bundle:any=(Platform.OS === 'ios')?RNFS.MainBundlePath:RNFS.DocumentDirectoryPath;
let bundlePath:string = bundle.toString();

RNFS.readDir(bundle) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
  .then((result) => {
    console.log('GOT RESULT', result);

    // stat the first file
    return Promise.all([RNFS.stat(result[0].path), result[0].path]);
  })
  .then((statResult) => {
    if (statResult[0].isFile()) {
      // if we have a file, read it
      console.log(statResult[1].toString());
      return RNFS.readFile(statResult[1], 'utf8');
      //return statResult[1].toString();
    }

    return 'no file';
  })
  .then((contents) => {
    // log the file contents
    //console.log(contents);
  })
  .catch((err) => {
    console.log(err.message, err.code);
  });
  */

const App = () => {
  return (
    <>
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
            <TouchableOpacity
              style={styles.sectionContainer}
              onPress={() => {
                Superpowered.Api.GenerateTone(1000, 0.5);
              }}>
              <Text style={styles.sectionTitle}>Generate Tone</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sectionContainer}
              onPress={() => {
                Superpowered.Api.StartPlayback('/sdcard/Download/shambhala2017.mp3');
              }}>
              <Text style={styles.sectionTitle}>mp3</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
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
