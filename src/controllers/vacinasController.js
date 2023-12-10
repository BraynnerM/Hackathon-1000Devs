// vacinaController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getVacinas(req, res) {
  try {
    const vacinas = await prisma.vacina.findMany({
      include: {
        campanhavacina: true,
        periodoaplicacaoano: true,
        periodoaplicacaomes: true,
        rede: true,
        vacinaaplicada: true,
      },
    });

    res.json(vacinas);
  } catch (error) {
    console.error('Erro ao obter vacinas:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function getVacinaById(req, res) {
  const id = parseInt(req.params.id);

  try {
    const vacina = await prisma.vacina.findUnique({
      where: { id_vacina: id },
    });

    if (!vacina) {
      res.status(404).send('Vacina não encontrada');
    } else {
      res.json(vacina);
    }
  } catch (error) {
    console.error('Erro ao obter vacina por ID:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function getVacinasPorAnoExato(req, res) {
  const { idade } = req.params;

  try {
    const vacinas = await prisma.vacina.findMany({
      where: {
        periodoaplicacaoano: {
          some: {
            OR: [
              {
                qtd_ano_inicial: {
                  lte: parseInt(idade),
                },
                qtd_ano_final: {
                  gte: parseInt(idade),
                },
              },
            ],
          },
        },
      },
      include: {
        periodoaplicacaoano: true,
        vacinaaplicada: true,
      },
    });

    res.json(vacinas);
  } catch (error) {
    console.error('Erro ao obter vacinas por ano (exato):', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function getVacinasAteIdade(req, res) {
  const { idade } = req.params;

  try {
    const vacinas = await prisma.vacina.findMany({
      where: {
        periodoaplicacaoano: {
          some: {
            qtd_ano_final: {
              lte: parseInt(idade),
            },
          },
        },
      },
      include: {
        periodoaplicacaoano: true,
        vacinaaplicada: true,
      },
    });

    res.json(vacinas);
  } catch (error) {
    console.error('Erro ao obter vacinas até a idade especificada:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function getVacinasPorMesExato(req, res) {
  const { idadeMeses } = req.params;

  try {
    const vacinas = await prisma.vacina.findMany({
      where: {
        periodoaplicacaomes: {
          some: {
            OR: [
              {
                qtd_meses_inicial: {
                  lte: parseInt(idadeMeses),
                },
                qtd_meses_final: {
                  gte: parseInt(idadeMeses),
                },
              },
            ],
          },
        },
      },
      include: {
        periodoaplicacaomes: true,
        vacinaaplicada: true,
      },
    });

    res.json(vacinas);
  } catch (error) {
    console.error('Erro ao obter vacinas por idade (exata) em meses:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function getVacinasAteIdadeMeses(req, res) {
  const { idadeMeses } = req.params;

  try {
    const vacinas = await prisma.vacina.findMany({
      where: {
        periodoaplicacaomes: {
          some: {
            qtd_meses_final: {
              lte: parseInt(idadeMeses),
            },
          },
        },
      },
      include: {
        periodoaplicacaomes: true,
        vacinaaplicada: true,
      },
    });

    res.json(vacinas);
  } catch (error) {
    console.error('Erro ao obter vacinas até a idade (em meses) especificada:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function getVacinasPorPaciente(req, res) {
  const { id_paciente } = req.params;

  try {
    const vacinas = await prisma.vacinaaplicada.findMany({
      where: {
        id_paciente: parseInt(id_paciente),
      },
      include: {
        vacina: {
          include: {
            periodoaplicacaoano: true,
            periodoaplicacaomes: true,
          },
        },
      },
    });

    res.json(vacinas);
  } catch (error) {
    console.error('Erro ao obter vacinas do paciente:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

// Função para listar as vacinas pendentes de um paciente
async function getVacinasPendentesPorPaciente(req, res) {
  const { id_paciente } = req.params;

  try {
    const vacinasPendentes = await prisma.vacina.findMany({
      where: {
        NOT: {
          vacinaaplicada: {
            some: {
              id_paciente: parseInt(id_paciente),
            },
          },
        },
      },
      include: {
        periodoaplicacaoano: true,
        periodoaplicacaomes: true,
      },
    });

    res.json(vacinasPendentes);
  } catch (error) {
    console.error('Erro ao obter vacinas pendentes do paciente:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function getVacinaByProtecao(req, res) {
  const { protecao } = req.params; // Obtém o valor do parâmetro da URL

  try {
    const vacinas = await prisma.vacina.findMany({
      where: {
        doenca_protecao: {
          contains: protecao, // Procura por vacinas que contenham a substring do nome
          mode: 'insensitive', // Torna a busca insensível a maiúsculas e minúsculas
        },
      },
    });

    if (!vacinas || vacinas.length === 0) {
      res.status(404).send('Nenhuma vacina encontrada com esse nome');
    } else {
      res.json(vacinas);
    }
  } catch (error) {
    console.error('Erro ao obter vacina por nome:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function createVacina(req, res) {
  const novaVacina = req.body;

  try {
    const vacina = await prisma.vacina.create({
      data: novaVacina,
    });

    res.status(201).json(vacina);
  } catch (error) {
    console.error('Erro ao criar vacina:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function updateVacina(req, res) {
  const id = parseInt(req.params.id);
  const dadosAtualizados = req.body;

  try {
    const vacina = await prisma.vacina.update({
      where: { id_vacina: id },
      data: dadosAtualizados,
    });

    res.json(vacina);
  } catch (error) {
    console.error('Erro ao atualizar vacina:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function deleteVacina(req, res) {
  const id = parseInt(req.params.id);

  try {
    await prisma.vacina.delete({
      where: { id_vacina: id },
    });

    res.send('Vacina deletada com sucesso');
  } catch (error) {
    console.error('Erro ao deletar vacina:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

module.exports = {
  getVacinas,
  getVacinaById,
  getVacinasPorAnoExato,
  getVacinasAteIdade,
  getVacinasAteIdadeMeses,
  getVacinasPorMesExato,
  getVacinasPorPaciente,
  getVacinasPendentesPorPaciente,
  getVacinaByProtecao,
  createVacina,
  updateVacina,
  deleteVacina,
};
