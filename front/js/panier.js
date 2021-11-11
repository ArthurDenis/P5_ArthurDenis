let articleEnregistre=JSON.parse(localStorage.getItem("article"))
let objetPanier = document.querySelector("#cart__items")
let panierVide= document.querySelector("#limitedWidthBlock")

main()

function main(){
    afficherPanier();
}

function afficherPanier(){
    if (localStorage.getItem("article")){}
    else{
        panierVide.display = none};
    for (let article in articleEnregistre){
        let cart_item=document.createElement("article");
        objetPanier.appendChild(cart_item)
        cart_item.classList.add("cart__item")

        let cart_item_img=document.createElement("div");
        cart_item.appendChild(cart_item_img)
        cart_item_img.classList.add("cart__item__img")

        let img_article=document.createElement("img")
        cart_item_img.appendChild(img_article)
        img_article.src=articleEnregistre[article].img;

        let cartItemContent=document.createElement("div");
        cart_item.appendChild(cartItemContent)
        cartItemContent.classList.add("cart__item__content")

        let cartTitrePrix=document.createElement("div");
        cartItemContent.appendChild(cartTitrePrix)
        cartTitrePrix.classList.add("cart__item__content__titlePrice")

        let titre=document.createElement("h2");
        cartItemContent.appendChild(titre)
        titre.innerHTML=articleEnregistre[article].nom

        let prix=document.createElement("p");
        cartItemContent.appendChild(prix)
        prix.innerHTML=`${articleEnregistre[article].prix}€`
        
        let cartOption=document.createElement("div");
        cartItemContent.appendChild(cartOption)
        cartOption.classList.add("cart__item__content__settings")

        let optionQuantite=document.createElement("div");
        cartOption.appendChild(optionQuantite)
        optionQuantite.classList.add("cart__item__content__settings__quantity")

        let texteQuantite=document.createElement("p");
        optionQuantite.appendChild(texteQuantite)
        texteQuantite.innerText = `Qté : `

        let changementQuantite=document.createElement("input")
        optionQuantite.appendChild(changementQuantite)
        changementQuantite.classList.add("itemQuantity")
        changementQuantite.setAttribute("min", "1")
        changementQuantite.setAttribute("max", "100")
        changementQuantite.setAttribute("value", `${articleEnregistre[article].nombre}`)
        changementQuantite.setAttribute("type", "number")
        changementQuantite.setAttribute("name", "itemQuantity")
        

        let suppression=document.createElement("div");
        cartOption.appendChild(suppression)
        suppression.classList.add("cart__item__content__settings__delete")

        let texteSuppression=document.createElement("p");
        optionQuantite.appendChild(texteSuppression)
        texteSuppression.innerText = 'Supprimer'
        texteSuppression.classList.add("deleteItem")

        let totalPrix= []
        for (let e=0; e<articleEnregistre.length; e++){
            let prixPanier= articleEnregistre[e].prix
            totalPrix.push(prixPanier)
            console.log(prixPanier)
        }
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const prixFinal=totalPrix.reduce(reducer,0);
        let prixTotal=totalPrice
        prixTotal.innerText=prixFinal
    }  
}

