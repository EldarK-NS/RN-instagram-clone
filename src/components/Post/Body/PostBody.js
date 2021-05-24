import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'

export default function PostBody({ imageUri }) {
    return (
        <View>
            <Image source={{ uri: imageUri }}
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height/2
    }
})
