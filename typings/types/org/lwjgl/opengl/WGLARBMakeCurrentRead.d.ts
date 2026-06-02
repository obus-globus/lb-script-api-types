import type { Object } from '../../../java/lang/Object.d.ts'
export class WGLARBMakeCurrentRead extends Object {
    static ERROR_INCOMPATIBLE_DEVICE_CONTEXTS_ARB: number;
    static ERROR_INVALID_PIXEL_TYPE_ARB: number;
    static wglGetCurrentReadDCARB(): number;
    static wglMakeContextCurrentARB(paramarg0: number, paramarg1: number, paramarg2: number): boolean;
    constructor()
}