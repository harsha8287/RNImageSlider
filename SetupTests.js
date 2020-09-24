import myModule from './my-module';

console.log("Setting up jest");
console.log(myModule);
jest.mock('./node_modules/react-native-gesture-handler/RNGestureHandlerModule');
jest.mock('./node_modules/@react-native-community/netinfo/jest/netinfo-mock');
jest.mock('./node_modules/@react-navigation/stack', () => 'createStackNavigator');
jest.mock('./node_modules/react-native-localize', () => 'RNLocalize');

