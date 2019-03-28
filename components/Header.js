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
        marginBottom: 5
    },
    text: {
        color: "#F8F9F9",
        fontSize: 30,
        textAlign: "center"
    }

}

export default Header;
