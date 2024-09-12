import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const YourApp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [selectedGender, setSelectedGender] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>REGISTER</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput 
          placeholder='Name' 
          style={styles.input}
        />
        <TextInput 
          placeholder='Phone' 
          style={styles.input}
        />
        <TextInput 
          placeholder='Email' 
          style={styles.input}
        />
        <TextInput 
          placeholder='Password' 
          secureTextEntry={!passwordVisible} 
          right={
            <TextInput.Icon
              icon={passwordVisible ? "eye-off" : "eye"}
              onPress={() => setPasswordVisible(!passwordVisible)}
            />
          } 
          style={styles.input}
        />
        <TextInput 
          placeholder='Birthday' 
          style={styles.input}
        />

        <View style={styles.genderContainer}>
          <TouchableOpacity
            style={[styles.checkbox, selectedGender === 'male' && styles.checkedCheckbox]}
            onPress={() => setSelectedGender('male')}
          >
            {selectedGender === 'male' && <AntDesign name="checkcircle" size={24} color="black" />}
          </TouchableOpacity>
          <Text style={styles.genderText}>Male</Text>
          <TouchableOpacity
            style={[styles.checkbox, selectedGender === 'female' && styles.checkedCheckbox, {marginLeft: 20}]}
            onPress={() => setSelectedGender('female')}
          >
            {selectedGender === 'female' && <AntDesign name="checkcircle" size={24} color="black" />}
          </TouchableOpacity>
          <Text style={styles.genderText}>Female</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.registerbutton}>
          <Text style={styles.registerbuttonText}>REGISTER</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.termsText}>When you agree to terms and conditions</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  formContainer: {
    flex: 2,
    paddingHorizontal: 15,
  },
  input: {
    marginVertical: 8,
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  checkbox: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedCheckbox: {
    backgroundColor: '#007AFF',
  },
  genderText: {
    fontSize: 16,
    marginLeft: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  registerbutton: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 50,
    margin: 10,
    borderRadius: 25,
  },
  registerbuttonText: {
    color: 'white',
    fontSize: 20,
  },
  termsText: {
    fontSize: 16,
    alignSelf: 'center',
    marginTop: 20,
  }
});

export default YourApp;
