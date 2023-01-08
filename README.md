# diato
diatonic accordion melodeon emulation on pc keyboard
*(anti-ghosting keyboard is mandatory for polyphonic playing)
![image du programme ok](/diatok.PNG)
This program work well on Linux , Windows and Mac with the help of virtual midi device.
* you can look at portmidi-sml : https://github.com/jh-midi/portmidi-sml \
for creating virtual port on Mac Linux for use with Daw and scores writers ...
* suggestions are welcome.

Lisez tout vous gagnerez du temps :-)
## Linux
Ce programme ne fonctionne qu'avec les navigateurs basés sur Chrome.
Donc il vous faut installer Chrome, Brave ... ou Chromium
* notez que la version snap de Brave ne fonctionnent pas 
* il faut une installation complète native

sudo apt install chromium

Pour avoir un son d'accordéon rapidement installer fluidsynth.
exemple  pour Debian et Ubuntu :\
sudo apt install fluidsynth

j'utilise ici la soundfont Gaillard.sf2 pour tester.
Vous la trouverez sur sur le site http://jmi.ovh/DiatonicTab .
Il y en a d'autres ...

une fois fluidsynth installé taper au terminal :

fluidsynth Gaillard.sf2 -m alsa_seq -p diato

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

Sous Windows vous pouvez faire la même chose mais différemment.
## Windows
Impérativement il faut utiliser un port midi virtuel. J'utilise loopMidi.
Sous windows il y a trop de délais pour jouer en direct avec fluidSynth.
J'utilise Tracktion Waveform pour ce faire soit avec asio ou windows low latency mode.\
Le Multi sampler charge les soundfonts impeccablement et vous pouvez les modifier à votre convenance \
Notez qu'il vous est possible de créer votre propre instrument avec le Micro sampler fournit 
avec la version free.

ouvrir le fichier index.html avec le navigateur chromium.

choisir la sortie midi loopMidi que vous avez créé => LoopMidi Port

le clavier de l'ordinateur devient un clavier d'accordéon diatonique
mais pas que : les touches numériques permettent de sélectionner
votre clavier préféré jusqu'au chromatique c-griff et main gauche stradella.
la touche majuscule gauche actionne le soufflet en poussé en relachant
on est en tiré, si vous voulez du silence tapez sur la barre espace.

Ici pas besoin de changer de clavier en qwerty pour ¨^ mais \
la touche majuscule droite ne fonctionne pas bien en poussé.
