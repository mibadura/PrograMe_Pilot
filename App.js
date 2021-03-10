import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, View, Button } from 'react-native';
import Welcome from './screens/welcome'

import { mainStyles } from './styles/mainStyles';


export default function App() {
  const [name, setName] = useState('mibadura');
  const [person, setPerson] = useState({name: 'Kasia', personality: 'amazing'})

  const clickHandler = () => {
    setName('a cool dude');
    setPerson({name: 'The Boring Dude', personality: 'boring'});
  }
  
  return (
    <Welcome/>
  )
}


