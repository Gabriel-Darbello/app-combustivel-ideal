import { Text, View, StyleSheet } from 'react-native'

export default function Header() {
  return (
    <View style={styles.container}> 
      <Text style={styles.title}>ÁLCOOL OU GASOLINA</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
})
