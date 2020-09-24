import React, { useState, useEffect } from 'react';
import { View, FlatList, Animated, RefreshControl } from 'react-native';
import CarouselItem from './CarouselItem';

const Carousel = ({ data }) => {
    const scrollX = new Animated.Value(0)
    const [dataList, setDataList] = useState(data);
    const [refreshing, setRefreshing] = React.useState(false);

    useEffect(() => {
        setDataList(data)
    });

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setDataList(data)
        wait(2000).then(() => setRefreshing(false));
    }, []);

    if (data && data.length) {
        return (
            <View>
                <FlatList data={dataList}
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment="center"
                    scrollEventThrottle={16}
                    decelerationRate={"fast"}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return <CarouselItem item={dataList} />
                    }}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }]
                    )}
                />
            </View>
        )
    }
    return null
}

export default Carousel


