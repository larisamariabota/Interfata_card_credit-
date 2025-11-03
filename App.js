import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image,Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.appWrapper}>
      <View style={styles.container}>

        <Text style={styles.label}>CARD NUMBER</Text>
        <Text style={styles.cardNumber}>1234 5678 9123 4567</Text>

        {/* Card holder and expiration */}
        <View style={styles.bottomRow}>
          <View>
            <Text style={styles.label}>CARD HOLDER</Text>
            <Text style={styles.value}>John Doe</Text>
          </View>

          <View>
            <Text style={styles.label}>EXPIRES</Text>
            <Text style={styles.value}>05/27</Text>
          </View>
        </View>



        {/* Imagine sus-dreapta */}
        <Image
          source={require('./assets/cercuri.png')}
          style={styles.cercuri} ></Image>

         <Image
          source={require('./assets/cercuri.png')}
          style={styles.cercuri} ></Image>

         
        {/* Imagine dreapta-jos */}
        <Image
          source={require('./assets/visa.png')}
          style={styles.visa} ></Image>
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  appWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  container: {
    width: '92%',
    maxWidth: 420,
    height: 220,
    borderRadius: 16,
    backgroundColor: '#3843d4',
    padding: 20,
    position: 'relative',  // necesar pentru absolute
  },

  cercuri: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    position: 'absolute',
    top: 10,
    right: 10,
  },

  visa: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
cardNumber: {
    color: 'white',
    fontSize: 22,
    letterSpacing: 3,
    marginTop: 8,
    marginBottom: 20,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 'auto',
  },
  value: {
    color: 'white',
    fontSize: 16,
    marginTop: 4,
  },




});


