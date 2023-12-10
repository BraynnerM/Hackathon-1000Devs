// periodoAplicacaoAnoController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getPeriodos(req, res) {
  try {
    const periodos = await prisma.periodoAplicacaoAno.findMany();
    res.json(periodos);
  } catch (error) {
    console.error('Erro ao obter períodos:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function getPeriodoById(req, res) {
  const id = parseInt(req.params.id);

  try {
    const periodo = await prisma.periodoAplicacaoAno.findUnique({
      where: { id },
    });

    if (!periodo) {
      res.status(404).send('Período não encontrado');
    } else {
      res.json(periodo);
    }
  } catch (error) {
    console.error('Erro ao obter período por ID:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function createPeriodo(req, res) {
  const novoPeriodo = req.body;

  try {
    const periodo = await prisma.periodoAplicacaoAno.create({
      data: novoPeriodo,
    });

    res.status(201).json(periodo);
  } catch (error) {
    console.error('Erro ao criar período:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function updatePeriodo(req, res) {
  const id = parseInt(req.params.id);
  const dadosAtualizados = req.body;

  try {
    const periodo = await prisma.periodoAplicacaoAno.update({
      where: { id },
      data: dadosAtualizados,
    });

    res.json(periodo);
  } catch (error) {
    console.error('Erro ao atualizar período:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function deletePeriodo(req, res) {
  const id = parseInt(req.params.id);

  try {
    await prisma.periodoAplicacaoAno.delete({
      where: { id },
    });

    res.send('Período deletado com sucesso');
  } catch (error) {
    console.error('Erro ao deletar período:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

module.exports = {
  getPeriodos,
  getPeriodoById,
  createPeriodo,
  updatePeriodo,
  deletePeriodo,
};
