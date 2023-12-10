import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getCampanhaVacinas = async (req, res) => {
  try {
    const campanhaVacinas = await prisma.campanhaVacina.findMany();
    res.status(200).json(campanhaVacinas);
  } catch (error) {
    console.error(error);
    res.status(404).json({ mensagem: 'Erro ao executar a consulta.' });
  }
};

export const getCampanhaVacinaById = async (req, res) => {
  // Implemente a lógica para buscar uma campanhaVacina por ID
};

export const createCampanhaVacina = async (req, res) => {
  // Implemente a lógica para criar uma nova campanhaVacina
};

export const updateCampanhaVacina = async (req, res) => {
  // Implemente a lógica para atualizar uma campanhaVacina por ID
};

export const deleteCampanhaVacina = async (req, res) => {
  // Implemente a lógica para excluir uma campanhaVacina por ID
};