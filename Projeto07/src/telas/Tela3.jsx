import React from 'react';
import { View, Text, ImageBackground, Button } from 'react-native';

function Tela3({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela 3</Text>
      <ImageBackground source={require('../../assets/SpiderGwen.jpg')} style={styles.background}>
        <Button title="Proxima" onPress={() => navigation.navigate('Tela4')} />
        <Button title="Principal" onPress={() => navigation.navigate('PaginaPrincipal')} />
      </ImageBackground>
    </View>
  );
}

export default Tela3;