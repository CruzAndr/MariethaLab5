import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "@/theme";

// Me la copie de la tabla de citas y la adapte para productos, es lo mismo pero con otros datos
const PRODUCTOS = [
  { nombre: "Casco MTB", categoria: "Seguridad", precio: "45.00" },
  { nombre: "Luz LED delantera", categoria: "Accesorios", precio: "18.50" },
  { nombre: "Cadena 11v", categoria: "Repuestos", precio: "32.00" },
  { nombre: "Guantes de ciclismo", categoria: "Indumentaria", precio: "22.00" },
];

export default function ProductosScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Text style={styles.titulo}>Productos</Text>
      <Text style={styles.subtitulo}>Accesorios y repuestos</Text>

      <View style={styles.tabla}>
        
        <View style={[styles.fila, styles.cabecera]}>
          <Text style={[styles.celda, styles.cabeceraTexto, styles.celdaAncha]}>
            Producto
          </Text>
          <Text style={[styles.celda, styles.cabeceraTexto]}>Categoría</Text>
          <Text style={[styles.celda, styles.cabeceraTexto]}>Precio</Text>
        </View>

        
        {PRODUCTOS.map((p, i) => (
          <View key={i} style={[styles.fila, i % 2 === 1 && styles.filaImpar]}>
            <Text style={[styles.celda, styles.celdaAncha]}>{p.nombre}</Text>
            <Text style={styles.celda}>{p.categoria}</Text>
            <Text style={styles.celda}>{p.precio}</Text>
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
