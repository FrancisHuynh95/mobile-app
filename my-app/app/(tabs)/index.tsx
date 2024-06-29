import { Image, StyleSheet, Platform } from 'react-native';
import { firebaseConfig } from '@/constants/important';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//import of auth from firebase
import { getAuth, signInWithPhoneNumber } from "firebase/auth"

const auth = getAuth()

// const phoneNumber = getPhoneNumberFromUserInput();
// const appVerifier = window.recaptchaVerifier;

// const auth = getAuth();
// signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    // .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      // window.confirmationResult = confirmationResult;
      // ...
    // }).catch((error) => {
      // Error; SMS not sent
      // ...
    // });
// To apply the default browser preference instead of explicitly setting it.
auth.languageCode = 'it';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase

const app = initializeApp(firebaseConfig);
console.log(app)
const analytics = getAnalytics(app);
console.log(analytics)

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to Calorie Tracker!</ThemedText>
      </ThemedView>

      {/*Blocks of text*/}
      <ThemedView style={styles.stepContainer}>

        <ThemedText>
          <ThemedText type="defaultSemiBold">Stay on top of your nutrition goals with our easy-to-use app designed to help you track your daily calorie intake effortlessly. Whether you're aiming to lose weight, maintain your current weight, or simply be more mindful of your eating habits, Calorie Tracker has got you covered.</ThemedText> to see changes.
          Press{' '}
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Features:</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Quick Search: </ThemedText> <ThemedText type='defaultSemiBold'>Easily find generic calorie counts for a wide range of food items with just a few taps.</ThemedText>

        <ThemedText type="subtitle">Manual Entry: </ThemedText>
        <ThemedText type='defaultSemiBold'>Enter each ingredient and its calorie amount manually for precise tracking of your homemade meals.</ThemedText>

        <ThemedText type="subtitle">Barcode Scanning:</ThemedText>
        <ThemedText type='defaultSemiBold'>Conveniently scan the barcode of packaged foods to instantly get accurate calorie information from our comprehensive database.</ThemedText>
      </ThemedView>

      <ThemedText type='subtitle'>Start your journey towards healthier eating today with Calorie Tracker, your personal assistant for calorie counting. Download now and take the first step towards a healthier you!</ThemedText>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type='title'></ThemedText>
      </ThemedView>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
