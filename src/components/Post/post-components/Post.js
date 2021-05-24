import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PostBody from '../Body/PostBody'
import PostFooter from '../Footer/PostFooter'
import PostHeader from '../Header/PostHeader'


export default function Post({ post }) {
    return (
        <View>
            <PostHeader imageUri={post.user.imageUri} name={post.user.name} />
            <PostBody imageUri={post.imageUri} />
            <PostFooter
                likesCount={post.likesCount}
                caption={post.caption}
                postedAt={post.postedAt}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
