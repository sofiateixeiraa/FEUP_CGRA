import {CGFobject} from '../lib/CGF.js';

/*
* @constructor
* @param scene - Reference to MyScene object
*/

export class MyMovements extends CGFobject{
    constructor(scene) {
		super(scene);
		this.initBuffers();
        this.falling = 0;
        this.rising = 0;
        this.ang = 0;
        this.inclinacao = -Math.PI/2;
	}

    turn(val){
        if(val<0)
            this.turnRight=0;
        else this.turnLeft=0;

        this.ang=this.ang+val;
        if(this.ang > 2*Math.PI) this.ang -= 2*Math.PI
        if(this.ang < 2*Math.PI) this.ang += 2*Math.PI
    }

    tilt(val){
        if(val<0)
            this.turnRight=0;
        else this.turnLeft=0;
        this.inclinacao=this.inclinacao+val;
        
        if(this.inclinacao > 2*Math.PI) this.inclinacao -= 2*Math.PI
        if(this.inclinacao < 2*Math.PI) this.inclinacao += 2*Math.PI
        //console.log(this.inclinacao)
    }

    reset(){
        this.ang = 0;
        this.vel = 0;
        this.pos = [0 ,this.upperLim, 0];
        this.inclinacao = 0;
        this.falling = 0;
        this.rising = 0;
    }
    
    update(){
        this.pos[0] = this.pos[0] + 3*Math.sin(this.ang);
        this.pos[1] = this.pos[1] + 3*Math.sin(this.inclinacao);
        if(this.pos[1]<=this.lowerLim) {
            this.falling = 0;
            this.pos[1] = this.lowerLim;
        }

        if(this.pos[1]>=this.upperLim) {
            this.rising = 0
            this.pos[1]=this.upperLim;
        }

        this.pos[2] = this.pos[2] + 3*Math.cos(this.ang);
        this.turnLeft=1;
        this.turnRight=1;
    }
}