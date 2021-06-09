class SelectMode extends Phaser.Scene 
{
    constructor() 
    {
        super('SelectMode');
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

        //Botones segun idioma
        if (game.languageSuffix == '_es')
        {
            this.singlePlayerButton = this.add.image(game.canvas.width / 2, game.canvas.height * 25 / 100, 'unJugadorButton').setInteractive();
            this.multiplayerButton = this.add.image(game.canvas.width / 2, game.canvas.height * 50 / 100, 'multijugadorButton').setInteractive();  
        }
        else
        {
            this.singlePlayerButton = this.add.image(game.canvas.width / 2, game.canvas.height * 25 / 100, 'singlePlayerButton').setInteractive();
            this.multiplayerButton = this.add.image(game.canvas.width / 2, game.canvas.height * 50 / 100, 'multiplayerButton').setInteractive();
        }

        //Boton un jugador
        this.singlePlayerButton.setVisible(true);
        this.singlePlayerButton.on('pointerdown', function (pointer){this.scene.start('Lobby');}, this);
        this.singlePlayerButton.setScale(game.canvas.width/1920,game.canvas.height/1080);

        //Boton multijugador
        this.multiplayerButton.setVisible(true);
        this.multiplayerButton.on('pointerdown', function (pointer){this.scene.start('Lobby2');}, this);
        this.multiplayerButton.setScale(game.canvas.width/1920,game.canvas.height/1080);




    }
    
    update() 
    { 
		
	}
}