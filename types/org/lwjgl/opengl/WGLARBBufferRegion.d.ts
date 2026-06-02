import type { Object } from '../../../java/lang/Object.d.ts'
export class WGLARBBufferRegion extends Object {
    static WGL_BACK_COLOR_BUFFER_BIT_ARB: number;
    static WGL_DEPTH_BUFFER_BIT_ARB: number;
    static WGL_FRONT_COLOR_BUFFER_BIT_ARB: number;
    static WGL_STENCIL_BUFFER_BIT_ARB: number;
    static wglCreateBufferRegionARB(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static wglDeleteBufferRegionARB(paramarg0: number): void;
    static wglRestoreBufferRegionARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): boolean;
    static wglSaveBufferRegionARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): boolean;
    constructor()
}