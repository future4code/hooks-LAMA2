export class CustomError extends Error {
  constructor(_statusCode: number, message: string) {
    super(message);
  }
}

export class InvalidInfos extends CustomError {
  constructor() {
    super(400, "Um ou mais dados inválidos! Verifique suas informações");
  }
}

export class InvalidName extends CustomError {
  constructor() {
    super(400, "Nome inválido, insira um nome válido!");
  }
}

export class InvalidEmail extends CustomError {
  constructor() {
    super(400, "Email inválido, insira no formato nome@exemplo.com");
  }
}
export class InvalidPassword extends CustomError {
  constructor() {
    super(400, "Senha inválida");
  }
}

export class InvalidGenre extends CustomError {
  constructor() {
    super(400, "Gênero inválido");
  }
}

export class InvalidResponsible extends CustomError {
  constructor() {
    super(400, "Responsável inválido");
  }
}

export class InvalidRole extends CustomError {
  constructor() {
    super(400, "Tipo de usuário inválido, escolha entre'NORMAL' e 'ADMIN' ");
  }
}

export class InvalidDay extends CustomError {
  constructor() {
    super(400, "Dia inválido, disponível apenas SEXTA / SÁBADO / DOMINGO");
  }
}

export class InvalidStartTime extends CustomError {
  constructor() {
    super(400, "Horário inválido, digite um horário entre 08h e 23h!");
  }
}

export class InvalidEndTime extends CustomError {
  constructor() {
    super(400, "Horário inválido, digite um horário entre 08h e 23h!");
  }
}
export class InvalidTime extends CustomError {
  constructor() {
    super(
      400,
      "Horário inválido, tente inserir horários cheios, por ex: 10h, 12h"
    );
  }
}

export class FullSchedule extends CustomError {
  constructor() {
    super(400, "Horário já agendado! Procure outro horário!");
  }
}

export class InvalidToken extends CustomError {
  constructor() {
    super(400, "Token inválido!");
  }
}

export class InvalidAuthenticatorData extends CustomError {
  constructor() {
    super(400, "Autenticador inválido!");
  }
}

export class InvalidLogin extends CustomError {
  constructor() {
    super(400, "Usuário não encontrado !");
  }
}

export class DuplicatedBand extends CustomError {
  constructor() {
    super(400, "Banda já cadastrada.");
  }
}

export class NotAdmin extends CustomError {
  constructor() {
    super(400, "Você precisar ser adiministrador para cadastrar uma banda.");
  }
}
