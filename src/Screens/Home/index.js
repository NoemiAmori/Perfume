import { View, SafeAreaView, ScrollView, Image, Text, FlatList, TouchableOpacity } from 'react-native';
  import React, {useState} from 'react';
  import Header from '../../Components/Header/Header';
  import Card from '../../Components/Card/Card';
  import styles from './style';
  import Feminino from '../../Assets/Feminino';
  import Masculino from '../../Assets/Masculino';
  
  const Home = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [marca, setMarca] = useState();
    const [descricao, setDescricao] = useState();
    const [preco, setPreco] = useState();
    const [foto, setFoto] = useState('');
  
    var cards = Feminino;
    var cardsMasc = Masculino;
  
    const renderItem = ({item}) => {
      return (
        <Card
          marca={item.marca}
          descricao={item.descricao}
          preco={item.preco}
          foto={item.foto}
          onPress={() => {
            setDescricao(item.descricao);
            setMarca(item.marca);
            setPreco(item.preco);
            setFoto(item.foto);
            navigation.navigate('Produto', {
              descricao: item.descricao,
              marca: item.marca,
              preco: item.preco,
              foto: item.foto,
            });
          }}
        />
      );
    };
  
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header />
        <ScrollView>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <Image
              source={require('../../Images/million.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <View style={{marginTop: 20}}>
            <Text style={styles.txtSub}>Perfumes Femininos</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              style={styles.list}
              horizontal={true}
              data={cards}
              renderItem={renderItem}
            />
            <Text style={styles.txtSub}>Perfumes Masculinos</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              style={styles.list}
              horizontal={true}
              data={cardsMasc}
              renderItem={renderItem}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default Home;
  