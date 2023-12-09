class Vacina {
    constructor(id_vacina, vacina, sigla_vacina, doenca_protecao, dose, id_rede) {
      this.id_vacina = id_vacina;
      this.vacina = vacina;
      this.sigla_vacina = sigla_vacina;
      this.doenca_protecao = doenca_protecao;
      this.dose = dose;
      this.id_rede = id_rede;
    }
}

module.exports = Vacina;
