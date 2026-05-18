import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

function Header() {
    return (
        <View>
            <View>
                <Image
                    source={require('./img/ejemplo.png')}
                    style={{ width: 40, height: 40 }}
                    accessibilityLabel="fotoUsuario"
                />
                <View>
                    <Text>Gerardo Pérez</Text>
                    <Text>Paciente</Text>
                </View>
            </View>

            <View>
                <TouchableOpacity accessibilityLabel="Notificaciones">
                    <Text>🔔</Text>
                </TouchableOpacity>
                <TouchableOpacity accessibilityLabel="Menú">
                    <Text>☰</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Header;