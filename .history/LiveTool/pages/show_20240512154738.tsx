import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Alert } from 'react-native';
import { List, IconButton } from 'react-native-paper';
import { getAllRestaurants, deleteRestaurant } from '../api/g';

function RestaurantList({ navigation }) {
  const [restaurants, setRestaurants] = useState([]);
  
  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const res = await getAllRestaurants();
    setRestaurants(res);
  }

  const handleDelete = async (name) => {
    try {
      await deleteRestaurant(name);
      Alert.alert('删除成功', `成功删除餐厅 ${name}`);
      fetchRestaurants(); 
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => (
          <List.Item
            title={item}
            right={() => (
              <IconButton
                icon="delete"
                color="#F00"
                size={20}
                onPress={() => handleDelete(item)}
              />
            )}
          />
        )}
        keyExtractor={item => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
  },
});

export default RestaurantList;