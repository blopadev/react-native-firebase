import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import firebase from "../database/firebase";


const UserDetailScreen = (props) => {
  // console.log(props.route.params.userId)

  const getUserById = async (id) => {
    const dbRef = firebase.db.collection('users').doc(id)
    const doc = await dbRef.get();
    const user = doc.data();
    console.log(user)
  }

  useEffect(() => {
    getUserById(props.route.params.userId);
  })

  return (
    <View>
      <Text>User Detail </Text>
    </View>
  );
};

export default UserDetailScreen;