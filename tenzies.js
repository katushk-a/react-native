import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, FlatList, Image} from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from './styles.js';


export function Heading(){
    return(
        <View>
            <Text style={styles.bigtext}>Tenzies</Text>
        </View>
    )
}

function Die(props){
    return(
    <View style={styles.dice}>
        <Button color={props.held ? "#59E391" : "#f69dfc"} title={props.value} onPress={props.hold} style={styles.dicebutton}/>
    </View>
    )
}

export function Tenzies(props){
    const [dices, setDice] = useState(allNewDices());
    const [tenzies, setTenzies] = useState(false);
    useEffect(() => {
        let firstValue = dices[0].value;
        if(dices.every((el) => el.value==firstValue) && dices.every(el => el.held)){
          setTenzies(true);
        }
      }, [dices]);
    function randomDieValue(){
        return Math.ceil(Math.random() * 6);
    }
    function allNewDices(){
        let dices = [];
        for(let i = 0; i<10; i++){
          let newDice = {
            held: false,
            value: randomDieValue(),
            id: i + 1
          };
          dices.push(newDice);
        }
        return dices;
      }
    function holdDice(id){
        setDice(element => element.map((el) => {
          return  el.id == id ? {...el, held: true} : el
        } 
        ));
      }
    function RollUnholdDices(){
        if(!tenzies){
          setDice(element => element.map((el, i) => 
          el.held ? el :
             {value: randomDieValue(), held: false, id: i+ 1}
          ));
        }else{
          setDice(allNewDices());
          setTenzies(false);
        }
      }
    const onPressFunc = function(){
        props.press();
    }
    const renderItem = ({item}) => (
        <Die held={item.held} id={item.id} value={item.value} hold={() => holdDice(item.id)}/>
    );
    return(
        <View style={styles.container}>
            <Heading/>
            <Text style={styles.smalltext}>Roll until all dice are the same. Click each die to freeze it at it's current value between rolls. If you lost the game (all dices are held and they are not the same), you need to go back to main menu, sorry, you lost :(</Text>
            <FlatList numColumns={5} data={dices} renderItem={renderItem} keyExtractor={item => item.id}/>
            <View style={{margin: '2em'}}>
            <Button color='#b402f5' onPress={RollUnholdDices} title={tenzies ? 'Play again' : 'Roll the die'}/>
            </View>
            <Button color='#b402f5' title='Go back to main page' onPress={onPressFunc}/>
        </View>
    )
}