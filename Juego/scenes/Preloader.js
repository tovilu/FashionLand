class Preloader extends Phaser.Scene 
{
	constructor()
	{
		super('Preloader');
	}
	
	preload()
	{
		//Foto intro
		this.load.image('introFondo', './assets/intro.png');

		//Foto fondo
		this.load.image('menuFondo', './assets/menuFondo.png');


		//Creditos
		this.load.image('creditosTexto', './assets/creditosTexto.png');


		//Fotos botones menu
		this.load.image('playButton', './assets/playButton.png');
		this.load.image('jugarButton', './assets/jugarButton.png');
		this.load.image('creditsButton', './assets/creditsButton.png');
		this.load.image('creditosButton', './assets/creditosButton.png');
		this.load.image('optionsButton', './assets/optionsButton.png');
		this.load.image('opcionesButton', './assets/opcionesButton.png');
		this.load.image('banderaSpain', './assets/banderaSpain.png');
		this.load.image('banderaUK', './assets/banderaUK.png');
		this.load.image('unJugadorButton', './assets/unJugadorButton.png');
		this.load.image('singlePlayerButton', './assets/singlePlayerButton.png');
		this.load.image('multijugadorButton', './assets/multijugadorButton.png');
		this.load.image('multiplayerButton', './assets/multiplayerButton.png');
		this.load.image('terminarButton', './assets/terminarButton.png');
		this.load.image('finishButton', './assets/finishButton.png');
		this.load.image('player2Button', './assets/player2Button.png');
		this.load.image('jugador2Button', './assets/jugador2Button.png');


		//Flechas seleccion idioma
		this.load.image('flechas', './assets/flechas.png');

		//Flechas cambiar pagina de ropa
		this.load.image('flechaArriba', './assets/flechaArriba.png');
		this.load.image('flechaAbajo', './assets/flechaAbajo.png');



		//Foto boton volver
		this.load.image('returnButton', './assets/returnButton.png');



		//Fotos botones ropa genericos
		this.load.image('barra', './assets/barra.png');
		this.load.image('barraRopa', './assets/barraRopa.png');
		this.load.image('chicosButton', './assets/chicosButton.png');
		this.load.image('camisetasButton', './assets/camisetasButton.png');
		this.load.image('pantalonesButton', './assets/pantalonesButton.png');
		this.load.image('gorrosButton', './assets/gorrosButton.png');
		this.load.image('zapatosButton', './assets/zapatosButton.png');



		//Fotos botones ropa suelta
		this.load.image('chico1Button', './assets/chico1Button.png');
		this.load.image('chico2Button', './assets/chico2Button.png');
		this.load.image('chico3Button', './assets/chico3Button.png');
		this.load.image('chico4Button', './assets/chico4Button.png');
		this.load.image('chico5Button', './assets/chico5Button.png');
		this.load.image('chico6Button', './assets/chico6Button.png');

		this.load.image('gorro1Button', './assets/gorro1Button.png');
		this.load.image('gorro2Button', './assets/gorro2Button.png');
		this.load.image('gorro3Button', './assets/gorro3Button.png');
		this.load.image('gorro4Button', './assets/gorro4Button.png');
		this.load.image('gorro5Button', './assets/gorro5Button.png');
		this.load.image('gorro6Button', './assets/gorro6Button.png');
		this.load.image('gorro7Button', './assets/gorro7Button.png');
		this.load.image('gorro8Button', './assets/gorro8Button.png');
		this.load.image('gorro9Button', './assets/gorro9Button.png');
		this.load.image('gorro10Button', './assets/gorro10Button.png');
		this.load.image('gorro11Button', './assets/gorro11Button.png');
		this.load.image('gorro12Button', './assets/gorro12Button.png');

		this.load.image('camiseta1Button', './assets/camiseta1Button.png');
		this.load.image('camiseta2Button', './assets/camiseta2Button.png');
		this.load.image('camiseta3Button', './assets/camiseta3Button.png');
		this.load.image('camiseta4Button', './assets/camiseta4Button.png');
		this.load.image('camiseta5Button', './assets/camiseta5Button.png');
		this.load.image('camiseta6Button', './assets/camiseta6Button.png');
		this.load.image('camiseta7Button', './assets/camiseta7Button.png');
		this.load.image('camiseta8Button', './assets/camiseta8Button.png');
		this.load.image('camiseta9Button', './assets/camiseta9Button.png');
		this.load.image('camiseta10Button', './assets/camiseta10Button.png');
		this.load.image('camiseta11Button', './assets/camiseta11Button.png');
		this.load.image('camiseta12Button', './assets/camiseta12Button.png');

		this.load.image('pantalones1Button', './assets/pantalones1Button.png');
		this.load.image('pantalones2Button', './assets/pantalones2Button.png');
		this.load.image('pantalones3Button', './assets/pantalones3Button.png');
		this.load.image('pantalones4Button', './assets/pantalones4Button.png');
		this.load.image('pantalones5Button', './assets/pantalones5Button.png');
		this.load.image('pantalones6Button', './assets/pantalones6Button.png');
		this.load.image('pantalones7Button', './assets/pantalones7Button.png');
		this.load.image('pantalones8Button', './assets/pantalones8Button.png');
		this.load.image('pantalones9Button', './assets/pantalones9Button.png');
		this.load.image('pantalones10Button', './assets/pantalones10Button.png');
		this.load.image('pantalones11Button', './assets/pantalones11Button.png');
		this.load.image('pantalones12Button', './assets/pantalones12Button.png');

		this.load.image('zapatos1Button', './assets/zapatos1Button.png');
		this.load.image('zapatos2Button', './assets/zapatos2Button.png');
		this.load.image('zapatos3Button', './assets/zapatos3Button.png');
		this.load.image('zapatos4Button', './assets/zapatos4Button.png');
		this.load.image('zapatos5Button', './assets/zapatos5Button.png');
		this.load.image('zapatos6Button', './assets/zapatos6Button.png');
		this.load.image('zapatos7Button', './assets/zapatos7Button.png');
		this.load.image('zapatos8Button', './assets/zapatos8Button.png');
		this.load.image('zapatos9Button', './assets/zapatos9Button.png');
		this.load.image('zapatos10Button', './assets/zapatos10Button.png');
		this.load.image('zapatos11Button', './assets/zapatos11Button.png');
		this.load.image('zapatos12Button', './assets/zapatos12Button.png');


		//Copas
		this.load.image('copa1', './assets/copa1.png');
		this.load.image('copa2', './assets/copa2.png');



		//Fotos chicos
		this.load.image('moreno', './assets/moreno.png');
		this.load.image('morena', './assets/morena.png');
		this.load.image('rubia', './assets/rubia.png');
		this.load.image('rubio', './assets/rubio.png');
		this.load.image('pelirroja', './assets/pelirroja.png');
		this.load.image('pelirrojo', './assets/pelirrojo.png');



		//Fotos ropa
		this.load.image('gorro1', './assets/gorro1.png');
		this.load.image('gorro2', './assets/gorro2.png');
		this.load.image('gorro3', './assets/gorro3.png');
		this.load.image('gorro4', './assets/gorro4.png');
		this.load.image('gorro5', './assets/gorro5.png');
		this.load.image('gorro6', './assets/gorro6.png');
		this.load.image('gorro7', './assets/gorro7.png');
		this.load.image('gorro8', './assets/gorro8.png');
		this.load.image('gorro9', './assets/gorro9.png');
		this.load.image('gorro10', './assets/gorro10.png');
		this.load.image('gorro11', './assets/gorro11.png');
		this.load.image('gorro12', './assets/gorro12.png');

		this.load.image('camiseta1', './assets/camiseta1.png');
		this.load.image('camiseta2', './assets/camiseta2.png');
		this.load.image('camiseta3', './assets/camiseta3.png');
		this.load.image('camiseta4', './assets/camiseta4.png');
		this.load.image('camiseta5', './assets/camiseta5.png');
		this.load.image('camiseta6', './assets/camiseta6.png');
		this.load.image('camiseta7', './assets/camiseta7.png');
		this.load.image('camiseta8', './assets/camiseta8.png');
		this.load.image('camiseta9', './assets/camiseta9.png');
		this.load.image('camiseta10', './assets/camiseta10.png');
		this.load.image('camiseta11', './assets/camiseta11.png');
		this.load.image('camiseta12', './assets/camiseta12.png');

		this.load.image('pantalones1', './assets/pantalones1.png');
		this.load.image('pantalones2', './assets/pantalones2.png');
		this.load.image('pantalones3', './assets/pantalones3.png');
		this.load.image('pantalones4', './assets/pantalones4.png');
		this.load.image('pantalones5', './assets/pantalones5.png');
		this.load.image('pantalones6', './assets/pantalones6.png');
		this.load.image('pantalones7', './assets/pantalones7.png');
		this.load.image('pantalones8', './assets/pantalones8.png');
		this.load.image('pantalones9', './assets/pantalones9.png');
		this.load.image('pantalones10', './assets/pantalones10.png');
		this.load.image('pantalones11', './assets/pantalones11.png');
		this.load.image('pantalones12', './assets/pantalones12.png');

		this.load.image('zapatos1', './assets/zapatos1.png');
		this.load.image('zapatos2', './assets/zapatos2.png');
		this.load.image('zapatos3', './assets/zapatos3.png');
		this.load.image('zapatos4', './assets/zapatos4.png');
		this.load.image('zapatos5', './assets/zapatos5.png');
		this.load.image('zapatos6', './assets/zapatos6.png');
		this.load.image('zapatos7', './assets/zapatos7.png');
		this.load.image('zapatos8', './assets/zapatos8.png');
		this.load.image('zapatos9', './assets/zapatos9.png');
		this.load.image('zapatos10', './assets/zapatos10.png');
		this.load.image('zapatos11', './assets/zapatos11.png');
		this.load.image('zapatos12', './assets/zapatos12.png');
	}

	create()
	{
		this.scene.start('Intro');
	}

	update()
	{

	}
}