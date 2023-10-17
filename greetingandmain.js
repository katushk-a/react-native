
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, FlatList, Image} from 'react-native';
import React, { useState } from 'react';
import styles from './styles.js';
import optionsArray from './data';

export function GreetingView(props){
    const onPressFunc = function(){
      props.press();
    }
    return(
      <View style={styles.container}>
        <Text style={styles.bigtext}>Hello! Unfortunately, we don't know your name.</Text>
        <View style={{margin:'3em'}}>
        <TextInput placeholder='How can we call you?' onChangeText={props.setname} style={styles.input} placeholderTextColor='#b402f5' />
        </View>
        <Button color='#b402f5' title="Press to Submit your name!" onPress={onPressFunc}/>
      </View>
    )
  }
  
  
  export function OptionsList(props){
    let options = props.options;
    const renderItem = ({ item }) => (
      <View style={styles.item}>
        <Button style={styles.itemtext} color='#b402f5' title={item.name} onPress={() => props.onpress(item.name)}/>
      </View>
    );
    return(
      <FlatList data={options} renderItem={renderItem} keyExtractor={item => item.name} />
    )
  }
  
  export function MainView(props){
    let setanotherview = (name) => {
      props.onpress(name);
    }
    return(
      <View style={styles.container}>
        <Text style={styles.bigtext}>Hello, {props.name}!</Text>
        <Text style={styles.smalltext}>In this Application You can do two things. Choose what you'd like to do now:</Text>
        <OptionsList options={optionsArray} onpress={setanotherview}/>
      </View>
    )
  }