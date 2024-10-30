import { Text, View , StyleSheet, ScrollView } from "react-native"
import React from "react"



const Help = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>¿Cómo se usa la app?</Text>
          <View style={styles.section}>
            <Text style={styles.header}>1. Navegación Básica</Text>
            <Text style={styles.text}>
              Utiliza el menú en la parte inferior para moverte entre las diferentes
              secciones de la app, como los cursos, tu perfil, y esta sección de ayuda.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.header}>2. Acceder a los Cursos</Text>
            <Text style={styles.text}>
              Para ver los cursos de primeros auxilios, dirígete a la sección de
              "Cursos" en el menú. Ahí encontrarás una lista de los cursos
              disponibles.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.header}>3. Progreso y Certificación</Text>
            <Text style={styles.text}>
              Al completar cada módulo, se marcará como completado en tu perfil. Al
              finalizar el curso completo, recibirás un certificado.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.header}>4. Contacto de Emergencia</Text>
            <Text style={styles.text}>
              En caso de dudas o emergencias, puedes usar la opción de contacto en
              tu perfil para comunicarte con nosotros.
            </Text>
          </View>
        </ScrollView>
    );
}

export default Help;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding:20,

    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#333",
      marginBottom: 30,
      textAlign: "center",
    },
    section: {
      marginBottom: 15,
    },
    header: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#5C6AE9",
    },
    text: {
      fontSize: 16,
      color: "#333",
      marginTop: 5,
      marginHorizontal: 5,
      textAlign: 'justify'
    },
})