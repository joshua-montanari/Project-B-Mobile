import React, { useEffect, useState }from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native'
import styles from './Styles'
import Axios from 'axios'
import Match from '../../Components/Match/Match'

const Feed = () => {

    // const [matchData, setMatchData] = useState([])

        const getUserMatches = async () => {
            console.log('function start')
            const matchRes = await Axios.get('http://localhost:5000/match')
                return <Text>{matchRes.data}</Text>
            // const matches = matchRes.data
            // setMatchData(match => [...matchData, matches])
        }
        getUserMatches()
    
    return (
        <View style={styles.container}>
           <Match />
        </View>
    )
}

export default Feed
