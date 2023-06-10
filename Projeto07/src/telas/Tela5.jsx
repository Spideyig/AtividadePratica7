import React from 'react';
import { View, Text, ImageBackground, Button } from 'react-native';

function Tela1({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela 5</Text>
      <ImageBackground source={require('../../assets/Spot.jpg')} style={styles.background}>
        <Button title="Principal" onPress={() => navigation.navigate('PaginaPrincipal')} />
      </ImageBackground>
    </View>
  );
}

export default Tela1;