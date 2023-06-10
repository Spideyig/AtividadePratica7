import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Button } from 'react-native';

function Tela2({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Spider-Man Miles Morales</Text>
      <ImageBackground source={require('../../assets/SpiderManMilesMorales.jpg')} style={styles.background}>
        <Button title="Proxima" onPress={() => navigation.navigate('Tela3')} />
        <Button title="Principal" onPress={() => navigation.navigate('TelaPrincipal')} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', 
    width: '100%',
    height: '100%',
  },
});

export default Tela2;