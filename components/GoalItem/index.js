import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        style={({ pressed }) => (pressed ? styles.pressedItem : null)}
        onPress={() => props.onDeleteItem(props.id)}
      >
        <View style={styles.item}>
          <Text style={styles.goalText}>{props.text}</Text>
          <Text style={styles.goalText}>X</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#f31282",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  pressedItem: {
    opacity: 0.4,
  },
  goalText: {
    color: "#ffffff",
    padding: 8,
  },
});

export default GoalItem;
