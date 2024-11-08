import React from "react";
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationProp } from '@react-navigation/native';

interface CertifiesProps {
  navigation: NavigationProp<any>;
}

const certificates = [
  { id: '1', title: 'Certificado de Curso de RCP', date: '2023-01-15' },
  { id: '2', title: 'Certificado de Curso de Primeros Auxilios', date: '2023-02-20' },
  { id: '3', title: 'Certificado de Curso de Desfibrilador', date: '2023-03-10' },
];

const Certifies: React.FC<{ navigation: any }> = ({ navigation }) => {
  const renderItem = ({ item }: { item: { id: string; title: string; date: string } }) => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDate}>{item.date}</Text>
      </View>
      <TouchableOpacity style={styles.downloadButton}>
        <Icon name="download" size={20} color="white" />
        <Text style={styles.downloadButtonText}>Descargar</Text>
      </TouchableOpacity>
    </View>
  );

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
        <Text style={styles.headerTitle}>Mis Certificados</Text>
      </View>
      <FlatList
        data={certificates}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default Certifies;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#BE1622",
  },
  backButton: {
    marginRight: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  list: {
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardContent: {
    flex: 1,
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  cardDate: {
    fontSize: 14,
    color: "#888",
  },
  downloadButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#BE1622",
    padding: 10,
    borderRadius: 5,
  },
  downloadButtonText: {
    color: "white",
    marginLeft: 5,
  },
});