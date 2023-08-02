import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EventBlock = ({ title, startTime, endTime }) => {
  const start = new Date(startTime);
  const end = new Date(endTime);

  
  // Ensure that startTime and endTime are valid
  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    throw new Error('Invalid start or end time');
  }

  const durationInHours = Math.abs(end - start) / 36e5;  // convert milliseconds to hours
  const height = durationInHours * 60;  // assuming 1 hour corresponds to 60px

  return (
    <View style={{...styles.eventBlock, height}}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  eventBlock: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    color: 'white',
  },
});

export default EventBlock;
