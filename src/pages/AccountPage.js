import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ProfileImage from '../../assets/img/profile.png';
const AccountPage = () => {
  return (
    <View style={styles.appContainer}>
      <View style={styles.container}>
        <Image style={styles.image} source={ProfileImage} />
      </View>
      <View>
        <Text style={styles.name}>Hendri Gunawan</Text>
      </View>
      <View style={styles.bioContainer}>
        <Text style={styles.bio}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut
          ultricies velit. Proin at nisi nisl. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Etiam eu
          tincidunt dui. Quisque non ornare ex, facilisis congue enim. In neque
          nulla, posuere at gravida id, dapibus et libero.
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#f8f8f8',
    height: '100%',
  },
  container: {
    alignItems: 'center',
  },
  image: {
    marginTop: 16,
    borderRadius: 100,
    height: 80,
    width: 80,
  },
  name: {
    color: '#333',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 12,
  },
  bioContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    margin: 16,
  },
  bio: {
    marginHorizontal: 20,
    marginVertical: 20,
    color: '#333',
    fontSize: 18,
  },
});
export default AccountPage;
