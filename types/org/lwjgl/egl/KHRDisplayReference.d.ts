import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
export class KHRDisplayReference extends Object {
    static EGL_TRACK_REFERENCES_KHR: number;
    static eglQueryDisplayAttribKHR(paramarg0: number, paramarg1: number, paramarg2: PointerBuffer): boolean;
    static neglQueryDisplayAttribKHR(paramarg0: number, paramarg1: number, paramarg2: number): number;
    constructor()
}