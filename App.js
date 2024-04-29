import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Cita from './components/Cita';
import Formulario from './components/Formulario';

export default function App() {

  const [citas, setCitas] = useState([
    { id: "1", paciente: "Juan", propietario: 'Juan', sintomas: "No estudia" },
    { id: "2", paciente: "Sede", propietario: 'Jesus', sintomas: "No presenta examenes" },
    { id: "3", paciente: "Sede", propietario: 'Paulo', sintomas: "No presenta explica bien" },
    
  ]);

  const eliminarCita = id => {
    setCitas(citasActuales => citasActuales.filter(cita => cita.id !== id));
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={{ uri: 'https://cdn.pixabay.com/photo/2012/04/12/20/46/caduceus-30591_960_720.png' }} 
          />
          <Text style={styles.titulo}>Administrador de citas</Text>
        </View>
        <Formulario />
        <Text style={styles.subtitulo}>{citas.length > 0 ? 'Administra tus citas' : 'No hay citas, agrega una'}</Text>
        <FlatList
          data={citas}
          renderItem={({ item }) => <Cita item={item} eliminarCitas={eliminarCita} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2', 
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  titulo: {
    color: '#37474F', 
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Arial', 
  },
  subtitulo: {
    color: '#37474F', 
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain', 
    marginRight: 10,
  },
});
