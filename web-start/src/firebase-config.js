/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyB1qM2nc2iswoHAT-miNKrKkjLs6Ke5ar4",
  authDomain: "friendlychat-be024.firebaseapp.com",
  projectId: "friendlychat-be024",
  storageBucket: "friendlychat-be024.appspot.com",
  messagingSenderId: "131523961150",
  appId: "1:131523961150:web:e8f03da755b413df350c6f"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}