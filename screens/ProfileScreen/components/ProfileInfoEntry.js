import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

function ProfileInfoEntry({ entryname, entryinfo }) {
  return (
    <View>
      <Text>
           <Text style={styles.highlight}>{entryname}: </Text> {entryinfo}
        </Text>
    </View>
  )
}

export default ProfileInfoEntry

const styles = StyleSheet.create({
    highlight: {
      fontWeight: 'bold',
    },
  });