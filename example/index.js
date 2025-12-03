import { AppRegistry } from 'react-native';
import App from './src/App';
import SecondApp from './src/SecondApp';
import { name as appName, second as secondApp } from './app.json';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(secondApp, () => SecondApp);
