import { Text, View, StyleSheet } from 'react-native'

export default function Result({ message }) {
  if (!message) return null

  return (
    <View style={styles.card}>
      <Text style={styles.text}>{message}</Text>
    </View>
  )
}

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
