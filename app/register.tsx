// Register.tsx
import React from "react";
import { Image, ScrollView, TouchableOpacity, TextInput, Text, View, StyleSheet, Alert } from "react-native";
import { BlurView } from "expo-blur";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import {getFirestore, doc, setDoc} from "firebase/firestore";
import { firebaseConfig } from "../firebaseConfig";
import { router } from "expo-router";

const uri = require("../assets/images/loginfondo.jpeg");

const Register: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [age, setAge] = React.useState<string>("");
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        console.log("Usuario creado");
        const user = userCredential.user;
        console.log(user);

        // Crear un nuevo documento en Firestore con el UID del usuario
        await setDoc(doc(db, 'Usuarios', user.uid), {
          nombre: name,
          edad: Number(age),
          tel: phone,
          correo: email
        });

        Alert.alert("Usuario", "Usuario creado exitosamente");
        navigation.navigate("Main"); // Navigate to the main screen
      })
      .catch((error) => {
        console.log(error);
        Alert.alert("Error", "No se pudo crear la cuenta. Por favor, inténtelo de nuevo.");
      });
  };

  return (
    <View style={[styles.container]}>
      <Image source={uri} style={[styles.image, StyleSheet.absoluteFill]} />
      <View style={styles.overlay} />
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 30, marginBottom: 15 }}>Registro</Text>
        <BlurView intensity={90} style={{ borderRadius: 20 }}>
          <View style={styles.login}>
            <View>
              <Text style={{ fontSize: 20, fontWeight: "800", color: "white", textAlign: "center" }}>
                Correo
              </Text>
              <TextInput
                onChangeText={(text) => setEmail(text)}
                style={styles.input}
                placeholder="Correo"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            <View>
              <Text style={{ fontSize: 20, fontWeight: "800", color: "white", textAlign: "center" }}>
                Contraseña
              </Text>
              <TextInput
                onChangeText={(text) => setPassword(text)}
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry={true}
              />
            </View>
            <View>
              <Text style={{ fontSize: 20, fontWeight: "800", color: "white", textAlign: "center" }}>
                Nombre
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={name}
                onChangeText={setName}
              />
            </View>
            <View>
              <Text style={{ fontSize: 20, fontWeight: "800", color: "white", textAlign: "center" }}>
                Edad
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Edad"
                value={age ? age.toString() : ''}
                onChangeText={(text) => setAge(text)}
                keyboardType="numeric"
              />
            </View>
            <View>
              <Text style={{ fontSize: 20, fontWeight: "800", color: "white", textAlign: "center" }}>
                Telefono
              </Text>
              <TextInput
                style={styles.input}
                placeholder="9942030222"
                value={phone ? phone.toString() : ''}
                onChangeText={(text) => setPhone(text)}
                keyboardType="numeric"
              />
            </View>
            <TouchableOpacity
              onPress={handleCreateAccount}
              style={[styles.button, { backgroundColor: "#5C6AE9", marginTop: 20 }]}
            >
              <Text style={{ fontSize: 17, fontWeight: "400", color: "white" }}>Crear cuenta</Text>
            </TouchableOpacity>
          </View>
        </BlurView>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={[styles.button, { backgroundColor: "#5C6AE9" }]}
        >
          <Text style={{ fontSize: 17, fontWeight: "400", color: "white" }}>Ya tengo una cuenta</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 20,
    },
    image: {
      width: "100%",
      height: "100%",
      resizeMode: "cover",
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "rgba(0, 0, 0, 0.2)", // Color negro semitransparente
    },
    profilePicture: {
      width: 120,
      height: 120,
      borderRadius: 60,
      borderWidth: 2,
      borderColor: "#fff",
      marginVertical: 18,
    },
    login: {
      width: 300,
      padding: 20,
      borderRadius: 25,
      alignItems: "center",
      backgroundColor: "#BE1622", // Fondo semitransparente
      opacity:62
    },
    input: {
      width: 250,
      height: 50,
      borderColor: "#fff",
      borderWidth: 1,
      borderRadius: 10,
      padding: 15,
      marginVertical: 10,
      backgroundColor: "rgba(255, 255, 255, 0.2)", // Fondo semitransparente
      color: "#fff", // Texto blanco
    },
    button: {
      width: 220,
      height: 40,
      borderRadius: 13,
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 10,
    },
    buttonText: {
      fontSize: 17,
      fontWeight: "400",
      color: "white",
    },
    labelText: {
      fontSize: 20,
      fontWeight: "500",
      color: "white",
    },
  });
  
  export default Register;