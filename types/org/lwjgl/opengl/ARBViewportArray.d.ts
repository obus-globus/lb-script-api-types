import type { DoubleBuffer } from '../../../java/nio/DoubleBuffer.d.ts'
import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBViewportArray extends Object {
    static GL_LAYER_PROVOKING_VERTEX: number;
    static GL_MAX_VIEWPORTS: number;
    static GL_UNDEFINED_VERTEX: number;
    static GL_VIEWPORT_BOUNDS_RANGE: number;
    static GL_VIEWPORT_INDEX_PROVOKING_VERTEX: number;
    static GL_VIEWPORT_SUBPIXEL_BITS: number;
    static glDepthRangeArrayv(paramarg0: number, paramarg1: number[]): void;
    static glDepthRangeArrayv(paramarg0: number, paramarg1: DoubleBuffer): void;
    static glDepthRangeIndexed(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glGetDoublei(paramarg0: number, paramarg1: number): number;
    static glGetDoublei_v(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetDoublei_v(paramarg0: number, paramarg1: number, paramarg2: DoubleBuffer): void;
    static glGetFloati(paramarg0: number, paramarg1: number): number;
    static glGetFloati_v(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetFloati_v(paramarg0: number, paramarg1: number, paramarg2: FloatBuffer): void;
    static glScissorArrayv(paramarg0: number, paramarg1: number[]): void;
    static glScissorArrayv(paramarg0: number, paramarg1: IntBuffer): void;
    static glScissorIndexed(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static glScissorIndexedv(paramarg0: number, paramarg1: number[]): void;
    static glScissorIndexedv(paramarg0: number, paramarg1: IntBuffer): void;
    static glViewportArrayv(paramarg0: number, paramarg1: number[]): void;
    static glViewportArrayv(paramarg0: number, paramarg1: FloatBuffer): void;
    static glViewportIndexedf(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static glViewportIndexedfv(paramarg0: number, paramarg1: number[]): void;
    static glViewportIndexedfv(paramarg0: number, paramarg1: FloatBuffer): void;
    static nglDepthRangeArrayv(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglGetDoublei_v(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglGetFloati_v(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglScissorArrayv(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglScissorIndexedv(paramarg0: number, paramarg1: number): void;
    static nglViewportArrayv(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglViewportIndexedfv(paramarg0: number, paramarg1: number): void;
    constructor()
}