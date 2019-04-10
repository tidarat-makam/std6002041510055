import React from 'react';
import { View,  TextInput, Button} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

class Login extends React.Component {
    static navigationOptions = {
        title: "Login",
        headerStyle: {
            backgroundColor: "#17202A",
        },
        headerTintColor: "#ec9bac",
    };
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.onChangEmail = this.onChangEmail.bind()
    }
    onChangEmail= (e) => {
        this.setState({email: e})
    }

    onPress() {
        axios.post("http://128.199.240.120:9999/api/auth/login", {
            email: this.state.email,
            password: this.state.password
        }).then(async function (response) {
            // alert("Logined !");
            console.log(response.data.data.token);
            try {
                await AsyncStorage.setItem("login_token", response.data.data.token);
            } catch (error) {
                alert("Error fail !");
                return;
            }

            this.props.navigation.navigate("Profile");

        }.bind(this))
        .catch(function (error) {
            alert("Login fail !");
            console.log(error);
        }); 
    }

    async componentDidMount() {
        try {
            if (await AsyncStorage.getItem("login_token") !== null) {
                this.props.navigation.navigate("Profile");
            }
        } catch (error) {
            console.error(error);
        }

    }

    render() {

        return(
            <View>
                <TextInput
                    style={{ height: 50, fontSize: 20 }}
                    placeholder="Email...."
                    value = { this.state.email } 
                    onChangeText = {(email) => {this.setState({email: email}) }}
                    // onChangeText =  {this.onChangEmail()}
                    
                />
                <TextInput
                    style={{ height: 50, fontSize: 20 }}
                    placeholder="Password...."
                    secureTextEntry
                    value = { this.state.password }
                    onChangeText = { (pass) => {this.setState({password: pass}) }}
                />
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                        <View style={{width: 150, height: 20, fontSize: 24}}>
                            <Button 
                                color="#ec9bac" 
                                title="Login" 
                                onPress = { this.onPress.bind(this) }
                            >
                            </Button>

                        </View>  
                    </View>
            
            </View>
        );
    }   
}

export default Login;