import React, { useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const RestaurantPicker = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState("Press the button");
  const restaurants = ["KFC", "MacDonalds", "Burger King", "Pizza Hut", "Taco Bell", "Subway", "Starbucks", "Domino's"];

  const selectRestaurant = () => {
    let index = 0;
    const intervalId = setInterval(() => {
      setSelectedRestaurant(restaurants[index]);
      index = index === restaurants.length - 1 ? 0 : index + 1;
    }, 100);

    setTimeout(() => clearInterval(intervalId), 2000); // after 2 seconds, the name will stop changing
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{selectedRestaurant}</Text>
      <Button title="Pick a restaurant" onPress={selectRestaurant}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default RestaurantPicker;