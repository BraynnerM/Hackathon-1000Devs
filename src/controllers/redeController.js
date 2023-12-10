// redeController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getRedes(req, res) {
  try {
    const redes = await prisma.rede.findMany();
    res.json(redes);
  } catch (error) {
    console.error('Erro ao obter redes:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function getRedeById(req, res) {
  const id = parseInt(req.params.id);

  try {
    const rede = await prisma.rede.findUnique({
      where: { id_rede: id },
    });

    if (!rede) {
      res.status(404).send('Rede não encontrada');
    } else {
      res.json(rede);
    }
  } catch (error) {
    console.error('Erro ao obter rede por ID:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function createRede(req, res) {
  const novaRede = req.body;

  try {
    const rede = await prisma.rede.create({
      data: novaRede,
    });

    res.status(201).json(rede);
  } catch (error) {
    console.error('Erro ao criar rede:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function updateRede(req, res) {
  const id = parseInt(req.params.id);
  const dadosAtualizados = req.body;

  try {
    const rede = await prisma.rede.update({
      where: { id_rede: id },
      data: dadosAtualizados,
    });

    res.json(rede);
  } catch (error) {
    console.error('Erro ao atualizar rede:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function deleteRede(req, res) {
  const id = parseInt(req.params.id);

  try {
    await prisma.rede.delete({
      where: { id_rede: id },
    });

    res.send('Rede deletada com sucesso');
  } catch (error) {
    console.error('Erro ao deletar rede:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

module.exports = {
  getRedes,
  getRedeById,
  createRede,
  updateRede,
  deleteRede,
};
