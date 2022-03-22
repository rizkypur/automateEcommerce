class automateEcommerce {
    
    async addPrintDressToCart(){
        await $('//*[@id="block_top_menu"]/ul/li[2]/a').click();
        await $('h5=Evening Dresses').click();

        await browser.pause(3000);

        const elem = await $('//*[@id="center_column"]/ul/li/div/div[1]/div/a[1]/img');
        elem.moveTo();
        
        const btnAddToCart =  await $('//span[.="Add to cart"]');  
        await btnAddToCart.click();

        await browser.pause(3000)

        //Assert Success Add a product
        await expect($('//*[@id="layer_cart"]/div[1]/div[1]/h2')).toBeDisplayed();

        const btnCheckout = await $('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a');
        await btnCheckout.click();
        
        
    }

    async incQtyButton(){
        const btnAddQty = $('#cart_quantity_up_4_16_0_0');
        await btnAddQty.click();    
    }

    async decQtyButton(){
        const btnMinQty = $('#cart_quantity_down_4_16_0_0');
        await btnMinQty.click();    
    }

}

module.exports = new automateEcommerce();