import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, FlatList, Image} from 'react-native';
import React, { useState } from 'react';
import styles from './styles.js';
import optionsArray from './data';
import { GreetingView, OptionsList, MainView } from './greetingandmain.js';
import { MemeGenerator } from './memegenerator.js';
import { Tenzies } from './tenzies.js';

export default function App() {
  const [view, setView] = useState(0);
  const [name, setName] = useState('');
  const onPress = function(){
    setView(1);
  }
    if(view == 0){
      return( <View style={styles.body}>
                <GreetingView press={onPress} setname={(newname) => setName(newname)}/>
              </View>);
    }
    else if(view==1){
      return( <View style={styles.body}>
        <MainView name={name} onpress={(id) => setView(id)}/>
      </View>);
    }
    else if(view == 'Meme Generator'){
      return(
        <View style={styles.body}>
          <MemeGenerator press={onPress}/>
        </View>
      )
    }
    else if(view == "Tenzies Game"){
      return(
        <View style={styles.body}>
          <Tenzies press={onPress}/>
        </View>
      )
    }
}

