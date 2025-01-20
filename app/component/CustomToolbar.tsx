import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CustomToolbar = ({ title, onBackPress }: { title: string, onBackPress: () => void }) => {
  return (
    <View style={styles.container}>
      {/* Tombol Kembali */}
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <FontAwesome name="arrow-left" size={21} color="#333" />
      </TouchableOpacity>

      {/* Judul */}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    paddingHorizontal: 5,
    paddingVertical:10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  backButton: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    color: '#333',
    marginLeft: 20,
  },
});

export default CustomToolbar;
