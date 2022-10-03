import { FlatList, StyleSheet, Text, View } from "react-native";
import Actions from "../../components/Actions";
import Balance from "../../components/Balance";
import Header from "../../components/Header";
import Movements from "../../components/Movements";

const movements = [
  {
    id: 1,
    label: "Boleto Conta de Luz",
    value: "300,00",
    date: "11/05/2020",
    type: 0 // despesas
  },
  {
    id: 2,
    label: "Pix Cliente Laura",
    value: "1.025,00",
    date: "09/11/2020",
    type: 1 // receitas | entradas
  },
  {
    id: 3,
    label: "Salário",
    value: "7.300,00",
    date: "04/10/2022",
    type: 1 // receitas | entradas
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      
      <Header name="Sarah Emanuelly" />      
      
      <Balance saldo="17.035,00" gastos="125,00" />

      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>
      
      <FlatList 
      style={styles.listMoviments}
      data={movements}
      keyExtractor={ (item) => String(item.id) }
      showsVerticalScrollIndicator={false}
      renderItem={ ({ item }) => <Movements data={item} /> }
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
  listMoviments: {
    marginStart: 14,
    marginEnd: 14,
  }
});
