import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Dimensions,
    Image,
    FlatList,
    Text,
    View,
} from 'react-native';

const { width, height } = Dimensions.get('screen');
const IMG_WIDTH = width * 0.75;
const IMG_HEIGHT = IMG_WIDTH * 1.45;

const images = [
    'https://images.pexels.com/photos/6346639/pexels-photo-6346639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/14519806/pexels-photo-14519806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3257803/pexels-photo-3257803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3352860/pexels-photo-3352860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/6445669/pexels-photo-6445669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/5760479/pexels-photo-5760479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/12905016/pexels-photo-12905016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/4214998/pexels-photo-4214998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/9203428/pexels-photo-9203428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1879864/pexels-photo-1879864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
];

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Animated Parallax Effect</Text>
            <FlatList
                data={images}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                keyExtractor={(_, index) => String(index)}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.imageContainer}>
                            <Image
                                source={{ uri: item }}
                                style={styles.image}
                            />
                        </View>
                    );
                }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#000',
        fontSize: 20,
        paddingTop: 20,
        fontWeight: '900',
        textAlign: 'center',
    },
    imageContainer: {
        width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: IMG_WIDTH,
        height: IMG_HEIGHT,
        resizeMode: 'cover',
    },
});

export default App;
