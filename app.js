// récupération des éléments

const scoreJoueur = document.getElementById('score_jouer');
const scoreOrdi = document.getElementById('score_ordi');
const decompte = document.getElementById('pierre')

const btnPierre = document.getElementById('btn_pierre');
const btnFeuille = document.getElementById('btn_feuille');
const btnCiseaux = document.getElementById('btn_ciseaux');

const choixJoueur = document.getElementById('result_joueur');
const issue = document.getElementById('issue');
const choixOrdi = document.getElementById('result_ordi');

const btnReset = document.getElementById('btn_reset');

// mise a jour ddes scores
let scoreO = 0;
let scoreJ = 0;

// decompte pierre feuille ciseaux avant de jouer
const loop2 = () => {

    setTimeout(() => {
        if (decompte.innerText != "Feulle") {
            decompte.innerText = "Feuille";

            setTimeout(() => {
                decompte.innerText = "Ciseaux";
            },1000)
        }    
                 
    }, 1000);

    return decompte.innerText = "Pierre"

}


loop2();


//faire une fonction pour la logique du jeu
const jeu = (choixPlayer) => {
    
    
    

   let choixLaptop = Math.floor(Math.random()*3)
    
   switch(choixLaptop) {
    case 0:
        choixOrdi.innerText = '👊';
        
        break;
    case 1:
        choixOrdi.innerHTML = '✋';
        
        break;
    case 2:
        choixOrdi.innerHTML = "✌️";
        
        break;
        

   };

   

   switch (true) {
    case (choixLaptop == 0) && (choixPlayer == 0) || 
         (choixLaptop == 1) && (choixPlayer == 1) ||
         (choixLaptop == 2) && (choixPlayer == 2):
        issue.innerHTML = "égalité!";
        issue.style.color = "blue";
        
        break;
//    victoire du joueur
    case (choixLaptop == 0) && (choixPlayer == 1) || 
         (choixLaptop == 1) && (choixPlayer == 2) ||
         (choixLaptop == 2) && (choixPlayer == 0):
         issue.innerHTML = "victoire!"
         issue.style.color = "green";
         scoreJ++;
        break;
//    défaite du joueur
    case (choixLaptop == 0) && (choixPlayer == 2) || 
         (choixLaptop == 1) && (choixPlayer == 0) ||
         (choixLaptop == 2) && (choixPlayer == 1):
         issue.innerHTML = "defaite!" ;
         issue.style.color = "red";
         scoreO++;
         break ;  
   };

//    affichage des scores
   scoreOrdi.innerText = `Score de l'Ordi : ${scoreO}`;
   scoreJoueur.innerHTML = `Score du Joueur : ${scoreJ}`;


// configuration du boutton reset
   btnReset.onclick =() => {
    scoreOrdi.innerText = "Score de l'Ordi : 0"
    scoreJoueur.innerHTML = "Score du Joueur : 0"
    choixJoueur.innerHTML = ""
    issue.innerHTML = ""
    choixOrdi.innerHTML = ""
    scoreO = 0
    scoreJ = 0

   }

   
}



// configurer les boutons du joueur
btnPierre.onclick = () => {
    loop2(jeu(0))
    choixJoueur.innerHTML = "👊"
    
    
}

btnFeuille.onclick = () => {
    loop2(jeu(1))
    choixJoueur.innerHTML = "✋"

}

btnCiseaux.onclick = () => {
    loop2(jeu(2))
    choixJoueur.innerHTML = "✌️"
    
}
