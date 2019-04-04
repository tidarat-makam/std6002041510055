// import Library
import React from 'react';
import { View, Text , Image } from 'react-native';

import Header from './Header';
import Login from './Login';

// write component
class App extends React.Component {
    render() {
        return (
                <View>
                    <Header title="Login" />
                    <Login />
                </View>
        );
    }
}
 
// extent
export default App;
