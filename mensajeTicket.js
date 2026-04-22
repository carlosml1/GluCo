await addDoc(collection(db, "MensajesTicket"), {
  ticketId: "...",
  autorEmail: "...",
  mensaje: "...",
  fecha: serverTimestamp()
});