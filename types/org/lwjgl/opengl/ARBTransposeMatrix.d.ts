import type { DoubleBuffer } from '../../../java/nio/DoubleBuffer.d.ts'
import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBTransposeMatrix extends Object {
    static GL_TRANSPOSE_COLOR_MATRIX_ARB: number;
    static GL_TRANSPOSE_MODELVIEW_MATRIX_ARB: number;
    static GL_TRANSPOSE_PROJECTION_MATRIX_ARB: number;
    static GL_TRANSPOSE_TEXTURE_MATRIX_ARB: number;
    static glLoadTransposeMatrixdARB(paramarg0: number[]): void;
    static glLoadTransposeMatrixdARB(paramarg0: DoubleBuffer): void;
    static glLoadTransposeMatrixfARB(paramarg0: number[]): void;
    static glLoadTransposeMatrixfARB(paramarg0: FloatBuffer): void;
    static glMultTransposeMatrixdARB(paramarg0: number[]): void;
    static glMultTransposeMatrixdARB(paramarg0: DoubleBuffer): void;
    static glMultTransposeMatrixfARB(paramarg0: number[]): void;
    static glMultTransposeMatrixfARB(paramarg0: FloatBuffer): void;
    static nglLoadTransposeMatrixdARB(paramarg0: number): void;
    static nglLoadTransposeMatrixfARB(paramarg0: number): void;
    static nglMultTransposeMatrixdARB(paramarg0: number): void;
    static nglMultTransposeMatrixfARB(paramarg0: number): void;
    constructor()
}