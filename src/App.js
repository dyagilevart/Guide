import React, { useEffect, useState } from 'react';

import firebase from './firebase';
import { AppHeader } from './components/header';
import { AppTypeSort } from './components/type-of-sorting';
import { AppFooter } from './components/footer';

export default function App() {
  const [Logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection('Logos');
  console.log(ref);

  function getLogos() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setLogos(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getLogos();
  }, []);

  if (loading) {
    return <h1>loading...</h1>;
  }

  return (
    <>
      <AppHeader />
      <AppTypeSort />
      {/* Список иконок с марками */}
      {Logos.map((logo) => (
        <div kev={logo.title}>
          <h2>{logo.title}</h2>
          <p>{logo.country}</p>
        </div>
      ))}

      <AppFooter />
    </>
  );
}
//  background-color: #f3f3f3;
