# react-native-superpowered-test
A test RN project for testing the superpowered SDK on Android and iOS.

Also used for developing a new npm module, https://github.com/cfogelklou/react-native-superpowered, based on the original by https://github.com/x86kernel/react-native-superpowered

## Goal
The goal of react-native-superpowered is to use a flexible json interpreter (json.hpp) to quickly and easily add support for Superpowered's SDK in a flexible, cross-platform way.

Typical native react-native modules still require quite a bit of duplicate work, reimplementing an API in both objective-C and java.

Here, we implement only 3 things "natively," in java and objective-C
- JSON string receiver and sender
- Microphone/input device access
- Output device access

Everything else is done via generic json command which can be dealt with in C++ using json.hpp

The git submodule "./npm_module" is where development of the npm module takes place.

To test that install works as expected, "yarn install" pulls the npm module from the local submodule rather than from github (at the moment), easing development.

## How to build

```bash
git clone https://github.com/cfogelklou/react-native-superpowered-test.git --recursive
cd superpowered_test
yarn install
cd ios
pod install

```

## How to develop
