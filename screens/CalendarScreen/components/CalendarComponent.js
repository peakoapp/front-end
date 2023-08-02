import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Agenda } from 'react-native-calendars';
import EventBlock from './EventBlock';  // Assuming you've exported it from this path

const CalendarComponent = () => {
  const [items, setItems] = useState({});
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventTitle, setEventTitle] = useState('');

  const [isStartTimePickerVisible, setStartTimePickerVisible] = useState(false);
  const [isEndTimePickerVisible, setEndTimePickerVisible] = useState(false);
  const [eventStartTime, setEventStartTime] = useState(new Date());
  const [eventEndTime, setEventEndTime] = useState(new Date());

  const [refreshKey, setRefreshKey] = useState(0);


  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  const loadItems = (day) => {
    setTimeout(() => {
      const newItems = { ...items }; // Create a shallow copy of items state
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = new Date(time).toISOString().split('T')[0];
        if (!newItems[strTime]) {
          newItems[strTime] = [];
        }
      }
      setItems(newItems);
    }, 1000);
  };

  const showStartTimePicker = () => {
    setStartTimePickerVisible(true);
  };

  const showEndTimePicker = () => {
    setEndTimePickerVisible(true);
  };

  const onStartTimeChange = (event, selectedDate) => {
    const currentDate = selectedDate || eventStartTime;
    setEventStartTime(currentDate);
    setStartTimePickerVisible(false);
  };

  const onEndTimeChange = (event, selectedDate) => {
    const currentDate = selectedDate || eventEndTime;
    setEventEndTime(currentDate);
    setEndTimePickerVisible(false);
  };

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
    toggleModal();
  };

  const handleAddEvent = () => {
    if (eventTitle.trim() === '') {
      Alert.alert('Error', 'Event title cannot be empty!');
      return;
    }
  
    const startTimeString = eventStartTime.toISOString();
    const endTimeString = eventEndTime.toISOString();
  
    if (items[selectedDate]) {
      setItems(prevItems => ({
        ...prevItems,
        [selectedDate]: [
          ...prevItems[selectedDate],
          { name: eventTitle, startTime: startTimeString, endTime: endTimeString, date: selectedDate } // include the date information
        ]
      }));
    } else {
      setItems(prevItems => ({
        ...prevItems,
        [selectedDate]: [{ name: eventTitle, startTime: startTimeString, endTime: endTimeString, date: selectedDate }] // include the date information
      }));
    }
    setEventTitle('');
    toggleModal();
  };
  
  const handleDeleteEvent = (itemToDelete) => {

    const { date } = itemToDelete;
    Alert.alert(
      "Delete Event",
      "Are you sure you want to delete this event?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { 
          text: "OK", 
          onPress: () => {
            if (items[date]) {
        
              setItems(prevItems => {
                const newItems = {...prevItems};
                newItems[date] = newItems[date].filter(
                  (item) => item.startTime !== itemToDelete.startTime || item.endTime !== itemToDelete.endTime
                );
                return newItems;
              });
              setRefreshKey((oldKey) => oldKey + 1);
              
            }
          } 
        }
      ],
      { cancelable: false }
    );
  };
  

  return (
    <View style={styles.container}>
      <Agenda
        items={items}
        onDayPress={handleDayPress}
        loadItemsForMonth={loadItems}
        selected={new Date().toISOString().split('T')[0]}  
        key={refreshKey} 
        renderItem={(item, firstItemInDay) => {
          return (
            <TouchableOpacity
              onLongPress={() => handleDeleteEvent(item)} // pass the entire item object instead of just the date
            >
              <EventBlock
                title={item.name}
                startTime={item.startTime}
                endTime={item.endTime}
              />
            </TouchableOpacity>
          );
        }}
        
        
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <TouchableWithoutFeedback onPress={toggleModal}>
          <View style={styles.centeredView}>
            <TouchableWithoutFeedback onPress={() => { }}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Add Event</Text>
                <TextInput
                  style={styles.modalInput}
                  placeholder="Enter Event Title"
                  value={eventTitle}
                  onChangeText={setEventTitle}
                />
                <TouchableOpacity onPress={showStartTimePicker}>
                  <Text>Start Time: {formatTime(eventStartTime)}</Text>
                </TouchableOpacity>
                {isStartTimePickerVisible && (
                  <DateTimePicker
                    value={eventStartTime}
                    mode={'time'}
                    is24Hour={false}
                    display="default"
                    onChange={onStartTimeChange}
                  />
                )}
                <TouchableOpacity onPress={showEndTimePicker}>
                  <Text>End Time: {formatTime(eventEndTime)}</Text>
                </TouchableOpacity>
                {isEndTimePickerVisible && (
                  <DateTimePicker
                    value={eventEndTime}
                    mode={'time'}
                    is24Hour={false}
                    display="default"
                    onChange={onEndTimeChange}
                  />
                )}
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleAddEvent}
                >
                  <Text style={styles.buttonText}>Add Event</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalInput: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    elevation: 2,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CalendarComponent;
