import React,{ useState }from 'react';
import { Text, View } from 'react-native';
import UpdatedComponent from './HOC';

const Smart = (props) => {
    const [name, setname] = useState('Keyur');
    return (
        <View>
        <Text>Hello, my name is {name} {props.lname}!</Text>
        </View>
    );
}

export default UpdatedComponent(Smart);