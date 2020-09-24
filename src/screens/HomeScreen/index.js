/**
 * Home Screen functional component with Hooks
 * Diplay images in image slider
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import { Text, View, NativeModules, Platform } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { Loading } from '_components/Loading';
import { fetchImages } from '../redux/ActionCreators';
import { styles } from './style';
import Carousel from '_components/Carousel';
import i18n from '_locales/i18n';
import { showAlert } from '_utils';

const { RNConnectionStatus } = NativeModules;

const HomeScreen = () => {

    const images = useSelector(state => state.images);
    const dispatch = useDispatch();

    useEffect(() => {
        if (Platform.OS === 'android') {
            NativeModules.CheckInternet.getInternetStatus(err => {
                alert(err);
            }, msg => {
                dispatch(fetchImages());
            },
            );
        } else {
            const hasInternetConnection = RNConnectionStatus.hasInternetConnection;
            if (hasInternetConnection) {
                dispatch(fetchImages());
            } else {
                showAlert(`${i18n.t('home_screen.alert_no_internet')}`);
            }
        }
    }, [])
    
    if (images.isLoading) {
        return (
            <Loading />
        );
    }
    else if (images.errMess) {
        return (
            <View style={styles.container}>
                <Text>{i18n.t('home_screen.lbl_author')} ${images.errMess}`</Text>
            </View>
        );
    }
    else {
        return (
            <View style={styles.container}>
                <Carousel data={images.image} />
            </View>
        );
    }
}

export default HomeScreen;
