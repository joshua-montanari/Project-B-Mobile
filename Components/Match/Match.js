import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import styles from './Styles'

const winner = 'Jush'
const loser = 'Woah'
const winnerChar = 'https://user-images.githubusercontent.com/50600343/87458439-fce92600-c5d7-11ea-9409-cc1d2b0f7c4b.png'
const loserChar = 'https://user-images.githubusercontent.com/50600343/87458220-a7147e00-c5d7-11ea-8cf3-46d40601ad9f.png'
const winnerScore = 3
const loserScore = 2
const date = '2020-07-14T19:26:58.510Z'

const Match = (props) => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.button}>
                <Image style={{width: 50, height: 50}} source={{uri: winnerChar}} />
                <Text style={styles.winner} >{winner}</Text>
                <Text style={styles.score} >{winnerScore}-{loserScore}</Text>
                <Text style={styles.loser} >{loser}</Text>
                <Image style={{width: 50, height: 50}} source={{uri: loserChar}} />
            </Pressable>
        </View>
    )
}

export default Match
