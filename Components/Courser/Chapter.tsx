import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"  




const ChapterComponent = () => {
  return (
      <View
        style={{
          backgroundColor: '#BE1622',
          flex: 1,
          top: 0,
          margin:0,
          padding: 20,
          paddingBottom: 25,
          paddingTop: 50,
          marginHorizontal: 0,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
                <Text style={styles.title1} >Bienvenido,  ¿Que vamos a aprender hoy?</Text>

        <TouchableOpacity 
        style={{
          marginHorizontal:10,
          height: 45,
          width: 45,
          borderRadius: 999,
          alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#BE1622",
        }}
        >
        </TouchableOpacity>
        </View>
  )
}


export default ChapterComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BE1622',
    
    
    },
    header: {
        paddingHorizontal: 20,
        width: "100%",
        padding: 10,
        paddingBottom: 25,
        paddingTop: 50,
    },
    title1: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    searchInput: {
        flex: 1,
        marginLeft: 5,
        color: 'black',
    },
    filterButton: {
        marginLeft: 10,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 8,
    },
    contactCard: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#D3D3D3',
        padding: 15,
        marginHorizontal: 20,
    }
})