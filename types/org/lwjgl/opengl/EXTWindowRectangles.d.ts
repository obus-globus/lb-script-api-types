import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class EXTWindowRectangles extends Object {
    static GL_EXCLUSIVE_EXT: number;
    static GL_INCLUSIVE_EXT: number;
    static GL_MAX_WINDOW_RECTANGLES_EXT: number;
    static GL_NUM_WINDOW_RECTANGLES_EXT: number;
    static GL_WINDOW_RECTANGLE_EXT: number;
    static GL_WINDOW_RECTANGLE_MODE_EXT: number;
    static glWindowRectanglesEXT(paramarg0: number, paramarg1: number[]): void;
    static glWindowRectanglesEXT(paramarg0: number, paramarg1: IntBuffer): void;
    static nglWindowRectanglesEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    constructor()
}