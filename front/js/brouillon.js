let arrayProductsInCart = [];
const confirmation = () => {
    (window.alert(`Bonjour, commande de ${parseFloat(document.querySelector("#quantity").value)} ${nomKanap.innerText} confirmée`))
    }
    let articleEnregistre=JSON.parse(localStorage.getItem("article"));
    
    if (localStorage.getItem("articleEnregistre") !== null ){
      articleEnregistre = JSON.parse(localStorage.getItem("products"));
      confirmation ()
      }
        articleEnregistre.push(ajoutKanap);
        localStorage.setItem("article", JSON.stringify(articleEnregistre));
        confirmation ()
  })
}


const confirmation = () => {
    (window.alert(`Bonjour, commande de ${parseFloat(document.querySelector("#quantity").value)} ${nomKanap.innerText} confirmé`))
    }
    let articleEnregistre=JSON.parse(localStorage.getItem("article"));
    
    if (articleEnregistre){
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


let articleEnregistre = [];
const confirmation = () => {
    (window.alert(`Bonjour, commande de ${parseFloat(document.querySelector("#quantity").value)} ${nomKanap.innerText} confirmée`))
    }
    articleEnregistre=JSON.parse(localStorage.getItem("article"));
    
    if (localStorage.getItem("articleEnregistre") !== null ){
      articleEnregistre = JSON.parse(localStorage.getItem("products"));
      confirmation ()
      }
        articleEnregistre.push(ajoutKanap);
        localStorage.setItem("article", JSON.stringify(articleEnregistre));
        confirmation ()
  })
}


`${articleEnregistre[article].nombre}`

const modifQuantite = document.querySelector('.itemQuantity');
        modifQuantite.addEventListener('change', (event) => {
        let modification = element.closest(".itemQuantity")
        });


        const confirmation = () => {
          (window.alert(`Bonjour, commande de ${parseFloat(document.querySelector("#quantity").value)} ${nomKanap.innerText} confirmé`))
          }
          let articleEnregistre=[]
          
          if (localStorage.getItem("article") !== null){
            articleEnregistre=JSON.parse(localStorage.getItem("article"))
          }
          articleEnregistre.push(ajoutKanap);
          localStorage.setItem("article", JSON.stringify(articleEnregistre))
          confirmation ();
          
        })
      }