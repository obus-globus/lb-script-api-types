import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NVPointSprite extends Object {
    static GL_COORD_REPLACE_NV: number;
    static GL_POINT_SPRITE_NV: number;
    static GL_POINT_SPRITE_R_MODE_NV: number;
    static glPointParameteriNV(paramarg0: number, paramarg1: number): void;
    static glPointParameterivNV(paramarg0: number, paramarg1: number[]): void;
    static glPointParameterivNV(paramarg0: number, paramarg1: IntBuffer): void;
    static nglPointParameterivNV(paramarg0: number, paramarg1: number): void;
    constructor()
}