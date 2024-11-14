import React from "react";
import {
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const uri = require("../assets/images/manosconpastillas.jpg");
const firstaid = require("../assets/images/firstaid.jpg");
const heridas = require("../assets/images/heridas.jpg");
const rcp = require("../assets/images/rcp.jpg");
const quemaduras = require("../assets/images/quemaduras.jpg");
export function Courses() {
  const courses = [{
    title: "Primeros Auxilios",
    img: firstaid
  },{
    title: "Heridas",
    img: heridas
  },{
    title: "RCP",
    img: rcp
  },{
    title: "Quemaduras",
    img: quemaduras
  },{
    title: "Auxiliar de Farmacia",
    img: uri
  }];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Todos los cursos</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Icon name="search" size={20} color="#888" />
          <TextInput placeholder="Buscar" style={styles.searchInput} />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Icon name="filter" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={courses}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.courseCard}>
            <Image source={item.img} style={styles.courseImage} />
            <Text style={styles.courseTitle}>{item.title}</Text>
          </View>
        )}
        numColumns={2}
        columnWrapperStyle={styles.courseList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    flex: 1,
    top: 0,
    padding: 10,
    paddingBottom: 25,
    paddingTop: 45,
    marginHorizontal: 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  headerText: { fontSize: 24, fontWeight: "bold", paddingBottom: 10 },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchInput: { flex: 1, marginLeft: 5 },
  filterButton: { marginLeft: 10 },
  courseList: { justifyContent: "space-between", paddingHorizontal: 10 },
  courseCard: { width: "48%", marginBottom: 15, alignItems: "center" },
  courseImage: { width: 100, height: 100, borderRadius: 10 },
  courseTitle: {
    textAlign: "center",
    marginTop: 5,
    fontSize: 14,
    color: "#333",
  },
});
