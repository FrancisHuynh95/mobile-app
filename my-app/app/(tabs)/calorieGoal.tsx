import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, TextInput } from 'react-native';
import React, { useEffect } from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Collapsible } from '@/components/Collapsible';
import  { api } from '../../constants/important'

export default function CalorieGoal() {
    const [text, useText] = React.useState('0')
    const [query, setQuery] = React.useState([])

    async function testFunc():Promise<object>{
        let test = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/list?api_key=${api}`)
        // console.log('test', test)
        let res = await test.json()
        return {data: res,
                status: 200
        }
    }

    function onSubmit():void{
        console.log(`This function will save the calories the user entered to the backend. The entered calories is: ${text}`)
    }

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
            headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">This is where you enter your daily calorie goal</ThemedText>
            </ThemedView>
            <Collapsible
            title='Change your target calories here'
            >
                <ThemedView>
                    <TextInput
                        inputMode='numeric'
                        placeholder='Enter your calorie goal'
                        onChangeText={useText}
                        value={text}
                        style={styles.input}
                    />
                </ThemedView>
                <ThemedView>
                    <button onClick={() => onSubmit()}>Update</button>
                </ThemedView>
            </Collapsible>
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
        backgroundColor: "white",
        borderRadius: 5,
    }
});
