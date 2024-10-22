import { Text, View , StyleSheet } from "react-native"
import React from "react"
import Login from "../login";




const Home = () => {
    return (
        <View style={styles.container}>
            <Login></Login>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})