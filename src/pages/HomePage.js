import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const HomePage = ({navigation}) => {
  return (
    <View style={styles.appContainer}>
      <View style={styles.container}>
        <Text style={styles.txtHeader}>Welcome to My Personal Project</Text>
        <Button
          style={styles.btnContainer}
          title="Account"
          color={'#888'}
          onPress={() => navigation.navigate('AccountPage')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#f0f0f0',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 14,
    color: '#000',
  },
  btnContainer: {
    backgroundColor: '#f8f8f8',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
  },
});
export default HomePage;
