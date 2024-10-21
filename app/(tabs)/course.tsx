import { Text, View , StyleSheet } from "react-native"
import React from "react"
import { Courses } from "@/Components/Courses";



const Course = () => {
    return (
        <View style={styles.container}>
            <Courses/>
        </View>
    );
}

export default Course;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})