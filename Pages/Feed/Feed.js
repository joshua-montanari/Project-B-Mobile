import React, { useEffect, useState }from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native'
import styles from './Styles'
import Axios from 'axios'
import Match from '../../Components/Match/Match'

const Feed = () => {

    const [matchData, setMatchData] = useState()

    useEffect(() => {
        const getUserMatches = async () => {

            const matchRes = await Axios.get('http://localhost:5000/match')
                // console.log(matchRes.data)
                setMatchData(matchRes.data)
            
        }
        getUserMatches()
    }, [])
        
    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Recent Matches:</Text>
            </View>
           <FlatList 
                data={matchData}
                renderItem={({item}) => <Match data={item} />}
                showsVerticalScrollIndicator={false}
                style={styles.list}
           />
        </View>
    )
}

export default Feed
