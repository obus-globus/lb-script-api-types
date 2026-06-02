import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NVSync extends Object {
    static EGL_ALREADY_SIGNALED_NV: number;
    static EGL_CONDITION_SATISFIED_NV: number;
    static EGL_FOREVER_NV: number;
    static EGL_NO_SYNC_NV: number;
    static EGL_SIGNALED_NV: number;
    static EGL_SYNC_CONDITION_NV: number;
    static EGL_SYNC_FENCE_NV: number;
    static EGL_SYNC_FLUSH_COMMANDS_BIT_NV: number;
    static EGL_SYNC_PRIOR_COMMANDS_COMPLETE_NV: number;
    static EGL_SYNC_STATUS_NV: number;
    static EGL_SYNC_TYPE_NV: number;
    static EGL_TIMEOUT_EXPIRED_NV: number;
    static EGL_UNSIGNALED_NV: number;
    static eglClientWaitSyncNV(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static eglCreateFenceSyncNV(paramarg0: number, paramarg1: number, paramarg2: number[]): number;
    static eglCreateFenceSyncNV(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): number;
    static eglDestroySyncNV(paramarg0: number): boolean;
    static eglFenceNV(paramarg0: number): boolean;
    static eglGetSyncAttribNV(paramarg0: number, paramarg1: number, paramarg2: number[]): boolean;
    static eglGetSyncAttribNV(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): boolean;
    static eglSignalSyncNV(paramarg0: number, paramarg1: number): boolean;
    static neglCreateFenceSyncNV(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static neglGetSyncAttribNV(paramarg0: number, paramarg1: number, paramarg2: number): number;
    constructor()
}