/*
* Defining Utils
* src/utils directory to add all utility/helper methods that can be shared across our entire project.
*
* All repeating code is kept in utils to avoid code duplication.
*/

import { Platform, Alert, Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get('window');

export const widthToDp = number => {
    let givenWidth = typeof number === 'number' ? number : parseFloat(number);
    return PixelRatio.roundToNearestPixel((width * givenWidth) / 100);
};

export const heightToDp = number => {
    let givenHeight = typeof number === 'number' ? number : parseFloat(number);
    return PixelRatio.roundToNearestPixel((height * givenHeight) / 100);
};

export const getDeviceWidth = () => {
    return Math.round(Dimensions.get("window").width);
};
export const getDeviceHeight = () => {
    return Math.round(Dimensions.get("window").height);
};

export const getOS = () => {
    if (Platform.OS === "ios") {
        return "ios";
    }
    return "android";
};

export const showAlert = message => {
    Alert.alert(
        'Alert',
        message,
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
    );
};


