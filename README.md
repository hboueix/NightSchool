# NightSchool

NightSchool est une application mobile grace à laquelle on peut jouer à plusieurs en soirée. Elle reprend les règles du jeu "Le Barbu".

## Fonctionnalités

- Parametres: dark/light mode et langue FR/ENG

- Options de la partie : choix de nombre de joueurs, du pseudo de chacun et meme photo si besoin.

- Partie : Chaque joueur, chacun son tour, va pouvoir tirer une carte parmis les 8 paquets différents. 
	Une fois la carte tirée, la règle correspondante apparait, les joueurs la suivent, puis la carte va dans la défausse. 
	Lorsqu'un joueur tire la derniere carte d'un paquet... 

- Pause : reprendre, recommencer ou quitter la partie. 

## Lancement de l'application 

Pour découvrir l'application sur le web il vous suffit de cloner le repository, installer les packages grace à :
```npm install```
puis lancer l'application avec :
```ionic serve```

Pour utiliser l'application sur votre smartphone : télécharger notre ![.apk](https://github.com/hboueix/NightSchool/raw/develop/app-debug.apk)

## Build de l'application (avec Android Studio)

**Android :**
Dans le dossier racine du repository :
```
ionic build
npx cap add android
npx cap sync android
npx cap open android
```
Puis dans Android Studio, cliquer sur `Build --> Build Bundle /Apk`. Une fois terminé vous trouverez votre *.apk* dans le dossier `./android/app/build/outputs/apk/debug/`.

## Fonctionnalités a venir

- Mini jeu lorsqu'un joueur tire la dernière carte d'un paquet
- Changement de la langue dans paramètres 
- Minijeu "téléphone arabe" grace au micro (media-capture)
