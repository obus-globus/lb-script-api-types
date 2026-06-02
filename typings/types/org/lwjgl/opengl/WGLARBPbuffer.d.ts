import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class WGLARBPbuffer extends Object {
    static WGL_DRAW_TO_PBUFFER_ARB: number;
    static WGL_MAX_PBUFFER_HEIGHT_ARB: number;
    static WGL_MAX_PBUFFER_PIXELS_ARB: number;
    static WGL_MAX_PBUFFER_WIDTH_ARB: number;
    static WGL_PBUFFER_HEIGHT_ARB: number;
    static WGL_PBUFFER_LARGEST_ARB: number;
    static WGL_PBUFFER_LOST_ARB: number;
    static WGL_PBUFFER_WIDTH_ARB: number;
    static nwglCreatePbufferARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static nwglQueryPbufferARB(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static wglCreatePbufferARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number[]): number;
    static wglCreatePbufferARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: IntBuffer): number;
    static wglDestroyPbufferARB(paramarg0: number): boolean;
    static wglGetPbufferDCARB(paramarg0: number): number;
    static wglQueryPbufferARB(paramarg0: number, paramarg1: number, paramarg2: number[]): boolean;
    static wglQueryPbufferARB(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): boolean;
    static wglReleasePbufferDCARB(paramarg0: number, paramarg1: number): number;
    constructor()
}