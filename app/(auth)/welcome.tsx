import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Welcome = () => {
    return (
        <View>
            <Text style={styles.welcomeText}>Welcome</Text>
        </View>
    );
};

export default Welcome;

const styles = StyleSheet.create({
    welcomeText: {
        color: 'red'
    }
});