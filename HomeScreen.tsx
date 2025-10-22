import React, { useState } from "react";  
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

// ------------------ Types ------------------
interface MenuItem {
  id: string;
  name: string;
  price: number;
  course: "Starter" | "Main" | "Dessert";
}


// ------------------ Menu Data ------------------
const menuItems: MenuItem[] = [

  { id: "1", name: "Calamari", price: 280, course: "Starter" },
  { id: "2", name: "Chicken Wings", price: 150, course: "Starter" },
  { id: "3", name: "Hummus with Flatbread", price: 220, course: "Starter" },
  { id: "4", name: "Salad", price: 180, course: "Starter" },
  { id: "5", name: "Peri Peri Chicken", price: 1200, course: "Main" },
  { id: "6", name: "Coq au Vin", price: 1110, course: "Main" },
  { id: "7", name: "Mushroom Risotto", price: 950, course: "Main" },
  { id: "8", name: "Ribs", price: 1300, course: "Main" },
  { id: "9", name: "Malva Pudding", price: 450, course: "Dessert" },
  { id: "10", name: "Milk Tart", price: 400, course: "Dessert" },
  { id: "11", name: "Chocolate Fondant with Berries", price: 550, course: "Dessert" },
];

// ------------------ Component ------------------
const HomeScreen: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<MenuItem[]>([]);

  // Toggle add/remove menu items
  const toggleItem = (item: MenuItem) => {
    if (selectedItems.some((i) => i.id === item.id)) {
      setSelectedItems((prev) => prev.filter((i) => i.id !== item.id));
    } else {
      setSelectedItems((prev) => [...prev, item]);
    }
  };



  // Calculate totals
  const totalPrice = selectedItems.reduce((sum, item) => sum + item.price, 0);

  const getAverage = (course: "Starter" | "Main" | "Dessert") => {
    const items = selectedItems.filter((i) => i.course === course);
    if (items.length === 0) return 0;
    const avg = items.reduce((sum, i) => sum + i.price, 0) / items.length;
    return Math.round(avg);
  };

  // Render menu sections
  const renderCourse = (course: "Starter" | "Main" | "Dessert") => {
    const items = menuItems.filter((i) => i.course === course);
    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{course.toUpperCase()}S</Text>
        {items.map((item) => {
          const selected = selectedItems.some((i) => i.id === item.id);
          return (
            <TouchableOpacity
              key={item.id}
              style={[styles.itemButton, selected && styles.itemSelected]}
              onPress={() => toggleItem(item)}
            >
              <Text style={styles.itemText}>
                {item.name} - R{item.price}
              </Text>
              <Text style={styles.addText}>{selected ? "Remove" : "Add"}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  // ------------------ UI ------------------
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>HOME</Text>

      <View style={styles.menuContainer}>
        <Text style={styles.menuTitle}>MENU:</Text>
        {renderCourse("Starter")}
        {renderCourse("Main")}
        {renderCourse("Dessert")}
      </View>

      <View style={styles.summaryBox}>
        <Text style={styles.summaryText}>TOTAL PRICE: R{totalPrice}</Text>
        <Text style={styles.summaryText}>AVERAGE PRICE:</Text>
        <Text style={styles.summaryText}>• Starters: R{getAverage("Starter")}</Text>
        <Text style={styles.summaryText}>• Mains: R{getAverage("Main")}</Text>
        <Text style={styles.summaryText}>• Desserts: R{getAverage("Dessert")}</Text>
      </View>
    </ScrollView>
  );
};

// ------------------ Styles ------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff7ed",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 10,
  },
  menuContainer: {
    backgroundColor: "#ff6b6b",
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
  },
  menuTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 10,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 6,
  },
  itemButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 6,
  },
  itemSelected: {
    backgroundColor: "#ffe1b3",
  },
  itemText: {
    fontSize: 16,
    fontWeight: "500",
  },
  addText: {
    fontWeight: "bold",
    color: "#ff6b6b",
  },
  summaryBox: {
    backgroundColor: "#222",
    padding: 15,
    borderRadius: 15,
  },
  summaryText: {
    color: "#fff",
    fontSize: 16,
    marginVertical: 2,
  },
});

// ------------------ Export ------------------
export default HomeScreen;

//Title: How to add TouchableOpacity for menu
// Author:ReactiveNative Express
//Date Punlished: None
//Date accessesd: 22 October 2025
// Url: https://www.reactnative.express/core_components/touchables/touchable_opacity

//Title: How to add styling
//Author: React Native .dev
//DatePublished: October 8th 2025
//Date accessed : 22 October October
// Url: https://reactnative.dev/docs/style


