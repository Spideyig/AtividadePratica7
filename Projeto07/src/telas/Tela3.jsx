import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Button } from 'react-native';

function Tela3({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Spider-Gwen</Text>
      <ImageBackground source={require('../../assets/SpiderGwen.jpg')} style={styles.background}>
        <Button title="Proxima" onPress={() => navigation.navigate('Tela4')} />
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

export default Tela3;