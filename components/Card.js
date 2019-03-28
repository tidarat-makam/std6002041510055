import React from 'react';
import {View, Text, Image, Dimensions, Button} from 'react-native';
import CardSection from './CardSection';

class Card extends React.Component {
    render() {
        return (
            <View>  
                <CardSection>
                    <View style={{flexDirection: 'row', alignItems: 'center', width: 450}}>
                        <Image 
                        style={{width: 70, height: 70}}
                        source={{uri: 'https://l.lnwfile.com/ic4yg5.jpg'}}
                        />
                        <View style={{marginLeft: 8}}>
                            <Text style={{fontSize: 20}}>SQUARE UP</Text>
                            <Text>BLACHPINK</Text> 
                        </View> 
                    </View>
                     
                </CardSection>
                
                <CardSection>                                     
                <Image 
                        style={{width: Dimensions.get('window').width-30, height: 350}}
                        source={{uri: 'https://cf.shopee.co.th/file/312726e34773c1d8a63afc46645c01be'}}
                    />
                </CardSection>
                <CardSection>
                        <View style={styles.button}>
                            <View style={{ width: 100}}>
                                <Button
                                    title="Buy"
                                    color="#ec9bac"
                                />
                            </View>
                        </View>
                </CardSection>
            </View>
        )
    }
}

const styles = {
    button: { 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 10 
    }
}


export default Card;