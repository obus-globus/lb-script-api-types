import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
export class EXTClientSync extends Object {
    static EGL_SYNC_CLIENT_EXT: number;
    static EGL_SYNC_CLIENT_SIGNAL_EXT: number;
    static eglClientSignalSyncEXT(paramarg0: number, paramarg1: number, paramarg2: PointerBuffer): boolean;
    static neglClientSignalSyncEXT(paramarg0: number, paramarg1: number, paramarg2: number): number;
    constructor()
}