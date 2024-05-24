import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, TextInput } from 'react-native';
import React from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function CalorieGoal() {
    const [text, useText] = React.useState('0')
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
            headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">This is where you enter your daily calorie goal</ThemedText>
            </ThemedView>
            <ThemedView>
                <TextInput
                    keyboardType='numeric'
                    placeholder='Enter your calorie goal'
                    onChangeText={useText}
                    value={text}
                    style={styles.input}
                />
            </ThemedView>
            <ThemedView>
                <button>Update</button>
            </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
    input: {
        backgroundColor: "white"
    }
});
