import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import { NavigationProp } from '@react-navigation/native';

interface ProfileProps {
  navigation: NavigationProp<any>;
}

const Profile: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity 
        onPress={() => navigation.toggleDrawer()}
        style={[styles.backButton, {
          marginHorizontal:10,
          height: 45,
          width: 45,
          borderRadius: 999,
          alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#BE1622",
        }]}
        >
          <Icon name="bars" size={30} color="white" />
        </TouchableOpacity>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
          style={styles.profileImage}
        />
        <Text style={styles.username}>John Doe</Text>
      </View>
      <View style={styles.body}>
        <Text>
          Correo electrónico
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          placeholderTextColor="#888"
          value="john.doe@example.com"
        />
        <Text>
          Número de teléfono
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Número de teléfono"
          placeholderTextColor="#888"
          value="+1 234 567 890"
        />
        <Text>
          Numero de emergencia
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Dirección"
          placeholderTextColor="#888"
          value="123 Main St, Springfield, USA"
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    width: "100%",
    height: 250,
    backgroundColor: "#BE1622",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: 40,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    height: 45,
          width: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  body: {
    width: "100%",
    padding: 20,
    alignItems: "center",
  },
  input: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    marginVertical: 10,
    color: "#000",
  },
});