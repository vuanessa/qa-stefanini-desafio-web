package stepdefinitions;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pageobjects.ComprarPage;

public class ComprarSteps {
	
	WebDriver driver;
	
		
	@Quando("^clicar no titulo do \"([^\"]*)\"$")
	public void clicar_no_titulo_do(String arg1) throws Throwable {
		ComprarPage cp = new ComprarPage(Hooks.getDriver());
		cp.tituloProduto();
	}

	@Quando("^adicionar o produto ao carrinho$")
	public void adicionar_o_produto_ao_carrinho() throws Throwable {
		ComprarPage cp = new ComprarPage(Hooks.getDriver());
		cp.AddToCart(); 
	}

	@Quando("^clicar no carrinho para finalizar a compra no checkout$")
	public void clicar_no_carrinho_para_finalizar_a_compra_no_checkout() throws Throwable {
		ComprarPage cp = new ComprarPage(Hooks.getDriver());
		cp.visualizarCarrinho();
	}
	
	@Quando("^clicar no botao checkout$")
	public void clicar_no_botao_checkout() throws Throwable {
		ComprarPage cp = new ComprarPage(Hooks.getDriver());
		cp.fazerCheckout();
	}
	   

	@Entao("^o sistema devera apresentar a tela de preenchimento de informacoes pessoais$")
	public void o_sistema_devera_apresentar_a_tela_de_preenchimento_de_informacoes_pessoais() throws Throwable {
		ComprarPage cp = new ComprarPage(Hooks.getDriver());
		cp.telaDadosPessoais();
	}
}
