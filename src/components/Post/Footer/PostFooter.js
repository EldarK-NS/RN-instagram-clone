import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import AdIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export default function PostFooter({ likesCount: likesCountProp, caption, postedAt, }) {

    const [isLiked, setIsLiked] = useState(false)
    const [likesCount, setLikesCount] = useState(0)

    const onLikePressed = () => {
        const amount = isLiked ? 1 : -1
        setLikesCount(likesCount + amount)
        setIsLiked(!isLiked)
    }

    useEffect(() => {
        setLikesCount(likesCountProp)
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.iconsContainer}>
                <View style={styles.leftIcons}>
                    <TouchableWithoutFeedback onPress={onLikePressed}>
                        {isLiked ?
                            <AdIcon name="hearto" size={23} color='#5d5d5d' />
                            : <AdIcon name="heart" size={23} color='#e73838' />
                        }
                    </TouchableWithoutFeedback>
                    <FontistoIcon name="comment" size={21} color='#5d5d5d' />
                    <IoniconsIcon name="paper-plane-outline" size={23} color='#5d5d5d' />
                </View>
                <View style={styles.rightIcon}>
                    <FontAwesomeIcon name="bookmark-o" size={23} color='#5d5d5d' />
                </View>
            </View>
            <Text style={styles.likes}>Likes:{likesCount}</Text>
            <Text style={styles.caption}>{caption}</Text>
            <Text style={styles.postedAt}>{postedAt}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5
    },
    leftIcons: {
        flexDirection: 'row',
        width: 120,
        justifyContent: 'space-between'
    },
    rightIcon: {
        marginRight: 3
    },
    likes: {
        fontWeight: 'bold',
        fontSize: 14,
        margin: 3
    },
    caption: {
        fontSize: 14,
        margin: 3
    },
    postedAt: {
        color: '#8c8c8c',
        fontSize: 14,
        margin: 3
    },

})
