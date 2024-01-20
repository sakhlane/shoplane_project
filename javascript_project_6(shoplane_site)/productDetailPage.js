console.log('product detail page script');

import {return_item_id} from './homePage.js';
 
// LINK FOR SINGLE PRODUCT DETAIL 
 const  product_detail_url = `https://5d76bf96515d1a0014085cf9.mockapi.io/product/${return_item_id}`;

 function product_detaitl(){
    const Request = new XMLHttpRequest();
    console.log(Request);
    //FOR REQUEST OPEN
    Request.open('GET',product_detail_url,true);
    Request.send();

    Request.onreadystatechange = function(){
        if(this.status === 200 && this.readyState === 4){
            // console.log(this.response);
            let productDetail = JSON.parse(this.responseText);
            // console.log(productDetail);
            // console.log(product_detail_url)
          
            //  for (const item of productDetail) {
            //         let item_no = item.id;
            //         console.log(item_no);
            //         return item_no;
                    
                
            // }
        }
    }
}
product_detaitl();
