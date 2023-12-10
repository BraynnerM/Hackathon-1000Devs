const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getPacientes(req, res) {
  try {
    const pacientes = await prisma.paciente.findMany();
    res.status(200).json(pacientes);
  } catch (error) {
    console.error(error);
    res.status(404).json({ mensagem: 'Erro ao executar a consulta.' });
  }
}

async function getPacienteById(req, res) {
  const { id } = req.params;
  try {
    const paciente = await prisma.paciente.findUnique({
      where: { id_paciente: Number(id) },
    });

    if (paciente) {
      res.status(200).json(paciente);
    } else {
      res.status(404).json({ mensagem: 'Paciente não encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(404).json({ mensagem: 'Erro ao executar a consulta.' });
  }
}

async function getPacienteByNome(req, res) {
  const { nome } = req.params; // Obtém o valor do parâmetro da URL

  try {
    const paciente = await prisma.paciente.findMany({
      where: {
        nome: {
          contains: nome, 
          mode: 'insensitive', 
        },
      },
    });

    if (!paciente|| paciente.length === 0) {
      res.status(404).send('Nenhum paciente encontrado com esse nome');
    } else {
      res.json(paciente);
    }
  } catch (error) {
    console.error('Erro ao obter paciente por nome:', error);
    res.status(500).send('Erro interno do servidor');
  }
}

async function createPaciente(req, res) {
  const { nome, data_nascimento } = req.body;

  try {
    // Consulta para obter a quantidade de IDs já gravados na tabela
    const countResult = await prisma.paciente.count();
    const quantidadeDeIds = countResult;

    const novoId = quantidadeDeIds + 1;
    const paciente = await prisma.paciente.create({
      data: {
        nome: nome,  // Correção aqui
        data_nascimento: data_nascimento,  // Correção aqui
        id_paciente: novoId,
      },
    });

    res.status(201).json({ mensagem: 'Paciente cadastrado com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(404).json({ mensagem: 'Erro ao inserir paciente.' });
  }
}


async function updatePaciente(req, res) {
  const { id } = req.params;
  const { nome, data_nascimento } = req.body;

  try {
    const pacienteAtualizado = await prisma.paciente.update({
      where: { id_paciente: Number(id) },
      data: {
        nome,
        data_nascimento,
      },
    });

    res.status(201).json({ mensagem: 'Paciente atualizado com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(404).json({ mensagem: 'Erro ao atualizar paciente.' });
  }
}

async function deletePaciente(req, res) {
  const { id } = req.params;

  try {
    await prisma.paciente.delete({
      where: { id_paciente: Number(id) },
    });

    res.status(200).json({ mensagem: 'Paciente excluído com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(404).json({ mensagem: 'Erro ao excluir paciente.' });
  }
}

module.exports = {
  getPacientes,
  getPacienteById,
  getPacienteByNome,
  createPaciente,
  updatePaciente,
  deletePaciente,
};
