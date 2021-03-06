define([
    'phaser',
    'weapon'
], function (Phaser, Weapon) { 
    'use strict';

    var game;

    function Arrow (_game, x, y) {
        game = _game;

        Phaser.Sprite.call(this, game, x, y, 'arrow', 1);
        this.anchor.set(0.5);

        this.speed = 800;
        this.lifespan_default = 1000;
        this.lifespan = this.lifespan_default;

        game.physics.enable(this);
        this.body.immovable = true;
        this.body.allowGravity = false;

    }

    Arrow.prototype = Object.create(Phaser.Sprite.prototype);
    Arrow.prototype.constructor = Arrow;

    Arrow.prototype.reset = function (x, y, health) {
        this.lifespan = this.lifespan_default;
        Phaser.Sprite.prototype.reset.call(this, x, y, health);
    };

    Arrow.prototype.fire = function (direction) {
        switch(direction) {
            case 'left':
                this.scale.x = -1; //flipped
                this.body.velocity.x = -this.speed;
                break;
            case 'right':
                this.scale.x = 1; //facing default direction
                this.body.velocity.x = this.speed;
                break;
            case 'up':
                break;
            case 'down':
                break;
        }

    };

    return Arrow;
});