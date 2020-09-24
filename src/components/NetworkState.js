import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { NetworkContext } from '../services/NetworkProvider';

export const NetworkState = (props) => {
    const networkState = useContext(NetworkContext)

    const showmessage = () => {
        if (!networkState.isConnected)
            return "No Internet Connection"
        else if (!(networkState.isConnected && networkState.isInternetReachable))
            return "Internet not available, check your internet connectivity and try again later"
    }

    return (
        <View>
            {(!networkState.isConnected || !(networkState.isConnected && networkState.isInternetReachable)) ?
                <View style={styles.offlineContainer}>
                    <Text style={styles.offlineText}>{showmessage()}</Text>
                </View>
                : <View style={[styles.offlineContainer, { backgroundColor: 'green' }]}>
                    <Text style={styles.offlineText}>Back online</Text>
                </View>}
        </View>
    )
};


const styles = StyleSheet.create({
    offlineContainer: {
        backgroundColor: '#b52424',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        position: 'absolute',
        top: 30
    },
    offlineText: { color: '#fff' }
});