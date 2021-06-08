class Credits extends Phaser.Scene 
{
    constructor() 
    {
        super('Credits');
    }

    create() 
    {
		//Fondo
        this.menuFondo = this.add.image(game.canvas.width / 2,game.canvas.height / 2, 'menuFondo');   
        this.menuFondo.setVisible(true);

        //Boton Return
        this.returnButton = this.add.image(game.canvas.width * 7 / 100,game.canvas.height * 10 / 100, 'returnButton').setInteractive();   
        this.returnButton.setVisible(true);
        this.returnButton.on('pointerdown', function (pointer){this.scene.start('MainMenu');}, this);

        //Texto
        this.creditosTexto = this.add.image(game.canvas.width * 50 / 100,game.canvas.height * 40 / 100, 'creditosTexto');   
        this.creditosTexto.setVisible(true);
    }
    
    update() 
    { 
		
	}
}