import React from 'react';
import { View, Text, ImageBackground, Button } from 'react-native';


function Tela1({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Spider-Man 2099</Text>
      <ImageBackground source={require('../../assets/SpiderMan2099.jpg')} style={styles.background}>
        <Button title="Proxima" onPress={() => navigation.navigate('Tela2')} />
        <Button title="Principal" onPress={() => navigation.navigate('PaginaPrincipal')} />
      </ImageBackground>
    </View>
  );
}

export default Tela1;