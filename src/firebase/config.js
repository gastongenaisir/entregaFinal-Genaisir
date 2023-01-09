import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: 'AIzaSyDK3jUF6Av8-OZQaENqP6JSwlFpOD-f4yI',
  authDomain: 'e-commerce-audiophile.firebaseapp.com',
  projectId: 'e-commerce-audiophile',
  storageBucket: 'e-commerce-audiophile.appspot.com',
  messagingSenderId: '668140410512',
  appId: '1:668140410512:web:eb4bda04d111f078f22a15',
};

const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
  return app;
};
