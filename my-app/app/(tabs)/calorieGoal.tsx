import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, TextInput } from 'react-native';
import React from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { api } from '../../constants/important'

export default function CalorieGoal() {
    const [text, useText] = React.useState('2800')
    const [query, setQuery] = React.useState([])

    // test barcode number 818094005777 === Rockstar energy drink


    // React.useEffect(() => {
    //     async function testFunc(): Promise<void> {
    //         let test = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/list?api_key=${api}`)
    //         if (test.ok) {
    //             const res = await test.json()
    //             setQuery(res)
    //         }
    //     }
    //     testFunc()
    // }, [])

    function onSubmit(): void {
        alert(`This function will save the calories the user entered to the backend. The entered calories is: ${text}`)
        console.log(query)
    }

    const testInfo:any = {
        1: {
            name: "Rockstar",
            calories: "123"
        },
        2: {
            name: "Monster",
            calories: "456"
        },
        3: {
            name: "Red Bull",
            calories: "789"
        },
        4: {
            name: "Celsius",
            calories: "102"
        },
    }

    const testArr: any = Object.keys(testInfo)
    let remainingCalories:number = parseInt(testArr.reduce((acc:string, x:string) => parseInt(acc) - parseInt(testInfo[x].calories), text as string))

    const handleDelete = () => {
        alert("This button will delete the calorie entry")
    }

    const handleModify = () => {
        alert("This button will modify the calorie entry")
    }

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
            headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">This is where you enter your daily calorie goal</ThemedText>
            </ThemedView>
            <ThemedView>
                <ThemedText type='subtitle'>{`Current Calorie Goal: ${text}`}</ThemedText>
                <ThemedText type='subtitle'>Change your target calories here</ThemedText>
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

            <ThemedView>
                <ThemedText type="subtitle">Add calories Here</ThemedText>
                <button>Button to open modal</button>
            </ThemedView>

            <ThemedView>
                <ThemedText type='subtitle'>{`Remaining Calories: ${remainingCalories}`}</ThemedText>
                <ThemedText type='title'>Today's History</ThemedText>
                {testArr.map((x: any) =>
                    <>
                        <ThemedText type="default">{`${testInfo[x].name} - ${testInfo[x].calories}`}</ThemedText>
                        <button onClick={() => handleModify()}>Modify</button>
                        <button onClick={() => handleDelete()}>Delete</button>
                    </>
                )
                }
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
        backgroundColor: "white",
        borderRadius: 5,
    }
});
