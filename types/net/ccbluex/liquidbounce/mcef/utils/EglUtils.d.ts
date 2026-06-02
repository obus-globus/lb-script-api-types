import type { IntBuffer } from '../../../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EGLCapabilities } from '../../../../../org/lwjgl/egl/EGLCapabilities.d.ts'
export class EglUtils extends Object {
    static eglCreateImageKHR(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: IntBuffer): number;
    static getCapabilities(): EGLCapabilities;
    static getDisplay(): number;
    constructor()
}