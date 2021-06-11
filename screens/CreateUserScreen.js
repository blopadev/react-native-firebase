import React, { useState } from 'react';
import { View, Button, TextInput, ScrollView, StyleSheet } from 'react-native';
import firebase from "../database/firebase";


const CreateUserScreen = (props) => {


  const [state, setState] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const handleChangeTtext = (name, value) => {
    setState({ ...state, [name]: value })
  }

  const saveNewUser = async () => {
    if (state.name === '') {
      alert('Please provide a name')
    } else {
      try {
        await firebase.db.collection('users').add({
          name: state.name,
          email: state.email,
          phone: state.phone
        })
        props.navigation.navigate('UsersList');
      } catch (error) {
        console.log(error)
      }
    }

  }

  return (
    <ScrollView style={styles.container} >
      <View style={styles.inputGroup} >
        <TextInput
          placeholder="User Name"
          onChangeText={(value) => handleChangeTtext('name', value)}
        />
      </View>
      <View style={styles.inputGroup} >
        <TextInput
          placeholder="User Email"
          onChangeText={(value) => handleChangeTtext('email', value)}
        />
      </View>
      <View style={styles.inputGroup} >
        <TextInput
          placeholder="User Phone"
          onChangeText={(value) => handleChangeTtext('phone', value)}
        />
      </View>
      <View>
        <Button title="Save User" onPress={() => saveNewUser()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  }
})

export default CreateUserScreen;