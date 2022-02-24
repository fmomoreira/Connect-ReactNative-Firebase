import React, { useState } from 'react';
import './App.css';
import firebase from "./firebase/firebaseconfig"


function App() {
  const [price, setPrice] = useState(0)

  const database = firebase.firestore()

  const getSumPrices  = database.collection('finance')
  .onSnapshot(querySnapshot => {
    const data  = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data()
      }
    }) 
    const prices = data.map((item)=>{
      return (
        item.price
      )
    })
    
    let total = prices.reduce((total, prices) => total + prices, 0);
    setPrice(total)
    return () => getSumPrices();
  })
  

  
  return (
    <div className="App">
        <h1>${price.toFixed(2)}</h1>
    </div>
  );
}

export default App;
