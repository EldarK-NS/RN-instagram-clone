import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Story from './../Story/Story';

const data = [
    {
        imageUri: 'https://n1s1.hsmedia.ru/45/d9/95/45d9956e2b746ba61ae08dc8141ee48f/620x465_1_a746416169e08f0f8efde0a87c99200f@1446x1084_0xac120003_4978641911608634829.jpg',
        name: 'Mary'
    },
    {
        imageUri: 'https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528',
        name: 'Alex'
    },
    {
        imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZtNf5ItjV5GcYPbB0W8HtTvRWBmS1Nfo0cQOJY5JG9RnVDOuS-y1yUD8eNqek9ZXcwoQ&usqp=CAU',
        name: 'Lion'
    },
    {
        imageUri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png',
        name: 'News'
    },
    {
        imageUri: 'https://mooscle.com/app/uploads/2019/03/Apple-1.png',
        name: 'Apple'
    },

]

export default function Stories() {
    return (
        <FlatList
            data={data}
            keyExtractor={item => item.name}
            renderItem={({ item }) => <Story imageUri={item.imageUri} name={item.name} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.container}
        />

    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15
    }
})
