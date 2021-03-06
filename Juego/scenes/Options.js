class Options extends Phaser.Scene 
{
    constructor() 
    {
        super('Options');
    }

    create() 
    {
		//Fondo
        this.menuFondo = this.add.image(game.canvas.width / 2, game.canvas.height / 2, 'menuFondo');   
        this.menuFondo.setVisible(true);
        this.menuFondo.setScale(game.canvas.width/1920,game.canvas.height/1080);

        //Boton Return
        this.returnButton = this.add.image(game.canvas.width * 7 / 100,game.canvas.height * 10 / 100, 'returnButton').setInteractive();
        this.returnButton.setVisible(true);
        this.returnButton.on('pointerdown', function (pointer){this.scene.start('MainMenu');}, this);
        this.returnButton.setScale(game.canvas.width/1920,game.canvas.height/1080);

        //Boton Idioma1
        this.banderaSpain = this.add.image(game.canvas.width / 2, game.canvas.height * 25 / 100, 'banderaSpain').setInteractive(); 
        this.banderaSpain.setVisible(true);
        this.banderaSpain.on('pointerdown', function (pointer){game.languageSuffix = '_es';this.flechas.y = game.canvas.height * 25 / 100;}, this);
        this.banderaSpain.setScale(game.canvas.width/1920,game.canvas.height/1080);

        //Boton Idioma2
        this.banderaUK = this.add.image(game.canvas.width / 2, game.canvas.height * 50 / 100, 'banderaUK').setInteractive();    
        this.banderaUK.setVisible(true);
        this.banderaUK.on('pointerdown', function (pointer){game.languageSuffix = '_en'; this.flechas.y = game.canvas.height * 50 / 100;}, this);
        this.banderaUK.setScale(game.canvas.width/1920,game.canvas.height/1080);

        //Flechas
        if (game.languageSuffix == '_es')
        {
            this.flechas = this.add.image(game.canvas.width * 51.5 / 100, game.canvas.height * 25 / 100, 'flechas').setInteractive();
        }
        else
        {
            this.flechas = this.add.image(game.canvas.width * 51.5 / 100, game.canvas.height * 50 / 100, 'flechas').setInteractive();
        }  
        this.flechas.setVisible(true);
        this.flechas.setScale(game.canvas.width/1920,game.canvas.height/1080);



    }
    
    update() 
    { 
		
	}
}