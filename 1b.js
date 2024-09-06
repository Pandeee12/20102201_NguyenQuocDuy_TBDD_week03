import React from 'react';
import {Text, View,Image,Button,TouchableOpacity} from 'react-native';
const YourApp = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#C7F4F6'
      }}>
      <View style={{flex: 1,  justifyContent: 'center',
        alignItems: 'center',}}>
        <Image style={{height: 140, width: 140}}
        source={{uri: 'data:image/png;base64,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'}}
        ></Image>
     </View>
     
     <View style={{flex: 1,  justifyContent: 'center',
        alignItems: 'center',}}>
        <Text style={{fontWeight: "bold"}}> FORGET</Text>
        <Text style={{fontWeight: "bold"}}> PASSWORD</Text>
     </View>

      <View style={{flex: 1,  justifyContent: 'center',
        alignItems: 'center',}}>
        <Text style={{fontWeight: "bold"}}> Provide your account email for which you </Text>
        <Text style={{fontWeight: "bold"}}> want to reset your password</Text>
     </View>
      <View style={{flex: 1}}>
       <TouchableOpacity style={{ backgroundColor: '#C4C4C4', height: 50}} >
          <View style={{flexDirection: 'row',alignItems: 'center'}}>
            <Image source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABaCAIAAADIG8SkAAACYklEQVR4Xu3YPU/CUBiGYf0BriYdHdBBFx0kkcREw+JHHIG5jmiYMEYGjU7MLJhoNHFw0Bg3hfn9Yb60KWmPyAOlgOfkudOYyjm09LJpqQvChrZgvsCSEQhEIBCBQAQCEQhEIBCBQAQCEQhEIBCBQAQCEQhEIBCBQAQCEQhEIBCBQAQCEQhEIBCBQAQCEQhEIBCBQFkCvX18Hpb9+S4lv/rd6ZqfbIKyBGq1HxaX1+a+tNqP5ieboGkB1S6vzeFp1rhrWgOk57m3vqMrp+d1c8Z00h3p7rz1gu7aAiD/vP7+8Tkzo76O7tQP1i0A0vXZGMV19FebgCRmpHeW5MRsKvtV3XhuuxjqiHVAmt5xV7eLi8GFKTYxg44qvcuN6sRv6vYBSWC0e1zR1/VnJt9Qvjrdrb0T3eDm/omxQSuBwsL7y2o+8QdPkerk8sEpWRlwSloMpJX8Mx31Ngpv0SVj3PSNoY5uyhwLshtIegdwkdpI3+Jt9C75uhFzLMp6IElrNIqOuAEk4xuNqCPOAGm1yxudubSy+fTyao4l0wk6TSdf3TXNsV+5A6Q1bnuPl8ONxtIRx4AkdvyKZY5FD+g6oXU/6gG7BiQxI+PfI32d57/Pr985CCSDHmuNR9DRcxNIkkapdcRhIIkZpdYRt4EkMtJH0HQ64jzQ5BEIRCAQgUAEAhEIRCAQgUB2AM19+b9A351uya8elP35Lqm/iA8sSyAnIxCIQCACgQgEIhCIQCACgQgEIhCIQCACgQgEIhCIQCACgQgEIhCIQCACgQgEIhCIQCACgQgEIhCIQCACgQgE+gF519NDeTkrrQAAAABJRU5ErkJggg=='}} style={{width: 45, height:45}}></Image>
            <Text style={{alignItems: 'center', justifyContent: 'center'}}>Email</Text>
           </View>
      </TouchableOpacity>
      </View>

      <View style={{flex: 1,  justifyContent: 'space-around',
        alignItems: 'center', flexDirection: 'row'}}>
        
        <Button  title = '                                    NEXT                                  'color ='yellow' ></Button>
       
     </View>

     

    </View>
  );
};

export default YourApp;