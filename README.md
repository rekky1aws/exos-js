# Exercices JavaScript

Exercices en JavaScript pour s'entriner.
Le fichier style/main.css gère le style commun a toutes les pages.

## part1
Le dossier `part1` contient les exercices de [JS1.md](https://framagit.org/popschool-lens/cours-philippe/-/blob/master/LENS9/JS1.md)

### Index
Page d'acceuil et exercices de base.

### Addition
Fait l'addition entre deux nombre saisis.
Les nombres saisis peuvent être des entiers ou des rééls.

### Cumul / Moyenne
Dans un champ on peut saisir plusieurs valeurs. Une valeur est envoyée lorsque l'on presse la touche Entrée.
La page affiche tous les nombres saisis, le cumul de leur valeurs et la moyenne.
Les nombres saisis peuvent être des entiers ou des rééls.

### Damier
Via deux sliders, on peut choisir la taille d'un damier qui s'adapte en fonction.
Les sliders permettent de choisir le nombre de lignes et de colonnes allant de 1 à 30.

### Eleves
Un champ permet d'ajouter un élève.
Une fois ajouté, on peut aussi supprimer l'élève avec le bouton rouge.

### Horloge
Horloge en temps réel déssinée via la balise `<canvas>` et l'API JavaSript correspondante.

### Juste Prix
Un entier aléatoire est généré entre 1 et 100.
Un champ permet à l'utilisateur de saisir une valeur afin d'essayer de deviné le nombre généré.
A chaque essai, la page indique si le nombre est plus grand ou lus petit que celui qui vient d'être saisi.

### Tri
Cette page affiche la liste des élèves triées par ordre alphabétique décroissant (Z => A)

### Mouvement
Cet exercice n'était pas présent dans les consignes de base du fichier JS1.md et a été rajouté par la suite.
La page mouvement est une page sur laquelle on peut faire bouger un personnage avec les flèches sur le claviers et avec une manette.
La manette est utilisable de manière analogique.

## part2
Le dossier `part2` contient les exercices de [JS1.md](https://framagit.org/popschool-lens/cours-philippe/-/blob/master/LENS9/JS2.md)

### Exo 1
Affiche le logo de wikipédia en appuyant sur le bouton grâce à une requête via fetch

### Exo 2
Affichage sous forme de cartes des students récupérés via fetch.

### Exo 3
Permet via le champ `<input>` et les boutons d'ajouter ou de supprimer le nom de la promo dans le localStorage.
S'il y a un nom de promo dans le localStorage au chargement de la page, il est affiché en dessous des boutons.