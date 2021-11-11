let params = new URL(document.location).searchParams;
let id=params.get("id");

const nomKanap=document.querySelector("#title");
const imageKanap=document.querySelector(".item__img");
const descriptionKanap=document.querySelector("#description");
const prixKanap=document.querySelector("#price");
const nombreKanap = document.querySelector("#quantity")
const ajouter = document.querySelector("#addToCart")
const img_article=document.createElement("img")


main()

function main(){
    afficherProduit();
    ajouterPanier();
}

function afficherProduit() {
    fetch(`http://localhost:3000/api/products/${id}`)
      .then(function (res) {
        return res.json();
      })
      .catch(()=>{
        let contenantProduit=document.querySelector("#title");
        contenantProduit.innerHTML="Problème de connexion au serveur.<br>Nous nous excusons pour les inconvenients engendrés et tentons de régler le problème au plus vite";
        contenantProduit.style.color="red";
        contenantProduit.style.testAlign="Center";
    })
    .then(function (dataApi){ 
        descriptionKanap.innerText=dataApi.description;
        imageKanap.appendChild(img_article)
        img_article.src=dataApi.imageUrl;
        nomKanap.innerHTML = dataApi.name;
        prixKanap.innerText= dataApi.price;

        let couleurProduit = document.querySelector("#colors");
        for(let couleur = 0 ; couleur < dataApi.colors.length ; couleur++){
        let choix = document.createElement("option");
        choix.innerHTML=dataApi.colors[couleur];
        couleurProduit.appendChild(choix);
    }
  })}

function ajouterPanier (){
  ajouter.addEventListener("click", function(){
    let ajoutKanap={
      nom: nomKanap.innerText,
      prix: prixKanap.innerText,
      nombre: parseFloat(nombreKanap.value),
      _id: id,
      img: img_article.src,
      couleur: document.getElementById('colors').selectedIndex
    };
    const confirmation = () => {
      (window.alert(`Bonjour, commande de ${parseFloat(nombreKanap.value)} ${nomKanap.innerText} confirmé`))
      }
      let articleEnregistre=JSON.parse(localStorage.getItem("article"));
      
      if (localStorage.getItem("article") !== null){
        
        articleEnregistre.push(ajoutKanap)
        localStorage.setItem("article", JSON.stringify(articleEnregistre))
        confirmation ();
      }
      
      else{
        articleEnregistre = []
        articleEnregistre.push(ajoutKanap)
        localStorage.setItem("article", JSON.stringify(articleEnregistre))
        confirmation ();
      }
    })
  }