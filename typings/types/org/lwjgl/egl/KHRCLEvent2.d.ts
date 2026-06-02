import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
export class KHRCLEvent2 extends Object {
    static EGL_CL_EVENT_HANDLE_KHR: number;
    static EGL_SYNC_CL_EVENT_COMPLETE_KHR: number;
    static EGL_SYNC_CL_EVENT_KHR: number;
    static eglCreateSync64KHR(paramarg0: number, paramarg1: number, paramarg2: PointerBuffer): number;
    static neglCreateSync64KHR(paramarg0: number, paramarg1: number, paramarg2: number): number;
    constructor()
}