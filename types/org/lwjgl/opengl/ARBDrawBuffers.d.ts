import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBDrawBuffers extends Object {
    static GL_DRAW_BUFFER0_ARB: number;
    static GL_DRAW_BUFFER10_ARB: number;
    static GL_DRAW_BUFFER11_ARB: number;
    static GL_DRAW_BUFFER12_ARB: number;
    static GL_DRAW_BUFFER13_ARB: number;
    static GL_DRAW_BUFFER14_ARB: number;
    static GL_DRAW_BUFFER15_ARB: number;
    static GL_DRAW_BUFFER1_ARB: number;
    static GL_DRAW_BUFFER2_ARB: number;
    static GL_DRAW_BUFFER3_ARB: number;
    static GL_DRAW_BUFFER4_ARB: number;
    static GL_DRAW_BUFFER5_ARB: number;
    static GL_DRAW_BUFFER6_ARB: number;
    static GL_DRAW_BUFFER7_ARB: number;
    static GL_DRAW_BUFFER8_ARB: number;
    static GL_DRAW_BUFFER9_ARB: number;
    static GL_MAX_DRAW_BUFFERS_ARB: number;
    static glDrawBuffersARB(paramarg0: number[]): void;
    static glDrawBuffersARB(paramarg0: IntBuffer): void;
    static nglDrawBuffersARB(paramarg0: number, paramarg1: number): void;
    constructor()
}