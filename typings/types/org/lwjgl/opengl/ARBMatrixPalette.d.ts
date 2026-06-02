import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { ShortBuffer } from '../../../java/nio/ShortBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBMatrixPalette extends Object {
    static GL_CURRENT_MATRIX_INDEX_ARB: number;
    static GL_CURRENT_PALETTE_MATRIX_ARB: number;
    static GL_MATRIX_INDEX_ARRAY_ARB: number;
    static GL_MATRIX_INDEX_ARRAY_POINTER_ARB: number;
    static GL_MATRIX_INDEX_ARRAY_SIZE_ARB: number;
    static GL_MATRIX_INDEX_ARRAY_STRIDE_ARB: number;
    static GL_MATRIX_INDEX_ARRAY_TYPE_ARB: number;
    static GL_MATRIX_PALETTE_ARB: number;
    static GL_MAX_MATRIX_PALETTE_STACK_DEPTH_ARB: number;
    static GL_MAX_PALETTE_MATRICES_ARB: number;
    static glCurrentPaletteMatrixARB(paramarg0: number): void;
    static glMatrixIndexPointerARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: ByteBuffer): void;
    static glMatrixIndexPointerARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static glMatrixIndexPointerARB(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer): void;
    static glMatrixIndexPointerARB(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static glMatrixIndexPointerARB(paramarg0: number, paramarg1: number, paramarg2: ShortBuffer): void;
    static glMatrixIndexubvARB(paramarg0: ByteBuffer): void;
    static glMatrixIndexuivARB(paramarg0: number[]): void;
    static glMatrixIndexuivARB(paramarg0: IntBuffer): void;
    static glMatrixIndexusvARB(paramarg0: ShortBuffer): void;
    static glMatrixIndexusvARB(paramarg0: number[]): void;
    static nglMatrixIndexPointerARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglMatrixIndexubvARB(paramarg0: number, paramarg1: number): void;
    static nglMatrixIndexuivARB(paramarg0: number, paramarg1: number): void;
    static nglMatrixIndexusvARB(paramarg0: number, paramarg1: number): void;
    constructor()
}