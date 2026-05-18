import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function Footer() {
    return (
        <View>
            <TouchableOpacity accessibilityLabel="Home">
                <Text>⌂</Text>
            </TouchableOpacity>
            <TouchableOpacity accessibilityLabel="Funciones">
                <Text>▦</Text>
            </TouchableOpacity>
            <TouchableOpacity accessibilityLabel="Settings">
                <Text>⚙️</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Footer;