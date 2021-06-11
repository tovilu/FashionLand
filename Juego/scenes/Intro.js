class Intro extends Phaser.Scene 
{
    constructor() 
    {
        super('Intro');
    }

    create() 
    {
        //Cancion
        this.cancion = this.sound.add('cancion');
        this.cancion.loop = true;
        this.cancion.play();

    	//Fondo
		this.introFondo = this.add.image(game.canvas.width/2, game.canvas.height/2, 'introFondo').setInteractive();
    	this.introFondo.setVisible(true);
        this.introFondo.on('pointerdown', function (pointer){this.scene.start('MainMenu');}, this);
    	this.introFondo.setScale(game.canvas.width/1920,game.canvas.height/1080);    	
    }
    
    update() 
    { 
		
	}

}