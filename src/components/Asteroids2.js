import React from 'react';
import './style.css';
import Badge from './img/ryan-logo.png';
import Home from './Home.js'
import Projects from './Projects.js';


class Roids extends React.Component {
    FPS = 30;
    FRICTION = 0.03;  // (0 = no friction)
    SHIP_THRUST = 5;  // acceleration pixels/sec^2
    SHIP_HEIGHT = 30;  // ship height in pixels
    SHIP_EXPLODE_DURATION = 1;  // duration of ship explosion
    SHIP_INV_DURATION = 3;  // duration of respawn invulnerability
    SHIP_BLINK_DURATION = .1;  // duration of ship blink duration
    TURN_SPEED = 360;  // turn speed (deg/sec)

    LASER_AMOUNT = 5;  // max number of lasers on screen
    LASER_SPEED = 500;  // speed of lasers in pixels/sec

    ASTEROIDS_NUM = 5;  // average number of asteroids spawned
    ASTEROID_JAG = .3;  // controls jaggedness of asteroid
    ASTEROID_SPEED = 50;  // max start speed of asteroid in pixels/sec
    ASTEROID_SIZE = 100;  // starting size of asteroid in pixels
    ASTEROIDS_VERTICES = 10;  // avg # of vertices on each asteroid

    SHOW_COLLISION = false;  // show or hide collision geometry

    canv = document.getElementById("gameCanvas");
    context = this.canv.getContext("2d");

    ship = this.newShip();

    asteroids = [];
    ;

    newShip = () => {
    var newShip = {
        // ship starting coordinates
        x: this.canv.width / 2,
        y: this.canv.height / 2,
        explodeTime: 0,
        radius: this.SHIP_HEIGHT / 2,
        angle: 90 / 180 * Math.PI,  // convert to radians
        rotation: 0,
        blinkTime: Math.ceil(this.SHIP_BLINK_DURATION*this.FPS),
        blinkNumber: Math.ceil(this.SHIP_INV_DURATION/this.SHIP_BLINK_DURATION),
        thrusting: false,
        thrust: {
            x: 0,
            y: 0
        }
    }
    return newShip;
    }


    newAsteroid = (x, y) => {
        var asteroid = {
            x: x,
            y: y,
            xv: Math.random() * this.ASTEROID_SPEED / this.FPS * (Math.random() < .5 ? 1 : -1),
            yv: Math.random() * this.ASTEROID_SPEED / this.FPS * (Math.random() < .5 ? 1 : -1),
            radius: this.ASTEROID_SIZE / 2,
            angle: Math.random() * Math.PI * 2,  // convert to radians
            vertices: Math.floor(Math.random() * (this.ASTEROIDS_VERTICES + 1) + this.ASTEROIDS_VERTICES / 2),
            offsets: [],
        };

        // create vertex offsets array
        for (var i = 0; i < asteroid.vertices; i++){
            asteroid.offsets.push(Math.random() * this.ASTEROID_JAG * 2 + 1 - this.ASTEROID_JAG);
        }
        return asteroid;
    }

    distanceBetween = (x1, y1, x2, y2) => {
        return Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));
    }

    createAsteroids = () => {
        var x,y;
        var asteroidVariance;
        
        for (var i = 0; i < this.ASTEROIDS_NUM+2; i++){
            do {
                x = Math.floor(Math.random() * this.canv.width);
                y = Math.floor(Math.random() * this.canv.height);
                
            }while(this.distanceBetween(this.ship.x,this.ship.y,x,y) < this.ASTEROID_SIZE + this.ship.radius);
            // x = Math.floor(Math.random() * canv.width);
            // y = Math.floor(Math.random() * canv.height);
            this.asteroids.push(this.newAsteroid(x, y));
        }
    }

    shipGoBoom = () => {
        this.context.fillStyle = "red";
        this.context.strokeStyle = "lime";
        this.context.beginPath();
        this.context.arc(this.ship.x, this.ship.y, this.ship.radius, 0, Math.PI*2, false);
        this.context.fill();
        this.context.stroke();

        this.ship.explodeTime = Math.floor(this.SHIP_EXPLODE_DURATION * this.FPS);
    }

    
    setupGame = () => {
        // event handlers
        document.addEventListener("keydown",this.keyDown);
        document.addEventListener("keyup",this.keyUp);

        // game loop
        setInterval(this.update, 1000 / this.FPS);
    }
    createAsteroids;
    setupGame;
    
    

    keyDown = (/** @type {KeyboardEvent} */ ev) => {
        switch(ev.keyCode){
            case 32:  // space bar (shoot laser)
                
                break;
            case 37:  // left arrow start rotating left
                this.ship.rotation = this.TURN_SPEED / 180 * Math.PI / this.FPS;
                break;
            case 39:  // right arrow start rotating right
                this.ship.rotation = -this.TURN_SPEED / 180 * Math.PI / this.FPS;
                break;
            case 38:  // up arrow thrust ship forward
                this.ship.thrusting = true;
                break;
        }
    }

    keyUp = (/** @type {KeyboardEvent} */ ev) => {
        switch(ev.keyCode){
            case 32:  // space bar (allow shooting)
                
                break;
            case 37:  // left arrow stop rotating left
                this.ship.rotation = 0;
                break;
            case 39:  // right arrow stop rotating right
                this.ship.rotation = 0;
                break;
            case 38:  // up arrow cease thrust
                this.ship.thrusting = false;
                break;
        }
    }
    // handles changes to game state
    update = () => {
        var exploding = this.ship.explodeTime > 0;
        var blinkOn = this.ship.blinkNumber % 2 == 0;

        // draw space
        this.context.fillStyle = "black";
        this.context.fillRect(0, 0, this.canv.width, this.canv.height);

        // draw ship
        if (!exploding){
            if (blinkOn){    
                this.context.strokeStyle = "white";
                this.context.lineWidth = this.SHIP_HEIGHT / 5;
                this.context.beginPath();
                this.context.moveTo(  // nose of the ship (1/3 ahead)
                    this.ship.x + 4/3 * this.ship.radius * Math.cos(this.ship.angle),
                    this.ship.y - 4/3 * this.ship.radius * Math.sin(this.ship.angle)
                );
                this.context.lineTo(  // rear left
                    this.ship.x - this.ship.radius * (2/3 * Math.cos(this.ship.angle) + Math.sin(this.ship.angle)),
                    this.ship.y + this.ship.radius * (2/3 * Math.sin(this.ship.angle) - Math.cos(this.ship.angle))
                );
                this.context.lineTo(  // rear left
                    this.ship.x - this.ship.radius * (2/3 * Math.cos(this.ship.angle) - Math.sin(this.ship.angle)),
                    this.ship.y + this.ship.radius * (2/3 * Math.sin(this.ship.angle) + Math.cos(this.ship.angle))
                );
                this.context.closePath();
                this.context.stroke();
            }
            if (this.ship.blinkNumber > 0){
                // reduce blinktime
                this.ship.blinkTime--;

                // reduce blinkNumber
                if (this.ship.blinkTime == 0){
                    this.ship.blinkTime = Math.ceil(this.SHIP_BLINK_DURATION*this.FPS);
                    this.ship.blinkNumber--;
                }
            }
            
            if (this.SHOW_COLLISION){
                this.context.strokeStyle = "lime";
                this.context.beginPath();
                this.context.arc(this.ship.x, this.ship.y, this.ship.radius, 0, Math.PI * 2, false);
                this.context.fill();
            }
        }else{
            // ship go boom
            this.context.fillStyle = "darkred";
            this.context.beginPath();
            this.context.arc(this.ship.x, this.ship.y, this.ship.radius*1.8, 0, Math.PI * 2, false);
            this.context.fill();
            this.context.fillStyle = "red";
            this.context.beginPath();
            this.context.arc(this.ship.x, this.ship.y, this.ship.radius*1.5, 0, Math.PI * 2, false);
            this.context.fill();
            this.context.fillStyle = "orange";
            this.context.beginPath();
            this.context.arc(this.ship.x, this.ship.y, this.ship.radius*1.2, 0, Math.PI * 2, false);
            this.context.fill();
            this.context.fillStyle = "yellow";
            this.context.beginPath();
            this.context.arc(this.ship.x, this.ship.y, this.ship.radius*.9, 0, Math.PI * 2, false);
            this.context.fill();
            this.context.fillStyle = "white";
            this.context.beginPath();
            this.context.arc(this.ship.x, this.ship.y, this.ship.radius*.6, 0, Math.PI * 2, false);
            this.context.fill();
            
            
        }
        // draw asteroids
        var x, y, radius, angle, vertices, offsets;
        
        this.context.lineWidth = this.SHIP_HEIGHT / 5;
        for (var i = 0; i < this.asteroids.length; i++){
            this.context.strokeStyle = "slategrey";
            // get asteroid properties
            x = this.asteroids[i].x;
            y = this.asteroids[i].y;
            radius = this.asteroids[i].radius;
            angle = this.asteroids[i].angle;
            vertices = this.asteroids[i].vertices;
            offsets = this.asteroids[i].offsets;
            // draw path
            this.context.beginPath();
            this.context.moveTo(
                x + radius * offsets[0] * Math.cos(angle),
                y + radius * offsets[0] * Math.sin(angle)
            );

            // draw asteroid
            for (var j = 1; j < vertices; j++){
                this.context.lineTo(
                    x + radius * offsets[j] * Math.cos(angle + j * Math.PI * 2 / vertices),
                    y + radius * offsets[j] * Math.sin(angle + j * Math.PI * 2 / vertices)
                );   
            }
            this.context.closePath();
            this.context.stroke();

            if (this.SHOW_COLLISION){
                this.context.strokeStyle = "red";
                this.context.beginPath();
                this.context.arc(x, y, radius, 0, Math.PI * 2, false);
                this.context.stroke();
            }

            
        }

        

        // rotate ship by modifying ship angle
        this.ship.angle += this.ship.rotation;

        // ship thrust
        if (this.ship.thrusting) {
            this.ship.thrust.x += this.SHIP_THRUST * Math.cos(this.ship.angle) / this.FPS;
            this.ship.thrust.y -= this.SHIP_THRUST * Math.sin(this.ship.angle) / this.FPS;
            if (!exploding){
                    
                // draw flame when thrusting! \m/
                this.context.strokeStyle = "yellow";
                this.context.fillStyle = "red";
                this.context.lineWidth = this.SHIP_HEIGHT / 10;
                this.context.beginPath();
                this.context.moveTo(  // center rear of ship
                    this.ship.x - 7/3 * this.ship.radius * Math.cos(this.ship.angle),
                    this.ship.y + 7/3 * this.ship.radius * Math.sin(this.ship.angle)
                );
                this.context.lineTo(  // rear left
                    this.ship.x - this.ship.radius * (2/3 * Math.cos(this.ship.angle) + .25 * Math.sin(this.ship.angle)),
                    this.ship.y + this.ship.radius * (2/3 * Math.sin(this.ship.angle) - .25 * Math.cos(this.ship.angle))
                );
                this.context.lineTo(  // rear right
                    this.ship.x - this.ship.radius * (2/3 * Math.cos(this.ship.angle) - .25 * Math.sin(this.ship.angle)),
                    this.ship.y + this.ship.radius * (2/3 * Math.sin(this.ship.angle) + .25 * Math.cos(this.ship.angle))
                );
                this.context.closePath();
                this.context.fill();
                this.context.stroke();
            }
        } else {
            this.ship.thrust.x -= this.FRICTION * this.ship.thrust.x / this.FPS;
            this.ship.thrust.y -= this.FRICTION * this.ship.thrust.y / this.FPS;
        }

        if (!exploding){
            // move ship
            this.ship.x += this.ship.thrust.x;
            this.ship.y += this.ship.thrust.y;

            // check for asteroid collisions
            if (this.ship.blinkNumber == 0){  // only if not currently invulnerable
                    
                for (var i = 0; i < this.asteroids.length; i++){
                    if (this.distanceBetween(this.ship.x,this.ship.y,this.asteroids[i].x,this.asteroids[i].y) < this.ship.radius + this.asteroids[i].radius){
                        this.shipGoBoom();
                    }
                }
            }

            // handle edge of screen
            if (this.ship.y < 0 - this.ship.radius){
                this.ship.y = this.canv.height + this.ship.radius;
            }else if (this.ship.y > this.canv.height + this.ship.radius){
                this.ship.y = 0 - this.ship.radius;
            }
            if (this.ship.x < 0 - this.ship.radius){
                this.ship.x = this.canv.width + this.ship.radius;
            }else if (this.ship.x > this.canv.width + this.ship.radius){
                this.ship.x = 0 - this.ship.radius;
            }
        }else{
            this.ship.explodeTime--;
            if (this.ship.explodeTime == 0){
                this.ship = this.newShip();
            }
        }

        // move asteroids
        for (var i = 0; i < this.asteroids.length; i++){
            
            this.asteroids[i].x += this.asteroids[i].xv;
            this.asteroids[i].y += this.asteroids[i].yv;

            // handle edge of screen
            if (this.asteroids[i].x < 0 - this.asteroids[i].radius){
                this.asteroids[i].x = this.canv.width + this.asteroids[i].radius;
            } else if (this.asteroids[i].x > this.canv.width + this.asteroids[i].radius){
                this.asteroids[i].x = 0 - this.asteroids[i].radius;
            }
            if (this.asteroids[i].y < 0 - this.asteroids[i].radius){
                this.asteroids[i].y = this.canv.height + this.asteroids[i].radius;
            } else if (this.asteroids[i].y > this.canv.height + this.asteroids[i].radius){
                this.asteroids[i].y = 0 - this.asteroids[i].radius;
            }
        }

        // center dot of ship (for debugging)
        this.context.fillStyle = "red";
        this.context.fillRect(this.ship.x - 1, this.ship.y - 1, 2, 2);
    }
    render(){
        return(
            <div>
                <section class="aboutme">
                    <section class="tagline">
                        <h2>Asteroids</h2>
                    </section>
                    <section class="infoblurb">
                        A simple JavaScript version of Asteroids.
                        <canvas id="gameCanvas" width="1400" height="1000"></canvas>
                    </section>
                </section>
            </div>
        )
    }
}

export default Roids;