import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class ARBBlendFuncExtended extends Object {
    static GL_MAX_DUAL_SOURCE_DRAW_BUFFERS: number;
    static GL_ONE_MINUS_SRC1_ALPHA: number;
    static GL_ONE_MINUS_SRC1_COLOR: number;
    static GL_SRC1_COLOR: number;
    static glBindFragDataLocationIndexed(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: CharSequence): void;
    static glBindFragDataLocationIndexed(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: ByteBuffer): void;
    static glGetFragDataIndex(paramarg0: number, paramarg1: CharSequence): number;
    static glGetFragDataIndex(paramarg0: number, paramarg1: ByteBuffer): number;
    static nglBindFragDataLocationIndexed(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglGetFragDataIndex(paramarg0: number, paramarg1: number): number;
    constructor()
}