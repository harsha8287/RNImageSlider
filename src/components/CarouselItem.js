import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { getDeviceWidth, getDeviceHeight, widthToDp } from '_utils';
import { BASE_URL } from '_constants/Constants';
import i18n from '_locales/i18n';

const CarouselItem = ({ item }) => {

    const random = item[Math.floor(Math.random() * item.length)]
    return (
        <View style={styles.cardView}>
            <Image
                style={styles.image}
                source={{
                    uri: `${BASE_URL}/200/300?image=${random.id}`,
                }}
            />
            <View style={styles.textView}>
                <Text style={styles.itemTitle}> {i18n.t('home_screen.lbl_author')} {random.author}</Text>
            </View>
        </View>
    )
}

export default CarouselItem

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        width: getDeviceWidth(),
        height: getDeviceHeight() / 2,
        backgroundColor: 'white',
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },
    textView: {
        position: 'absolute',
        width: getDeviceWidth(),
        paddingLeft: 20,
        paddingVertical: 10,
        backgroundColor: "rgba(0,0,0,0.4)"
    },
    image: {
        width: 200,
        height: 300,
        alignSelf: 'center',
        marginTop: 100
    },
    itemTitle: {
        color: 'white',
        fontSize: widthToDp('3%'),
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        fontWeight: "bold",
        elevation: 5,
        textAlign: "center"
    }
})

