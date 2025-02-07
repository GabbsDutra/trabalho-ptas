import mongoose from "mongoose";


const controleSchema = new mongoose.Schema({
  nome: { 
    type: String, 
    required: [true, 'Nome é obrigatório'], 
    trim: true 
  },
  marca: { 
    type: String, 
    required: [true, 'Marca é obrigatória'], 
    trim: true 
  },
  conectividade: { 
    type: String, 
    required: [true, 'Conectividade é obrigatória'], 
    enum: ['Bluetooth', 'USB', 'Sem Fio'], 
    trim: true 
  },
  preco: { 
    type: Number, 
    required: [true, 'Preço é obrigatório'], 
    min: [0, 'Preço não pode ser negativo'],
    get: (v) => (v / 100).toFixed(2),  
  },
  quantidadeBotoes: { 
    type: Number, 
    required: [true, 'Quantidade de botões é obrigatória'], 
    min: [1, 'O controle deve ter pelo menos 1 botão'] 
  },
});


controleSchema.set("toJSON", {
  getters: true, 
  virtuals: true, 
  transform: (doc, ret) => {
    ret.id = ret._id;  
    delete ret._id;    
    return ret;
  },
});


const Controle = mongoose.model("Controle", controleSchema);

export default Controle;
