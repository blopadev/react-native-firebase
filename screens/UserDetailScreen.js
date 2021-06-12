import React, { useEffect, useState } from 'react';
import { View, TextInput, ScrollView, StyleSheet, Button, ActivityIndicator, Alert } from 'react-native';
import firebase from "../database/firebase";


const UserDetailScreen = (props) => {
  // console.log(props.route.params.userId)

  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    phone: ''
  })

  const [loading, setLoading] = useState(true)

  const getUserById = async (id) => {
    const dbRef = firebase.db.collection('users').doc(id)
    const doc = await dbRef.get();
    const user = doc.data();
    setUser({
      ...user,
      id: doc.id,
    });
    setLoading(false);
  }

  useEffect(() => {
    getUserById(props.route.params.userId);
  }, [])

  const handleChangeTtext = (name, value) => {
    setUser({ ...user, [name]: value })
  }

  const deleteUser = async () => {
    const dbRef = firebase.db.collection('users').doc(props.route.params.userId);
    await dbRef.delete();
    props.navigation.navigate('UsersList')
  }

  const openConfirmationAlert = () => {
    Alert.alert('Remove The User', 'Are you sure?', [
      {text: 'Yes', onPress: () => deleteUser},
      {text: 'No', onPress: () => console.log(false)}
    ])
  }

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#9e9e9e" />
      </View>
    )
  }

  return (
    <ScrollView style={styles.container} >
      <View style={styles.inputGroup} >
        <TextInput
          placeholder="User Name"
          value={user.name}
          onChangeText={(value) => handleChangeTtext('name', value)}
        />
      </View>
      <View style={styles.inputGroup} >
        <TextInput
          placeholder="User Email"
          value={user.email}
          onChangeText={(value) => handleChangeTtext('email', value)}
        />
      </View>
      <View style={styles.inputGroup} >
        <TextInput
          placeholder="User Phone"
          value={user.phone}
          onChangeText={(value) => handleChangeTtext('phone', value)}
        />
      </View>
      <View>
        <Button color="#19AC52" title="Update User" onPress={() => alert('works')} />
      </View>
      <View>
        <Button color="#E37399" title="Delete User" onPress={() => openConfirmationAlert()} />
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

export default UserDetailScreen;