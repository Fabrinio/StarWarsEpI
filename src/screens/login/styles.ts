import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 64,
    paddingHorizontal: 30,
  },
  button: {
    backgroundColor: "#FF7A01",
    height: 45,
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  buttonSenha: {
    alignContent: "center",
    marginBottom: 50,
    width: 170,
    marginLeft: 90,
  },
  buttonDigital: {
    alignContent: "center",
    width: 170,
    marginLeft: 90,
  },
  buttonISafe: {
    alignContent: "center",
    width: 70,
    height: 30,
    marginTop: -32
  },
  buttonConta: {
    alignContent: "center",
    marginLeft: 210,
    marginTop:32
  },
  buttonText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
  },
  text: {
    color: "#FF7A01",
    fontSize: 17,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
  textOrange: {
    color: "#FF7A01",
    fontSize: 17,
    alignContent: "center",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
  textOrangeConta: {
    color: "#FF7A01",
    fontSize: 17,
    textAlign: "right",
    marginTop: 13,
    marginBottom:10,
    fontWeight: "bold",
  },
  textOrangeISafe: {
    position: "relative",
    color: "#FF7A01",
    fontSize: 17,
    marginLeft: 20,
    marginTop: -20,
    fontWeight: "bold",
  },
  senha: {
    fontSize: 15,
    color: "#B2B2B2",
    marginTop: 20,
  },
  input: {
    backgroundColor: "#ECECEC",
    color: "#B2B2B2",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 8,
    borderRadius: 7,
  },
  logo: {
    textAlign: "center",
    color: "#FF7A01",
    fontSize: 60,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 140,
  },


  //icons
  escudinho:{
    marginTop:8
  },
  fingerprint:{
    alignItems: "center",
  },
  helpButton:{
    alignItems: "center",
    width: 50
  },
  help:{
    alignItems: "flex-end"
  }
  
});

export const perfil = StyleSheet.create({
  perfil: {
    borderWidth: 1,
    borderColor: "#DFDFE1",
    borderRadius: 10,
    height: 80,
    flexDirection: "row",
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginLeft: 10,
    marginTop: 10,
  },
  text: {
    color: "#B2B2B2",
    fontSize: 16,
    marginTop: 10,
    marginLeft: 9,
  },
  cpf: {
    color: "#000",
    fontWeight: "bold",
    marginTop: 45,
    marginLeft: -40,
  },
  trocar: {
    color: "#FF7A01",
    marginTop: 10,
    marginLeft: 10,
  },
  button: {
    height: 50,
    width: 60,
    marginLeft: 110,
  }
});
