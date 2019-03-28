import React from 'react';
import {View, Text} from 'react-native';

class Header extends React.Component {
    render() {
        return (
            <View style={styles.header}>  
                <Text style={styles.text}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = {
    header: {
        padding: 10,
        backgroundColor: "#17202A",
        marginBottom: 20,
        paddingHorizontal: 20,
        elevation: 10,
    },
    text: {
        color: "#ec9bac",
        fontSize: 30,
        textAlign: "center"
    }

}

export default Header;
