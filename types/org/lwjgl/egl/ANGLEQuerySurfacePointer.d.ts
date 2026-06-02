import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
export class ANGLEQuerySurfacePointer extends Object {
    static eglQuerySurfacePointerANGLE(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: PointerBuffer): boolean;
    static neglQuerySurfacePointerANGLE(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    constructor()
}