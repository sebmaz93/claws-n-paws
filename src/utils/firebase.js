import {firebase} from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';
import '@firebase/storage';
import {config} from './config';

// Initialize Firebase

// init firebase instace
firebase.initializeApp(config);

// init firestore
const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

export const auth = firebase.auth();
export const storageRef = firebase.storage().ref();
