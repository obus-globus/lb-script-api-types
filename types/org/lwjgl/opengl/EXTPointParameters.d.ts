import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class EXTPointParameters extends Object {
    static GL_DISTANCE_ATTENUATION_EXT: number;
    static GL_POINT_FADE_THRESHOLD_SIZE_EXT: number;
    static GL_POINT_SIZE_MAX_EXT: number;
    static GL_POINT_SIZE_MIN_EXT: number;
    static glPointParameterfEXT(paramarg0: number, paramarg1: number): void;
    static glPointParameterfvEXT(paramarg0: number, paramarg1: number[]): void;
    static glPointParameterfvEXT(paramarg0: number, paramarg1: FloatBuffer): void;
    static nglPointParameterfvEXT(paramarg0: number, paramarg1: number): void;
    constructor()
}