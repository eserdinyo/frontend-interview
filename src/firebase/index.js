import firebase from 'firebase'

import config from './config'

firebase.initializeApp(config);

const firestore = firebase.firestore();

export const questionsREF = firestore.collection('questions')