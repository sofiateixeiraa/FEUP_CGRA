import {CGFappearance, CGFtexture} from '../lib/CGF.js';
import {MyQuad} from './MyQuad.js';
/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCubeQuad extends MyQuad {
	constructor(scene, textures) { //textures array de 6 texturas (topo frente dir tras esq base)
		super(scene);
		
		for( let i = 0 ; i < 5 ; i++){
			if(textures[i] == undefined){
				textures[i] = new CGFtexture(this.scene, './images/default.png');
			}
		}

		this.initBuffers();
		
		this.topo = new MyQuad(this.scene);
		this.txtopo = new CGFappearance(this.scene);
		this.txtopo.setAmbient(0.4, 0.4, 0.4, 1);
    	this.txtopo.setDiffuse(0.6, 0.6, 0.6, 1);
    	this.txtopo.setSpecular(1,1,1, 1.0); 
    	this.txtopo.setShininess(10.0);
		this.txtopo.loadTexture(textures[0].image.src);
    	this.txtopo.setTextureWrap('REPEAT', 'REPEAT');

		this.frente = new MyQuad(this.scene);
		this.txfrente = new CGFappearance(this.scene);
		this.txfrente.setAmbient(0.4, 0.4, 0.4, 1);
    	this.txfrente.setDiffuse(0.6, 0.6, 0.6, 1);
    	this.txfrente.setSpecular(1,1,1, 1.0);
    	this.txfrente.setShininess(10.0);
		this.txfrente.loadTexture(textures[1].image.src);
    	this.txfrente.setTextureWrap('REPEAT', 'REPEAT');

		this.direita = new MyQuad(this.scene);
		this.txdir = new CGFappearance(this.scene);
		this.txdir.setAmbient(0.4, 0.4, 0.4, 1);
    	this.txdir.setDiffuse(0.6, 0.6, 0.6, 1);
    	this.txdir.setSpecular(1,1,1, 1.0); 
    	this.txdir.setShininess(10.0);
		this.txdir.loadTexture(textures[2].image.src);
    	this.txdir.setTextureWrap('REPEAT', 'REPEAT');

		this.tras = new MyQuad(this.scene);
		this.txtras = new CGFappearance(this.scene);
		this.txtras.setAmbient(0.4, 0.4, 0.4, 1);
    	this.txtras.setDiffuse(0.6, 0.6, 0.6, 1);
    	this.txtras.setSpecular(1,1,1, 1.0); 
    	this.txtras.setShininess(10.0);
		this.txtras.loadTexture(textures[3].image.src);
    	this.txtras.setTextureWrap('REPEAT', 'REPEAT');
		
		this.esquerda = new MyQuad(this.scene);
		this.txesq = new CGFappearance(this.scene);
		this.txesq.setAmbient(0.4, 0.4, 0.4, 1);
    	this.txesq.setDiffuse(0.6, 0.6, 0.6, 1);
    	this.txesq.setSpecular(1,1,1, 1.0); 
    	this.txesq.setShininess(10.0);
		this.txesq.loadTexture(textures[4].image.src);
    	this.txesq.setTextureWrap('REPEAT', 'REPEAT');

		this.base = new MyQuad(this.scene);
		this.txbase = new CGFappearance(this.scene);
		this.txbase.setAmbient(0.4, 0.4, 0.4, 1);
    	this.txbase.setDiffuse(0.6, 0.6, 0.6, 1);
    	this.txbase.setSpecular(1,1,1, 1.0); 
    	this.txbase.setShininess(10.0);
		this.txbase.loadTexture(textures[5].image.src);
    	this.txbase.setTextureWrap('REPEAT', 'REPEAT');		

		
	}
	
	display(){
		
		this.scene.pushMatrix(); 
			this.txdir.apply();
			this.scene.rotate(Math.PI, 1,0,0);
			this.scene.translate(0,0,0.5);
			this.scene.rotate(Math.PI, 0,0,1);
			this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
			this.direita.display();
		this.scene.popMatrix();
		
		this.scene.pushMatrix(); 
			this.txesq.apply();
			this.scene.translate(0,0,0.5);
			this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
			this.esquerda.display();
		this.scene.popMatrix();
		
	
		this.scene.pushMatrix();  
			this.txtras.apply();
			this.scene.translate(-0.5, 0,0);
			this.scene.rotate(-Math.PI/2,0,1,0);
			this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
			this.tras.display();
		this.scene.popMatrix();

		this.scene.pushMatrix(); 
			this.txfrente.apply();
			this.scene.translate(0.5, 0,0);
			this.scene.rotate(Math.PI/2,0,1,0);
			this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
			this.frente.display();
		this.scene.popMatrix();

		this.scene.pushMatrix(); 
			this.txbase.apply();
			this.scene.translate(0, -0.5,0);
			this.scene.rotate(Math.PI/2,1,0,0);
			this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
			this.base.display();
		this.scene.popMatrix();

	 	this.scene.pushMatrix(); 
		 	this.txtopo.apply();
			this.scene.rotate(Math.PI, 1,0,0);
			this.scene.rotate(Math.PI/2,1,0,0);
			this.scene.translate(0,0,0.5);
			this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
			this.topo.display();
		this.scene.popMatrix();
		
		
	}

}