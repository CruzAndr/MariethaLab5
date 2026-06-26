import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "@/theme";


const CITAS = [
  { fecha: "28 jun", hora: "10:00", servicio: "Mantenimiento general" },
  { fecha: "02 jul", hora: "15:30", servicio: "Cambio de frenos" },
  { fecha: "09 jul", hora: "09:00", servicio: "Ajuste de cambios" },
];

export default function CitasScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Text style={styles.titulo}>Citas</Text>
      <Text style={styles.subtitulo}>Tus citas de taller</Text>

      <View style={styles.tabla}>
        <View style={[styles.fila, styles.cabecera]}>
          <Text style={[styles.celda, styles.cabeceraTexto]}>Fecha</Text>
          <Text style={[styles.celda, styles.cabeceraTexto]}>Hora</Text>
          <Text style={[styles.celda, styles.cabeceraTexto, styles.celdaAncha]}>
            Servicio
          </Text>
        </View>


        {CITAS.map((cita, i) => (
          <View key={i} style={[styles.fila, i % 2 === 1 && styles.filaImpar]}>
            <Text style={styles.celda}>{cita.fecha}</Text>
            <Text style={styles.celda}>{cita.hora}</Text>
            <Text style={[styles.celda, styles.celdaAncha]}>{cita.servicio}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  titulo: { fontSize: 24, fontWeight: "bold", color: COLORS.text },
  subtitulo: { fontSize: 15, color: COLORS.accent, marginTop: 4, marginBottom: 16 },
  tabla: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    overflow: "hidden",
  },
  fila: { flexDirection: "row" },
  cabecera: { backgroundColor: COLORS.accent },
  filaImpar: { backgroundColor: COLORS.field },
  celda: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 10,
    fontSize: 13,
    color: COLORS.text,
  },
  celdaAncha: { flex: 2 },
  cabeceraTexto: { color: "#fff", fontWeight: "700" },
});
