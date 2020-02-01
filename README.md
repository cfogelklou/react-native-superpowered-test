# react-native-superpowered-test
A test RN project for testing the superpowered SDK on Android and iOS.

## Goal
The goal of react-native-superpowered is to use a flexible json interpreter (json.hpp) to quickly and easily add support for Superpowered's SDK in a flexible, cross-platform way.

Typical native react-native modules still require quite a bit of duplicate work, reimplementing an API in both objective-C and java.

Here, we implement only 3 things "natively," in java and objective-C
- JSON string receiver and sender
- Microphone/input device access
- Output device access

Everything else is done via generic json command which can be dealt with in C++ using json.hpp

## How to build

```bash
git clone https://github.com/cfogelklou/react-native-superpowered-test.git --recursive



```
