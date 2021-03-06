define([
    'phaser'
], function (Phaser) { 
    'use strict';

    var game, self, animation;

    function HealthPowerup (_game, x, y) {
        game = _game;
        self = this;

        Phaser.Sprite.call(this, game, x, y, 'health-powerup');
        
        // Enable physics.
        game.physics.enable(this);
        this.body.collideWorldBounds = true;
        this.checkWorldBounds = true;
        this.outOfBoundsKill = true;
        
        animation = this.animations.add('fascinate');
        animation.play(10, true);
    }

    HealthPowerup.prototype = Object.create(Phaser.Sprite.prototype);
    HealthPowerup.prototype.constructor = HealthPowerup;
    
    HealthPowerup.prototype.useOn = function (target) {
        target.heal(4, self);
    };

    return HealthPowerup;
});