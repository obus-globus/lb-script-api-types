import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class KHRSwapBuffersWithDamage extends Object {
    static eglSwapBuffersWithDamageKHR(paramarg0: number, paramarg1: number, paramarg2: number[]): boolean;
    static eglSwapBuffersWithDamageKHR(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): boolean;
    static neglSwapBuffersWithDamageKHR(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    constructor()
}