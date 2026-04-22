await addDoc(collection(db, "Tickets"), {
  tipo: "duda", // o "nuevo" o "otro"
  mensaje: "...",

  nombreProducto: "...",
  nombreEmpresa: "...",
  codigoBarras: "...",

  autorEmail: "...",
  estado: "abierto",

  staffAsignado: null,
  fecha: serverTimestamp()
});