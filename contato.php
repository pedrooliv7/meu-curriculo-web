<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = htmlspecialchars($_POST["nome"]);
    $email = htmlspecialchars($_POST["email"]);
    $mensagem = htmlspecialchars($_POST["mensagem"]);

    if (empty($nome) || empty($email) || empty($mensagem)) {
        echo "erro";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "erro";
        exit;
    }

    $linha = date("d/m/Y H:i:s") . " - " . $nome . " (" . $email . "): " . $mensagem . "\n";

    file_put_contents("mensagens.txt", $linha, FILE_APPEND);

    echo "OK";
} else {
    echo "erro";
}
?>