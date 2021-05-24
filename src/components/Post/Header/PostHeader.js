import React from 'react'
import Icon from 'react-native-vector-icons/Entypo';
import { StyleSheet, Text, View } from 'react-native'
import ProfilePicture from './../../ProfilePicture/ProfilePicture';

export default function PostHeader({ imageUri, name }) {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <ProfilePicture uri={imageUri} size={40} />
                <Text style={styles.name}>{name}</Text>
            </View>
            <View style={styles.right}>
                <Icon name="dots-three-vertical" size={18} color='black' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    left: {
        flexDirection: 'row',
    },
    right: {
        marginRight: 10
    },
    name: {
        fontWeight: 'bold',
        color: '#4f4f4f',
        fontSize: 16,
        alignSelf: 'center'
    }
})
