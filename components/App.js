// import Library
import React from 'react';
import { View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import Header from './Header';
import Login from './Login';
import Profile from './Profile'

// // write component
// class App extends React.Component {
//     render() {

//         return (
//                 <View>
//                     <Header title="Login" />
//                     <Login />
//                 </View>
//         );
//     }
// }
 

const AppNavigator = createStackNavigator({
        Login: Login,
        Profile: Profile
    }, {
        // initialRouteName: "Login"
        initialRouteName: "Login"
    }
);
  
  export default createAppContainer(AppNavigator);
// extent
// export default App;
