import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    // const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Bem vindo ao CRUD, faça o login!</Text>
        <Button
          title="Logue-se"
          color="000"
          // onPress={() => navigate('Login')}
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
  text: {fontSize: 30, color: '#FFF'},
});
