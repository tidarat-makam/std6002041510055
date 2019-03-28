import React from 'react';
import {View, Text, Image, Dimensions, Button} from 'react-native';
import CardSection from './CardSection';
import { isFlowDeclaration } from '@babel/types';

class Card extends React.Component {
    render() {
        return (
            <View>  
                <CardSection>
                    <Image 
                        style={{width: 100, height: 100}}
                        source={{uri: 'https://images.unsplash.com/photo-1516399779-1480b4f76df6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80'}}
                    />
                    <Text>พรุ่งนี้ค่อย</Text>
                    <Text>POP</Text>
                </CardSection>
                
                <CardSection>
                <Image 
                        style={{width: Dimensions.get('window').width, height: 200}}
                        source={{uri: 'https://images.unsplash.com/photo-1516399779-1480b4f76df6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80'}}
                    />
                </CardSection>
                <CardSection>
                        <View style={styles.button}>
                            <View style={{ width: 100}}>
                                <Button
                                    title="Buy"
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