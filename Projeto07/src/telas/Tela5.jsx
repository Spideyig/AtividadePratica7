import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Button } from 'react-native';

function Tela1({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Spot - Villano</Text>
      <ImageBackground source={require('../../assets/Spot.jpg')} style={styles.background}>
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

export default Tela1;