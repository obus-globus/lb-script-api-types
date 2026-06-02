import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class GLXARBCreateContext extends Object {
    static GLX_CONTEXT_DEBUG_BIT_ARB: number;
    static GLX_CONTEXT_FLAGS_ARB: number;
    static GLX_CONTEXT_FORWARD_COMPATIBLE_BIT_ARB: number;
    static GLX_CONTEXT_MAJOR_VERSION_ARB: number;
    static GLX_CONTEXT_MINOR_VERSION_ARB: number;
    static glXCreateContextAttribsARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: boolean, paramarg4: number[]): number;
    static glXCreateContextAttribsARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: boolean, paramarg4: IntBuffer): number;
    static nglXCreateContextAttribsARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    constructor()
}