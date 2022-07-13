import React from 'react';
import { Text, View } from 'react-native';

const UpdatedComponent=OriginalComponent=>{
    class NewComponent extends React.Component{
        render(){
            return <OriginalComponent lname='Modh' />
        }
    }
    return NewComponent
}

export default UpdatedComponent