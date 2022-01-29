import { View, Text } from 'react-native';
import React,{useEffect, useState} from 'react';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

const Vanila = () => {
    const [dataUser, setDataUser] = useState([]);

    useEffect(() => {
    fetch('http://8.215.37.21:5000/cbn/v1/user/getuser')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            setDataUser(json.data);
         
        })
     
    }, []);

    return (
        <View>
          <ScrollView>
          <Text>Test call api</Text>
          
         {
            dataUser.map((x) =>
              { 
                let y = Object.keys(x);
                return y.map((key) => 
                <Text>{`${key}:${x[key]}`}</Text>         
                  )}
              )
          }
          </ScrollView>
        </View>
      );
};

export default Vanila;
