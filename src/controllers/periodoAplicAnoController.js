// periodoAplicacaoAnoController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getPeriodosAno(req, res) {
  try {
    const periodosAno = await prisma.periodoaplicacaoano.findMany();
    res.json(periodosAno);
  } catch (error) {
    console.error('Erro ao obter períodos ano:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function getPeriodoAnoById(req, res) {
  const id = parseInt(req.params.id);

  try {
    const periodoAno = await prisma.periodoaplicacaoano.findUnique({
      where: { id },
    });

    if (!periodoAno) {
      res.status(404).send('Período ano não encontrado');
    } else {
      res.json(periodoAno);
    }
  } catch (error) {
    console.error('Erro ao obter período ano por ID:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function createPeriodoAno(req, res) {
  const novoPeriodoAno = req.body;

  try {
    const periodoAno = await prisma.periodoaplicacaoano.create({
      data: novoPeriodoAno,
    });

    res.status(201).json(periodoAno);
  } catch (error) {
    console.error('Erro ao criar período ano:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function updatePeriodoAno(req, res) {
  const id = parseInt(req.params.id);
  const dadosAtualizadosAno = req.body;

  try {
    const periodoAno = await prisma.periodoaplicacaoano.update({
      where: { id },
      data: dadosAtualizadosAno,
    });

    res.json(periodoAno);
  } catch (error) {
    console.error('Erro ao atualizar período ano:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function deletePeriodoAno(req, res) {
  const id = parseInt(req.params.id);

  try {
    await prisma.periodoaplicacaoano.delete({
      where: { id },
    });

    res.send('Período ano deletado com sucesso');
  } catch (error) {
    console.error('Erro ao deletar período ano:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

module.exports = {
  getPeriodosAno,
  getPeriodoAnoById,
  createPeriodoAno,
  updatePeriodoAno,
  deletePeriodoAno,
};

