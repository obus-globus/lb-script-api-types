import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { DoubleBuffer } from '../../../java/nio/DoubleBuffer.d.ts'
import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { ShortBuffer } from '../../../java/nio/ShortBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class EXTSecondaryColor extends Object {
    static GL_COLOR_SUM_EXT: number;
    static GL_CURRENT_SECONDARY_COLOR_EXT: number;
    static GL_SECONDARY_COLOR_ARRAY_EXT: number;
    static GL_SECONDARY_COLOR_ARRAY_POINTER_EXT: number;
    static GL_SECONDARY_COLOR_ARRAY_SIZE_EXT: number;
    static GL_SECONDARY_COLOR_ARRAY_STRIDE_EXT: number;
    static GL_SECONDARY_COLOR_ARRAY_TYPE_EXT: number;
    static glSecondaryColor3bEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glSecondaryColor3bvEXT(paramarg0: ByteBuffer): void;
    static glSecondaryColor3dEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glSecondaryColor3dvEXT(paramarg0: number[]): void;
    static glSecondaryColor3dvEXT(paramarg0: DoubleBuffer): void;
    static glSecondaryColor3fEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glSecondaryColor3fvEXT(paramarg0: number[]): void;
    static glSecondaryColor3fvEXT(paramarg0: FloatBuffer): void;
    static glSecondaryColor3iEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glSecondaryColor3ivEXT(paramarg0: number[]): void;
    static glSecondaryColor3ivEXT(paramarg0: IntBuffer): void;
    static glSecondaryColor3sEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glSecondaryColor3svEXT(paramarg0: ShortBuffer): void;
    static glSecondaryColor3svEXT(paramarg0: number[]): void;
    static glSecondaryColor3ubEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glSecondaryColor3ubvEXT(paramarg0: ByteBuffer): void;
    static glSecondaryColor3uiEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glSecondaryColor3uivEXT(paramarg0: number[]): void;
    static glSecondaryColor3uivEXT(paramarg0: IntBuffer): void;
    static glSecondaryColor3usEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glSecondaryColor3usvEXT(paramarg0: ShortBuffer): void;
    static glSecondaryColor3usvEXT(paramarg0: number[]): void;
    static glSecondaryColorPointerEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static glSecondaryColorPointerEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static glSecondaryColorPointerEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: ByteBuffer): void;
    static glSecondaryColorPointerEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: FloatBuffer): void;
    static glSecondaryColorPointerEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer): void;
    static glSecondaryColorPointerEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: ShortBuffer): void;
    static glSecondaryColorPointerEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static glSecondaryColorPointerEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static nglSecondaryColor3bvEXT(paramarg0: number): void;
    static nglSecondaryColor3dvEXT(paramarg0: number): void;
    static nglSecondaryColor3fvEXT(paramarg0: number): void;
    static nglSecondaryColor3ivEXT(paramarg0: number): void;
    static nglSecondaryColor3svEXT(paramarg0: number): void;
    static nglSecondaryColor3ubvEXT(paramarg0: number): void;
    static nglSecondaryColor3uivEXT(paramarg0: number): void;
    static nglSecondaryColor3usvEXT(paramarg0: number): void;
    static nglSecondaryColorPointerEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    constructor()
}