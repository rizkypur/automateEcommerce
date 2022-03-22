//const { default: ChromeDriverService } = require("wdio-chromedriver-service");
const automateEcommerce = require('../page objects/index.object');

describe('Automation test Practice', () => {

    beforeEach(async () => {
        await browser.maximizeWindow();
    });

    it('Adding evening dresses', async () => {
        await browser.url('http://automationpractice.com');

        await automateEcommerce.addPrintDressToCart();

        await browser.pause(5000);

        //Assert Product has been added to Chart
        await expect($('//*[@id="product_4_16_0_0"]/td[2]/p/a')).toHaveText("Printed Dress");
        

    });

    it('Adjust Qty in Chart Page', async () => {
       
        //Assert to Verify Qty Default is 1
        await expect($('[name="quantity_4_16_0_0"]')).toHaveValue("1");

        //Increase QTY by 2
        await automateEcommerce.incQtyButton();
        await automateEcommerce.incQtyButton();
        
        //Assert to Verify Increase Qty to 3
        await expect($('[name="quantity_4_16_0_0"]')).toHaveValue("3");

        //Decresease QTY by 1
        await automateEcommerce.decQtyButton();

        //Assert to Verify Decrease Qty to 2
        await expect($('[name="quantity_4_16_0_0"]')).toHaveValue("2");

        await browser.pause(5000);
        
    });
    
});