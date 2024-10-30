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

const uri = "../assets/images/manosconpastillas.jpg";
export function Courses() {
  const courses = Array(12).fill({
    title: "Lorem ipsum dolor sit ame"
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Todos los cursos</Text>
        <Icon name="menu" size={24} color="#000" />
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
            <Image source={require (uri)} style={styles.courseImage} />
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
    paddingTop: 50,
    marginHorizontal: 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  headerText: { fontSize: 24, fontWeight: "bold" },
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
