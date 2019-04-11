import React from 'react';
import { View, Text, Button} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

class Profile extends React.Component {

    constructor(){
        super();
        this.state = {
            name: "",
            email: "",
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
                <View style={{paddingTop: 20,paddingLeft:10, paddingRight: 10}}>
                    <Text style={{fontSize:24}}>Profile</Text>
                    <View style={{paddingTop: 20, paddingBottom:20}}>
                        <Text style={{fontSize:18}}>Name: {this.state.name}</Text>
                        <Text style={{fontSize:18}}>Email: {this.state.email}</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                        <View style={{width: 150, height: 20, fontSize: 24}}>
                            <Button
                                title="LogOut"
                                color="#ec9bac" 
                                onPress= { this.logOut.bind(this) }>
                            </Button>
                        </View>
                    </View>
                </View>
        )
    }       
}

export default Profile;