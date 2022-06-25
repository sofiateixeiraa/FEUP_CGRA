import {CGFobject} from '../lib/CGF.js';
/**
 * MyCircle
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyCircle extends CGFobject {

	constructor(scene, nrSides) {

		super(scene);

        this.nrSides = nrSides;
        this.divs = (Math.PI*2)/nrSides;
		this.initBuffers();
	}
	
	initBuffers() {
		
        //Generate vertices, normals and texCoords.
        this.vertices = [];
        this.indices = [];
		this.normals = [];		
		this.texCoords = [];

        this.vertices.push(0, 0, 0);
        this.normals.push(0, 1, 0);

        for(var j=0; j <= this.nrSides; j++) {

            // Vertices.
            var x = Math.cos(j*this.divs);
            var z = Math.sin(-j*this.divs);
            
            this.vertices.push(x, 0, z);
            
            // Indices.
            var current = j;
            var next = j+1;

            this.indices.push(0, current, next);

            // Normals.
            this.normals.push(0, 1, 0);

            // Textures.
            // TODO
        }

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();	
	}
}