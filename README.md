# diato
diatonic accordion melodeon emulation on pc keyboard
This program work well on Linux , Windows and Mac with the help of virtual midi device.
suggestions are welcome.

Lisez tout vous gagnerez du temps :-)

Ce programme ne fonctionne qu'avec les navigateurs basés sur Chrome.
Donc il vous faut installer Chrome, Brave ... ou Chromium

sudo apt install chromium

Pour avoir un son d'accordéon rapidement installer fluidsynth.
exemple  pour debian et ubuntu :
sudo apt install fluidsynth

je fourni ici la soundfont gaillard.sf2 pour tester.
Il y en a d'autres sur le site http://jmi.ovh/DiatonicTab .

une fois fluidsynth installé taper au terminal :

fluidsynth gaillard.sf2 -m alsa_seq -p diato

ouvrir le fichier index.html avec le navigateur chromium.

choisir la sortie midi => diato

le clavier de l'ordinateur devient un clavier d'accordéon diatonique
mais pas que : les touches numériques permettent de sélectionner
votre clavier préféré jusqu'au chromatique c-griff et main gauche stradella.
la touche majuscule gauche actionne le soufflet en poussé en relachant
on est en tiré, si vous voulez du silence tapez sur la barre espace.

pour annuler la répétition des touches ouvrir un terminal et
tapez
xset r off
et pour la réactiver
xset r on

La touche morte  " ^ ne prend pas le relâchement de la touche
il faut passer en qwerty pour avoir un clavier nickel.
Pour celà ajouter un clavier qwerty dans la config  paramètres clavier.
et après pour passer en qwerty :
maintenir la touche windows (super)  appuyée et actionner la barre espace.
Et refaire la même opération pour revenir en azerty.

