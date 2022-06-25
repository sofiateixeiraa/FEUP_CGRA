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
			-0.5, -0.5, 0.5,    //Bottom front left - 0
			0.5, -0.5, 0.5,	    //Bottom front right - 1
			-0.5, 0.5, 0.5,	    //Top front left - 2
            0.5, 0.5, 0.5,	    //Top front right - 3
            -0.5, -0.5, -0.5,	//Bottom back left - 4
			0.5, -0.5, -0.5,	//Bottom back right - 5
			-0.5, 0.5, -0.5,	//Top back left - 6
            0.5, 0.5, -0.5,	    //Top back right - 7

            -0.5, -0.5, 0.5,	//Bottom front left - 8
			0.5, -0.5, 0.5,	    //Bottom front right - 9
			-0.5, 0.5, 0.5,	    //Top front left - 10
            0.5, 0.5, 0.5,	    //Top front right - 11
            -0.5, -0.5, -0.5,	//Bottom back left - 12
			0.5, -0.5, -0.5,	//Bottom back right - 13
			-0.5, 0.5, -0.5,	//Top back left - 14
            0.5, 0.5, -0.5,	    //Top back right - 15

            -0.5, -0.5, 0.5,	//Bottom front left - 16
			0.5, -0.5, 0.5,	    //Bottom front right - 17
			-0.5, 0.5, 0.5,	    //Top front left - 18
            0.5, 0.5, 0.5,	    //Top front right - 19
            -0.5, -0.5, -0.5,	//Bottom back left - 20
			0.5, -0.5, -0.5,	//Bottom back right - 21
			-0.5, 0.5, -0.5,	//Top back left - 22
            0.5, 0.5, -0.5	    //Top back right - 23
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            // first round of vertices
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
            4, 1, 0,

            // second round of vertices
            //Front
            8, 9, 10,
            11, 10, 9,

            //Right
            9, 13, 11,
            15, 11, 13,

            //Back
            13, 12, 15,
            14, 15, 12,

            //Left
            10, 12, 8,
            12, 10, 14,

            //Top
            10, 11, 14,
            15, 14, 11,
            
            //Bottom
            13, 9, 12,
            12, 9, 8,

            // third round of vertices
            //Front
            16, 17, 18,
            19, 18, 17,

            //Right
            17, 21, 19,
            23, 19, 21,

            //Back
            21, 20, 23,
            22, 23, 20,

            //Left
            18, 20, 16,
            20, 18, 22,

            //Top
            18, 19, 22,
            23, 22, 19,

            //Bottom
            21, 17, 20,
            20, 17, 16
		];

        this.normals = [
            -1, 0, 0,   // 0
            1, 0, 0,    // 1
            -1, 0, 0,   // 2
            1, 0, 0,    // 3
            -1, 0, 0,   // 4
            1, 0, 0,    // 5
            -1, 0, 0,   // 6
            1, 0, 0,    // 7
            
            0, -1, 0,   // 8
            0, -1, 0,   // 9
            0, 1, 0,    // 10
            0, 1, 0,    // 11
            0, -1, 0,   // 12
            0, -1, 0,   // 13
            0, 1, 0,    // 14
            0, 1, 0,    // 15

            0, 0, 1,    // 8
            0, 0, 1,    // 9
            0, 0, 1,    // 10
            0, 0, 1,    // 11
            0, 0, -1,   // 12
            0, 0, -1,   // 13
            0, 0, -1,   // 14
            0, 0, -1,   // 15
        ];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}

    updateBuffers() {}
}
