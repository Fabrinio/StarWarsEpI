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
import { styles, perfil } from "./styles";
import Ben10 from "../../assets/ben10.jpg";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";

export const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.help}>
        <TouchableOpacity style={styles.helpButton}>
          <Feather name="help-circle" size={24} color="#FF7A01" />
        </TouchableOpacity>
      </View>

      <Text style={styles.logo}>inter</Text>

      <View style={perfil.perfil}>
        <Image style={perfil.img} source={Ben10} />
        <Text style={perfil.text}> Ben 10</Text>
        <Text style={perfil.cpf}> ***.101.101-**</Text>
        <TouchableOpacity style={perfil.button}>
          <Text style={perfil.trocar}>Trocar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.senha}>Senha</Text>
      <TextInput
        secureTextEntry={true}
        placeholder="Digite sua senha"
        placeholderTextColor="#B2B2B2"
        style={styles.input}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonSenha}>
        <Text style={styles.text}>Esqueci minha senha</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonDigital}>
        <View style={styles.fingerprint}>
          <FontAwesome5 name="fingerprint" size={60} color="#FF7A01" />
        </View>
        <Text style={styles.textOrange}>
          Entre utilizando sua {"\n"}impressão digital
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonConta}>
        <Text style={styles.textOrangeConta}>Trocar ou abrir conta</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonISafe}>
        <View style={styles.escudinho}>
          <MaterialCommunityIcons
            name="shield-lock-outline"
            size={17}
            color="#FF7A01"
          />
        </View>
        <Text style={styles.textOrangeISafe}>iSafe</Text>
      </TouchableOpacity>
    </View>
  );
};
