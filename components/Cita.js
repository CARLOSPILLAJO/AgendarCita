import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Cita(props) {
    
    const procesoEliminar = (id) => {
        props.eliminarCitas(id);
    }

    return (
        <View style={styles.cita}>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Paciente:</Text>
                <Text style={styles.texto}>{props.item.paciente}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Propietario:</Text>
                <Text style={styles.texto}>{props.item.propietario}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Síntomas:</Text>
                <Text style={styles.texto}>{props.item.sintomas}</Text>
            </View>
            <TouchableOpacity onPress={() => procesoEliminar(props.item.id)} style={styles.btnEliminar}>
                <Text style={styles.textoEliminar}>Eliminar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    cita: {
        backgroundColor: '#FFF',
        marginBottom: 10,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 10,
    },
    infoContainer: {
        marginBottom: 10,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#333',
    },
    texto: {
        fontSize: 16,
        color: '#666',
    },
    btnEliminar: {
        backgroundColor: '#FF4D4D',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignSelf: 'flex-end',
    },
    textoEliminar: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
    }
})
