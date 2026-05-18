import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

function FuncionCard({ funcion, onSelect }) {
    return (
        <TouchableOpacity onPress={onSelect}>
            <Text>{funcion.titulo}</Text>
            <Text>{funcion.descripcion}</Text>
        </TouchableOpacity>
    );
}

export default FuncionCard;