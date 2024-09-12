import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import {Text, View,Image,Button,TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-paper';
const YourApp = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF'
      }}>

      <View style={{flex: 1, alignItems: 'center',marginTop: 30}}>
          <Text style={{fontSize: 28, fontWeight: 'bold'}}>LOGIN</Text>

      </View>
      
      <View style={{flex: 1}}>
          <TextInput placeholder='Email' style={{margin: 15}} ></TextInput>
          <TextInput placeholder='Password' style={{margin: 15}} right={<TextInput.Icon icon="eye"/>}></TextInput>

      </View>

      <View style={{flex: 1,marginTop: 60}}>
        <TouchableOpacity style={{backgroundColor: 'red',alignItems: 'center',width: '90%',height: 50,
          margin: 15,justifyContent: 'center'}}>
             <Text style={{color: 'white',fontSize:24}}>LOGIN</Text>
        </TouchableOpacity>
        </View>

      <View style={{flex: 1,alignItems:'center'}}>
            <Text style={{fontSize: 16}}>When you agree to terms and conditions</Text>
            <TouchableOpacity>
              <Text style={{color:'purple',fontSize: 16}}>Forgot your password?</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 16}}>Or login with</Text>
 
      </View>

      <View style={{flex: 1,flexDirection: 'row',justifyContent:'center'}}>
          <Image source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAA2CAYAAAAIw43zAAABjklEQVR4Xu3cMUvDUBSG4ftv3N3dddbJwcVNcKxrHEVBEEFEcbAILkXoYgeX0sFBKQhSkKI46epPuPYEYsu5xb3ne4eHQpp0eUmTm5skvf18ZsSXht/jfNbrI7i0uneVlzaPEVzyCxAToUUQWgShRRBaBKFFEFoEoUXIhF7ePs1bB7e5ddHN+zf3eeekk9erdr3crxuRROhqEnb4NS6u/zYsuN8mmvChD+8eirCewmXg0KHXJgF9VM8mdfx2EYUO3brsFmFN5+m5ntG57j/Wn367iEKHPprzt60S1gsd2qL60LaX+/UUyIW2YZVfT0G40HYGbeNk03t9KULbcbn53jCOXlC2x/q4/1nZPS9+IyJCE3oxEXq+cKE3qvbfnY+Dj1ERthlDNzhGB8BZ9xShRRBaBKFFEFoEoUUQWgShRRBaBKFFEFoEoUUQWgShRRBaROjQ9qiNhZ2lcqOBFzo0pggtgtAiCC2C0CIILYLQIggtgtAiCC2C0CKSyrNH6tLgfVS/aM0mABBX8tN4iOkX7PIwGydJR84AAAAASUVORK5CYII='}}
            style={{width:'30%',height: 40,marginLeft: 10}}
          ></Image>
            <Image source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAA4CAYAAADdC4e9AAACJ0lEQVR4Xu3dsS5DURzH8fsEEoNVUotEwgOYLOw60wdgZ2ex0AFJS0IiQWLREF0M1aUlvbcN1aaUGnRg8giHI4ab8y9uL03u+f9/w2dpcnKGb3P/J/c2t07j7UmBDI75AfDlJN26Ar4u2g+foUsvLeUMrBcU8BVLX6qDelMNb9YQW4KRrbKa2KsjtgT9qx5iS4HYgiC2IIgtCGILgtiCILYgiC2IlbGnM2U1m630TCxdJHtyYGXs3NdN/V4Z3bkie3KA2B0gdoQgdjiI3QFiR0gvY+uH/DigRUgvY8czHtmPCytjj31cZruV9OokrGkxXyV7cWJl7G7Fjz0S1nTYuCPruGEfWx+2cs8/X/b1nB7b5Xko82Mf+/TxnsQ1TR25ZB1HrGMv5G9IWBP3Oe3HNnbirELCmrarDbKOM5axMac7Yxn7t9Da+H6JrOOOXWzM6e+xih1kTuubK+Y6KdjE1nO69Noicf0kzmk/NrGDzGnJoTUWsZeKtySsSeqc9rM+9tz5NQlrkjyn/ayOHXRODzF9Pt0ta2PHUkXM6S5ZGzvInJ7/uMSb6ySzMnaQOa3l2s1Qlgs8D3PWxdZz2oz635JujezLgXWxE9nf75L9FWJHBGKHh9gdIHZEIHZ41sXWvxcz39733/QXytyXA+tiQ3iILQhiC4LYgiC2IIgtCGILMriBV1CLMXNSVX0rt8qZPHIV8DSd8dSaW/u8O5gqN/GHMJIgtiDvtT5x4b54LmkAAAAASUVORK5CYII='}}
            style={{width:'30%',height: 40}}
          ></Image>
            <Image source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAA3CAYAAAAsXTVoAAAEhUlEQVR4Xu3c329URRTA8f0TfDExMcYID0YTH5REIryYQHkgadWAEZAfUYE0KAGCoRVMgNqqQOPWQEmAoJaUgKVZBVJ+tbW1v9y2eze77d67pQWMDRgiD/wJxz033qSeM7N7t7sPM3Pn4fPS5Mw2+Wbmzt4mjc08/ROsaIjRH1jmirUmZ8Ey38D8A4gtO+fC2x2eZbjn4649xqNiY2LGxo6K/b13beyosLEjxKjY+Ucu5MZvQLb7NKTjjeB8vRtSX34CvXv3QP+hRhhqOwFjnT9AevQOm40CI2JjYIw6vm0VJN9/i7las5a5/s56GGxpilR4rWNP9XTARH0di0vR0NSNTVtg/JdLbH3TaBnbm5vwdzKNKkPjyuBRPz3rsM8zhXaxcTfLjmsZGrUY3OWpO7+yzzWBVrEzF1pZyDBo0DBGz7azz9edNrEXG3qxsU0MrkVs/CpFA5aDRgxrPGHWpU392I9HIXPyRRawHDRiGKaFRsrH9gZfBff2M2UHn6ivBaflM0jHG2Cg+Sj0fdFYuHxtZlFFTAyNlI6dn/veDx0oFRxv6ZmOE5BL9rC1Apn0sB+fBjY9NFI6drCrwwSf3LcBvHsTbA2Z6bspttNNDo2UjU13dbHg6e8OsPkw3Ice9BeO9yiERsrG9oaXs8ii4KlDH7PZcqVHovF+XM3YhRs4jSuS/enNso7uqFMydrEjfCEv18BmRc6P5atmZP4+W18XSsb2MrtYWJF84QSgsyIrmiar5vDVHFtfF2rGHlvNwjJ/rGJzMjRYJT7tzLL1daFkbHfwFR6XCHuEIxqsEhtOp9n6utA3dr6ZzcnQYJWoa7OxqypMbLzE0TkZGqwSNnaVhYltj/HyKRm71AsVP7azlc3J0GCV+Oh8hq2vCzVjO1tYXKbvBTYnQ4NVwn71qjK8fLG4Avn5K2xWpDbulLT6WIqFFcEXK3R9XSgZO//XFRZW5Pff3mCzi1UbT7OwIiPz99isLpSMjfCYpnH/F/rmc7Cmey0cTIa/lcscvpZjUUV0vpwhZWN70w0sMA39etc6X4tzhs2Hdey2y6LK6HyEI2VjzzyZYpFFoSsJHnZHB3Q+wpG6sZ/yP4jIQgfWXN8BiQd9bB3q0lw/1FxsZzGL+faWy9bRjdKx/d3937O7VGgaHZ/lZ9wuP/45rwfi2W7YNXQSlnRug2d//MC39NRXLKpIXZuj/a5Gascu8LzmskKLBHFFwgTX/VkdUD42ak62soDloIGpYsFNOL4DWsR2nnjw7s3dLGJYNK6IKPjnXVPsd9GZFrFRJcFpWJmFwU0LjbSJjTD4wWQbi1kKjVoMBtf5/XcxWsUOxLMdsDKxmUWVoUFlXirc1JtSnezzTKFlbDT8twN7hr9hYUVoVJGt/cdh8h8zbt0y2sYOBNFXJj5kkUvFxp2M370HHun9zjss7WMvlLjf5z/TN/UegJpr21ns136uh/duHfUD41s0Om86o2JbxdnYEWJjR4iNHSE7e2Ygtr+X/9d5yyxHhmbh5XYXYvQ/zlvmqb2cL0Sfs8d4lPwLmkNEkzvZ+/EAAAAASUVORK5CYII='}}
            style={{width:'30%',height: 40}}
          ></Image>
      </View>

      
    </View>
  );
};

export default YourApp;