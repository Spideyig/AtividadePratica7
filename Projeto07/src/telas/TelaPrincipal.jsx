import React from 'react';
import { View, Text, Button } from 'react-native';

function TelaPrincipal({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela Inicial - Homem-Aranha: Através do Aranhaverso</Text>
      <Button title="Tela1" onPress={() => navigation.navigate('Tela1')} />
      <Button title="Tela2" onPress={() => navigation.navigate('Tela2')} />
      <Button title="Tela3" onPress={() => navigation.navigate('Tela3')} />
      <Button title="Tela4" onPress={() => navigation.navigate('Tela4')} />
      <Button title="Tela5" onPress={() => navigation.navigate('Tela5')} />
    </View>
  );
}

export default TelaPrincipal;