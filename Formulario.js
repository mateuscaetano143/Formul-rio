$(document).ready(function () {
  $("#limpar").click(function () {
    document.getElementById("cadastro-form").reset();
  });

  $("#cadastro-form").submit(function (event) {
    event.preventDefault();

    var nome = $("#nome").val();
    var sobrenome = $("#sobrenome").val();
    var email = $("#email").val();
    var telefone = $("#telefone").val();
    var dia = $("#dia").val();
    var mes = $("#mes").val();
    var ano = $("#ano").val();
    var descricao = $("#descricao").val();
    var camposFaltando = [];

    if (!nome) camposFaltando.push("Nome");
    if (!sobrenome) camposFaltando.push("Sobrenome");
    if (!email) camposFaltando.push("Email");
    if (!telefone) camposFaltando.push("Telefone");
    if (!dia || !mes || !ano) camposFaltando.push("Data de Nascimento");
    if (!descricao) camposFaltando.push("Descrição");

    if (camposFaltando.length === 0) {
      var mensagem =
        "Usuário cadastrado com sucesso!\n\n" +
        "Nome: " +
        nome +
        "\n" +
        "Sobrenome: " +
        sobrenome +
        "\n" +
        "Email: " +
        email +
        "\n" +
        "Telefone: " +
        telefone +
        "\n" +
        "Data de Nascimento: " +
        dia +
        "/" +
        mes +
        "/" +
        ano +
        "\n" +
        "Descrição: " +
        descricao;
      alert(mensagem);
    } else {
      var mensagemErro =
        "Por favor, preencha os seguintes campos obrigatórios:\n" +
        camposFaltando.join(", ");
      alert(mensagemErro);
    }
  });
});
