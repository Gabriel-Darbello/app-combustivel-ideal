// Import dos componentes nativos
import { Text, View, StyleSheet } from 'react-native'
// Cria o componente Result
export default function Result({ message }) {
  // Se não tiver mensagem retorna null
  if (!message) return null
  // se tiver retorna um card simples
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{message}</Text>
    </View>
  )
}
// Estilização do Card
const styles = StyleSheet.create({
  card: {
    marginTop: 24,
    padding: 20,
    backgroundColor: '#f0f4ff',
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  }
})
