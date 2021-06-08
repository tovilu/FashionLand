class Lobby extends Phaser.Scene 
{

    constructor() 
    {
        super('Lobby');
    }

    create() 
    {
        this.boton = 1;

		//Fondo
        this.menuFondo = this.add.image(game.canvas.width / 2, game.canvas.height / 2, 'menuFondo');   
        this.menuFondo.setVisible(true);

        //Boton Return
        this.returnButton = this.add.image(game.canvas.width * 7 / 100,game.canvas.height * 10 / 100, 'returnButton').setInteractive();
        this.returnButton.setVisible(true);
        this.returnButton.on('pointerdown', function (pointer){this.scene.start('MainMenu');}, this);

        //Boton Terminado
        if (game.languageSuffix == '_es')
        {
            this.terminarButton = this.add.image(game.canvas.width * 55 / 100, game.canvas.height * 10 / 100, 'terminarButton').setInteractive();
        }
        else
        {
            this.terminarButton = this.add.image(game.canvas.width * 55 / 100, game.canvas.height * 10 / 100, 'finishButton').setInteractive();
        }
        this.terminarButton.setVisible(true);
        this.terminarButton.on('pointerdown', function (pointer){this.scene.start('MainMenu');}, this);

        //Barra
        this.barra = this.add.image(game.canvas.width * 86.5 / 100, game.canvas.height / 2, 'barra').setInteractive();
        this.barra.setVisible(true);
        //Barra Ropa
        this.barra = this.add.image(game.canvas.width * 22 / 100, game.canvas.height * 58 / 100, 'barraRopa').setInteractive();
        this.barra.setVisible(true);

        //Boton flecha arriba
        this.flechaArriba = this.add.image(game.canvas.width * 45 / 100, game.canvas.height * 30 / 100, 'flechaArriba').setInteractive();
        this.flechaArriba.setVisible(true);
        this.flechaArriba.on('pointerdown', function (pointer){this.activarChicos();}, this);
        //Boton flecha abajo
        this.flechaAbajo = this.add.image(game.canvas.width * 45 / 100, game.canvas.height * 88 / 100, 'flechaAbajo').setInteractive();
        this.flechaAbajo.setVisible(true);
        this.flechaAbajo.on('pointerdown', function (pointer){this.activarChicos();}, this);

        //Moreno
        this.moreno = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'moreno').setInteractive();
        this.moreno.setVisible(true);
        //Morena
        this.morena = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'morena').setInteractive();
        this.morena.setVisible(false);
        //Rubia
        this.rubia = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'rubia').setInteractive();
        this.rubia.setVisible(false);
        //Rubio
        this.rubio = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'rubio').setInteractive();
        this.rubio.setVisible(false);
        //Morena
        this.pelirrojo = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'pelirrojo').setInteractive();
        this.pelirrojo.setVisible(false);
        //Rubia
        this.pelirroja = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'pelirroja').setInteractive();
        this.pelirroja.setVisible(false);



        //Boton chicos
        this.chicos = this.add.image(game.canvas.width * 87 / 100, game.canvas.height * 21 / 100, 'chicosButton').setInteractive();
        this.chicos.setVisible(true);
        this.chicos.on('pointerdown', function (pointer){this.activarChicos();}, this);
        //Boton gorros
        this.gorros = this.add.image(game.canvas.width * 87 / 100, game.canvas.height * 35.5 / 100, 'gorrosButton').setInteractive();
        this.gorros.setVisible(true);
        this.gorros.on('pointerdown', function (pointer){this.activarGorros1();}, this);
        //Boton camisetas
        this.camisetas = this.add.image(game.canvas.width * 87 / 100, game.canvas.height * 50.5 / 100, 'camisetasButton').setInteractive();
        this.camisetas.setVisible(true);
        this.camisetas.on('pointerdown', function (pointer){this.activarCamisetas1();}, this);
        //Boton pantalones
        this.pantalones = this.add.image(game.canvas.width * 87 / 100, game.canvas.height * 65.5 / 100, 'pantalonesButton').setInteractive();
        this.pantalones.setVisible(true);
        this.pantalones.on('pointerdown', function (pointer){this.activarPantalones1();}, this);
        //Boton zapatos
        this.zapatos = this.add.image(game.canvas.width * 87 / 100, game.canvas.height * 80 / 100, 'zapatosButton').setInteractive();
        this.zapatos.setVisible(true);
        this.zapatos.on('pointerdown', function (pointer){this.activarZapatos1();}, this);


        //Boton chico 1
        this.chico1Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 33 / 100, 'chico3Button').setInteractive();
        this.chico1Button.setVisible(true);
        this.chico1Button.on('pointerdown', function (pointer){this.cambiarChico(this.morena);}, this);
        //Boton chico 1
        this.chico2Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 33 / 100, 'chico2Button').setInteractive();
        this.chico2Button.setVisible(true);
        this.chico2Button.on('pointerdown', function (pointer){this.cambiarChico(this.moreno);}, this);
        //Boton chico 3
        this.chico3Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 58 / 100, 'chico1Button').setInteractive();
        this.chico3Button.setVisible(true);
        this.chico3Button.on('pointerdown', function (pointer){this.cambiarChico(this.rubio);}, this);
        //Boton chico 4
        this.chico4Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 58 / 100, 'chico4Button').setInteractive();
        this.chico4Button.setVisible(true);
        this.chico4Button.on('pointerdown', function (pointer){this.cambiarChico(this.rubia);}, this);
        //Boton chico 5
        this.chico5Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 83 / 100, 'chico5Button').setInteractive();
        this.chico5Button.setVisible(true);
        this.chico5Button.on('pointerdown', function (pointer){this.cambiarChico(this.pelirrojo);}, this);
        //Boton chico 6
        this.chico6Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 83 / 100, 'chico6Button').setInteractive();
        this.chico6Button.setVisible(true);
        this.chico6Button.on('pointerdown', function (pointer){this.cambiarChico(this.pelirroja);}, this);

        //Boton gorro 1
        this.gorro1Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 33 / 100, 'gorro1Button').setInteractive();
        this.gorro1Button.setVisible(false);
        this.gorro1Button.on('pointerdown', function (pointer){this.cambiarGorro(this.gorro1);}, this);
        //Boton gorro 2
        this.gorro2Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 33 / 100, 'gorro2Button').setInteractive();
        this.gorro2Button.setVisible(false);
        this.gorro2Button.on('pointerdown', function (pointer){this.cambiarGorro(this.gorro2);}, this);
        //Boton gorro 3
        this.gorro3Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 58 / 100, 'gorro3Button').setInteractive();
        this.gorro3Button.setVisible(false);
        this.gorro3Button.on('pointerdown', function (pointer){this.cambiarGorro(this.gorro3);}, this);
        //Boton gorro 4
        this.gorro4Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 58 / 100, 'gorro4Button').setInteractive();
        this.gorro4Button.setVisible(false);
        this.gorro4Button.on('pointerdown', function (pointer){this.cambiarGorro(this.gorro4);}, this);
        //Boton gorro 5
        this.gorro5Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 83 / 100, 'gorro5Button').setInteractive();
        this.gorro5Button.setVisible(false);
        this.gorro5Button.on('pointerdown', function (pointer){this.cambiarGorro(this.gorro5);}, this);
        //Boton gorro 6
        this.gorro6Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 83 / 100, 'gorro6Button').setInteractive();
        this.gorro6Button.setVisible(false);
        this.gorro6Button.on('pointerdown', function (pointer){this.cambiarGorro(this.gorro6);}, this);
        //Boton gorro 7
        this.gorro7Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 33 / 100, 'gorro7Button').setInteractive();
        this.gorro7Button.setVisible(false);
        this.gorro7Button.on('pointerdown', function (pointer){this.cambiarGorro(this.gorro7);}, this);
        //Boton gorro 8
        this.gorro8Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 33 / 100, 'gorro8Button').setInteractive();
        this.gorro8Button.setVisible(false);
        this.gorro8Button.on('pointerdown', function (pointer){this.cambiarGorro(this.gorro8);}, this);
        //Boton gorro 9
        this.gorro9Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 58 / 100, 'gorro9Button').setInteractive();
        this.gorro9Button.setVisible(false);
        this.gorro9Button.on('pointerdown', function (pointer){this.cambiarGorro(this.gorro9);}, this);
        //Boton gorro 10
        this.gorro10Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 58 / 100, 'gorro10Button').setInteractive();
        this.gorro10Button.setVisible(false);
        this.gorro10Button.on('pointerdown', function (pointer){this.cambiarGorro(this.gorro10);}, this);
        //Boton gorro 11
        this.gorro11Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 83 / 100, 'gorro11Button').setInteractive();
        this.gorro11Button.setVisible(false);
        this.gorro11Button.on('pointerdown', function (pointer){this.cambiarGorro(this.gorro11);}, this);
        //Boton gorro 12
        this.gorro12Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 83 / 100, 'gorro12Button').setInteractive();
        this.gorro12Button.setVisible(false);
        this.gorro12Button.on('pointerdown', function (pointer){this.cambiarGorro(this.gorro12);}, this);

        //Boton camiseta 1
        this.camiseta1Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 33 / 100, 'camiseta1Button').setInteractive();
        this.camiseta1Button.setVisible(false);
        this.camiseta1Button.on('pointerdown', function (pointer){this.cambiarCamisetas(this.camiseta1);}, this);
        //Boton camiseta 2
        this.camiseta2Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 33 / 100, 'camiseta2Button').setInteractive();
        this.camiseta2Button.setVisible(false);
        this.camiseta2Button.on('pointerdown', function (pointer){this.cambiarCamisetas(this.camiseta2);}, this);
        //Boton camiseta 3
        this.camiseta3Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 58 / 100, 'camiseta3Button').setInteractive();
        this.camiseta3Button.setVisible(false);
        this.camiseta3Button.on('pointerdown', function (pointer){this.cambiarCamisetas(this.camiseta3);}, this);
        //Boton camiseta 4
        this.camiseta4Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 58 / 100, 'camiseta4Button').setInteractive();
        this.camiseta4Button.setVisible(false);
        this.camiseta4Button.on('pointerdown', function (pointer){this.cambiarCamisetas(this.camiseta4);}, this);
        //Boton camiseta 5
        this.camiseta5Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 83 / 100, 'camiseta5Button').setInteractive();
        this.camiseta5Button.setVisible(false);
        this.camiseta5Button.on('pointerdown', function (pointer){this.cambiarCamisetas(this.camiseta5);}, this);
        //Boton camiseta 6
        this.camiseta6Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 83 / 100, 'camiseta6Button').setInteractive();
        this.camiseta6Button.setVisible(false);
        this.camiseta6Button.on('pointerdown', function (pointer){this.cambiarCamisetas(this.camiseta6);}, this);
        //Boton camiseta 7
        this.camiseta7Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 33 / 100, 'camiseta7Button').setInteractive();
        this.camiseta7Button.setVisible(false);
        this.camiseta7Button.on('pointerdown', function (pointer){this.cambiarCamisetas(this.camiseta7);}, this);
        //Boton camiseta 8
        this.camiseta8Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 33 / 100, 'camiseta8Button').setInteractive();
        this.camiseta8Button.setVisible(false);
        this.camiseta8Button.on('pointerdown', function (pointer){this.cambiarCamisetas(this.camiseta8);}, this);
        //Boton camiseta 9
        this.camiseta9Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 58 / 100, 'camiseta9Button').setInteractive();
        this.camiseta9Button.setVisible(false);
        this.camiseta9Button.on('pointerdown', function (pointer){this.cambiarCamisetas(this.camiseta9);}, this);
        //Boton camiseta 10
        this.camiseta10Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 58 / 100, 'camiseta10Button').setInteractive();
        this.camiseta10Button.setVisible(false);
        this.camiseta10Button.on('pointerdown', function (pointer){this.cambiarCamisetas(this.camiseta10);}, this);
        //Boton camiseta 11
        this.camiseta11Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 83 / 100, 'camiseta11Button').setInteractive();
        this.camiseta11Button.setVisible(false);
        this.camiseta11Button.on('pointerdown', function (pointer){this.cambiarCamisetas(this.camiseta11);}, this);
        //Boton camiseta 12
        this.camiseta12Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 83 / 100, 'camiseta12Button').setInteractive();
        this.camiseta12Button.setVisible(false);
        this.camiseta12Button.on('pointerdown', function (pointer){this.cambiarCamisetas(this.camiseta12);}, this);

        //Boton pantalones 1
        this.pantalones1Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 33 / 100, 'pantalones1Button').setInteractive();
        this.pantalones1Button.setVisible(false);
        this.pantalones1Button.on('pointerdown', function (pointer){this.cambiarPantalones(this.pantalones1);}, this);
        //Boton pantalones 2
        this.pantalones2Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 33 / 100, 'pantalones2Button').setInteractive();
        this.pantalones2Button.setVisible(false);
        this.pantalones2Button.on('pointerdown', function (pointer){this.cambiarPantalones(this.pantalones2);}, this);
        //Boton pantalones 3
        this.pantalones3Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 58 / 100, 'pantalones3Button').setInteractive();
        this.pantalones3Button.setVisible(false);
        this.pantalones3Button.on('pointerdown', function (pointer){this.cambiarPantalones(this.pantalones3);}, this);
        //Boton pantalones 4
        this.pantalones4Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 58 / 100, 'pantalones4Button').setInteractive();
        this.pantalones4Button.setVisible(false);
        this.pantalones4Button.on('pointerdown', function (pointer){this.cambiarPantalones(this.pantalones4);}, this);
        //Boton pantalones 5
        this.pantalones5Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 83 / 100, 'pantalones5Button').setInteractive();
        this.pantalones5Button.setVisible(false);
        this.pantalones5Button.on('pointerdown', function (pointer){this.cambiarPantalones(this.pantalones5);}, this);
        //Boton pantalones 6
        this.pantalones6Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 83 / 100, 'pantalones6Button').setInteractive();
        this.pantalones6Button.setVisible(false);
        this.pantalones6Button.on('pointerdown', function (pointer){this.cambiarPantalones(this.pantalones6);}, this);
        //Boton pantalones 7
        this.pantalones7Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 33 / 100, 'pantalones7Button').setInteractive();
        this.pantalones7Button.setVisible(false);
        this.pantalones7Button.on('pointerdown', function (pointer){this.cambiarPantalones(this.pantalones7);}, this);
        //Boton pantalones 8
        this.pantalones8Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 33 / 100, 'pantalones8Button').setInteractive();
        this.pantalones8Button.setVisible(false);
        this.pantalones8Button.on('pointerdown', function (pointer){this.cambiarPantalones(this.pantalones8);}, this);
        //Boton pantalones 9
        this.pantalones9Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 58 / 100, 'pantalones9Button').setInteractive();
        this.pantalones9Button.setVisible(false);
        this.pantalones9Button.on('pointerdown', function (pointer){this.cambiarPantalones(this.pantalones9);}, this);
        //Boton pantalones 10
        this.pantalones10Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 58 / 100, 'pantalones10Button').setInteractive();
        this.pantalones10Button.setVisible(false);
        this.pantalones10Button.on('pointerdown', function (pointer){this.cambiarPantalones(this.pantalones10);}, this);
        //Boton pantalones 11
        this.pantalones11Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 83 / 100, 'pantalones11Button').setInteractive();
        this.pantalones11Button.setVisible(false);
        this.pantalones11Button.on('pointerdown', function (pointer){this.cambiarPantalones(this.pantalones11);}, this);
        //Boton pantalones 12
        this.pantalones12Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 83 / 100, 'pantalones12Button').setInteractive();
        this.pantalones12Button.setVisible(false);
        this.pantalones12Button.on('pointerdown', function (pointer){this.cambiarPantalones(this.pantalones12);}, this);

        //Boton zapatos 1
        this.zapatos1Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 33 / 100, 'zapatos1Button').setInteractive();
        this.zapatos1Button.setVisible(false);
        this.zapatos1Button.on('pointerdown', function (pointer){this.cambiarZapatos(this.zapatos1);}, this);
        //Boton zapatos 2
        this.zapatos2Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 33 / 100, 'zapatos2Button').setInteractive();
        this.zapatos2Button.setVisible(false);
        this.zapatos2Button.on('pointerdown', function (pointer){this.cambiarZapatos(this.zapatos2);}, this);
        //Boton zapatos 3
        this.zapatos3Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 58 / 100, 'zapatos3Button').setInteractive();
        this.zapatos3Button.setVisible(false);
        this.zapatos3Button.on('pointerdown', function (pointer){this.cambiarZapatos(this.zapatos3);}, this);
        //Boton zapatos 4
        this.zapatos4Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 58 / 100, 'zapatos4Button').setInteractive();
        this.zapatos4Button.setVisible(false);
        this.zapatos4Button.on('pointerdown', function (pointer){this.cambiarZapatos(this.zapatos4);}, this);
        //Boton zapatos 5
        this.zapatos5Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 83 / 100, 'zapatos5Button').setInteractive();
        this.zapatos5Button.setVisible(false);
        this.zapatos5Button.on('pointerdown', function (pointer){this.cambiarZapatos(this.zapatos5);}, this);
        //Boton zapatos 6
        this.zapatos6Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 83 / 100, 'zapatos6Button').setInteractive();
        this.zapatos6Button.setVisible(false);
        this.zapatos6Button.on('pointerdown', function (pointer){this.cambiarZapatos(this.zapatos6);}, this);
        //Boton zapatos 7
        this.zapatos7Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 33 / 100, 'zapatos7Button').setInteractive();
        this.zapatos7Button.setVisible(false);
        this.zapatos7Button.on('pointerdown', function (pointer){this.cambiarZapatos(this.zapatos7);}, this);
        //Boton zapatos 8
        this.zapatos8Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 33 / 100, 'zapatos8Button').setInteractive();
        this.zapatos8Button.setVisible(false);
        this.zapatos8Button.on('pointerdown', function (pointer){this.cambiarZapatos(this.zapatos8);}, this);
        //Boton zapatos 9
        this.zapatos9Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 58 / 100, 'zapatos9Button').setInteractive();
        this.zapatos9Button.setVisible(false);
        this.zapatos9Button.on('pointerdown', function (pointer){this.cambiarZapatos(this.zapatos9);}, this);
        //Boton zapatos 10
        this.zapatos10Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 58 / 100, 'zapatos10Button').setInteractive();
        this.zapatos10Button.setVisible(false);
        this.zapatos10Button.on('pointerdown', function (pointer){this.cambiarZapatos(this.zapatos10);}, this);
        //Boton zapatos 11
        this.zapatos11Button = this.add.image(game.canvas.width * 13 / 100, game.canvas.height * 83 / 100, 'zapatos11Button').setInteractive();
        this.zapatos11Button.setVisible(false);
        this.zapatos11Button.on('pointerdown', function (pointer){this.cambiarZapatos(this.zapatos11);}, this);
        //Boton zapatos 12
        this.zapatos12Button = this.add.image(game.canvas.width * 31 / 100, game.canvas.height * 83 / 100, 'zapatos12Button').setInteractive();
        this.zapatos12Button.setVisible(false);
        this.zapatos12Button.on('pointerdown', function (pointer){this.cambiarZapatos(this.zapatos12);}, this);



        //Zapatos 1
        this.zapatos1 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'zapatos1').setInteractive();
        this.zapatos1.setVisible(false);
        //Zapatos 2
        this.zapatos2 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'zapatos2').setInteractive();
        this.zapatos2.setVisible(false);
        //Zapatos 3
        this.zapatos3 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'zapatos3').setInteractive();
        this.zapatos3.setVisible(false);
        //Zapatos 4
        this.zapatos4 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'zapatos4').setInteractive();
        this.zapatos4.setVisible(false);
        //Zapatos 5
        this.zapatos5 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'zapatos5').setInteractive();
        this.zapatos5.setVisible(false);
        //Zapatos 6
        this.zapatos6 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'zapatos6').setInteractive();
        this.zapatos6.setVisible(false);
        //Zapatos 7
        this.zapatos7 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'zapatos7').setInteractive();
        this.zapatos7.setVisible(false);
        //Zapatos 8
        this.zapatos8 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'zapatos8').setInteractive();
        this.zapatos8.setVisible(false);
        //Zapatos 9
        this.zapatos9 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'zapatos9').setInteractive();
        this.zapatos9.setVisible(false);
        //Zapatos 10
        this.zapatos10 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'zapatos10').setInteractive();
        this.zapatos10.setVisible(false);
        //Zapatos 11
        this.zapatos11 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'zapatos11').setInteractive();
        this.zapatos11.setVisible(false);
        //Zapatos 12
        this.zapatos12 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'zapatos12').setInteractive();
        this.zapatos12.setVisible(false);

        //Pantalones 1
        this.pantalones1 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'pantalones1').setInteractive();
        this.pantalones1.setVisible(false);
        //Pantalones 2
        this.pantalones2 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'pantalones2').setInteractive();
        this.pantalones2.setVisible(false);
        //Pantalones 3
        this.pantalones3 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'pantalones3').setInteractive();
        this.pantalones3.setVisible(false);
        //Pantalones 4
        this.pantalones4 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'pantalones4').setInteractive();
        this.pantalones4.setVisible(false);
        //Pantalones 5
        this.pantalones5 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'pantalones5').setInteractive();
        this.pantalones5.setVisible(false);
        //Pantalones 6
        this.pantalones6 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'pantalones6').setInteractive();
        this.pantalones6.setVisible(false);
        //Pantalones 7
        this.pantalones7 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'pantalones7').setInteractive();
        this.pantalones7.setVisible(false);
        //Pantalones 8
        this.pantalones8 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'pantalones8').setInteractive();
        this.pantalones8.setVisible(false);
        //Pantalones 9
        this.pantalones9 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'pantalones9').setInteractive();
        this.pantalones9.setVisible(false);
        //Pantalones 10
        this.pantalones10 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'pantalones10').setInteractive();
        this.pantalones10.setVisible(false);
        //Pantalones 11
        this.pantalones11 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'pantalones11').setInteractive();
        this.pantalones11.setVisible(false);
        //Pantalones 12
        this.pantalones12 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'pantalones12').setInteractive();
        this.pantalones12.setVisible(false);

        //Camiseta 1
        this.camiseta1 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'camiseta1').setInteractive();
        this.camiseta1.setVisible(false);
        //Camiseta 2
        this.camiseta2 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'camiseta2').setInteractive();
        this.camiseta2.setVisible(false);
        //Camiseta 3
        this.camiseta3 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'camiseta3').setInteractive();
        this.camiseta3.setVisible(false);
        //Camiseta 4
        this.camiseta4 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'camiseta4').setInteractive();
        this.camiseta4.setVisible(false);
        //Camiseta 5
        this.camiseta5 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'camiseta5').setInteractive();
        this.camiseta5.setVisible(false);
        //Camiseta 6
        this.camiseta6 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'camiseta6').setInteractive();
        this.camiseta6.setVisible(false);
        //Camiseta 7
        this.camiseta7 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'camiseta7').setInteractive();
        this.camiseta7.setVisible(false);
        //Camiseta 8
        this.camiseta8 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'camiseta8').setInteractive();
        this.camiseta8.setVisible(false);
        //Camiseta 9
        this.camiseta9 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'camiseta9').setInteractive();
        this.camiseta9.setVisible(false);
        //Camiseta 10
        this.camiseta10 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'camiseta10').setInteractive();
        this.camiseta10.setVisible(false);
        //Camiseta 11
        this.camiseta11 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'camiseta11').setInteractive();
        this.camiseta11.setVisible(false);
        //Camiseta 12
        this.camiseta12 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'camiseta12').setInteractive();
        this.camiseta12.setVisible(false);

        //Gorro 1
        this.gorro1 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'gorro1').setInteractive();
        this.gorro1.setVisible(false);
        //Gorro 2
        this.gorro2 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'gorro2').setInteractive();
        this.gorro2.setVisible(false);
        //Gorro 3
        this.gorro3 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'gorro3').setInteractive();
        this.gorro3.setVisible(false);
        //Gorro 4
        this.gorro4 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'gorro4').setInteractive();
        this.gorro4.setVisible(false);
        //Gorro 5
        this.gorro5 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'gorro5').setInteractive();
        this.gorro5.setVisible(false);
        //Gorro 6
        this.gorro6 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'gorro6').setInteractive();
        this.gorro6.setVisible(false);
        //Gorro 7
        this.gorro7 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'gorro7').setInteractive();
        this.gorro7.setVisible(false);
        //Gorro 8
        this.gorro8 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'gorro8').setInteractive();
        this.gorro8.setVisible(false);
        //Gorro 9
        this.gorro9 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'gorro9').setInteractive();
        this.gorro9.setVisible(false);
        //Gorro 10
        this.gorro10 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'gorro10').setInteractive();
        this.gorro10.setVisible(false);
        //Gorro 11
        this.gorro11 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'gorro11').setInteractive();
        this.gorro11.setVisible(false);
        //Gorro 12
        this.gorro12 = this.add.image(game.canvas.width * 58 / 100, game.canvas.height * 59 / 100, 'gorro12').setInteractive();
        this.gorro12.setVisible(false);

        


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

    cambiarChico(cam)
    {
        if (this.chicoActual != null)
        {
            this.chicoActual.setVisible(false);
        }

        this.chicoActual = cam;
        this.chicoActual.setVisible(true);
    }

    cambiarGorro(cam)
    {
        if (this.gorroActual != null)
        {
            this.gorroActual.setVisible(false);
        }

        this.gorroActual = cam;
        this.gorroActual.setVisible(true);
    }

    cambiarCamisetas(cam)
    {
        if (this.camisetaActual != null)
        {
            this.camisetaActual.setVisible(false);
        }

        this.camisetaActual = cam;
        this.camisetaActual.setVisible(true);
    }

    cambiarPantalones(cam)
    {
        if (this.pantalonActual != null)
        {
            this.pantalonActual.setVisible(false);
        }

        this.pantalonActual = cam;
        this.pantalonActual.setVisible(true);
    }

    cambiarZapatos(cam)
    {
        if (this.zapatoActual != null)
        {
            this.zapatoActual.setVisible(false);
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
}