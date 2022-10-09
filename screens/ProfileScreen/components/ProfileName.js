import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

function ProfileName({ name }) {
  return (
    <View>
        <Text style={styles.username}>{name}</Text> 
    </View>
  )
}

export default ProfileName

const styles = StyleSheet.create({
    username: {
      fontWeight: 'bold',
      fontSize: 25
    },
  });