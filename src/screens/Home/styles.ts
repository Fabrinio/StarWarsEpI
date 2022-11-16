import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 45,
    paddingHorizontal: 30,
  },
});

export const header = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  logo: {
    alignContent: "center",
    color: "#FF7A01",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 30,
  },

  bandeirinhas: {
    width: 60,
    flexDirection: "row",
    height: 23,
    alignItems: "center",
    borderRadius: 10,
    marginLeft: 10,
    marginTop: 42,
    borderWidth: 1,
    borderColor: "#DFDFE1",
  },

  image: {
    marginLeft: 7,
    width: 17,
    height: 15,
  },

  icons: {
    flexDirection: "row",
    width: 120,
    alignItems: "center",
    marginLeft: 120,
  },

  dotsButton: {
    marginLeft: 20,
  },
});

export const saldo = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  saldo: {
    alignContent: "center",
    backgroundColor: "#ECECEC",
    borderRadius: 7,
    height: 40,
    width: 150,
  },
  text: {
    marginTop: 5,
    fontSize: 14,
    color: "#FF7A01",
    fontWeight: "bold",
    marginBottom: 50,
  },
  eyeButton: {
    marginLeft: 10,
    marginTop: 7,
  },
});

export const opcoes = StyleSheet.create({
  container: {
    width: 360,
    height: 200,
    flexDirection: "row",
    marginBottom: -20,
  },
  quadrado1: {
    width: 115,
    alignItems: "center",
    height: 115,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#DFDFE1",
    marginRight: 10,
  },
  quadrado2: {
    width: 115,
    height: 115,
    alignItems: "center",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#DFDFE1",
    marginRight: 10,
  },
  quadrado3: {
    width: 115,
    height: 115,
    alignItems: "center",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#DFDFE1",
  },
  card: {
    marginTop: 10,
    marginBottom: 5,
  },
  faturas: {
    marginTop: 10,
    marginBottom: 11,
  },
  barcode: {
    marginTop: 10,
    marginBottom: 9,
  },
  text: {
    fontWeight: "bold",
  },
  textCard: {
    fontWeight: "bold",
    marginLeft: 13,
  },
  setinha: {
    marginLeft: -215,
    marginTop: 130,
  },
});

export const oferta = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
  },
  ofertasparavc: {
    marginTop: 10,
    fontWeight: "bold",
  },
  xButton: {
    marginLeft: 220,
    height: 50,
    width: 40,
    alignItems: "center",
  },
  x: {
    marginTop: 10,
  },
});

export const card = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#DFDFE1",
    height: 200,
    borderRadius: 10,
    flexDirection: "row",
  },
  textos: {
    flexDirection: "column",
    alignItems: "center",
    width: 200,
  },
  title: {
    fontWeight: "bold",
    marginTop: 20,
    fontSize: 30,
  },
  texto: {
    fontSize: 18,
  },
  button: {
    backgroundColor: "#FF7A01",
    height: 30,
    width: 150,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 13,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 17,
    marginTop: 3,
    fontWeight: "bold",
  },
  img: {
    height: 200,
    borderRadius: 10,
    alignItems: "center",
    width: 152,
  },
  image: {
    borderRadius: 10,
    marginTop: 20,
    marginLeft: -15,
    width: 140,
    height: 170,
  },
});

export const ad = StyleSheet.create({
  container: {
    marginTop: 30,
    height: 150,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#DFDFE1",
  },
  view: {
    height: 40,
    marginTop: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderColor: "#DFDFE1",
  },
  img: {
    marginLeft: 25,
    marginTop: 10,
    borderRadius: 10,
    width: 300,
    height: 90,
  },
  text: {
    marginVertical: 5,
    marginHorizontal: 10,
    fontWeight: "bold",
    fontSize: 19,
  },
});
