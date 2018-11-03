import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import styles from './styles';
// import { navigateToHome } from 'app/navigation/NavigationHelpers';

export default class LoginView extends Component {
    onPress = () => {
        // navigateToHome();
        this.props.onLogin('uname', 'password');
    };

    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={this.onPress}
                    title="Navigate to Home"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
                <Text>Status: {this.props.status}</Text>
            </View>
        );
    }
}
