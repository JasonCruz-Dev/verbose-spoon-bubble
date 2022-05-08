import { StyleSheet, Text, View, TextInput, StatusBar, Dimensions } from 'react-native'
import React, { useState } from 'react'
import colors from '../misc/colors';
import RoundIconBtn from '../components/RoundIconBtn';

const Intro = () => {
  
    const [user,setUser] = useState();
    const handleOnChangeText = (text) => setUser(text);

    return (
      <>
      <StatusBar hidden />
      <View style={styles.container}>
      <Text style={styles.inputTitle}>
          Enter your name to continue
      </Text>
      <TextInput 
      value={user}
      onChangeText={handleOnChangeText} 
      placeholder='Enter Name ' 
      style={styles.textInput}
      />
        <RoundIconBtn antIconName='arrowright' />
    </View>
    </>
  )
};

const  width  = Dimensions.get('window').width - 50
console.log(width)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        borderWidth: 2,
        borderColor: colors.PRIMARY,
        color: colors.PRIMARY,
        width,
        height: 50,
        borderRadius: 10,
        paddingLeft: 15,
        fontSize: 25,
        marginBottom: 15,
    },
    inputTitle: {
      alignSelf: 'flex-start',
      paddingLeft: 25,
      marginBottom: 5,
      opacity: 0.5,
    }
});

export default Intro



