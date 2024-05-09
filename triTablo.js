// * * * Possibilité de trier un tableau de résultat * * *
// 1) Appeler ce script en fin de page HTML
// 2) Mettre une classe "triTablo" sur les tables à trier
// 3) Ajouter une CSS  
//     table.triTablo th { cursor: pointer ; }


let triTablo = {
    // La derniere demande pour le tri
    dernierNo: -1
    ,
    // Mise en place des tri - Récupération des tableaux concernés
    install: function(clas) {
        let tabTablos = document.getElementsByClassName(clas) ;
        for (let tabl of tabTablos) {
            this.installTablo(tabl) ;
        }
    }
    , 
    // Intallation dans un tableau
    installTablo: function(tabl) {
        let listTh = tabl.getElementsByTagName('th') ;
        let i = 0 ;
        for (let thObj of listTh) {
            let j = i ;
            thObj.onclick = function(){ triTablo.sort(tabl, j) ; }
            i = i + 1 ;
        }
    }
    ,
    // Et c'est ici qu'on effectue le tri à la mano sur la table HTML
    sort: function(tabl, col) {
        let listTr = tabl.getElementsByTagName('tr') ;
        let nbTb   = listTr.length - 1 ; 
        let testTri = (this.dernierNo != col) ;
        for (let i = 0; i <= nbTb - 1 ; i++) {
            let td0 = listTr[i].getElementsByTagName('td') ;
            if (td0.length > 0) {
                for (let j = i+1; j <= nbTb ; j++ ) {
                    let td1 = listTr[j].getElementsByTagName('td') ;
                    if ( (td1[col].innerHTML < td0[col].innerHTML) == testTri) {
                        for (let c = 0; c < td1.length; c++) {
                            let t  = td1[c].innerHTML ;
                            td1[c].innerHTML = td0[c].innerHTML ;
                            td0[c].innerHTML = t ;
                        }
                    }
                }
            }
        }
        if (this.dernierNo == col) {
            this.dernierNo = -1 ;
        } else {
            this.dernierNo = col ;
        }
    }
} 
// Installation des tris
triTablo.install('triTablo') ;