#language: pt
@Comprar @End2End
Funcionalidade: Comprar produtos

  Contexto: 
    Dado que o usuario esteja na pagina principal do sistema
    E que o usuario esteja logado

  @AdicionarProdutoAoCarrinho
  Esquema do Cenario: Adicionar Produto ao Carrinho
    Quando clicar no titulo do "<produto>"
    E adicionar o produto ao carrinho
    E clicar no carrinho para finalizar a compra no checkout
    E clicar no botao checkout
    Entao o sistema devera apresentar a tela de preenchimento de informacoes pessoais

    Exemplos: 
      | produto             |
      | Sauce Labs Backpack |
