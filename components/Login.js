import React from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import axios from 'axios';

class Login extends React.Component {
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
        console.log(this.state)
        const url = 'http://128.199.240.120:9999/api/auth/login'
        axios.post(url, this.state)
            .then(response => {
                console.log('login', response.data.data.token)
            })
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