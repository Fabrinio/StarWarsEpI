import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  StatusBar,
} from "react-native";
import { styles, saldo, header, opcoes, oferta, card, ad } from "./styles";
import Eua from "../../assets/bandeiraEua.jpg";
import Brasil from "../../assets/bandeiraBrasil.jpg";
import Orange from "../../assets/orangefriday.jpg";
import Girl from "../../assets/girlonthephone.png";
import {
  Feather,
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
  FontAwesome5,
} from "@expo/vector-icons";

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={header.container}>
        <Text style={header.logo}> inter</Text>
        <View style={header.bandeirinhas}>
          <TouchableOpacity>
            <Image source={Brasil} style={header.image} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Eua} style={header.image} />
          </TouchableOpacity>
        </View>
        <View style={header.icons}>
          <TouchableOpacity>
            <AntDesign name="search1" size={29} color="#FF7A01" />
          </TouchableOpacity>
          <TouchableOpacity style={header.dotsButton}>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={29}
              color="#FF7A01"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={saldo.container}>
        <View style={saldo.saldo}></View>
        <TouchableOpacity style={saldo.eyeButton}>
          <Feather name="eye-off" size={24} color="#FF7A01" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={saldo.text}>Ver extrato</Text>
      </TouchableOpacity>
      <View style={opcoes.container}>
        <View style={opcoes.quadrado1}>
          <TouchableOpacity>
            <Entypo
              name="credit-card"
              size={65}
              color="#FF7A01"
              style={opcoes.card}
            />
            <Text style={opcoes.textCard}>Cartões</Text>
          </TouchableOpacity>
        </View>
        <View style={opcoes.quadrado2}>
          <TouchableOpacity>
            <FontAwesome5
              name="file-invoice-dollar"
              size={55}
              color="#FF7A01"
              style={opcoes.faturas}
            />
            <Text style={opcoes.text}>Faturas</Text>
          </TouchableOpacity>
        </View>
        <View style={opcoes.quadrado3}>
          <TouchableOpacity>
            <AntDesign
              name="barcode"
              size={60}
              color="#FF7A01"
              style={opcoes.barcode}
            />
            <Text style={opcoes.text}>Pagar Boleto</Text>
          </TouchableOpacity>
        </View>
        <View style={opcoes.setinha}>
          <TouchableOpacity>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={50}
              color="#FF7A01"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={oferta.container}>
        <Text style={oferta.ofertasparavc}>Ofertas para você</Text>
        <TouchableOpacity style={oferta.xButton}>
          <Feather name="x" size={24} color="#FF7A01" style={oferta.x} />
        </TouchableOpacity>
      </View>

      <View style={card.container}>
        <View style={card.textos}>
          <Text style={card.title}>Indique e Ganhe</Text>
          <Text style={card.texto}>
            <Text>Convide amigos pro Inter {"\n"}e ganhe até</Text>
            <Text style={{fontWeight: "bold"}}> R$1000 de{"\n"} cashback extra </Text>
            <Text>para usar {"\n"}como quiser no Inter Shop!</Text>
          </Text>
          <TouchableOpacity style={card.button}>
            <Text style={card.buttonText}>Quero participar</Text>
          </TouchableOpacity>
        </View>
        <View style={card.img}>
          <Image source={Girl} resizeMode='contain' style={card.image} />
        </View>
      </View>

      <View style={ad.container}>
        <TouchableOpacity>
        <Image source={Orange} style={ad.img}/>
        </TouchableOpacity>
        <View style={ad.view}>
          <TouchableOpacity>
          <Text style={ad.text}>InterShop</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
