import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class KHRPartialUpdate extends Object {
    static EGL_BUFFER_AGE_KHR: number;
    static eglSetDamageRegionKHR(paramarg0: number, paramarg1: number, paramarg2: number[]): boolean;
    static eglSetDamageRegionKHR(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): boolean;
    static neglSetDamageRegionKHR(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    constructor()
}