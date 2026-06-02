import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class KHRReusableSync extends Object {
    static EGL_CONDITION_SATISFIED_KHR: number;
    static EGL_FOREVER_KHR: number;
    static EGL_NO_SYNC_KHR: number;
    static EGL_SIGNALED_KHR: number;
    static EGL_SYNC_FLUSH_COMMANDS_BIT_KHR: number;
    static EGL_SYNC_REUSABLE_KHR: number;
    static EGL_SYNC_STATUS_KHR: number;
    static EGL_SYNC_TYPE_KHR: number;
    static EGL_TIMEOUT_EXPIRED_KHR: number;
    static EGL_UNSIGNALED_KHR: number;
    static eglClientWaitSyncKHR(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static eglCreateSyncKHR(paramarg0: number, paramarg1: number, paramarg2: number[]): number;
    static eglCreateSyncKHR(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): number;
    static eglDestroySyncKHR(paramarg0: number, paramarg1: number): boolean;
    static eglGetSyncAttribKHR(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): boolean;
    static eglGetSyncAttribKHR(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer): boolean;
    static eglSignalSyncKHR(paramarg0: number, paramarg1: number, paramarg2: number): boolean;
    static neglCreateSyncKHR(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static neglGetSyncAttribKHR(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    constructor()
}