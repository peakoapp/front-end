import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

function ProfileLocation({ loc }) {
  return (
    <View>
        <Text style={styles.loc}>{loc}</Text> 
    </View>
  )
}

export default ProfileLocation

const styles = StyleSheet.create({
    loc: {
    },
  });