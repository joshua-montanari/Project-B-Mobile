import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import styles from './Styles'

// const winner = 'Jush'
// const loser = 'Woah'
// const winnerChar = 'https://user-images.githubusercontent.com/50600343/87458439-fce92600-c5d7-11ea-9409-cc1d2b0f7c4b.png'
// const loserChar = 'https://user-images.githubusercontent.com/50600343/87458220-a7147e00-c5d7-11ea-8cf3-46d40601ad9f.png'
// const winnerScore = 3
// const loserScore = 2
// const date = '2020-07-14T19:26:58.510Z'



const Match = (props) => {

    const {winnerName, loserName, winnerCharIMG, loserCharIMG, winnerScore, loserScore, _id } = props.data
    console.log('using match component')

    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={() => console.warn(_id + ' Match Clicked')}>
                <Image style={{width: 50, height: 50}} source={{uri: winnerCharIMG}} />
                <Text style={styles.winner} >{winnerName}</Text>
                <Text style={styles.score} >{winnerScore}-{loserScore}</Text>
                <Text style={styles.loser} >{loserName}</Text>
                <Image style={{width: 50, height: 50}} source={{uri: loserCharIMG}} />
            </Pressable>
        </View>
    )
}

export default Match
