'use strict';

class MainMenu extends Phaser.Scene 
{
    constructor() 
    {
        super('MainMenu');
    }

    create() 
    {
    	//Fondo
		this.menuFondo = this.add.image(game.canvas.width/2, game.canvas.height/2, 'menuFondo');
    	this.menuFondo.setVisible(true);
    	this.menuFondo.setScale(game.canvas.width/1920,game.canvas.height/1080);

    	//Botones segun idioma
    	if (game.languageSuffix == '_es')
    	{
    		this.playButton = this.add.image(game.canvas.width / 2, game.canvas.height*15 / 100, 'jugarButton').setInteractive();
    		this.optionsButton = this.add.image(game.canvas.width / 2, game.canvas.height * 37 / 100, 'opcionesButton').setInteractive();
    		this.creditsButton = this.add.image(game.canvas.width / 2, game.canvas.height * 60 / 100, 'creditosButton').setInteractive();
    	}
    	else
    	{
    		this.playButton = this.add.image(game.canvas.width / 2, game.canvas.height * 15 / 100, 'playButton').setInteractive();
    		this.optionsButton = this.add.image(game.canvas.width / 2, game.canvas.height * 37 / 100, 'optionsButton').setInteractive();
    		this.creditsButton = this.add.image(game.canvas.width / 2, game.canvas.height * 60 / 100, 'creditsButton').setInteractive();
    	}

    	//Boton Play
    	this.playButton.setVisible(true);
    	this.playButton.on('pointerdown', function (pointer){this.scene.start('SelectMode');}, this);
    	this.playButton.setScale(game.canvas.width/1920,game.canvas.height/1080);

    	//Boton Opciones	
    	this.optionsButton.setVisible(true);
    	this.optionsButton.on('pointerdown', function (pointer){this.scene.start('Options');}, this);
    	this.optionsButton.setScale(game.canvas.width/1920,game.canvas.height/1080);

    	//Boton Creditos	
    	this.creditsButton.setVisible(true);
    	this.creditsButton.on('pointerdown', function (pointer){this.scene.start('Credits');}, this);
    	this.creditsButton.setScale(game.canvas.width/1920,game.canvas.height/1080);

    	
    }
    
    update() 
    { 
		
	}

}