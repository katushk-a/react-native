import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    input:{
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius:10,
        borderBottomLeftRadius: 10,
        borderBottomColor:'#b402f5',
        borderTopColor:'#b402f5',
        borderRightColor:'#b402f5',
        borderLeftColor:'#b402f5',
        fontSize: '2em',
        padding: '1em'
    },
    memegeninput:{
            borderLeftWidth: 1,
            borderTopWidth: 1,
            borderRightWidth: 1,
            borderBottomWidth: 1,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomRightRadius:10,
            borderBottomLeftRadius: 10,
            borderBottomColor:'#b402f5',
            borderTopColor:'#b402f5',
            borderRightColor:'#b402f5',
            borderLeftColor:'#b402f5',
            padding: '1em'
    },
    body:{
        backgroundColor: '#b402f5'
    },
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      padding: '10%',
      margin:'10%',
      borderRadius: '10px'
    },
    bigtext: {
      color: '#b402f5',
      fontFamily: 'Verdana',
      fontSize: '3em',
      fontWeight: 'bold'
    },
    smalltext:{
        color: '#b402f5',
        fontFamily: 'Verdana',
        fontSize: '1.2em'
    },
    button:{
        backgroundColor: '#b402f5',
        color:'white'
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
    itemtext:{
        backgroundColor:'#b402f5',
        fontFamily: 'Verdana',
        fontSize: '1.5em',
        fontWeight: 'bold',
        color:'white',
        borderRadius:'5px',
        padding: 20,
    },
    image:{
        width:400,
        height: 300
    },
    dice:{
        marginVertical: '2em',
        padding: '1em',
    },
    dicebutton:{
        fontSize: '1.5em'
    },
    dicescontainer:{
        flex:1,
        flexDirection: 'row'
    },
    toptext:{
        position: 'relative',
        top:-300,
        fontFamily: 'impact',
        fontSize: '2em',
        color:'white',
        textShadowColor: 'black',
        textShadowOffset: {width: '2px', height: '2px'},
        textShadowRadius: 0
    },
    bottomtext:{
        position: "relative",
        top: -80,
        fontFamily: 'impact',
        fontSize: '2em',
        color:'white',
        textShadowColor: 'black',
        textShadowOffset: {width: '2px', height: '2px'},
        textShadowRadius: 0
    }
  });

export default styles;