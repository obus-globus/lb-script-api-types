import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class KHRStreamProducerEGLSurface extends Object {
    static EGL_STREAM_BIT_KHR: number;
    static eglCreateStreamProducerSurfaceKHR(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): number;
    static eglCreateStreamProducerSurfaceKHR(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer): number;
    static neglCreateStreamProducerSurfaceKHR(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    constructor()
}