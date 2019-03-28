// import Library
import React from 'react';
import { View, Text  } from 'react-native';

import Header from './Header'
// write component
class App extends React.Component {
    render() {
        return (
                <View>
                    <Header title="Albums" />
                    <Text style={{fontSize: 25, color: '#E11584', textAlign: "center"}}>Tidarat Jibmagcha</Text>
                </View>
        );
    }
}
 
// extent
export default App;
