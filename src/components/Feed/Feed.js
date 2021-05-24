import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Post from './../Post/post-components/Post';
import Stories from './../ProfilePicture/Stories/Stories';

const data = [
    {
        user: {
            imageUri: 'https://mooscle.com/app/uploads/2019/03/Apple-1.png',
            name: 'Apple'
        },
        imageUri: 'https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/playlists/playlist_398/reconnect_with_nature.jpg?',
        caption: 'Nature in the night #instagram',
        likesCount: 234,
        postedAt: '10 minutes ago'
    },
    {
        user: {
            imageUri: 'https://mooscle.com/app/uploads/2019/03/Apple-1.png',
            name: 'Apple'
        },
        imageUri: 'https://photos-kr.kcdn.kz/01/9aecf1ea0a8e33da8bc1c9028d1f906bb9b4a9/photo-750x470.jpg',
        caption: 'Nature in the night #instagram',
        likesCount: 234,
        postedAt: '10 minutes ago'
    },
    {
        user: {
            imageUri: 'https://mooscle.com/app/uploads/2019/03/Apple-1.png',
            name: 'Apple'
        },
        imageUri: 'https://cnet2.cbsistatic.com/img/9tf6BfVtKOpwjMwKYAc2usl0WRg=/105x158:744x517/1200x675/2020/01/20/ada6b2c1-465f-409e-8956-df61acd3a067/bouqs-valentines-day-flowers.jpg',
        caption: 'Nature in the night #instagram',
        likesCount: 234,
        postedAt: '10 minutes ago'
    },
    {
        user: {
            imageUri: 'https://mooscle.com/app/uploads/2019/03/Apple-1.png',
            name: 'Apple'
        },
        imageUri: 'https://i.ytimg.com/vi/dip_8dmrcaU/maxresdefault.jpg',
        caption: 'Nature in the night #instagram',
        likesCount: 234,
        postedAt: '10 minutes ago'
    },
    {
        user: {
            imageUri: 'https://mooscle.com/app/uploads/2019/03/Apple-1.png',
            name: 'Apple'
        },
        imageUri: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fforbestechcouncil%2Ffiles%2F2019%2F01%2Fcanva-photo-editor-8-7.jpg',
        caption: 'Nature in the night #instagram',
        likesCount: 234,
        postedAt: '10 minutes ago'
    }

]

export default function Feed() {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <Post post={item} />}
            keyExtractor={item => item.imageUri}
            ListHeaderComponent={Stories}
        />

    )
}

const styles = StyleSheet.create({})
