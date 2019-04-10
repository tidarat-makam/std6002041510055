import React from 'react';
import { View, Text, Button} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

class Profile extends React.Component {

    constructor(){
        super();
        this.state = {
            name: "Loading...",
            email: "Loading...",
        };   
    }
    
    static navigationOptions = {
        title: "Profile",
        headerStyle: {
            backgroundColor: "#17202A",
        },
        headerTintColor: "#ec9bac",
    };

    async logOut() {
        try {
            await AsyncStorage.removeItem("login_token");
        } catch (error) {
            console.error(error);
        }

        this.props.navigation.navigate("Login");

    }

    async componentDidMount() {       
        let token = await AsyncStorage.getItem("login_token");
        console.log("response" + token);
        const url = 'http://128.199.240.120:9999/api/auth/me'
        axios.get(url, {
            headers: {
                "Authorization": "Bearer " + token
            }
        }).then(function (response) {
                console.log("response----------------------");
                console.log(response);

                this.setState({ 
                    email: response.data.data.email, 
                    name: response.data.data.name 
                });
        }.bind(this));
    }

    render() {
        return(
                <View>
                    <Text>Profile</Text>

                    <Text>Name: {this.state.name}</Text>
                    <Text>Email: {this.state.email}</Text>

                    <Button
                        title="LogOut"
                        onPress= { this.logOut.bind(this) }></Button>

                </View>
        )
    }       
}

export default Profile;