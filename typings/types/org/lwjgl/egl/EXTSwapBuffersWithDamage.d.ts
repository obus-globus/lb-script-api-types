import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class EXTSwapBuffersWithDamage extends Object {
    static eglSwapBuffersWithDamageEXT(paramarg0: number, paramarg1: number, paramarg2: number[]): boolean;
    static eglSwapBuffersWithDamageEXT(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): boolean;
    static neglSwapBuffersWithDamageEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    constructor()
}