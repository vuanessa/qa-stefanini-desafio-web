package pageobjects;



import static org.junit.Assert.assertTrue;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import utils.MetodosUteis;

public class LoginPage extends MetodosUteis {

    protected WebDriver driver;

    public LoginPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    @FindBy(id = "user-name")
    private WebElement usuario;

    @FindBy(id = "password")
    private WebElement senha;

    @FindBy(id = "login-button")
    private WebElement btnLogin;

    @FindBy(className = "title")
    private List<WebElement> titulos;

    public void preencherUsuario(String nomeUsuario) {
        esperarElemento(usuario);
        usuario.sendKeys(nomeUsuario);
    }

    public void preencherSenha(String senhaUsuario) {
        esperarElemento(senha);
        senha.sendKeys(senhaUsuario);
    }

    public void clicarBotaoLogin() {
        esperarElemento(btnLogin);
        btnLogin.click();
    }

    public void validarProdutos() {
        WebElement products = null;
        for (int i = 0; i < titulos.size(); i++) {
            if (titulos.get(i).getText().contains("Products")) {
                products = titulos.get(i);
            }
        }
        esperarElemento(products);
        assertTrue(products.isEnabled());
    }

}
	
