// * * * Possibilité de trier un tableau de résultat * * *
// 1) Appeler ce script en fin de page HTML
// 2) Mettre une classe "triTablo" sur les tables à trier
// 3) Ajouter une CSS  
//     table.triTablo th { cursor: pointer ; }
//        ou 
//     th.thTri { cursor: pointer ; }


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
            if (thObj.innerHTML.toLowerCase().includes('date')) {
                thObj.onclick = function(){ triTablo.sort(tabl, j, true) ; }
            } else {
                thObj.onclick = function(){ triTablo.sort(tabl, j, false) ; }
            }
            thObj.classList.add('thTri') ;
            i = i + 1 ;
        }
    }
    ,
    // Et c'est ici qu'on effectue le tri à la mano sur la table HTML
    sort: function(tabl, col, typeDate) {
        let listTr = tabl.getElementsByTagName('tr') ;
        let nbTb   = listTr.length - 1 ; 
        let testTri = (this.dernierNo != col) ;
        for (let i = 0; i <= nbTb - 1 ; i++) {
            let td0 = listTr[i].getElementsByTagName('td') ;
            if (td0.length > 0) {
                let rub0 = td0[col].innerHTML ; 
                if (typeDate) {rub0 = rub0.substring(6,10) + rub0.substring(3,5) + rub0.substring(0,2) ;}
                for (let j = i+1; j <= nbTb ; j++ ) {
                    let td1 = listTr[j].getElementsByTagName('td') ;
                    let rub1 = td1[col].innerHTML ; 
                    if (typeDate) {rub1 = rub1.substring(6,10) + rub1.substring(3,5) + rub1.substring(0,2) ;}
                    if ( (rub1 < rub0) == testTri) { // Inversion des lignes
                        rub0 = rub1 ;
                        [listTr[i].innerHTML, listTr[j].innerHTML] = [listTr[j].innerHTML, listTr[i].innerHTML] ;
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