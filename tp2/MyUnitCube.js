import {CGFobject} from '../lib/CGF.js';
/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCube extends CGFobject {
    constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-5, -5, 0,	//Bottom front left - 0
			5, -5, 0,	    //Bottom front right - 1
			-5, 5, 0,	    //Top front left - 2
            5, 5, 0,	    //Top front right - 3
            -5, -5, -10,	//Bottom back left - 4
			5, -5, -10,	//Bottom back right - 5
			-5, 5, -10,	//Top back left - 6
            5, 5, -10	    //Top back right - 7
            
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            // Front
            0, 1, 2,
            3, 2, 1,

            // Right
            1, 5, 3,
            7, 3, 5,

            // Back
            5, 4, 7,
            6, 7, 4,

            // Left
            2, 4, 0,
            4, 2, 6,

            // Top
            2, 3, 6,
            7, 6, 3,

            // Bottom
            5, 1, 4,
            4, 1, 0
            
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}
