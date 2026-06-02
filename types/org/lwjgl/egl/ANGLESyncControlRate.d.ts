import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ANGLESyncControlRate extends Object {
    static eglGetMscRateANGLE(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: number[]): boolean;
    static eglGetMscRateANGLE(paramarg0: number, paramarg1: number, paramarg2: IntBuffer, paramarg3: IntBuffer): boolean;
    static neglGetMscRateANGLE(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    constructor()
}