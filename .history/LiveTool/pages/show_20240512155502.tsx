import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Alert } from 'react-native';
import { List, IconButton, Card, Button } from 'react-native-paper';
import { retrieveData, deleteRestaurant } from '../api/getres';
import { Dimensions } from 'react-native';
function RestaurantList({ navigation }) {
  const [restaurants, setRestaurants] = useState([]);
  
  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const res = await retrieveData();
    setRestaurants(res || []);
  }

  const handleDelete = async (name) => {
    try {
      await deleteRestaurant(name);
      Alert.alert('成功', `成功删除餐厅 ${name}`);
      fetchRestaurants();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Card style={styles.card}>
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
      <Button mode="contained" onPress={() =>  navigation.goBack()}>
        返回
      </Button>
    </Card>
  );
}

const styles = StyleSheet.create({
    card: {
        height: Dimensions.get('window').height,
        margin: 10,
        padding: 10,
      },
});

export default RestaurantList;