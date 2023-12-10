// campanhaController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getCampanhas(req, res) {
  try {
    const campanhas = await prisma.campanha.findMany({
      include: {
        campanhavacina: true, // Inclui as vacinas vinculadas
      },
    });  
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
      include: {
        campanhavacina: true, // Inclui as vacinas vinculadas
      },
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
    const countResult = await prisma.campanha.count();
    const quantidadeDeIds = countResult;
    const novoId = quantidadeDeIds + 1;
    const campanha = await prisma.campanha.create({
      data: {
        ...novaCampanha,
        id_campanha: novoId,
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

// Função para cadastrar uma vacina em uma campanha
async function addVacinaToCampanha(req, res) {
  const { id_campanha, id_vacina, } = req.body;

  try {
    const novaCampanhaVacina = await prisma.campanhavacina.create({
      data: {
        id_campanha: parseInt(id_campanha),
        id_vacina: parseInt(id_vacina),
      },
    });

    res.json(novaCampanhaVacina);
  } catch (error) {
    console.error('Erro ao adicionar vacina à campanha:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function removeVacinaFromCampanha(req, res) {
  const { id_campanha, id_vacina } = req.params;

  try {
    await prisma.campanhavacina.delete({
      where: {
        id_campanha_id_vacina: {
          id_campanha: parseInt(id_campanha),
          id_vacina: parseInt(id_vacina),
        },
      },
    });

    res.send('Vacina removida da campanha com sucesso');
  } catch (error) {
    console.error('Erro ao remover vacina da campanha:', error);
    res.status(500).send('Erro interno do servidor');
  }
}


// Função para listar campanhas por data
async function getCampanhasPorData(req, res) {
  const { data } = req.params;

  try {
    const campanhas = await prisma.campanha.findMany({
      where: {
        AND: [
          {
            data_inicio: {
              lte: new Date(data),
            },
          },
          {
            data_fim: {
              gte: new Date(data),
            },
          },
        ],
      },
      include: {
        campanhavacina: true,         
      },      
    });

    res.json(campanhas);
  } catch (error) {
    console.error('Erro ao obter campanhas por data:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function getCampanhasPorProtecao(req, res) {
  const { protecao } = req.params;

  try {
    const protecaoCapitalizada =
      protecao.charAt(0).toUpperCase() + protecao.slice(1);

    const campanhas = await prisma.campanha.findMany({
      where: {
        campanhavacina: {
          some: {
            vacina: {
              doenca_protecao: {
                contains: protecaoCapitalizada,
              },
            },
          },
        },
      },
    });

    res.json(campanhas);
  } catch (error) {
    console.error('Erro ao obter campanhas por proteção da vacina:', error);
    res.status(500).send('Erro interno do servidor');
  }
}








module.exports = {
  getCampanhas,
  getCampanhaById,
  createCampanha,
  updateCampanha,
  deleteCampanha,
  addVacinaToCampanha,
  removeVacinaFromCampanha,
  getCampanhasPorData,
  getCampanhasPorProtecao
};
