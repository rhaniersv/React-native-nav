import React from 'react';
import {StyleSheet, View, TextInput, Alert, Button} from 'react-native';

export class Login extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };
  render() {
    // const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Senha"
        />
        <Button
          title="Logue-se"
          onPress={() => Alert.alert('FUNCIONA!!!', 'Você clicou no botão')}
          // onPress={() => navigate('Home')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C3E50',
  },
  input: {
    marginTop: 50,
    padding: 10,
    width: 300,
    backgroundColor: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3,
  },
  botao: {
    width: 300,
    height: 42,
    marginTop: 10,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default Login;
