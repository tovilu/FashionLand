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

        //Boton Return
        this.returnButton = this.add.image(game.canvas.width * 7 / 100,game.canvas.height * 10 / 100, 'returnButton').setInteractive();
        this.returnButton.setVisible(true);
        this.returnButton.on('pointerdown', function (pointer){this.scene.start('MainMenu');}, this);

        //Botones segun idioma
        if (game.languageSuffix == '_en')
        {
            this.singlePlayerButton = this.add.image(game.canvas.width / 2, game.canvas.height * 25 / 100, 'singlePlayerButton').setInteractive();
            this.multiplayerButton = this.add.image(game.canvas.width / 2, game.canvas.height * 50 / 100, 'multiplayerButton').setInteractive();  
        }
        else
        {
            this.singlePlayerButton = this.add.image(game.canvas.width / 2, game.canvas.height * 25 / 100, 'unJugadorButton').setInteractive();
            this.multiplayerButton = this.add.image(game.canvas.width / 2, game.canvas.height * 50 / 100, 'multijugadorButton').setInteractive();
        }

        //Boton un jugador
        this.singlePlayerButton.setVisible(true);
        this.singlePlayerButton.on('pointerdown', function (pointer){this.scene.start('Lobby');}, this);

        //Boton multijugador
        this.multiplayerButton.setVisible(true);
        this.multiplayerButton.on('pointerdown', function (pointer){this.scene.start('Lobby');}, this);




    }
    
    update() 
    { 
		
	}
}