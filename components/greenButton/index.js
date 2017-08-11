import React, { Component } from 'react';
import {
    Alert,
    Text,
    TouchableHighlight
} from 'react-native';

export default class GreenButton extends Component {

    render() {
        const { buttonTitle } = this.props;

        return (
            <TouchableHighlight
                style={{ backgroundColor: 'green', padding: 20, borderRadius: 10 }}
                underlayColor="red"
                onPress={() => {
                    Alert.alert('HELLO WORLD');
                }}>
                <Text>
                    {buttonTitle}
                </Text>
            </TouchableHighlight>
        );
    }
}
