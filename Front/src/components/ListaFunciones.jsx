import React from 'react';
import { View, ScrollView } from 'react-native';
import FuncionCard from './FuncionCard';

function ListaFunciones({ funciones, onSelect }) {
    return (
        <ScrollView>
            <View>
                {funciones.map((funcion, index) => (
                    <FuncionCard
                        key={index}
                        funcion={funcion}
                        onSelect={() => onSelect(index)}
                    />
                ))}
            </View>
        </ScrollView>
    );
}

export default ListaFunciones;