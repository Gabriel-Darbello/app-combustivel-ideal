import { useState } from 'react'
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Header from './src/components/Header'
import Result from './src/components/Result'

export default function App() {
  const [gasolina, setGasolina] = useState('')
  const [etanol, setEtanol] = useState('')
  const [resultado, setResultado] = useState('')

  function verificar() {
    const g = parseFloat(gasolina)
    const e = parseFloat(etanol)

    if (!g || !e) return

    const proporcao = e / g
    const percentual = (proporcao * 100).toFixed(0)

    if (proporcao <= 0.7) {
      setResultado(`Abasteça com etanol, ele está custando ${percentual}% da gasolina`)
    } else {
      setResultado(`Abasteça com gasolina, o etanol está custando ${percentual}% da gasolina`)
    }
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.form}>
        <TextInput
          placeholder="Preço da Gasolina"
          keyboardType="numeric"
          value={gasolina}
          onChangeText={setGasolina}
          style={styles.input}
        />
        <TextInput
          placeholder="Preço do Etanol"
          keyboardType="numeric"
          value={etanol}
          onChangeText={setEtanol}
          style={styles.input}
        />

        <TouchableOpacity onPress={verificar} style={styles.button}>
          <Text style={styles.buttonText}>Verificar Vantagem</Text>
        </TouchableOpacity>

        <Result message={resultado} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  form: {
    flex: 1,
    padding: 20,
    gap: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: 'blue',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
