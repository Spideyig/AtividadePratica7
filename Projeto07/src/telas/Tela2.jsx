import React from 'react';
import { View, Text, ImageBackground, Button } from 'react-native';

function Tela2({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela 2</Text>
      <ImageBackground source={require('../../assets/SpiderManMilesMorales.jpg')} style={styles.background}>
        <Button title="Proxima" onPress={() => navigation.navigate('Tela3')} />
        <Button title="Principal" onPress={() => navigation.navigate('PaginaPrincipal')} />
      </ImageBackground>
    </View>
  );
}

export default Tela2;