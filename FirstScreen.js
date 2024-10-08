import React from 'react';
import {Text, View,Image,Button} from 'react-native';
const YourApp = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#00CCF9'
      }}>
      <View style={{flex: 1,  justifyContent: 'center',
        alignItems: 'center',}}>
        <Image style={{height: 140, width: 140}}
        source={{uri: 'data:image/png;base64,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'}}
        ></Image>
     </View>
     
     <View style={{flex: 1,  justifyContent: 'center',
        alignItems: 'center',}}>
        <Text style={{fontWeight: "bold"}}> GROW</Text>
        <Text style={{fontWeight: "bold"}}> YOUR BUSINESS</Text>
     </View>

      <View style={{flex: 1,  justifyContent: 'center',
        alignItems: 'center',}}>
        <Text style={{fontWeight: "bold"}}> we will help u to grow up ur business using</Text>
        <Text style={{fontWeight: "bold"}}> online server</Text>
     </View>

      <View style={{flex: 1,  justifyContent: 'space-around',
        alignItems: 'center', flexDirection: 'row'}}>
        
        <Button title = 'login' color ='yellow' ></Button>
        <Button title = 'Sign' color ='yellow' ></Button>
     </View>


    </View>
  );
};

export default YourApp;