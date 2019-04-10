/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import App from './components/App';
import AsyncStorage from '@react-native-community/async-storage';

AppRegistry.registerComponent(appName, () => App);
