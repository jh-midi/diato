```
Ce n'est pas parce que les choses sont difficiles que nous n'osons pas,
c'est parce que nous n'osons pas qu'elles sont difficiles.
Sénèque
```
if you have an ATOMSQ from Presonus look also to https://github.com/jh-midi/AtomSQ-accordion
# diato
* diatonic or chromatic accordion melodeon emulation on pc keyboard
( accordéon diatonique ou chromatique midi à partir d'un clavier d'ordinateur )
*  (anti-ghosting keyboard is mandatory for a full polyphonic playing)
* un clavier gamer est indispensable pour une polyphonie totale, mais un clavier ordinaire fonctionne très bien pour la plupart des cas.
![image du programme ok](/diatok.png)
This program work well on Linux , Windows and Mac with the help of virtual midi device.
* It seem complicated at first glance (you have to read the doc :persevere:) but if you use it then you can see it is not hard to install and play with it.
* Ce programme peut sembler difficile à installer, mais si vous suivez les indications ci-dessous vous devriez vous en sortir et avoir le plaisir de pratiquer l'accordéon partout où vous avez accès à un ordinateur et jouer les sons que vous voulez en gardant votre doigter préféré et la configuration clavier que vous voulez ... et un casque pour s'entraîner c'est bien aussi :blush:
* Il est bien de se souvenir que tout voyage commence par un premier pas :turtle:
* translate and read the text below :-)

:persevere: Il serait bien de lire tout ce qui est écrit plus bas, chaque chapitre pouvant éclairer un autre, même s'il n'est pas écrit pour votre système d'exploitation. 
## Linux
Ce programme ne fonctionne qu'avec les navigateurs basés sur Chrome.
Donc il vous faut installer Chrome, Brave ... ou Chromium
* notez que la version snap Linux de Brave et Chromium ne fonctionne pas 
* il faut une installation native
le mieux c'est de télécharger Chrome sur son site :

https://www.google.com/intl/fr_fr/chrome



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
>[!IMPORTANT]
>Le clavier d’accordéon ne fonctionne que quand la fenêtre Chrome est sélectionnée.

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

Vous pouvez aussi bien sûr utiliser Tracktion Waveform avec Jack Audio MIDI.

## Windows
Impérativement il faut utiliser un port midi virtuel. 

J'utilise loopMidi => https://www.tobias-erichsen.de/software/loopmidi.html

Vous pouvez utiliser le Séquenceur waveform free comme player de Soundfont : 
https://www.tracktion.com/products/waveform-free 

** voir le dernier chapitre pour l'utilisation de Waveform **

Si vous voulez utiliser un autre séquenceur, le plugin TX16Wx Software Sampler https://www.tx16wx.com/ peut faire l'affaire.

* De bonnes soundfonts sont téléchargeables sur http://jmi.ovh/DiatonicTab 
 mais vous pouvez aussi utiliser un son de basse, de batterie comme ça vous chante.
* Dans l'ordre :
* télécharger le zip https://github.com/jh-midi/diato/archive/refs/heads/main.zip et le décompresser dans le répertoire de votre choix.
  
* ouvrir le fichier index.html avec le navigateur Microsoft Edge, Chromium, Chrome ...

* choisir la sortie midi loopMidi que vous avez créé => LoopMidi Port

* lancer le séquenceur avec LoopMidi Port en entrée midi et charger le plugin TX16Wx si vous voulez utiliser les soundfonts dans votre séquenceur mais vous pouvez utiliser n'importe quel autre instrument bien sûr.

>[!IMPORTANT]
>Le clavier d’accordéon ne fonctionne que quand la fenêtre Chrome est sélectionnée.
  
* Le clavier de l'ordinateur devient un clavier d'accordéon diatonique
mais pas que : les touches numériques permettent de sélectionner
votre clavier préféré jusqu'au chromatique c-griff et main gauche stradella.
la touche majuscule gauche actionne le soufflet en poussé et en relâchant
on est en tiré, si vous voulez du silence tapez sur la barre espace.

* Ici pas besoin de changer de clavier en qwerty pour la touche morte ¨^ mais \
la touche majuscule droite ne fonctionne pas bien en poussé.
 
* pour annuler la répétition des touches : maintenir la touche majuscule droite appuyée plus de 12s (on entend un bip quand c'est bon)
## Mac

* il suffit de créer un port virtuel avec le gestionnaire IAC et de l'utiliser avec vos programmes habituels (voir plus bas comment faire).
* F5 ne fonctionne pas pour rafraîchir le navigateur Chrome sour Mac il faut utiliser (cmd+r)  pour avoir le clavier Heim1 ou taper 0 .
* pour changer la répétition des touches > https://support.apple.com/fr-fr/guide/mac-help/mchl0311bdb4/mac

### Exemple de configuration avec Garage Band  

**1. Créer un port midi virtuel.**

* Aller dans Applications/Utilitaires et lancer Configuration Audio et MIDI.
* Aller dans le menu fenêtre>config Audio et MIDI>Afficher le Studio MIDI.
* Double cliquer sur l’icône du Gestionnaire IAC
* Ensuite cliquer sur +    (ajouter et supprimer des ports) 
* Un nom par défaut est donné au port : «Bus 1»
* Double-cliquer sur ce nom pour le remplacer  par : Diato 1.
* Valider le tout en cliquant sur Appliquer, puis  fermer le Studio Midi.

**2. Télécharger et installer le programme diato**

* [Cliquer ici pour télécharger le programme](https://github.com/jh-midi/diato/archive/refs/heads/main.zip)
* Ensuite double-cliquer sur le <diato-main.zip> téléchargé pour le décompresser.
Cela crée un nouveau dossier Diato-main ; le glisser sur le Bureau.

**3. Lancer Garage Band : (Séquenceur fourni avec le Mac)**

*  Choisir Projet vide.
* «Instrument logiciel» sélectionné cliquer sur >Créer
=> L’instrument Piano est automatiquement sélectionné
* Choisir le son qui va bien : par exemple Jazz Organ

**4. Ouvrir le dossier Diato-main (glissé précédement en 2 sur le bureau)  et sélectionner le fichier index.html**

* avec le bouton droit de la souris ou ctrl-clic bouton souris, sélectionner <Ouvrir avec> Google Chrome.
* Dans Chrome, choisir la sortie midi => Gestionnaire IAC Diato 1 et cliquer n’importe tout dans la fenêtre Chrome pour sortir de la sélection de la sortie midi et activer le clavier accordéon.

Pour un diato standard GC taper sur le chiffre 4 du clavier alphabétique qui sélectionnera le plan de clavier GC+alt.

Les notes sont en tiré par défaut, pour le poussé il suffit d’appuyer sur la touche majuscule de gauche juste au dessus de la touche CTRL.
>[!IMPORTANT]
>Le clavier d’accordéon ne fonctionne que quand la fenêtre Chrome est sélectionnée.

Les sons devraient sortir maintenant de Garage Band.

A la fin, il suffit de sauvegarder le Projet Garage Band avec un nom : Diato par exemple avec le son qui va bien.

Ensuite il n’y a plus que les actions 3 (en chargeant le projet sauvé précédement) et 4 à effectuer pour que ça fonctionne.

(j'écrit avec mon franglais ci-dessous car l'interface de Waveform est en anglais)
# Waveform Sequencer with the embeded Soundfont player Micro Sampler
* For this exemple I use http://jmi.ovh/DiatonicTab/SoundFonts/Gaillard.sf2
  
>[!IMPORTANT]
 Your virtual MIDI port should be activated before running the procedures below. (IAC|loopMIDI|Jack)

* run Waveform
1. Verify the settings (not mandatory but recommanded)
* clic Settings
* select MIDI Devices => check if your virtual MIDI port is Enabled  (IAC | loopMidi | Jack )
* select Audio Devices => select your prefered audio output port 

2. Create Project
* At top left click the + symbol => select New Project...
* Select your Folder Location and give a name for your project "Diato" (keep Template Default)
* Click Create Project => you are now in front of 8 tracks

3. Load the Micro Sampler plugin  into the Track 1 and load the soundfont
* Click the + on Track 1 (Add new plugin) => Choose Waveform > Micro Sampler 
* Click this plugin => Drag and drop the Gaillard.sf2 instrument into the free part of the black window opened => this load Gaillard.sf2 into the Sampler => Choose "0:Gaillard MD" and click ok.
* At low left corner click the main menu > File > Save Edit as template 
* => give it a name, "Diato" for example, now this template can be used for your diato playing

4. Activate the Chrome window and play.

