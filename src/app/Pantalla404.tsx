import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "@/theme";

const ICONO_ERROR = require("../assests/icon_error.png");
const BANNER = require("../assests/header-fondo 1.png");

type Props = {
  onReintentar?: () => void;
};

export default function Pantalla404({ onReintentar }: Props) {
  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <Image source={BANNER} style={styles.banner} resizeMode="cover" />

      <View style={styles.contenido}>
        <Image source={ICONO_ERROR} style={styles.icono} resizeMode="contain" />
      </View>

      <Pressable style={styles.boton} onPress={onReintentar}>
        <Text style={styles.botonTexto}>Reintentar</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
  },
  banner: {
    width: "100%",
    height: 150,
    borderRadius: 16,
    marginTop: 8,
  },
  contenido: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  icono: { width: 96, height: 96, marginBottom: 4 },
  titulo: { fontSize: 22, fontWeight: "bold", color: COLORS.text },
  mensaje: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.text,
    textAlign: "center",
    marginTop: 4,
  },
  subtitulo: {
    fontSize: 13,
    color: COLORS.textMuted,
    textAlign: "center",
  },
  boton: {
    backgroundColor: COLORS.accent,
    borderRadius: 24,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 24,
  },
  botonTexto: { color: "#fff", fontSize: 15, fontWeight: "600" },
});
