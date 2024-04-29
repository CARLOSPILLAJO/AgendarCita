import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function Formulario() {

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
    const [horaSeleccionada, setHoraSeleccionada] = useState(null);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    
    const confirmarFecha = (date) => {
        console.warn("Fecha seleccionada: ", date);
        setFechaSeleccionada(date);
        hideDatePicker();
    };

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const confirmarHora = (date) => {
        console.warn("Hora seleccionada: ", date);
        setHoraSeleccionada(date);
        hideTimePicker();
    };

    return (
        <>
            <View style={styles.formulario}>
                <Text style={styles.label}>Paciente:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(texto) => console.log(texto)}
                    placeholder="Nombre del paciente"
                />
            </View>
            <View style={styles.formulario}>
                <Text style={styles.label}>Gmail:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(texto) => console.log(texto)}
                    placeholder="Gmail del Paciente"
                />
            </View>
            <View style={styles.formulario}>
                <Text style={styles.label}>Teléfono de contacto:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(texto) => console.log(texto)}
                    placeholder="Teléfono"
                    keyboardType='numeric'
                />
            </View>
            <View style={styles.formulario}>
                <Text style={styles.label}>Síntomas:</Text>
                <TextInput
                    multiline
                    style={[styles.input, styles.textArea]}
                    onChangeText={(texto) => console.log(texto)}
                    placeholder="Descripción de los síntomas"
                />
            </View>

            <View style={styles.pickerContainer}>
                <Button title="Seleccionar fecha" onPress={showDatePicker} />
                <Button title="Seleccionar hora" onPress={showTimePicker} />
            </View>

            <Text style={styles.fechaSeleccionada}>{fechaSeleccionada ? `Fecha seleccionada: ${fechaSeleccionada.toLocaleDateString()}` : null}</Text>
            <Text style={styles.horaSeleccionada}>{horaSeleccionada ? `Hora seleccionada: ${horaSeleccionada.toLocaleTimeString()}` : null}</Text>
            
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={confirmarFecha}
                onCancel={hideDatePicker}
                locale='es_ES'
                cancelTextIOS='Cancelar'
                confirmTextIOS='Confirmar'
            />
            
            <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={confirmarHora}
                onCancel={hideTimePicker}
                locale='es_ES'
                cancelTextIOS='Cancelar'
                confirmTextIOS='Confirmar'
            />
        </>
    )
}

const styles = StyleSheet.create({
    formulario: {
        marginBottom: 20,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
        color: '#333',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    textArea: {
        height: 80,
        paddingTop: 10,
        textAlignVertical: 'top', 
    },
    pickerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    fechaSeleccionada: {
        fontSize: 16,
        marginBottom: 10,
        color: '#007bff', // Color azul
        fontWeight: 'bold',
    },
    horaSeleccionada: {
        fontSize: 16,
        marginBottom: 10,
        color: '#28a745', // Color verde
        fontWeight: 'bold',
    },
})
