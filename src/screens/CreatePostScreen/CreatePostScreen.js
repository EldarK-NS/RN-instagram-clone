import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Feed from '../../components/Feed/Feed'

export default function CreatePostScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Create Post Screen</Text>
            {/* <Feed /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 30
    },
})
