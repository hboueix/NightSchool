# NightSchool


NightSchool est une application mobile grace à laquelle on peux jouer à plusieurs en soirée. Elle reprend les règles du jeux "Le Barbu"


## Fonctionnalités et fonctionnement

Parametres: dark/light mode et langue FR/ENG

Options de la partie : choix de nombre de joueurs, du pseudo de chacun et meme photo si besoin.

Partie : Chaque joueur, chacun son tour, va pouvoir tirer une carte parmis les 8 paquets différents. 
Une fois la carte tirée, la règle correspondante apparait, les joueurs la suivent, puis la carte va dans la défausse. 
Lorsqu'un joueur tire la derniere carte d'un paquet... 

Pause : reprendre, recommencer ou quitter la partie. 

## Lancement de l'application 

Pour découvir l'application sur le web il vous suffit de clone le repository, installer les packages grace à :
```npm install```
puis lancer l'application avec :
```ionic serve```

Pour utiliser l'application sur votre smartphone : 

## Cahier des charges

acceuil (logo, boutton jouer et parametres)

options de la partie(nb de joeurs, noms, couleur,nb de cartes )

jeux (choix de la carte parmis 4?? affichage des cartes, regles, cartes/joueurs suivantes)

fin de partie(revenir a l'acceuil, rejouer, ect)

++
users, regles personnalisables, autres jeux..


Inputs :
	Accueil:
	- Bouton jouer
	- Bouton params
	Paramètres:
	- Dark mode 
	- Langage
	Options partie:
	- Nbr joueurs
	- foreach joueurs	: Nom joueurs (couleur)
	Partie:
	- Bouton pause (paramètres)
	- Nom joueur  
	- cartes mortes
	- cartes "sur la bouteille"
		- mini jeu grille digicode  fail -> cartes tombent
	- 8 paquets de 6 à 9 cartes (52)
		- Explication de la carte (cliquer pour passer au minijeu ou revenir à la partie)
			Minijeu:
			- 2 boutons, celui qui appuie le plus de fois sur son bouton
			- "jeu du doigt" à 4 joueurs désignés d'office (ou pas ?)
			- "niveau à bulle" chacun son tour, 3,2,1.. tel le plus droit possible
			- accelerometre, pressure sense....
			- telephone arabe avec le micro
		- Nombre de cartes de restantes après la pioche
		- Joueur suivant