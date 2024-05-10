Possibilité de trier un tableau de résultat
===========================================

Simplement pour ajouter la possiblité de trier un tableau html en cliquant sur les titres.    
Le tri se fait dans les deux sens : Ascendant / Descendant.   
Les colonnes de type DATE sont trié correctement, si le titre de la colonne commence par "Date".     

1) Appeler ce script en fin de page HTML
2) Mettre une classe "triTablo" sur les tables à trier
3) Ajouter une CSS    
    table.triTablo th { cursor: pointer ; }    
        ou    
    th.thTri { cursor: pointer ; } 
