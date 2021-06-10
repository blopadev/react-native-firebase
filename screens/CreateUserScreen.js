import React, { useState } from 'react';
import { View, Button, TextInput, ScrollView, StyleSheet } from 'react-native';


const CreateUserScreen = () => {


  const [state, setState] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const handleChangeTtext = (name, value) => {
    setState({ ...state, [name]: value })
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
        <Button title="Save User" onPress={() => console.log(state)} />
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