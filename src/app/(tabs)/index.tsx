import { createElement } from "react";
import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
import { COLORS } from "@/theme";

// Esto si lo busque para saber como poenr videos en TSX
const VIDEOS = [
  "lv0Bx84o5fY",
  "XU7xYc79rUQ",
  "ZSt9tm3RoUU",
];

function VideoYoutube({ id }: { id: string }) {
  const uri = `https://www.youtube.com/embed/${id}`;
  return (
    <View style={styles.video}>
      {Platform.OS === "web" ? (
        // En web se usa un iframe normal.
        createElement("iframe", {
          src: uri,
          width: "100%",
          height: "100%",
          frameBorder: "0",
          allowFullScreen: true,
        })
      ) : (
        // En móvil se usa WebView.
        <WebView source={{ uri }} style={styles.webview} allowsFullscreenVideo />
      )}
    </View>
  );
}

export default function InicioScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.titulo}>Inicio</Text>
        <Text style={styles.subtitulo}>Bienvenido a la app de Multimedios</Text>

        <Text style={styles.parrafo}>
          Último laboratorio de Multimedios. Es el Laborotario número 5
        </Text>

        <Text style={styles.seccion}>Videos</Text>
        {VIDEOS.map((id, i) => (
          <VideoYoutube key={i} id={id} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scroll: { padding: 20 },
  titulo: { fontSize: 24, fontWeight: "bold", color: COLORS.text },
  subtitulo: { fontSize: 15, color: COLORS.accent, marginTop: 4, marginBottom: 16 },
  parrafo: { fontSize: 15, color: COLORS.text, lineHeight: 22, marginBottom: 20 },
  seccion: { fontSize: 18, fontWeight: "600", color: COLORS.text, marginBottom: 12 },
  video: {
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 16,
    backgroundColor: "#000",
  },
  webview: { flex: 1 },
});
