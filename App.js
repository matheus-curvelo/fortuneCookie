import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './Style';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      image: require('./src/assets/images/fechado.png'),
      textoFrase: ''

    }

    this.quebraBiscoito = this.quebraBiscoito.bind(this)

    this.frases = [
      'Siga os bons e aprenda com eles.', 
      'O bom-senso vale mais do que muito conhecimento.', 
      'O riso é a menor distância entre duas pessoas.', 
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'
    ]
  }

  quebraBiscoito() {
    let random = Math.floor(Math.random() * this.frases.length )

    this.setState({
      textoFrase: '"' + this.frases[random] + '"',
      image: require('./src/assets/images/aberto.png'),
    })
  }

  render() {

    return (
      <View style={styles.container}>
        <Image style={styles.image} source={this.state.image} />

        <Text style={styles.text}>
          {this.state.textoFrase}
        </Text>

        <TouchableOpacity style={styles.buttonArea} onPress={this.quebraBiscoito}>
          <Text style={styles.buttonText}>Abrir o biscoito</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

export default App