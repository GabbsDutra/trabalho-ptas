import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const produtos = [
  { id: 1, nome: 'Arroz', preco: 10.50 },
  { id: 2, nome: 'Feijão', preco: 7.30 },
  { id: 3, nome: 'Macarrão', preco: 4.90 },
  { id: 4, nome: 'Carne', preco: 25.00 },
  { id: 5, nome: 'Leite', preco: 3.80 },
  { id: 6, nome: 'Cebola', preco: 2.20 },
  { id: 7, nome: 'Tomate', preco: 4.00 }
];

const calcularTotal = () => {
  return produtos.reduce((total, produto) => total + produto.preco, 0).toFixed(2);
};

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Compras</Text>
      <ScrollView style={styles.lista}>
        {produtos.map((produto) => (
          <View key={produto.id} style={styles.item}>
            <Text style={styles.produtoNome}>{produto.nome}</Text>
            <Text style={styles.produtoPreco}>R$ {produto.preco.toFixed(2)}</Text>
          </View>
        ))}
      </ScrollView>
      <Text style={styles.total}>Total: R$ {calcularTotal()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff', 
    justifyContent: 'center',
    paddingTop: 50,
  },
  titulo: {
    textAlign: 'center',  
    fontSize: 24,        
    fontWeight: 'bold',   
    marginBottom: 20,     
  },
  lista: {
    marginHorizontal: 20,  
  },
  item: {
    flexDirection: 'row',    
    justifyContent: 'space-between',  
    borderBottomWidth: 1,   
    borderBottomColor: '#ccc',  
    paddingVertical: 10,      
  },
  produtoNome: {
    fontSize: 18,           
    fontWeight: '500',       
  },
  produtoPreco: {
    fontSize: 18,            
    fontWeight: 'bold',      
    color: '#008000',        
  },
  total: {
    textAlign: 'center',     
    fontSize: 20,            
    fontWeight: 'bold',     
    marginTop: 20,          
  },
});

export default App;
