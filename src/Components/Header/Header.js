import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Style';
import Icon from 'react-native-vector-icons/AntDesign';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Litoral Perfume</Text>
      <TouchableOpacity style={styles.icon}>
        <Icon name="cart-outline" size={20} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
