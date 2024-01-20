/*
 Api calls:
    REFERENCE SITE : https://test-hosting-8f9bf.web.app/index.html;
    Homepage: https://5d76bf96515d1a0014085cf9.mockapi.io/product
    Product Details: https://5d76bf96515d1a0014085cf9.mockapi.io/product/1
    Create Order: https://5d76bf96515d1a0014085cf9.mockapi.io/order

*/



const HomepageUrl = 'https://5d76bf96515d1a0014085cf9.mockapi.io/product';
const clothingSection = document.getElementById("clothing");
const accessorySection = document.getElementById('accessories');


  function Homepage(){
    const request = new XMLHttpRequest();// make a request object 
    console.log(request);
    request.open('GET',HomepageUrl,true);
    request.send();

    request.onload = function(){
        if(request.readyState === 4 && request.status === 200){
            //  console.log(request.responseText);
            let result = JSON.parse(request.responseText);
            console.log(result);
            // console.log(clothingSection);
           
            
            for (const item of result) {
                // console.log(item);
               let item_id = item.id;
                // console.log(item_id);
                
               
                if(item.isAccessory === false){
                    
                        // MAKING A LINK 
                        
                        let link = document.createElement('a');
                        link.setAttribute('class','card-link')
                        clothingSection.append(link);
                        
                        // link.href = `https://5d76bf96515d1a0014085cf9.mockapi.io/product/${item_id}`;
                        // link.href = '/productDetailPage.html';
                        // CARD MAIN DIV OR WRAPPER WITH APPEND  
                        let cardWrapper = document.createElement('div');
                        cardWrapper.setAttribute('class','cardWrapper');
                        link.append(cardWrapper);
                        // console.log(cardWrapper);
        
                        // FOR IMAGE DIV WITH APPEND 
                        let imageDiv = document.createElement('div');
                        imageDiv.setAttribute('class','imageDiv');
                        let Image = document.createElement('img');
                        Image.setAttribute('class','Images');
                        Image.src = item.preview;
                        imageDiv.appendChild(Image);
                        cardWrapper.appendChild(imageDiv);
        
                        // FOR DETAIL DIV WITH APPEND
                        let detailDiv = document.createElement('div');
                        detailDiv.setAttribute('class','detailDiv');
                        cardWrapper.appendChild(detailDiv);
                        //DETAILS
                        let productName = document.createElement('h4');
                        productName.setAttribute('class','productName');
                        productName.innerText = item.name;
                        let productBrand = document.createElement('h5');
                        productBrand.setAttribute('class','productBrand');
                        productBrand.innerText = item.brand;
                        let productPrice = document.createElement('p');
                         productPrice.setAttribute('class','productPrice');
                         productPrice.innerText = " RS " + " " + item.price;
                         detailDiv.append(productName,productBrand,productPrice);

                        //  FUNCTION TO RETURN ITEM ID 
                     export  function return_item_id(){
                        link.addEventListener('click',function(e){
                            // return item_id;
                            console.log(item_id);
                        })
                       }
                       return_item_id();
                        
                         
                }
                 //*********REPEATING CODE HAVE TO CONVERT INTO FUNCTION LATER ***************/
                if(item.isAccessory === true){

                    // MAKING A LINK 
                    let link = document.createElement('a');
                    accessorySection.append(link);
                    // link.setAttribute('class','card-link');
                    // link.href = '/productDetailPage.html';
                    // CARD MAIN DIV OR WRAPPER WITH APPEND  
                    let cardWrapper = document.createElement('div');
                    cardWrapper.setAttribute('class','cardWrapper');
                    link.append(cardWrapper);
                    // console.log(cardWrapper);
    
                    // FOR IMAGE DIV WITH APPEND 
                    let imageDiv = document.createElement('div');
                    imageDiv.setAttribute('class','imageDiv');
                    let Image = document.createElement('img');
                    Image.setAttribute('class','Images');
                    Image.src = item.preview;
                    imageDiv.appendChild(Image);
                    cardWrapper.appendChild(imageDiv);
    
                    // FOR DETAIL DIV WITH APPEND
                    let detailDiv = document.createElement('div');
                    detailDiv.setAttribute('class','detailDiv');
                    cardWrapper.appendChild(detailDiv);
                    //DETAILS
                    let productName = document.createElement('h4');
                    productName.setAttribute('class','productName');
                    productName.innerText = item.name;
                    let productBrand = document.createElement('h5');
                    productBrand.setAttribute('class','productBrand');
                    productBrand.innerText = item.brand;
                    let productPrice = document.createElement('p');
                     productPrice.setAttribute('class','productPrice');
                     productPrice.innerText = " RS " + " " + item.price;
                     detailDiv.append(productName,productBrand,productPrice);

                     
                } 
           }
           
        }   
    }
}


Homepage();
