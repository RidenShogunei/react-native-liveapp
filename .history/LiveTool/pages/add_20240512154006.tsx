import React, { useState } from 'react';
import { Card, Button, TextInput } from 'react-native-paper';
import { addRestaurant } from '../api/getres'; // 引入你的api

function AddRestaurant({ navigation }) {
  const [name, setName] = useState('');

  const handleSubmit = async () => {
    try {
      await addRestaurant(name);
      // 清除输入框的内容
      setName('');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Card>
      <Card.Title title="添加餐馆" />
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
  )
}

export default AddRestaurant;