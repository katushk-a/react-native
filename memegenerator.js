import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, FlatList, Image} from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from './styles.js';


export function Heading(){
    return(
        <View>
            <Text style={styles.bigtext}>Meme Generator</Text>
        </View>
    )
}

export function Form(){
    const [topValue, setTopValue] = useState('Shut up');
    const [bottomValue, setBottomValue] = useState('And take my money');
    const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg");
    const [memesData, setMemesData] = useState([]);
    const getMemes = () => {
        return fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(json => {
           setMemesData(json.data.memes)
        })
        .catch(error => {
      console.error(error);
        });
    }
    const changeImage = function(){
        let memes=memesData;
        let randomImage = memes[Math.floor(Math.random() * memes.length)].url;
        setMemeImage(randomImage);
    } 
    useEffect(() => {
        getMemes();
      });

    return(
        <View>
            <View style={{margin: '.5em'}}>
            <TextInput value={topValue} key='top-text' placeholder='Shut up' onChangeText={(newvalue) => setTopValue(newvalue)} style={styles.memegeninput} placeholderTextColor='#b402f5'/>
            </View>
            <View style={{margin: '.5em'}}>
            <TextInput value={bottomValue} name='bottom-text' placeholder='And take my money' onChangeText={(newvalue) => setBottomValue(newvalue)} style={styles.memegeninput} placeholderTextColor='#b402f5'/>
            </View>
            <View style={{margin: '.5em'}}>
            <Button title='Change image!' color='#b402f5' onPress={changeImage}/>
            </View>
            <View>
                <Image style={styles.image} source={{uri: memeImage}}/>
                <Text style={styles.toptext}>{topValue}</Text>
                <Text style={styles.bottomtext}>{bottomValue}</Text>
            </View>
        </View>
    )
    
}

export function MemeGenerator(props){
    const onPressFunc = function(){
        props.press();
      }
    return(
        <View style={styles.container}>
            <Heading/>
            <Form/>
            <View style={{margin: '1.5em'}}>
            <Button color='#b402f5' title='Go back to main page' onPress={onPressFunc}/>
            </View>
        </View>
    )
}