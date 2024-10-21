import { Text, View , StyleSheet } from "react-native"
import React from "react"



const Call = () => {
    return (
        <View style={styles.container}>
            <Text>Call</Text>
        </View>
    );
}

export default Call;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})