import React, { useState } from 'react';
import { Card, Button, TextInput } from 'react-native-paper';
import { a} from '../api/getres';
function AddRestaurant() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
    // 提交添加餐馆的操作（例如API调用）
  }

  return (
    <Card>
      <Card.Title title="添加餐馆" />
      <Card.Content>
        <TextInput
          label="餐馆名称"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          label="餐馆地址"
          value={address}
          onChangeText={setAddress}
        />
        <TextInput
          label="电话"
          value={phone}
          onChangeText={setPhone}
        />
      </Card.Content>
      <Card.Actions>
        <Button onPress={handleSubmit}>提交</Button>
      </Card.Actions>
    </Card>
  )
}

export default AddRestaurant;