// import Library
import React from 'react';
import { View, Text , Image } from 'react-native';

import Header from './Header';
import Card from './Card'
// write component
class App extends React.Component {
    render() {
        return (
                <View>
                    <Header title="Albums" />
                    <Card />
                
                </View>
        );
    }
}
 
// extent
export default App;
