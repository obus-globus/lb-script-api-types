import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBPointParameters extends Object {
    static GL_POINT_DISTANCE_ATTENUATION_ARB: number;
    static GL_POINT_FADE_THRESHOLD_SIZE_ARB: number;
    static GL_POINT_SIZE_MAX_ARB: number;
    static GL_POINT_SIZE_MIN_ARB: number;
    static glPointParameterfARB(paramarg0: number, paramarg1: number): void;
    static glPointParameterfvARB(paramarg0: number, paramarg1: number[]): void;
    static glPointParameterfvARB(paramarg0: number, paramarg1: FloatBuffer): void;
    static nglPointParameterfvARB(paramarg0: number, paramarg1: number): void;
    constructor()
}