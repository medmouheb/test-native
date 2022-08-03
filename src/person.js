import * as React from 'react';
import { Button, View, Text, StyleSheet, Image  } from 'react-native';

export default function Person({ route, navigation }) {
    const { person } = route.params;
    

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.baseText}>
                username
                <Text style={styles.innerText}> {person.username}</Text>
            </Text>
            <Text style={styles.baseText}>
                first_name
                <Text style={styles.innerText}> {person.first_name}</Text>
            </Text>
            <Text style={styles.baseText}>
                last_name
                <Text style={styles.innerText}> {person.last_name}</Text>
            </Text>
            <Text style={styles.baseText}>
                username
                <Text style={styles.innerText}> {person.username}</Text>
            </Text>
            <Text style={styles.baseText}>
                email
                <Text style={styles.innerText}> {person.email}</Text>
            </Text>
            <Text style={styles.baseText}>
                avatar
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: person.avatar,
                    }}
                />
            </Text>
            <Text style={styles.baseText}>
                phone_number
                <Text style={styles.innerText}> {person.phone_number}</Text>
            </Text>
            <Text style={styles.baseText}>
                social_insurance_number
                <Text style={styles.innerText}> {person.social_insurance_number}</Text>
            </Text>
            <Text style={styles.baseText}>
                date_of_birth
                <Text style={styles.innerText}> {person.date_of_birth}</Text>
            </Text>
            <Text style={styles.baseText}>
                employment
                <Text style={styles.innerText}> {person.employment.title}</Text>
            </Text>
            <Text style={styles.baseText}>
            city
                <Text style={styles.innerText}> {person.address.city}</Text>
            </Text>
            <Text style={styles.baseText}>
            street_name
                <Text style={styles.innerText}> {person.address.street_name}</Text>
            </Text>
            <Text style={styles.baseText}>
            subscription plan
                <Text style={styles.innerText}> {person.subscription.plan}</Text>
            </Text>
            <Text style={styles.baseText}>
            payment_method
                <Text style={styles.innerText}> {person.subscription.payment_method}</Text>
            </Text>
            <Text style={styles.baseText}>
            term
                <Text style={styles.innerText}> {person.subscription.term}</Text>
            </Text>

            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    );
}

const styles = StyleSheet.create({
    baseText: {
        fontWeight: 'bold',
    },
    innerText: {
        color: 'red',
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
});