import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import DrawerLayout from "@/app/(drawer)/_DrawerLayout";

const uri = "../assets/images/manosconpastillas.jpg";
const firstaid = "../assets/images/firstaid.jpg";
const heridas = "../assets/images/heridas.jpg";
const rcp = "../assets/images/rcp.jpg";
const quemaduras = "../assets/images/quemaduras.jpg";


function HomeComponent() {

  return (
    <ScrollView style={{ backgroundColor: "#D9D9D9" }}>
      <View
        style={{
          width: "100%",
          flex: 1,
          top: 0,
          padding: 20,
          paddingBottom: 25,
          paddingTop: 50,
          marginHorizontal: 0,
        }}
      >

        <Text style={styles.title1} >Bienvenido,</Text>
        <Text style={styles.title1}>¿Que vamos a aprender hoy?</Text>
      </View>
      <View
        style={{
          backgroundColor: "#ffff",
          padding: 30,
          borderTopStartRadius: 13,
          borderTopEndRadius: 13,
        }}
      >
        <View style={styles.card}>
          <Text style={styles.title}>
            <Text style={{fontWeight: 700}} >Aprende lecciones de RCP en minutos</Text>
          </Text>
          <Image source={require(rcp)} style={styles.img} />
          <View style={styles.description}>
            <Text style={styles.text}>
              Las lecciones de RCP de la Cruz Roja te enseñarán a actuar en momentos de estres en
              caso de emergencia.
            </Text>
            <Button 

              icon={<Icon name="arrow-right" size={20} color="white"  />}
              buttonStyle={styles.button}

            />
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>
          <Text style={{fontWeight: 700}} >Aprende lecciones de quemaduras en minutos</Text>
          </Text>
          <Image source={require(quemaduras)} style={styles.img} />
          <View style={styles.description}>
            <Text style={styles.text}>
              Como actuar en caso de quemaduras, la mejor forma de tratarlas y prevenirlas.
            </Text>
            <Button 

              icon={<Icon name="arrow-right" size={20} color="white"  />}
              buttonStyle={styles.button}

            />
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>
          <Text style={{fontWeight: 700}} >Atiende heridas en minutos</Text>
          </Text>
          <Image source={require(heridas)} style={styles.img} />
          <View style={styles.description}>
            <Text style={styles.text}>
              Las heridas son comunes en el hogar, aprende a tratarlas de manera segura y eficaz.
            </Text>
            <Button 

              icon={<Icon name="arrow-right" size={20} color="white"  />}
              buttonStyle={styles.button}

            />
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>
          <Text style={{fontWeight: 700}} >¿Necesitas un botiquin?</Text>
          </Text>
          <Image source={require(firstaid)} style={styles.img} />
          <View style={styles.description}>
            <Text style={styles.text}>
              Aprende a armar un botiquin de primeros auxilios, y tenlo siempre a la mano.
            </Text>
            <Button 

              icon={<Icon name="arrow-right" size={20} color="white"  />}
              buttonStyle={styles.button}

            />
          </View>
        </View>

      </View>
    </ScrollView>
  );
}

export default HomeComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: 200,
    borderRadius: 5,
    marginTop: 13,
  },
  title: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  text:{
    color: "black",
    fontSize: 12,
    textAlign: "justify",
    marginLeft: 10,
    marginRight: 15
  },
  description: {
    marginTop: 10,
    flexDirection: "row",
  },
  button: {
    marginRight:5,
    backgroundColor: "#BE1622",
  },
  card: {
    padding: 10,
  },
  title1:{
    fontSize: 20,
    fontWeight: "bold",
  }
});
