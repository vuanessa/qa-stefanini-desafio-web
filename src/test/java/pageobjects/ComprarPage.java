package pageobjects;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import utils.MetodosUteis;

public class ComprarPage extends MetodosUteis {
	
	 protected WebDriver driver;

	    public ComprarPage(WebDriver driver) {
	        PageFactory.initElements(driver, this);
	        this.driver = driver;
	    }

	    @FindBy(id = "item_4_title_link")
	    private WebElement tituloProduto;
	    
	    @FindBy(id = "add-to-cart-sauce-labs-backpack")
	    private WebElement btnAddToCart;
	    
	    @FindBy(id = "shopping_cart_container")
	    private WebElement btnCarrinho;
	    
	    @FindBy(id = "checkout")
	    private WebElement btnCheckout;
	    
	    @FindBy(css = "checkout_info")
	    private WebElement telaDadosPessoais;
	    
	    
	   public void tituloProduto() {
		   esperarElemento(tituloProduto);
		   tituloProduto.click();
	   }
	    
	    public void AddToCart() {
	    	esperarElemento(btnAddToCart);
	    	btnAddToCart.click();
	    }
	    
	    public void visualizarCarrinho() {
	    	esperarElemento(btnCarrinho);
	    	btnCarrinho.click();
	    }	
	    
	    public void fazerCheckout() {
	    	esperarElemento(btnCheckout);
	    	btnCheckout.click();
	    	
	    }
	    
	    public void telaDadosPessoais() {
	    	esperarElemento(telaDadosPessoais);
	    	assertTrue(telaDadosPessoais.isDisplayed());
	    }
	    

}
