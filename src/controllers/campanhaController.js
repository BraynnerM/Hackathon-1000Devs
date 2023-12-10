// campanhaController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getCampanhas(req, res) {
  try {
    const campanhas = await prisma.campanha.findMany();
    res.json(campanhas);
  } catch (error) {
    console.error('Erro ao obter campanhas:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function getCampanhaById(req, res) {
  const id = parseInt(req.params.id);

  try {
    const campanha = await prisma.campanha.findUnique({
      where: { id_campanha: id },
    });

    if (!campanha) {
      res.status(404).send('Campanha não encontrada');
    } else {
      res.json(campanha);
    }
  } catch (error) {
    console.error('Erro ao obter campanha por ID:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function createCampanha(req, res) {
  const novaCampanha = req.body;

  try {
    // Consulta para obter a quantidade de IDs já gravados na tabela
    const countResult = await prisma.campanha.count();
    const quantidadeDeIds = countResult;

    // Criação da nova campanha usando a quantidade de IDs como parte do novo ID
    const novoId = quantidadeDeIds + 1;
    const campanha = await prisma.campanha.create({
      data: {
        ...novaCampanha,
        id_campanha: novoId,  // Supondo que o nome do campo de ID seja "id"
      },
    });

    res.status(201).json(campanha);
  } catch (error) {
    console.error('Erro ao criar campanha:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function updateCampanha(req, res) {
  const id = parseInt(req.params.id);
  const dadosAtualizados = req.body;

  try {
    const campanha = await prisma.campanha.update({
      where: { id_campanha: id },
      data: dadosAtualizados,
    });

    res.json(campanha);
  } catch (error) {
    console.error('Erro ao atualizar campanha:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function deleteCampanha(req, res) {
  const id = parseInt(req.params.id);

  try {
    await prisma.campanha.delete({
      where: { id_campanha: id },
    });

    res.send('Campanha deletada com sucesso');
  } catch (error) {
    console.error('Erro ao deletar campanha:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

module.exports = {
  getCampanhas,
  getCampanhaById,
  createCampanha,
  updateCampanha,
  deleteCampanha,
};
