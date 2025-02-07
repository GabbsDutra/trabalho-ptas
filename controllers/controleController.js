import Controle from "../models/controleModel.js"; 

export const criarControle = async (req, res) => {
  try {
    const { nome, marca, conectividade, preco, quantidadeBotoes } = req.body;
    
    if (!nome || !marca || !conectividade || !preco || !quantidadeBotoes) {
      return res.status(400).json({ mensagem: "Todos os campos são obrigatórios" });
    }

    const controle = new Controle({
      nome,
      marca,
      conectividade,
      preco,
      quantidadeBotoes,
    });

    await controle.save();
    res.status(201).json(controle);
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao criar o controle", erro: error.message });
  }
};

export const listarControles = async (req, res) => {
  try {
    const controles = await Controle.find();
    res.status(200).json(controles);
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao listar os controles", erro: error.message });
  }
};

export const buscarControlePorId = async (req, res) => {
  try {
    const controle = await Controle.findById(req.params.id);
    if (!controle) {
      return res.status(404).json({ mensagem: "Controle não encontrado" });
    }
    res.status(200).json(controle);
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao buscar o controle", erro: error.message });
  }
};

export const atualizarControle = async (req, res) => {
  try {
    const controle = await Controle.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!controle) {
      return res.status(404).json({ mensagem: "Controle não encontrado" });
    }
    res.status(200).json(controle);
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao atualizar o controle", erro: error.message });
  }
};

export const excluirControle = async (req, res) => {
  try {
    const controle = await Controle.findByIdAndDelete(req.params.id);
    if (!controle) {
      return res.status(404).json({ mensagem: "Controle não encontrado" });
    }
    res.status(200).json({ mensagem: "Controle excluído com sucesso" });
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao excluir o controle", erro: error.message });
  }
};
