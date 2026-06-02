import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class WGLARBCreateContext extends Object {
    static ERROR_INVALID_VERSION_ARB: number;
    static WGL_CONTEXT_DEBUG_BIT_ARB: number;
    static WGL_CONTEXT_FLAGS_ARB: number;
    static WGL_CONTEXT_FORWARD_COMPATIBLE_BIT_ARB: number;
    static WGL_CONTEXT_LAYER_PLANE_ARB: number;
    static WGL_CONTEXT_MAJOR_VERSION_ARB: number;
    static WGL_CONTEXT_MINOR_VERSION_ARB: number;
    static nwglCreateContextAttribsARB(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static wglCreateContextAttribsARB(paramarg0: number, paramarg1: number, paramarg2: number[]): number;
    static wglCreateContextAttribsARB(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): number;
    constructor()
}