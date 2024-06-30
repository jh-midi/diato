* It seem complicated at first glance, but if you use it then you can see it is not hard to play.
* Ce programme peut sembler difficile à installer, mais si vous suivez les indications ci-dessous vous devriez vous en sortir et avoir le plaisir de pratiquer l'accordéon partout où vous avez accès à un ordinateur et jouer les sons que vous voulez en gardant votre doigter préféré et la configuration clavier que vous voulez ... et un casque pour s'entraîner c'est bien aussi :blush:

# diato
* diatonic or chromatic accordion melodeon emulation on pc keyboard
( accordéon diatonique ou chromatique midi à partir d'un clavier d'ordinateur )
*  (anti-ghosting keyboard is mandatory for a full polyphonic playing)
 (un clavier gamer est indispensable pour une polyphonie totale, mais ça marche bien pour les simples mélodies autrement)
![image du programme ok](/diatok.PNG)
This program work well on Linux , Windows and Mac with the help of virtual midi device.
* translate and read the text below :-)
* Il serait bien de lire tout ce qui est écrit plus bas, particulièrement le chapitre Windows qui détaille la procédure d'installation du programme.
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

Vous pouvez utiliser waveform free : 
https://www.tracktion.com/products/waveform-free comme séquenceur 
avec le plugin TX16Wx Software Sampler https://www.tx16wx.com/ qui peut jouer les fichiers sf2 téléchargés de http://jmi.ovh/DiatonicTab 
mais vous pouvez aussi utiliser un son de basse, de batterie comme ça vous chante.
* Dans l'ordre :
* télécharger le zip https://github.com/jh-midi/diato/archive/refs/heads/main.zip et le décompresser dans le répertoire de votre choix.
  
* ouvrir le fichier index.html avec le navigateur chromium, chrome ...

* choisir la sortie midi loopMidi que vous avez créé => LoopMidi Port

* lancer le séquenceur avec LoopMidi Port en entrée midi et charger le plugin TX16Wx si vous voulez utiliser les soundfonts dans votre séquenceur mais vous pouvez utiliser n'importe quel autre instrument bien sûr.
  
* Le clavier de l'ordinateur devient un clavier d'accordéon diatonique
mais pas que : les touches numériques permettent de sélectionner
votre clavier préféré jusqu'au chromatique c-griff et main gauche stradella.
la touche majuscule gauche actionne le soufflet en poussé et en relâchant
on est en tiré, si vous voulez du silence tapez sur la barre espace.

* Ici pas besoin de changer de clavier en qwerty pour la touche morte ¨^ mais \
la touche majuscule droite ne fonctionne pas bien en poussé.
 
* pour annuler la répétition des touches : maintenir la touche majuscule droite appuyée plus de 12s (on entend un bip quand c'est bon)
## Mac

* Ici tout fonctionne bien, (sauf la touche F5 qu'il faut remplacer par cmd+r :) mdr
* il suffit de créer un port virtuel avec le gestionnaire IAC et de l'utiliser avec vos programmes habituels.
* F5 ne fonctionne pas pour rafraîchir sour Mac il faut utiliser (cmd+r) :\
c'est à dire maintenir appuyée la touche cmd et ensuite enfoncer la touche r pour avoir le clavier Heim1.
* lire Mac.rtf pour plus d'explications pour utiliser un port midi IAC avec Garage Band.
* pour changer la répétition des touches > https://support.apple.com/fr-fr/guide/mac-help/mchl0311bdb4/mac
