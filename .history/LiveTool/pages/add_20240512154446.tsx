import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { Card, Button, TextInput } from 'react-native-paper';
import { addRestaurant, retrieveData } from '../api/getres'; // 引入你的api

function AddRestaurant({ navigation }) {
  const [name, setName] = useState('');

  const handleSubmit = async () => {
    try {
      const existingNames = await retrieveData();
      if (existingNames.includes(name)) {
        Alert.alert('错误', '该餐厅已存在！');
      } else {
        await addRestaurant(name);
        setName('');
        Alert.alert('成功', '成功添加餐厅！');
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Card>
        <Card.Title title="添加餐厅" />
        <Card.Content>
          <TextInput
            label="餐厅名称"
            value={name}
            onChangeText={setName}
          />
        </Card.Content>
        <Card.Actions>
          <Button onPress={handleSubmit}>提交</Button>
        </Card.Actions>
        <Button onPress={() => navigation.navigate('Main')}>返回</Button>
      </Card>
    </View>
  )
}

export default AddRestaurant;