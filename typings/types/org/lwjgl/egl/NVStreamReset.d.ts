import type { Object } from '../../../java/lang/Object.d.ts'
export class NVStreamReset extends Object {
    static EGL_SUPPORT_RESET_NV: number;
    static EGL_SUPPORT_REUSE_NV: number;
    static eglResetStreamNV(paramarg0: number, paramarg1: number): boolean;
    constructor()
}