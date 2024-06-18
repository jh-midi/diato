# diato
diatonic or chromatic accordion melodeon emulation on pc keyboard
*  (anti-ghosting keyboard is mandatory for a full polyphonic playing)
![image du programme ok](/diatok.PNG)
This program work well on Linux , Windows and Mac with the help of virtual midi device.
* you can look at portmidi-sml : https://github.com/jh-midi/portmidi-sml \
for creating virtual port on Linux for use with Daw and scores writers ...
* suggestions are welcome.
* You can use Gaillard MDpolyphone.xrni with Renoise if you want a real diatonic sound.
* Lisez le reste vous gagnerez du temps :-)
## Linux
Ce programme ne fonctionne qu'avec les navigateurs basés sur Chrome.
Donc il vous faut installer Chrome, Brave ... ou Chromium
* notez que la version snap Linux de Brave ne fonctionne pas 
* il faut une installation native

sudo apt install chromium

Pour avoir un son d'accordéon rapidement, installer fluidsynth.
exemple  pour Debian et Ubuntu :\
sudo apt install fluidsynth

J'utilise ici la soundfont Gaillard.sf2 pour tester.
Vous la trouverez sur sur le site http://jmi.ovh/DiatonicTab .
Il y en a d'autres ...

Une fois fluidsynth installé taper au terminal :

fluidsynth Gaillard.sf2 -m alsa_seq -p diato

ouvrir le fichier index.html avec le navigateur chromium.

choisir la sortie midi => diato (créée au lancement de fluidsynth)

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
maintenir la touche super (Windows ou cmd)  appuyée et actionner la barre espace.
Et refaire la même opération pour revenir en azerty.

Sous Windows vous pouvez faire la même chose mais différemment.
## Windows
Impérativement il faut utiliser un port midi virtuel. 

J'utilise loopMidi => https://www.tobias-erichsen.de/software/loopmidi.html

La solution efficace c'est d'utiliser un sampler qui sort sur Asio. 

TX16Wx Software Sampler est un plugin qui charge les fichiers sf2 téléchargés de http://jmi.ovh/DiatonicTab directement.

https://www.tx16wx.com/

* ouvrir le fichier index.html avec le navigateur chromium.

* choisir la sortie midi loopMidi que vous avez créé => LoopMidi Port

* Le clavier de l'ordinateur devient un clavier d'accordéon diatonique
mais pas que : les touches numériques permettent de sélectionner
votre clavier préféré jusqu'au chromatique c-griff et main gauche stradella.
la touche majuscule gauche actionne le soufflet en poussé et en relâchant
on est en tiré, si vous voulez du silence tapez sur la barre espace.

* Ici pas besoin de changer de clavier en qwerty pour la touche morte ¨^ mais \
la touche majuscule droite ne fonctionne pas bien en poussé.
 
 - ci dessous, j'ai choisi Renoise qui est gratuit performant et multi plateforme.
* Pour avoir des sons réalistes de diato j'utilise les soundfonts avec Renoise après les avoir converties en instrument Renoise \
 site français Renoise  http://www.refra.fr/portail/bienvenue  

* Gaillard MDpolyphone.xrni est le fichier qui va bien dans Renoise.

* J'ai d'abord exporté Gaillard.sf2 en sfz avec polyphone : https://www.polyphone-soundfonts.com \
ensuite ouvert le sfz dans Renoise, puis paufiné un peu et sauvegardé au format Renoise.

* pour annuler la répétition des touches : maintenir la touche majuscule droite appuyée plus de 12s (on entend un bip quand c'est bon)
## Mac

* Ici tout fonctionne bien, (sauf la touche F5 qu'il faut remplacer par cmd+r :) mdr
* il suffit de créer un port virtuel avec le gestionnaire IAC et de l'utiliser avec vos programmes habituels.
* F5 ne fonctionne pas pour rafraîchir sour Mac il faut utiliser (cmd+r) :\
c'est à dire maintenir appuyée la touche cmd et ensuite enfoncer la touche r pour avoir le clavier Heim1.
