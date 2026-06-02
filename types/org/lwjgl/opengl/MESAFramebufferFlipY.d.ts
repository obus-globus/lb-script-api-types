import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class MESAFramebufferFlipY extends Object {
    static GL_FRAMEBUFFER_FLIP_Y_MESA: number;
    static glFramebufferParameteriMESA(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glGetFramebufferParameterivMESA(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetFramebufferParameterivMESA(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static nglGetFramebufferParameterivMESA(paramarg0: number, paramarg1: number, paramarg2: number): void;
    constructor()
}