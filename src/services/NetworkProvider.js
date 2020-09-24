import React, { useState, useEffect } from 'react';
import NetInfo from "@react-native-community/netinfo";
import { fetch as fetchPolyfill } from 'whatwg-fetch';

global.fetch = fetchPolyfill

export const NetworkContext = React.createContext({ isConnected: true, isInternetReachable: true });

export const NetworkProvider = props => {
    const [state, setState] = useState({ isConnected: true, isInternetReachable: true });
    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(info => {
            setState({
                ...state, isConnected: info.isConnected,
                isInternetReachable: info.isInternetReachable
            }); // save the network state to React State.
        });
        return () => {
            unsubscribe(); // Unsubscribe to listener when component unmounts
        };
    }, []);
    return (
        <NetworkContext.Provider value={state}>
            {props.children}
        </NetworkContext.Provider>
    );
}