import {CGFappearance, CGFtexture} from '../lib/CGF.js';
import {MyQuad} from './MyQuad.js';
/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyCubeMap extends MyQuad {
	constructor(scene, fundo) { //textures array de 6 texturas (topo frente dir tras esq base)
		super(scene);
		const textures={};
		

		if(fundo === 1){ //custom background texture
			textures[0] =  new CGFtexture(this.scene, './images/Skansen/posy.jpg');
			textures[1] =  new CGFtexture(this.scene, './images/Skansen/negz.jpg');
			textures[2] =  new CGFtexture(this.scene, './images/Skansen/negx.jpg');
			textures[3] =  new CGFtexture(this.scene, './images/Skansen/posz.jpg');
			textures[4] =  new CGFtexture(this.scene, './images/Skansen/posx.jpg');
			textures[5] =  new CGFtexture(this.scene, './images/Skansen/negy.jpg');

		}else { //default background texture
			textures[0] =  new CGFtexture(this.scene, './images/demo_cubemap/top.png');
			textures[1] =  new CGFtexture(this.scene, './images/demo_cubemap/front.png');
			textures[2] =  new CGFtexture(this.scene, './images/demo_cubemap/right.png');
			textures[3] =  new CGFtexture(this.scene, './images/demo_cubemap/back.png');
			textures[4] =  new CGFtexture(this.scene, './images/demo_cubemap/left.png');
			textures[5] =  new CGFtexture(this.scene, './images/demo_cubemap/bottom.png');
		}
		
		this.quad = new MyQuad(this.scene);
		this.txtopo = new CGFappearance(this.scene);
		this.txtopo.setAmbient(0, 0, 0, 1);
    	this.txtopo.setDiffuse(0, 0, 0, 1);
    	this.txtopo.setSpecular(0,0,0, 1.0); 
		this.txtopo.setEmission(1 ,1 ,1 ,1);
    	this.txtopo.setShininess(10.0);
		this.txtopo.setTexture(textures[0]);
    	this.txtopo.setTextureWrap('REPEAT', 'REPEAT');

		this.txfrente = new CGFappearance(this.scene);
		this.txfrente.setAmbient(0, 0, 0, 1);
    	this.txfrente.setDiffuse(0, 0, 0, 1);
    	this.txfrente.setSpecular(0, 0, 0, 1.0);
		this.txfrente.setEmission(1 ,1 ,1 ,1);
    	this.txfrente.setShininess(10.0);
		this.txfrente.setTexture(textures[1]);
    	this.txfrente.setTextureWrap('REPEAT', 'REPEAT');

		this.txdir = new CGFappearance(this.scene);
		this.txdir.setAmbient(0, 0, 0, 1);
    	this.txdir.setDiffuse(0, 0, 0, 1);
    	this.txdir.setSpecular(0, 0, 0, 1.0); 
		this.txdir.setEmission(1 ,1 ,1 ,1);
    	this.txdir.setShininess(10.0);
		this.txdir.setTexture(textures[2]);
    	this.txdir.setTextureWrap('REPEAT', 'REPEAT');

		this.txtras = new CGFappearance(this.scene);
		this.txtras.setAmbient(0, 0, 0, 1);
    	this.txtras.setDiffuse(0, 0, 0, 1);
    	this.txtras.setSpecular(0, 0, 0, 1.0); 
		this.txtras.setEmission(1 ,1 ,1 ,1);
    	this.txtras.setShininess(10.0);
		this.txtras.setTexture(textures[3]);
    	this.txtras.setTextureWrap('REPEAT', 'REPEAT');
		
		this.txesq = new CGFappearance(this.scene);
		this.txesq.setAmbient(0, 0, 0, 1);
    	this.txesq.setDiffuse(0, 0, 0, 1);
    	this.txesq.setSpecular(0, 0, 0, 1.0); 
		this.txesq.setEmission(1 ,1 ,1 ,1);
    	this.txesq.setShininess(10.0);
		this.txesq.setTexture(textures[4]);
    	this.txesq.setTextureWrap('REPEAT', 'REPEAT');

		this.txbase = new CGFappearance(this.scene);
		this.txbase.setAmbient(0, 0, 0, 1);
    	this.txbase.setDiffuse(0, 0, 0, 1);
    	this.txbase.setSpecular(0, 0, 0, 1.0); 
		this.txbase.setEmission(1 ,1 ,1 ,1);
    	this.txbase.setShininess(10.0);
		this.txbase.setTexture(textures[5]);
    	this.txbase.setTextureWrap('REPEAT', 'REPEAT');		
		
	}
	
	display(){
		
		this.scene.pushMatrix();	
			this.scene.scale(50, 50, 50);
		
				this.scene.pushMatrix(); //tras
					this.txtras.apply();
					this.scene.translate(0,0,-0.5);
					this.quad.display();
				this.scene.popMatrix();
            
				this.scene.pushMatrix(); //frente
					this.txfrente.apply();
					this.scene.translate(0,0,0.5);
                    this.scene.rotate(Math.PI, 0,1,0);
					this.quad.display();
				this.scene.popMatrix();

				this.scene.pushMatrix();  //esquerda
					this.txdir.apply();
					this.scene.translate(-0.5, 0,0);
					this.scene.rotate(Math.PI/2,0,1,0);
					this.quad.display();
				this.scene.popMatrix();

				this.scene.pushMatrix(); //direita
					this.txesq.apply();
					this.scene.translate(0.5, 0,0);
					this.scene.rotate(-Math.PI/2,0,1,0);
					this.quad.display();
				this.scene.popMatrix();

				this.scene.pushMatrix(); //baixo
					this.txbase.apply();
					this.scene.translate(0, -0.5,0);
					this.scene.rotate(-Math.PI/2,1,0,0);
					this.quad.display();
				this.scene.popMatrix();

				this.scene.pushMatrix(); //topo
					this.txtopo.apply();
					this.scene.translate(0,0.5,0);
                    this.scene.rotate(-Math.PI/2,1,0,0);
                    this.scene.rotate(-Math.PI, 1,0,0);
					this.quad.display();
				this.scene.popMatrix();
                
		this.scene.popMatrix();	
		
	}

}