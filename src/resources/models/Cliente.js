export default ({mongo}) => ({
  clienteModel: () => {
    const clienteSchema = {
      nombre: { type: String },
      apellido: { type: String },
      empresa: { type: String },
      email: { type: String },
      edad: { type: Number },
      tipo: { type: String },
      pediddos: Array
    };
    return mongo.schemaMongo("Cliente",clienteSchema);
  }
});
