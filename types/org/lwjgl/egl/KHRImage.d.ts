import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class KHRImage extends Object {
    static EGL_NATIVE_PIXMAP_KHR: number;
    static EGL_NO_IMAGE_KHR: number;
    static eglCreateImageKHR(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number[]): number;
    static eglCreateImageKHR(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: IntBuffer): number;
    static eglDestroyImageKHR(paramarg0: number, paramarg1: number): boolean;
    static neglCreateImageKHR(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    constructor()
}