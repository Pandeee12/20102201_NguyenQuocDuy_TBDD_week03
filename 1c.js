import React from 'react';
import {Text, View,Image,Button,TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-paper';
const YourApp = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#C7F4F6'
      }}>
      <View style={{flex: 1}}>

      </View>
      <View style={{flex: 1,  justifyContent: 'center',
        alignItems: 'center',}}>
        <Text style={{fontSize: 66,fontWeight: 'bold'}}>CODE</Text>
     </View>
     
     <View style={{flex: 1,  justifyContent: 'center',
        alignItems: 'center',}}>
        <Text style={{fontWeight: "bold",fontSize: 25}}> VERIFICATION</Text>
     </View>

      <View style={{flex: 1,  justifyContent: 'center',
        alignItems: 'center',}}>
        <Text style={{fontWeight: "bold",fontSize: 20}}> Enter ontime password sent on </Text>
        <Text style={{fontWeight: "bold",fontSize: 20}}> ++849092605798</Text>
     </View>
      <View style={{flexDirection: 'row',justifyContent: 'center'}}>
          <TextInput style={{width: 50,  borderColor: 'black', borderWidth: 1,
              height:50,alignItems: 'center',justifyContent:'center',textAlign: 'center'}}>
          </TextInput>

          <TextInput style={{width: 50,  borderColor: 'black', borderWidth: 1,
            height:50,alignItems: 'center',justifyContent:'center',textAlign: 'center'}}>
          </TextInput>

          <TextInput style={{width: 50,  borderColor: 'black', borderWidth: 1,
            height:50,alignItems: 'center',justifyContent:'center',textAlign: 'center'}}>
          </TextInput>

          <TextInput style={{width: 50,  borderColor: 'black', borderWidth: 1,
            height:50,alignItems: 'center',justifyContent:'center',textAlign: 'center'}}>
          </TextInput>

          <TextInput style={{width: 50,  borderColor: 'black', borderWidth: 1,
            height:50,alignItems: 'center',justifyContent:'center',textAlign: 'center'}}>
          </TextInput>

          <TextInput style={{width: 50,  borderColor: 'black', borderWidth: 1,
            height:50,alignItems: 'center',justifyContent:'center',textAlign: 'center'}}>
          </TextInput>

      </View>

      <View style={{flex: 1,  justifyContent: 'space-around',
        alignItems: 'center', flexDirection: 'row'}}>
          <TouchableOpacity style={{backgroundColor: 'yellow',width: 300, height: 40, alignItems: 'center',justifyContent: 'center'}}>
            <Text style={{fontWeight: 'bold'}}>VERIFY CODE</Text>
          </TouchableOpacity>
     </View>

     

    </View>
  );
};

export default YourApp;