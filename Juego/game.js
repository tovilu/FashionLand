

var config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.RESIZE,
        parent: 'phaser-example',
        width: 1280,
        height: 720
    },
    parent: 'game',
    dom: {
        createContainer: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [Preloader, MainMenu, SelectMode, Credits, Options, Lobby]
};


var game = new Phaser.Game(config);

game.global = {
    WIDTH:1920,
    HEIGHT:1080,
    languageSuffix: '_en'
}