import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { DoubleBuffer } from '../../../java/nio/DoubleBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class EXTVertexAttrib64bit extends Object {
    static GL_DOUBLE_MAT2_EXT: number;
    static GL_DOUBLE_MAT2x3_EXT: number;
    static GL_DOUBLE_MAT2x4_EXT: number;
    static GL_DOUBLE_MAT3_EXT: number;
    static GL_DOUBLE_MAT3x2_EXT: number;
    static GL_DOUBLE_MAT3x4_EXT: number;
    static GL_DOUBLE_MAT4_EXT: number;
    static GL_DOUBLE_MAT4x2_EXT: number;
    static GL_DOUBLE_MAT4x3_EXT: number;
    static GL_DOUBLE_VEC2_EXT: number;
    static GL_DOUBLE_VEC3_EXT: number;
    static GL_DOUBLE_VEC4_EXT: number;
    static glGetVertexAttribLdvEXT(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetVertexAttribLdvEXT(paramarg0: number, paramarg1: number, paramarg2: DoubleBuffer): void;
    static glVertexArrayVertexAttribLOffsetEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    static glVertexAttribL1dEXT(paramarg0: number, paramarg1: number): void;
    static glVertexAttribL1dvEXT(paramarg0: number, paramarg1: number[]): void;
    static glVertexAttribL1dvEXT(paramarg0: number, paramarg1: DoubleBuffer): void;
    static glVertexAttribL2dEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glVertexAttribL2dvEXT(paramarg0: number, paramarg1: number[]): void;
    static glVertexAttribL2dvEXT(paramarg0: number, paramarg1: DoubleBuffer): void;
    static glVertexAttribL3dEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static glVertexAttribL3dvEXT(paramarg0: number, paramarg1: number[]): void;
    static glVertexAttribL3dvEXT(paramarg0: number, paramarg1: DoubleBuffer): void;
    static glVertexAttribL4dEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static glVertexAttribL4dvEXT(paramarg0: number, paramarg1: number[]): void;
    static glVertexAttribL4dvEXT(paramarg0: number, paramarg1: DoubleBuffer): void;
    static glVertexAttribLPointerEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: ByteBuffer): void;
    static glVertexAttribLPointerEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static glVertexAttribLPointerEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: DoubleBuffer): void;
    static nglGetVertexAttribLdvEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglVertexAttribL1dvEXT(paramarg0: number, paramarg1: number): void;
    static nglVertexAttribL2dvEXT(paramarg0: number, paramarg1: number): void;
    static nglVertexAttribL3dvEXT(paramarg0: number, paramarg1: number): void;
    static nglVertexAttribL4dvEXT(paramarg0: number, paramarg1: number): void;
    static nglVertexAttribLPointerEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    constructor()
}