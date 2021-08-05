$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Comprar.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Comprar produtos",
  "description": "",
  "id": "comprar-produtos",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@Comprar"
    },
    {
      "line": 2,
      "name": "@End2End"
    }
  ]
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Adicionar Produto ao Carrinho",
  "description": "",
  "id": "comprar-produtos;adicionar-produto-ao-carrinho",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@AdicionarProdutoAoCarrinho"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "clicar no titulo do \"\u003cproduto\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "adicionar o produto ao carrinho",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "clicar no carrinho para finalizar a compra no checkout",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "clicar no botao checkout",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "o sistema devera apresentar a tela de preenchimento de informacoes pessoais",
  "keyword": "Entao "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "comprar-produtos;adicionar-produto-ao-carrinho;",
  "rows": [
    {
      "cells": [
        "produto"
      ],
      "line": 18,
      "id": "comprar-produtos;adicionar-produto-ao-carrinho;;1"
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 19,
      "id": "comprar-produtos;adicionar-produto-ao-carrinho;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 4475656600,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "que o usuario esteja logado",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 456801600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_logado()"
});
formatter.result({
  "duration": 1146461000,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Adicionar Produto ao Carrinho",
  "description": "",
  "id": "comprar-produtos;adicionar-produto-ao-carrinho;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@AdicionarProdutoAoCarrinho"
    },
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 2,
      "name": "@Comprar"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "clicar no titulo do \"Sauce Labs Backpack\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "adicionar o produto ao carrinho",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "clicar no carrinho para finalizar a compra no checkout",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "clicar no botao checkout",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "o sistema devera apresentar a tela de preenchimento de informacoes pessoais",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Backpack",
      "offset": 21
    }
  ],
  "location": "ComprarSteps.clicar_no_titulo_do(String)"
});
formatter.result({
  "duration": 1053061100,
  "status": "passed"
});
formatter.match({
  "location": "ComprarSteps.adicionar_o_produto_ao_carrinho()"
});
formatter.result({
  "duration": 190255900,
  "status": "passed"
});
formatter.match({
  "location": "ComprarSteps.clicar_no_carrinho_para_finalizar_a_compra_no_checkout()"
});
formatter.result({
  "duration": 133677400,
  "status": "passed"
});
formatter.match({
  "location": "ComprarSteps.clicar_no_botao_checkout()"
});
formatter.result({
  "duration": 156590900,
  "status": "passed"
});
formatter.match({
  "location": "ComprarSteps.o_sistema_devera_apresentar_a_tela_de_preenchimento_de_informacoes_pessoais()"
});
