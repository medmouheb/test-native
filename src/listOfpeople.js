const axios = require('axios');

import * as React from 'react';
import { useEffect, useState } from "react"
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button } from 'react-native';


export default function ListOfPeople({ navigation }) {


    const [people, setpeople] = useState([])
    useEffect(async () => {


        const result1 = await axios(
            'https://dummyjson.com/users',
        );
        setpeople(result1.data.users);
    }, []);

    return (
        <SafeAreaView style={styles.container}>

            {people.map(person => {
                return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.baseText}>
                        username
                        <Text style={styles.innerText}> {person.username}</Text>
                    </Text>

                    <Text style={styles.baseText}>
                        age
                        <Text style={styles.innerText}> {person.age}</Text>
                    </Text>
                    <Text style={styles.baseText}>
                        avatar
                        <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: person.image,
                            }}
                        />
                    </Text>
                    <Button
                        title="Go to Person Details"
                        onPress={() => {
                            navigation.navigate('Person', person);
                        }}
                    />
                </View>
            })}


            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    baseText: {
        fontWeight: 'bold',
    },
    innerText: {
        color: 'red',
    },
    tinyLogo: {
        width: 50,
        height: 50,
    }
});