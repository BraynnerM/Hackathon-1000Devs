import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getVacinasAplicadas = async (req, res) => {
  try {
    const vacinasAplicadas = await prisma.vacinaAplicada.findMany();
    res.status(200).json(vacinasAplicadas);
  } catch (error) {
    console.error(error);
    res.status(404).json({ mensagem: 'Erro ao executar a consulta.' });
  }
};

export const getVacinaAplicadaById = async (req, res) => {
  // Implemente a lógica para buscar uma vacina aplicada por ID
};

export const createVacinaAplicada = async (req, res) => {
  // Implemente a lógica para criar uma nova vacina aplicada
};

export const updateVacinaAplicada = async (req, res) => {
  // Implemente a lógica para atualizar uma vacina aplicada por ID
};

export const deleteVacinaAplicada = async (req, res) => {
  // Implemente a lógica para excluir uma vacina aplicada por ID
};