import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NVStreamSync extends Object {
    static EGL_SYNC_NEW_FRAME_NV: number;
    static EGL_SYNC_TYPE_KHR: number;
    static eglCreateStreamSyncNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): number;
    static eglCreateStreamSyncNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer): number;
    static neglCreateStreamSyncNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    constructor()
}