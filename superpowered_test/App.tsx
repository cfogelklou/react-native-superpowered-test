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


declare var global: {HermesInternal: null | {}};

class SpSingleton {
  private static instance: SpSingleton;
  public speed:number = 1.0;
  public reverse:boolean = false;

  private constructor() { 
    Superpowered.InitializeSuperpowered('',false, false, true, false, true, false, true );

  }
  public static inst(): SpSingleton {
      if (!SpSingleton.instance) {
        SpSingleton.instance = new SpSingleton();
      }

      return SpSingleton.instance;
  }
};

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
                Superpowered.StartPlayback('http://cbc.mc.tritondigital.com/CBC_IDEAS_P/media/ideas-DvH3TbU6-20200205.mp3');
              }}>
              <Text style={styles.sectionTitle}>Start Playing</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sectionContainer}
              onPress={() => {
                Superpowered.StopPlayback();
              }}>
              <Text style={styles.sectionTitle}>Stop Playing</Text>
            </TouchableOpacity>            
            <TouchableOpacity
              style={styles.sectionContainer}
              onPress={() => {
                SpSingleton.inst().reverse = (SpSingleton.inst().reverse) ? false : true;
                Superpowered.SetDirection(SpSingleton.inst().reverse);
              }}>
              <Text style={styles.sectionTitle}>Reverse It</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sectionContainer}
              onPress={() => {
                SpSingleton.inst().speed = SpSingleton.inst().speed + 0.2;
                Superpowered.SetSpeed(SpSingleton.inst().speed);
              }}>
              <Text style={styles.sectionTitle}>Speed Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sectionContainer}
              onPress={() => {
                SpSingleton.inst().speed = SpSingleton.inst().speed - 0.2;
                Superpowered.SetSpeed(SpSingleton.inst().speed);
              }}>
              <Text style={styles.sectionTitle}>Slow Down</Text>
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
