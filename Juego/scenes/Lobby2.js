class Lobby2 extends Phaser.Scene 
{

    constructor() 
    {
        super('Lobby2');
    }

    create() 
    {
        this.jugador = 1;

        this.boton = 1;
        this.camisetaActual = null;
        this.pantalonActual = null;
        this.gorroActual = null;
        this.zapatoActual = null;


        this.chico1Num = 2;
        this.gorro1Num = 0;
        this.camiseta1Num = 0;
        this.pantalon1Num = 0;
        this.zapato1Num = 0;

        this.puntuacion1 = 0;
        this.puntuacion2 = 0;


		//Fondo
        this.menuFondo = this.add.image(game.canvas.width / 2, game.canvas.height / 2, 'menuFondo');  
        this.menuFondo.setVisible(true);
        this.menuFondo.setScale(game.canvas.width/1920,game.canvas.height/1080);

        //Saber el jugador
        this.j1 = this.add.image(game.canvas.width * 57 / 100, game.canvas.height * 10 / 100, 'uno');  
        this.j1.setVisible(true);
        this.j1.setScale(game.canvas.width * 0.8 /1920,game.canvas.height * 0.8 /1080);

        this.j2 = this.add.image(game.canvas.width * 57 / 100, game.canvas.height * 10 / 100, 'dos');
        this.j2.setVisible(false);
        this.j2.setScale(game.canvas.width * 0.8 /1920,game.canvas.height * 0.8 /1080);

        //Boton Return
        this.returnButton = this.add.image(game.canvas.width * 7 / 100,game.canvas.height * 10 / 100, 'returnButton').setInteractive();
        this.returnButton.setVisible(true);
        this.returnButton.on('pointerdown', function (pointer){this.scene.start('MainMenu');}, this);
        this.returnButton.setScale(game.canvas.width/1920,game.canvas.height/1080);

        //Boton Terminado y Jugador 2
        if (game.languageSuffix == '_es')
        {
            this.jugador2Button = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 10 / 100, 'jugador2Button').setInteractive();
            this.terminarButton = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 10 / 100, 'terminarButton').setInteractive();
        }
        else
        {
            this.jugador2Button = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 10 / 100, 'player2Button').setInteractive();
            this.terminarButton = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 10 / 100, 'finishButton').setInteractive();
        }
        this.jugador2Button.setVisible(true);
        this.jugador2Button.on('pointerdown', function (pointer){this.cambiarPlayer();}, this);
        this.jugador2Button.setScale(game.canvas.width/1920,game.canvas.height/1080);

        this.terminarButton.setVisible(false);
        this.terminarButton.on('pointerdown', function (pointer){this.terminar();}, this);
        this.terminarButton.setScale(game.canvas.width/1920,game.canvas.height/1080);

        //Barra
        this.barra = this.add.image(game.canvas.width * 86.5 / 100, game.canvas.height / 2, 'barra').setInteractive();
        this.barra.setVisible(true);
        this.barra.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Barra Ropa
        this.barraRopa = this.add.image(game.canvas.width * 22 / 100, game.canvas.height * 58 / 100, 'barraRopa').setInteractive();
        this.barraRopa.setVisible(true);
        this.barraRopa.setScale(game.canvas.width/1920,game.canvas.height/1080);

        //Boton flecha arriba
        this.flechaArriba = this.add.image(game.canvas.width * 45 / 100, game.canvas.height * 30 / 100, 'flechaArriba').setInteractive();
        this.flechaArriba.setVisible(true);
        this.flechaArriba.on('pointerdown', function (pointer){this.activarChicos();}, this);
        this.flechaArriba.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton flecha abajo
        this.flechaAbajo = this.add.image(game.canvas.width * 45 / 100, game.canvas.height * 88 / 100, 'flechaAbajo').setInteractive();
        this.flechaAbajo.setVisible(true);
        this.flechaAbajo.on('pointerdown', function (pointer){this.activarChicos();}, this);
        this.flechaAbajo.setScale(game.canvas.width/1920,game.canvas.height/1080);

        //Moreno
        this.moreno = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'moreno').setInteractive();
        this.moreno.setVisible(true);
        this.moreno.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Morena
        this.morena = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'morena').setInteractive();
        this.morena.setVisible(false);
        this.morena.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Rubia
        this.rubia = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'rubia').setInteractive();
        this.rubia.setVisible(false);
        this.rubia.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Rubio
        this.rubio = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'rubio').setInteractive();
        this.rubio.setVisible(false);
        this.rubio.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Morena
        this.pelirrojo = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'pelirrojo').setInteractive();
        this.pelirrojo.setVisible(false);
        this.pelirrojo.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Rubia
        this.pelirroja = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'pelirroja').setInteractive();
        this.pelirroja.setVisible(false);
        this.pelirroja.setScale(game.canvas.width/1920,game.canvas.height/1080);



        //Boton chicos
        this.chicos = this.add.image(game.canvas.width * 87 / 100, game.canvas.height * 25 / 100, 'chicosButton').setInteractive();
        this.chicos.setVisible(true);
        this.chicos.on('pointerdown', function (pointer){this.activarChicos();}, this);
        this.chicos.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton gorros
        this.gorros = this.add.image(game.canvas.width * 87 / 100, game.canvas.height * 38 / 100, 'gorrosButton').setInteractive();
        this.gorros.setVisible(true);
        this.gorros.on('pointerdown', function (pointer){this.activarGorros1();}, this);
        this.gorros.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton camisetas
        this.camisetas = this.add.image(game.canvas.width * 87 / 100, game.canvas.height * 51 / 100, 'camisetasButton').setInteractive();
        this.camisetas.setVisible(true);
        this.camisetas.on('pointerdown', function (pointer){this.activarCamisetas1();}, this);
        this.camisetas.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton pantalones
        this.pantalones = this.add.image(game.canvas.width * 87 / 100, game.canvas.height * 64 / 100, 'pantalonesButton').setInteractive();
        this.pantalones.setVisible(true);
        this.pantalones.on('pointerdown', function (pointer){this.activarPantalones1();}, this);
        this.pantalones.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton zapatos
        this.zapatos = this.add.image(game.canvas.width * 87 / 100, game.canvas.height * 77 / 100, 'zapatosButton').setInteractive();
        this.zapatos.setVisible(true);
        this.zapatos.on('pointerdown', function (pointer){this.activarZapatos1();}, this);
        this.zapatos.setScale(game.canvas.width/1920,game.canvas.height/1080);


        //Boton chico 1
        this.chico1Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 35 / 100, 'chico3Button').setInteractive();
        this.chico1Button.setVisible(true);
        this.chico1Button.on('pointerdown', function (pointer){this.cambiarChico(this.morena,1);}, this);
        this.chico1Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton chico 1
        this.chico2Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 35 / 100, 'chico2Button').setInteractive();
        this.chico2Button.setVisible(true);
        this.chico2Button.on('pointerdown', function (pointer){this.cambiarChico(this.moreno,2);}, this);
        this.chico2Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton chico 3
        this.chico3Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 58 / 100, 'chico1Button').setInteractive();
        this.chico3Button.setVisible(true);
        this.chico3Button.on('pointerdown', function (pointer){this.cambiarChico(this.rubio,3);}, this);
        this.chico3Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton chico 4
        this.chico4Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 58 / 100, 'chico4Button').setInteractive();
        this.chico4Button.setVisible(true);
        this.chico4Button.on('pointerdown', function (pointer){this.cambiarChico(this.rubia,4);}, this);
        this.chico4Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton chico 5
        this.chico5Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 81 / 100, 'chico5Button').setInteractive();
        this.chico5Button.setVisible(true);
        this.chico5Button.on('pointerdown', function (pointer){this.cambiarChico(this.pelirrojo,5);}, this);
        this.chico5Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton chico 6
        this.chico6Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 81 / 100, 'chico6Button').setInteractive();
        this.chico6Button.setVisible(true);
        this.chico6Button.on('pointerdown', function (pointer){this.cambiarChico(this.pelirroja,6);}, this);
        this.chico6Button.setScale(game.canvas.width/1920,game.canvas.height/1080);

        //Boton gorro 1
        this.gorro1Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 35 / 100, 'gorro1Button').setInteractive();
        this.gorro1Button.setVisible(false);
        this.gorro1Button.on('pointerdown', function (pointer){this.cambiarGorro(this.gorro1,1);}, this);
        this.gorro1Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton gorro 2
        this.gorro2Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 35 / 100, 'gorro2Button').setInteractive();
        this.gorro2Button.setVisible(false);
        this.gorro2Button.on('pointerdown', function (pointer){this.cambiarGorro(this.gorro2,2);}, this);
        this.gorro2Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton gorro 3
        this.gorro3Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 58 / 100, 'gorro3Button').setInteractive();
        this.gorro3Button.setVisible(false);
        this.gorro3Button.on('pointerdown', function (pointer){this.cambiarGorro(this.gorro3,3);}, this);
        this.gorro3Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton gorro 4
        this.gorro4Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 58 / 100, 'gorro4Button').setInteractive();
        this.gorro4Button.setVisible(false);
        this.gorro4Button.on('pointerdown', function (pointer){this.cambiarGorro(this.gorro4,4);}, this);
        this.gorro4Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton gorro 5
        this.gorro5Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 81 / 100, 'gorro5Button').setInteractive();
        this.gorro5Button.setVisible(false);
        this.gorro5Button.on('pointerdown', function (pointer){this.cambiarGorro(this.gorro5,5);}, this);
        this.gorro5Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton gorro 6
        this.gorro6Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 81 / 100, 'gorro6Button').setInteractive();
        this.gorro6Button.setVisible(false);
        this.gorro6Button.on('pointerdown', function (pointer){this.cambiarGorro(this.gorro6,6);}, this);
        this.gorro6Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton gorro 7
        this.gorro7Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 35 / 100, 'gorro7Button').setInteractive();
        this.gorro7Button.setVisible(false);
        this.gorro7Button.on('pointerdown', function (pointer){this.cambiarGorro(this.gorro7,7);}, this);
        this.gorro7Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton gorro 8
        this.gorro8Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 35 / 100, 'gorro8Button').setInteractive();
        this.gorro8Button.setVisible(false);
        this.gorro8Button.on('pointerdown', function (pointer){this.cambiarGorro(this.gorro8,8);}, this);
        this.gorro8Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton gorro 9
        this.gorro9Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 58 / 100, 'gorro9Button').setInteractive();
        this.gorro9Button.setVisible(false);
        this.gorro9Button.on('pointerdown', function (pointer){this.cambiarGorro(this.gorro9,9);}, this);
        this.gorro9Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton gorro 10
        this.gorro10Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 58 / 100, 'gorro10Button').setInteractive();
        this.gorro10Button.setVisible(false);
        this.gorro10Button.on('pointerdown', function (pointer){this.cambiarGorro(this.gorro10,10);}, this);
        this.gorro10Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton gorro 11
        this.gorro11Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 81 / 100, 'gorro11Button').setInteractive();
        this.gorro11Button.setVisible(false);
        this.gorro11Button.on('pointerdown', function (pointer){this.cambiarGorro(this.gorro11,11);}, this);
        this.gorro11Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton gorro 12
        this.gorro12Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 81 / 100, 'gorro12Button').setInteractive();
        this.gorro12Button.setVisible(false);
        this.gorro12Button.on('pointerdown', function (pointer){this.cambiarGorro(this.gorro12,12);}, this);
        this.gorro12Button.setScale(game.canvas.width/1920,game.canvas.height/1080);

        //Boton camiseta 1
        this.camiseta1Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 35 / 100, 'camiseta1Button').setInteractive();
        this.camiseta1Button.setVisible(false);
        this.camiseta1Button.on('pointerdown', function (pointer){this.cambiarCamisetas(this.camiseta1,1);}, this);
        this.camiseta1Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton camiseta 2
        this.camiseta2Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 35 / 100, 'camiseta2Button').setInteractive();
        this.camiseta2Button.setVisible(false);
        this.camiseta2Button.on('pointerdown', function (pointer){this.cambiarCamisetas(this.camiseta2,2);}, this);
        this.camiseta2Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton camiseta 3
        this.camiseta3Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 58 / 100, 'camiseta3Button').setInteractive();
        this.camiseta3Button.setVisible(false);
        this.camiseta3Button.on('pointerdown', function (pointer){this.cambiarCamisetas(this.camiseta3,3);}, this);
        this.camiseta3Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton camiseta 4
        this.camiseta4Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 58 / 100, 'camiseta4Button').setInteractive();
        this.camiseta4Button.setVisible(false);
        this.camiseta4Button.on('pointerdown', function (pointer){this.cambiarCamisetas(this.camiseta4,4);}, this);
        this.camiseta4Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton camiseta 5
        this.camiseta5Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 81 / 100, 'camiseta5Button').setInteractive();
        this.camiseta5Button.setVisible(false);
        this.camiseta5Button.on('pointerdown', function (pointer){this.cambiarCamisetas(this.camiseta5,5);}, this);
        this.camiseta5Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton camiseta 6
        this.camiseta6Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 81 / 100, 'camiseta6Button').setInteractive();
        this.camiseta6Button.setVisible(false);
        this.camiseta6Button.on('pointerdown', function (pointer){this.cambiarCamisetas(this.camiseta6,6);}, this);
        this.camiseta6Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton camiseta 7
        this.camiseta7Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 35 / 100, 'camiseta7Button').setInteractive();
        this.camiseta7Button.setVisible(false);
        this.camiseta7Button.on('pointerdown', function (pointer){this.cambiarCamisetas(this.camiseta7,7);}, this);
        this.camiseta7Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton camiseta 8
        this.camiseta8Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 35 / 100, 'camiseta8Button').setInteractive();
        this.camiseta8Button.setVisible(false);
        this.camiseta8Button.on('pointerdown', function (pointer){this.cambiarCamisetas(this.camiseta8,8);}, this);
        this.camiseta8Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton camiseta 9
        this.camiseta9Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 58 / 100, 'camiseta9Button').setInteractive();
        this.camiseta9Button.setVisible(false);
        this.camiseta9Button.on('pointerdown', function (pointer){this.cambiarCamisetas(this.camiseta9,9);}, this);
        this.camiseta9Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton camiseta 10
        this.camiseta10Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 58 / 100, 'camiseta10Button').setInteractive();
        this.camiseta10Button.setVisible(false);
        this.camiseta10Button.on('pointerdown', function (pointer){this.cambiarCamisetas(this.camiseta10,10);}, this);
        this.camiseta10Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton camiseta 11
        this.camiseta11Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 81 / 100, 'camiseta11Button').setInteractive();
        this.camiseta11Button.setVisible(false);
        this.camiseta11Button.on('pointerdown', function (pointer){this.cambiarCamisetas(this.camiseta11,11);}, this);
        this.camiseta11Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton camiseta 12
        this.camiseta12Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 81 / 100, 'camiseta12Button').setInteractive();
        this.camiseta12Button.setVisible(false);
        this.camiseta12Button.on('pointerdown', function (pointer){this.cambiarCamisetas(this.camiseta12,12);}, this);
        this.camiseta12Button.setScale(game.canvas.width/1920,game.canvas.height/1080);

        //Boton pantalones 1
        this.pantalones1Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 35 / 100, 'pantalones1Button').setInteractive();
        this.pantalones1Button.setVisible(false);
        this.pantalones1Button.on('pointerdown', function (pointer){this.cambiarPantalones(this.pantalones1,1);}, this);
        this.pantalones1Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton pantalones 2
        this.pantalones2Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 35 / 100, 'pantalones2Button').setInteractive();
        this.pantalones2Button.setVisible(false);
        this.pantalones2Button.on('pointerdown', function (pointer){this.cambiarPantalones(this.pantalones2,2);}, this);
        this.pantalones2Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton pantalones 3
        this.pantalones3Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 58 / 100, 'pantalones3Button').setInteractive();
        this.pantalones3Button.setVisible(false);
        this.pantalones3Button.on('pointerdown', function (pointer){this.cambiarPantalones(this.pantalones3,3);}, this);
        this.pantalones3Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton pantalones 4
        this.pantalones4Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 58 / 100, 'pantalones4Button').setInteractive();
        this.pantalones4Button.setVisible(false);
        this.pantalones4Button.on('pointerdown', function (pointer){this.cambiarPantalones(this.pantalones4,4);}, this);
        this.pantalones4Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton pantalones 5
        this.pantalones5Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 81 / 100, 'pantalones5Button').setInteractive();
        this.pantalones5Button.setVisible(false);
        this.pantalones5Button.on('pointerdown', function (pointer){this.cambiarPantalones(this.pantalones5,5);}, this);
        this.pantalones5Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton pantalones 6
        this.pantalones6Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 81 / 100, 'pantalones6Button').setInteractive();
        this.pantalones6Button.setVisible(false);
        this.pantalones6Button.on('pointerdown', function (pointer){this.cambiarPantalones(this.pantalones6,6);}, this);
        this.pantalones6Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton pantalones 7
        this.pantalones7Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 35 / 100, 'pantalones7Button').setInteractive();
        this.pantalones7Button.setVisible(false);
        this.pantalones7Button.on('pointerdown', function (pointer){this.cambiarPantalones(this.pantalones7,7);}, this);
        this.pantalones7Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton pantalones 8
        this.pantalones8Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 35 / 100, 'pantalones8Button').setInteractive();
        this.pantalones8Button.setVisible(false);
        this.pantalones8Button.on('pointerdown', function (pointer){this.cambiarPantalones(this.pantalones8,8);}, this);
        this.pantalones8Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton pantalones 9
        this.pantalones9Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 58 / 100, 'pantalones9Button').setInteractive();
        this.pantalones9Button.setVisible(false);
        this.pantalones9Button.on('pointerdown', function (pointer){this.cambiarPantalones(this.pantalones9,9);}, this);
        this.pantalones9Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton pantalones 10
        this.pantalones10Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 58 / 100, 'pantalones10Button').setInteractive();
        this.pantalones10Button.setVisible(false);
        this.pantalones10Button.on('pointerdown', function (pointer){this.cambiarPantalones(this.pantalones10,10);}, this);
        this.pantalones10Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton pantalones 11
        this.pantalones11Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 81 / 100, 'pantalones11Button').setInteractive();
        this.pantalones11Button.setVisible(false);
        this.pantalones11Button.on('pointerdown', function (pointer){this.cambiarPantalones(this.pantalones11,11);}, this);
        this.pantalones11Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton pantalones 12
        this.pantalones12Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 81 / 100, 'pantalones12Button').setInteractive();
        this.pantalones12Button.setVisible(false);
        this.pantalones12Button.on('pointerdown', function (pointer){this.cambiarPantalones(this.pantalones12,12);}, this);
        this.pantalones12Button.setScale(game.canvas.width/1920,game.canvas.height/1080);

        //Boton zapatos 1
        this.zapatos1Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 35 / 100, 'zapatos1Button').setInteractive();
        this.zapatos1Button.setVisible(false);
        this.zapatos1Button.on('pointerdown', function (pointer){this.cambiarZapatos(this.zapatos1,1);}, this);
        this.zapatos1Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton zapatos 2
        this.zapatos2Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 35 / 100, 'zapatos2Button').setInteractive();
        this.zapatos2Button.setVisible(false);
        this.zapatos2Button.on('pointerdown', function (pointer){this.cambiarZapatos(this.zapatos2,2);}, this);
        this.zapatos2Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton zapatos 3
        this.zapatos3Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 58 / 100, 'zapatos3Button').setInteractive();
        this.zapatos3Button.setVisible(false);
        this.zapatos3Button.on('pointerdown', function (pointer){this.cambiarZapatos(this.zapatos3,3);}, this);
        this.zapatos3Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton zapatos 4
        this.zapatos4Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 58 / 100, 'zapatos4Button').setInteractive();
        this.zapatos4Button.setVisible(false);
        this.zapatos4Button.on('pointerdown', function (pointer){this.cambiarZapatos(this.zapatos4,4);}, this);
        this.zapatos4Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton zapatos 5
        this.zapatos5Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 81 / 100, 'zapatos5Button').setInteractive();
        this.zapatos5Button.setVisible(false);
        this.zapatos5Button.on('pointerdown', function (pointer){this.cambiarZapatos(this.zapatos5,5);}, this);
        this.zapatos5Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton zapatos 6
        this.zapatos6Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 81 / 100, 'zapatos6Button').setInteractive();
        this.zapatos6Button.setVisible(false);
        this.zapatos6Button.on('pointerdown', function (pointer){this.cambiarZapatos(this.zapatos6,6);}, this);
        this.zapatos6Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton zapatos 7
        this.zapatos7Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 35 / 100, 'zapatos7Button').setInteractive();
        this.zapatos7Button.setVisible(false);
        this.zapatos7Button.on('pointerdown', function (pointer){this.cambiarZapatos(this.zapatos7,7);}, this);
        this.zapatos7Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton zapatos 8
        this.zapatos8Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 35 / 100, 'zapatos8Button').setInteractive();
        this.zapatos8Button.setVisible(false);
        this.zapatos8Button.on('pointerdown', function (pointer){this.cambiarZapatos(this.zapatos8,8);}, this);
        this.zapatos8Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton zapatos 9
        this.zapatos9Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 58 / 100, 'zapatos9Button').setInteractive();
        this.zapatos9Button.setVisible(false);
        this.zapatos9Button.on('pointerdown', function (pointer){this.cambiarZapatos(this.zapatos9,9);}, this);
        this.zapatos9Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton zapatos 10
        this.zapatos10Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 58 / 100, 'zapatos10Button').setInteractive();
        this.zapatos10Button.setVisible(false);
        this.zapatos10Button.on('pointerdown', function (pointer){this.cambiarZapatos(this.zapatos10,10);}, this);
        this.zapatos10Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton zapatos 11
        this.zapatos11Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 81 / 100, 'zapatos11Button').setInteractive();
        this.zapatos11Button.setVisible(false);
        this.zapatos11Button.on('pointerdown', function (pointer){this.cambiarZapatos(this.zapatos11,11);}, this);
        this.zapatos11Button.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Boton zapatos 12
        this.zapatos12Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 81 / 100, 'zapatos12Button').setInteractive();
        this.zapatos12Button.setVisible(false);
        this.zapatos12Button.on('pointerdown', function (pointer){this.cambiarZapatos(this.zapatos12,12);}, this);
        this.zapatos12Button.setScale(game.canvas.width/1920,game.canvas.height/1080);



        //Zapatos 1
        this.zapatos1 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'zapatos1').setInteractive();
        this.zapatos1.setVisible(false);
        this.zapatos1.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Zapatos 2
        this.zapatos2 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'zapatos2').setInteractive();
        this.zapatos2.setVisible(false);
        this.zapatos2.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Zapatos 3
        this.zapatos3 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'zapatos3').setInteractive();
        this.zapatos3.setVisible(false);
        this.zapatos3.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Zapatos 4
        this.zapatos4 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'zapatos4').setInteractive();
        this.zapatos4.setVisible(false);
        this.zapatos4.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Zapatos 5
        this.zapatos5 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'zapatos5').setInteractive();
        this.zapatos5.setVisible(false);
        this.zapatos5.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Zapatos 6
        this.zapatos6 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'zapatos6').setInteractive();
        this.zapatos6.setVisible(false);
        this.zapatos6.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Zapatos 7
        this.zapatos7 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'zapatos7').setInteractive();
        this.zapatos7.setVisible(false);
        this.zapatos7.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Zapatos 8
        this.zapatos8 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'zapatos8').setInteractive();
        this.zapatos8.setVisible(false);
        this.zapatos8.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Zapatos 9
        this.zapatos9 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'zapatos9').setInteractive();
        this.zapatos9.setVisible(false);
        this.zapatos9.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Zapatos 10
        this.zapatos10 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'zapatos10').setInteractive();
        this.zapatos10.setVisible(false);
        this.zapatos10.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Zapatos 11
        this.zapatos11 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'zapatos11').setInteractive();
        this.zapatos11.setVisible(false);
        this.zapatos11.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Zapatos 12
        this.zapatos12 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'zapatos12').setInteractive();
        this.zapatos12.setVisible(false);
        this.zapatos12.setScale(game.canvas.width/1920,game.canvas.height/1080);

        //Pantalones 1
        this.pantalones1 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'pantalones1').setInteractive();
        this.pantalones1.setVisible(false);
        this.pantalones1.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Pantalones 2
        this.pantalones2 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'pantalones2').setInteractive();
        this.pantalones2.setVisible(false);
        this.pantalones2.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Pantalones 3
        this.pantalones3 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'pantalones3').setInteractive();
        this.pantalones3.setVisible(false);
        this.pantalones3.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Pantalones 4
        this.pantalones4 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'pantalones4').setInteractive();
        this.pantalones4.setVisible(false);
        this.pantalones4.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Pantalones 5
        this.pantalones5 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'pantalones5').setInteractive();
        this.pantalones5.setVisible(false);
        this.pantalones5.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Pantalones 6
        this.pantalones6 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'pantalones6').setInteractive();
        this.pantalones6.setVisible(false);
        this.pantalones6.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Pantalones 7
        this.pantalones7 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'pantalones7').setInteractive();
        this.pantalones7.setVisible(false);
        this.pantalones7.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Pantalones 8
        this.pantalones8 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'pantalones8').setInteractive();
        this.pantalones8.setVisible(false);
        this.pantalones8.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Pantalones 9
        this.pantalones9 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'pantalones9').setInteractive();
        this.pantalones9.setVisible(false);
        this.pantalones9.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Pantalones 10
        this.pantalones10 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'pantalones10').setInteractive();
        this.pantalones10.setVisible(false);
        this.pantalones10.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Pantalones 11
        this.pantalones11 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'pantalones11').setInteractive();
        this.pantalones11.setVisible(false);
        this.pantalones11.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Pantalones 12
        this.pantalones12 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'pantalones12').setInteractive();
        this.pantalones12.setVisible(false);
        this.pantalones12.setScale(game.canvas.width/1920,game.canvas.height/1080);

        //Camiseta 1
        this.camiseta1 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'camiseta1').setInteractive();
        this.camiseta1.setVisible(false);
        this.camiseta1.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Camiseta 2
        this.camiseta2 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'camiseta2').setInteractive();
        this.camiseta2.setVisible(false);
        this.camiseta2.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Camiseta 3
        this.camiseta3 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'camiseta3').setInteractive();
        this.camiseta3.setVisible(false);
        this.camiseta3.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Camiseta 4
        this.camiseta4 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'camiseta4').setInteractive();
        this.camiseta4.setVisible(false);
        this.camiseta4.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Camiseta 5
        this.camiseta5 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'camiseta5').setInteractive();
        this.camiseta5.setVisible(false);
        this.camiseta5.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Camiseta 6
        this.camiseta6 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'camiseta6').setInteractive();
        this.camiseta6.setVisible(false);
        this.camiseta6.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Camiseta 7
        this.camiseta7 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'camiseta7').setInteractive();
        this.camiseta7.setVisible(false);
        this.camiseta7.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Camiseta 8
        this.camiseta8 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'camiseta8').setInteractive();
        this.camiseta8.setVisible(false);
        this.camiseta8.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Camiseta 9
        this.camiseta9 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'camiseta9').setInteractive();
        this.camiseta9.setVisible(false);
        this.camiseta9.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Camiseta 10
        this.camiseta10 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'camiseta10').setInteractive();
        this.camiseta10.setVisible(false);
        this.camiseta10.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Camiseta 11
        this.camiseta11 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'camiseta11').setInteractive();
        this.camiseta11.setVisible(false);
        this.camiseta11.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Camiseta 12
        this.camiseta12 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'camiseta12').setInteractive();
        this.camiseta12.setVisible(false);
        this.camiseta12.setScale(game.canvas.width/1920,game.canvas.height/1080);

        //Gorro 1
        this.gorro1 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'gorro1').setInteractive();
        this.gorro1.setVisible(false);
        this.gorro1.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Gorro 2
        this.gorro2 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'gorro2').setInteractive();
        this.gorro2.setVisible(false);
        this.gorro2.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Gorro 3
        this.gorro3 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'gorro3').setInteractive();
        this.gorro3.setVisible(false);
        this.gorro3.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Gorro 4
        this.gorro4 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'gorro4').setInteractive();
        this.gorro4.setVisible(false);
        this.gorro4.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Gorro 5
        this.gorro5 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'gorro5').setInteractive();
        this.gorro5.setVisible(false);
        this.gorro5.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Gorro 6
        this.gorro6 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'gorro6').setInteractive();
        this.gorro6.setVisible(false);
        this.gorro6.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Gorro 7
        this.gorro7 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'gorro7').setInteractive();
        this.gorro7.setVisible(false);
        this.gorro7.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Gorro 8
        this.gorro8 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'gorro8').setInteractive();
        this.gorro8.setVisible(false);
        this.gorro8.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Gorro 9
        this.gorro9 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'gorro9').setInteractive();
        this.gorro9.setVisible(false);
        this.gorro9.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Gorro 10
        this.gorro10 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'gorro10').setInteractive();
        this.gorro10.setVisible(false);
        this.gorro10.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Gorro 11
        this.gorro11 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'gorro11').setInteractive();
        this.gorro11.setVisible(false);
        this.gorro11.setScale(game.canvas.width/1920,game.canvas.height/1080);
        //Gorro 12
        this.gorro12 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'gorro12').setInteractive();
        this.gorro12.setVisible(false);
        this.gorro12.setScale(game.canvas.width/1920,game.canvas.height/1080);

    }


    cambiarPlayer()
    {
        this.j1.setVisible(false);
        this.j2.setVisible(true);
        this.jugador = 2;
        this.chico2Num = this.chico1Num;
        this.desactivarTodos();
        this.activarChicos();
        this.jugador2Button.setVisible(false);
        this.terminarButton.setVisible(true);

        if (this.camisetaActual != null)
            this.camisetaActual.setVisible(false);
        if (this.pantalonActual != null)
            this.pantalonActual.setVisible(false);
        if (this.gorroActual != null)
            this.gorroActual.setVisible(false);
        if (this.zapatoActual != null)
            this.zapatoActual.setVisible(false);

        this.camisetaActual = null;
        this.pantalonActual = null;
        this.gorroActual = null;
        this.zapatoActual = null;
    }

    terminar()
    {
        this.j2.setVisible(false);
        this.terminarButton.setVisible(false);
        this.boton = 1;

        this.crearJugador1();
        //Puntuacion jugador 1
        if (this.gorroFinal != null)
        {
            this.puntuacion1++;
        }
        if (this.camisetaFinal != null)
        {
            this.puntuacion1++;
        }
        if (this.pantalonesFinal != null)
        {
            this.puntuacion1++;
        }
        if (this.zapatosFinal != null)
        {
            this.puntuacion1++;
        }

        //Puntuacion jugador 2
        if (this.gorroActual != null)
        {
            this.puntuacion2++;
        }
        if (this.camisetaActual != null)
        {
            this.puntuacion2++;
        }
        if (this.pantalonActual != null)
        {
            this.puntuacion2++;
        }
        if (this.zapatoActual != null)
        {
            this.puntuacion2++;
        }

        //Se decide ganador
        if (this.puntuacion2 > this.puntuacion1)
        {
            this.copa1.x = game.canvas.width * 58 / 100;
            this.copa2.x = game.canvas.width * 30 / 100;
        }
        else if (this.puntuacion2 < this.puntuacion1)
        {
            this.copa2.x = game.canvas.width * 60 / 100;
            this.copa1.x = game.canvas.width * 30 / 100;
        }
        else
        {
            if (Math.random() >= 0.5)
            {
                this.copa2.x = game.canvas.width * 60 / 100;
                this.copa1.x = game.canvas.width * 30 / 100;
            } 
            else
            {
                this.copa1.x = game.canvas.width * 58 / 100;
                this.copa2.x = game.canvas.width * 30 / 100;
            }       
        }

        this.copa1.setVisible(true);
        this.copa2.setVisible(true);
        
        this.barra.setVisible(false);
        this.barraRopa.setVisible(false);
        this.chicos.setVisible(false);
        this.gorros.setVisible(false);
        this.camisetas.setVisible(false);
        this.pantalones.setVisible(false);
        this.zapatos.setVisible(false);
        this.flechaArriba.setVisible(false);
        this.flechaAbajo.setVisible(false);
        this.desactivarTodos();
    }

    desactivarTodos()
    {
        this.desactivarChicos();
        this.desactivarGorros();
        this.desactivarCamisetas();
        this.desactivarPantalones();
        this.descativarZapatos();
    }

    desactivarChicos()
    {
        this.chico1Button.setVisible(false);
        this.chico2Button.setVisible(false);
        this.chico3Button.setVisible(false);
        this.chico4Button.setVisible(false);
        this.chico5Button.setVisible(false);
        this.chico6Button.setVisible(false);
    }

    desactivarGorros()
    {
        this.gorro1Button.setVisible(false);
        this.gorro2Button.setVisible(false);
        this.gorro3Button.setVisible(false);
        this.gorro4Button.setVisible(false);
        this.gorro5Button.setVisible(false);
        this.gorro6Button.setVisible(false);
        this.gorro7Button.setVisible(false);
        this.gorro8Button.setVisible(false);
        this.gorro9Button.setVisible(false);
        this.gorro10Button.setVisible(false);
        this.gorro11Button.setVisible(false);
        this.gorro12Button.setVisible(false);
    }

    desactivarCamisetas()
    {
        this.camiseta1Button.setVisible(false);
        this.camiseta2Button.setVisible(false);
        this.camiseta3Button.setVisible(false);
        this.camiseta4Button.setVisible(false);
        this.camiseta5Button.setVisible(false);
        this.camiseta6Button.setVisible(false);
        this.camiseta7Button.setVisible(false);
        this.camiseta8Button.setVisible(false);
        this.camiseta9Button.setVisible(false);
        this.camiseta10Button.setVisible(false);
        this.camiseta11Button.setVisible(false);
        this.camiseta12Button.setVisible(false);
    }

    desactivarPantalones()
    {
        this.pantalones1Button.setVisible(false);
        this.pantalones2Button.setVisible(false);
        this.pantalones3Button.setVisible(false);
        this.pantalones4Button.setVisible(false);
        this.pantalones5Button.setVisible(false);
        this.pantalones6Button.setVisible(false);
        this.pantalones7Button.setVisible(false);
        this.pantalones8Button.setVisible(false);
        this.pantalones9Button.setVisible(false);
        this.pantalones10Button.setVisible(false);
        this.pantalones11Button.setVisible(false);
        this.pantalones12Button.setVisible(false);
    }

    descativarZapatos()
    {
        this.zapatos1Button.setVisible(false);
        this.zapatos2Button.setVisible(false);
        this.zapatos3Button.setVisible(false);
        this.zapatos4Button.setVisible(false);
        this.zapatos5Button.setVisible(false);
        this.zapatos6Button.setVisible(false);
        this.zapatos7Button.setVisible(false);
        this.zapatos8Button.setVisible(false);
        this.zapatos9Button.setVisible(false);
        this.zapatos10Button.setVisible(false);
        this.zapatos11Button.setVisible(false);
        this.zapatos12Button.setVisible(false);
    }

    activarChicos()
    {
        this.desactivarTodos();
        this.boton = 1;
        this.chico1Button.setVisible(true);
        this.chico2Button.setVisible(true);
        this.chico3Button.setVisible(true);
        this.chico4Button.setVisible(true);
        this.chico5Button.setVisible(true);
        this.chico6Button.setVisible(true);
    }

    activarGorros1()
    {
        this.desactivarTodos();
        this.boton = 2;
        this.gorro1Button.setVisible(true);
        this.gorro2Button.setVisible(true);
        this.gorro3Button.setVisible(true);
        this.gorro4Button.setVisible(true);
        this.gorro5Button.setVisible(true);
        this.gorro6Button.setVisible(true);
    }

    activarGorros2()
    {
        this.desactivarTodos();
        this.boton = 3;
        this.gorro7Button.setVisible(true);
        this.gorro8Button.setVisible(true);
        this.gorro9Button.setVisible(true);
        this.gorro10Button.setVisible(true);
        this.gorro11Button.setVisible(true);
        this.gorro12Button.setVisible(true);
    }

    activarCamisetas1()
    {
        this.desactivarTodos();
        this.boton = 4;
        this.camiseta1Button.setVisible(true);
        this.camiseta2Button.setVisible(true);
        this.camiseta3Button.setVisible(true);
        this.camiseta4Button.setVisible(true);
        this.camiseta5Button.setVisible(true);
        this.camiseta6Button.setVisible(true);
    }

    activarCamisetas2()
    {
        this.desactivarTodos();
        this.boton = 5;
        this.camiseta7Button.setVisible(true);
        this.camiseta8Button.setVisible(true);
        this.camiseta9Button.setVisible(true);
        this.camiseta10Button.setVisible(true);
        this.camiseta11Button.setVisible(true);
        this.camiseta12Button.setVisible(true);
    }

    activarPantalones1()
    {
        this.desactivarTodos();
        this.boton = 6;
        this.pantalones1Button.setVisible(true);
        this.pantalones2Button.setVisible(true);
        this.pantalones3Button.setVisible(true);
        this.pantalones4Button.setVisible(true);
        this.pantalones5Button.setVisible(true);
        this.pantalones6Button.setVisible(true);
    }

    activarPantalones2()
    {
        this.desactivarTodos();
        this.boton = 7;
        this.pantalones7Button.setVisible(true);
        this.pantalones8Button.setVisible(true);
        this.pantalones9Button.setVisible(true);
        this.pantalones10Button.setVisible(true);
        this.pantalones11Button.setVisible(true);
        this.pantalones12Button.setVisible(true);
    }

    activarZapatos1()
    {
        this.desactivarTodos();
        this.boton = 8;
        this.zapatos1Button.setVisible(true);
        this.zapatos2Button.setVisible(true);
        this.zapatos3Button.setVisible(true);
        this.zapatos4Button.setVisible(true);
        this.zapatos5Button.setVisible(true);
        this.zapatos6Button.setVisible(true);
    }

    activarZapatos2()
    {
        this.desactivarTodos();
        this.boton = 9;
        this.zapatos7Button.setVisible(true);
        this.zapatos8Button.setVisible(true);
        this.zapatos9Button.setVisible(true);
        this.zapatos10Button.setVisible(true);
        this.zapatos11Button.setVisible(true);
        this.zapatos12Button.setVisible(true);
    }

    cambiarChico(cam, num)
    {
        if (this.chicoActual != null)
        {
            this.chicoActual.setVisible(false);
        }

        if (this.jugador == 1)
        {
            this.chico1Num = num;
        }
        else
        {
            this.chico2Num = num;
        }

        this.chicoActual = cam;
        this.chicoActual.setVisible(true);
    }

    cambiarGorro(cam, num)
    {
        if (this.gorroActual != null)
        {
            this.gorroActual.setVisible(false);
        }

        if (this.jugador == 1)
        {
            this.gorro1Num = num;
        }
        else
        {
            this.gorro2Num = num;
        }

        this.gorroActual = cam;
        this.gorroActual.setVisible(true);
    }

    cambiarCamisetas(cam, num)
    {
        if (this.camisetaActual != null)
        {
            this.camisetaActual.setVisible(false);
        }

        if (this.jugador == 1)
        {
            this.camiseta1Num = num;
        }
        else
        {
            this.camiseta2Num = num;
        }

        this.camisetaActual = cam;
        this.camisetaActual.setVisible(true);
    }

    cambiarPantalones(cam, num)
    {
        if (this.pantalonActual != null)
        {
            this.pantalonActual.setVisible(false);
        }

        if (this.jugador == 1)
        {
            this.pantalon1Num = num;
        }
        else
        {
            this.pantalon2Num = num;
        }

        this.pantalonActual = cam;
        this.pantalonActual.setVisible(true);
    }

    cambiarZapatos(cam, num)
    {
        if (this.zapatoActual != null)
        {
            this.zapatoActual.setVisible(false);
        }

        if (this.jugador == 1)
        {
            this.zapato1Num = num;
        }
        else
        {
            this.zapato2Num = num;
        }
        
        this.zapatoActual = cam;
        this.zapatoActual.setVisible(true);
    }

    update()
    { 
		if (this.boton == 1)
        {
            this.flechaArriba.setVisible(false);
            this.flechaAbajo.setVisible(false);
        }
        else
        {
            this.flechaArriba.setVisible(true);
            this.flechaAbajo.setVisible(true);
            if (this.boton == 2)
            {
                this.flechaArriba.on('pointerdown', function (pointer){this.activarGorros2();}, this);
                this.flechaAbajo.on('pointerdown', function (pointer){this.activarGorros2();}, this);
            }
            if (this.boton == 3)
            {
                this.flechaArriba.on('pointerdown', function (pointer){this.activarGorros1();}, this);
                this.flechaAbajo.on('pointerdown', function (pointer){this.activarGorros1();}, this);   
            }
            if (this.boton == 4)
            {
                this.flechaArriba.on('pointerdown', function (pointer){this.activarCamisetas2();}, this);
                this.flechaAbajo.on('pointerdown', function (pointer){this.activarCamisetas2();}, this);
            }
            if (this.boton == 5)
            {
                this.flechaArriba.on('pointerdown', function (pointer){this.activarCamisetas1();}, this);
                this.flechaAbajo.on('pointerdown', function (pointer){this.activarCamisetas1();}, this);
            }
            if (this.boton == 6)
            {
                this.flechaArriba.on('pointerdown', function (pointer){this.activarPantalones2();}, this);
                this.flechaAbajo.on('pointerdown', function (pointer){this.activarPantalones2();}, this);
            }
            if (this.boton == 7)
            {
                this.flechaArriba.on('pointerdown', function (pointer){this.activarPantalones1();}, this);
                this.flechaAbajo.on('pointerdown', function (pointer){this.activarPantalones1();}, this);
            }
            if (this.boton == 8)
            {
                this.flechaArriba.on('pointerdown', function (pointer){this.activarZapatos2();}, this);
                this.flechaAbajo.on('pointerdown', function (pointer){this.activarZapatos2();}, this);
            }
            if (this.boton == 9)
            {
                this.flechaArriba.on('pointerdown', function (pointer){this.activarZapatos1();}, this);
                this.flechaAbajo.on('pointerdown', function (pointer){this.activarZapatos1();}, this);
            }
        }       
	}

    crearJugador1()
    {

        switch(this.chico1Num)
        {
            case 1:
                this.chicoFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'morena');
                break;
            case 2:
                this.chicoFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'moreno');
                break;
            case 3:
                this.chicoFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'rubio');
                break;
            case 4:
                this.chicoFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'rubia');
                break;
            case 5:
                this.chicoFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'pelirrojo');
                break;
            case 6:
                this.chicoFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'pelirroja');
                break;
        }

        switch(this.zapato1Num)
        {
            case 0:
                this.zapatosFinal = null;
                break;
            case 1:
                this.zapatosFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'zapatos1');
                break;
            case 2:
                this.zapatosFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'zapatos2');
                break;
            case 3:
                this.zapatosFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'zapatos3');
                break;
            case 4:
                this.zapatosFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'zapatos4');
                break;
            case 5:
                this.zapatosFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'zapatos5');
                break;
            case 6:
                this.zapatosFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'zapatos6');
                break;
            case 7:
                this.zapatosFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'zapatos7');
                break;
            case 8:
                this.zapatosFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'zapatos8');
                break;
            case 9:
                this.zapatosFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'zapatos9');
                break;
            case 10:
                this.zapatosFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'zapatos10');
                break;
            case 11:
                this.zapatosFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'zapatos11');
                break;
            case 12:
                this.zapatosFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'zapatos12');
                break;
        }

        switch(this.pantalon1Num)
        {
            case 0:
                this.pantalonFinal = null;
                break;
            case 1:
                this.pantalonFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'pantalones1');
                break;
            case 2:
                this.pantalonFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'pantalones2');
                break;
            case 3:
                this.pantalonFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'pantalones3');
                break;
            case 4:
                this.pantalonFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'pantalones4');
                break;
            case 5:
                this.pantalonFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'pantalones5');
                break;
            case 6:
                this.pantalonFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'pantalones6');
                break;
            case 7:
                this.pantalonFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'pantalones7');
                break;
            case 8:
                this.pantalonFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'pantalones8');
                break;
            case 9:
                this.pantalonFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'pantalones9');
                break;
            case 10:
                this.pantalonFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'pantalones10');
                break;
            case 11:
                this.pantalonFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'pantalones11');
                break;
            case 12:
                this.pantalonFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'pantalones12');
                break;
        }

        switch(this.camiseta1Num)
        {
            case 0:
                this.camisetaFinal = null;
                break;
            case 1:
                this.camisetaFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'camiseta1');
                break;
            case 2:
                this.camisetaFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'camiseta2');
                break;
            case 3:
                this.camisetaFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'camiseta3');
                break;
            case 4:
                this.camisetaFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'camiseta4');
                break;
            case 5:
                this.camisetaFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'camiseta5');
                break;
            case 6:
                this.camisetaFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'camiseta6');
                break;
            case 7:
                this.camisetaFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'camiseta7');
                break;
            case 8:
                this.camisetaFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'camiseta8');
                break;
            case 9:
                this.camisetaFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'camiseta9');
                break;
            case 10:
                this.camisetaFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'camiseta10');
                break;
            case 11:
                this.camisetaFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'camiseta11');
                break;
            case 12:
                this.camisetaFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'camiseta12');
                break;
        }

        switch(this.gorro1Num)
        {
            case 0:
                this.gorroFinal = null;
                break;
            case 1:
                this.gorroFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'gorro1');
                break;
            case 2:
                this.gorroFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'gorro2');
                break;
            case 3:
                this.gorroFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'gorro3');
                break;
            case 4:
                this.gorroFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'gorro4');
                break;
            case 5:
                this.gorroFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'gorro5');
                break;
            case 6:
                this.gorroFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'gorro6');
                break;
            case 7:
                this.gorroFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'gorro7');
                break;
            case 8:
                this.gorroFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'gorro8');
                break;
            case 9:
                this.gorroFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'gorro9');
                break;
            case 10:
                this.gorroFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'gorro10');
                break;
            case 11:
                this.gorroFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'gorro11');
                break;
            case 12:
                this.gorroFinal = this.add.image(game.canvas.width * 30 / 100, game.canvas.height * 59 / 100, 'gorro12');
                break;
        }   
        

        this.chicoFinal.setVisible(true);
        this.chicoFinal.setScale(game.canvas.width/1920,game.canvas.height/1080);

        if (this.gorroFinal != null)
        {
            this.gorroFinal.setVisible(true);
            this.gorroFinal.setScale(game.canvas.width/1920,game.canvas.height/1080);
        }

        if (this.camisetaFinal != null)
        {
            this.camisetaFinal.setVisible(true);
            this.camisetaFinal.setScale(game.canvas.width/1920,game.canvas.height/1080);
        }

        if (this.pantalonFinal != null)
        {
            this.pantalonFinal.setVisible(true);
            this.pantalonFinal.setScale(game.canvas.width/1920,game.canvas.height/1080);
        }

        if (this.zapatosFinal != null)
        {
            this.zapatosFinal.setVisible(true);
            this.zapatosFinal.setScale(game.canvas.width/1920,game.canvas.height/1080);
        }

        //Copas
        this.copa1 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'copa1').setInteractive();
        this.copa1.setVisible(false);
        this.copa1.setScale(game.canvas.width/1920,game.canvas.height/1080);

        this.copa2 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 50 / 100, 'copa2').setInteractive();
        this.copa2.setVisible(false);
        this.copa2.setScale(game.canvas.width/1920,game.canvas.height/1080);
    }
}