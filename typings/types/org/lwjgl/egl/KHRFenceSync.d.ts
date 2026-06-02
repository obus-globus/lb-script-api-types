import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class KHRFenceSync extends Object {
    static EGL_SYNC_CONDITION_KHR: number;
    static EGL_SYNC_FENCE_KHR: number;
    static EGL_SYNC_PRIOR_COMMANDS_COMPLETE_KHR: number;
    static eglClientWaitSyncKHR(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static eglCreateSyncKHR(paramarg0: number, paramarg1: number, paramarg2: number[]): number;
    static eglCreateSyncKHR(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): number;
    static eglDestroySyncKHR(paramarg0: number, paramarg1: number): boolean;
    static eglGetSyncAttribKHR(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): boolean;
    static eglGetSyncAttribKHR(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer): boolean;
    static neglCreateSyncKHR(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static neglGetSyncAttribKHR(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    constructor()
}