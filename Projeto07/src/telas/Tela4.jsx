import React from 'react';
import { View, Text, Button } from 'react-native';

function Tela4({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela 4</Text>
      <ImageBackground source={require('../../assets/PeterBeMayday.jpg')} style={styles.background}>
        <Button title="Proxima" onPress={() => navigation.navigate('Tela5')} />
        <Button title="Principal" onPress={() => navigation.navigate('PaginaPrincipal')} />
      </ImageBackground>
    </View>
  );
}

export default Tela4;