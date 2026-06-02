import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { DoubleBuffer } from '../../../java/nio/DoubleBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBVertexAttrib64Bit extends Object {
    static GL_DOUBLE_MAT2: number;
    static GL_DOUBLE_MAT2x3: number;
    static GL_DOUBLE_MAT2x4: number;
    static GL_DOUBLE_MAT3: number;
    static GL_DOUBLE_MAT3x2: number;
    static GL_DOUBLE_MAT3x4: number;
    static GL_DOUBLE_MAT4: number;
    static GL_DOUBLE_MAT4x2: number;
    static GL_DOUBLE_MAT4x3: number;
    static GL_DOUBLE_VEC2: number;
    static GL_DOUBLE_VEC3: number;
    static GL_DOUBLE_VEC4: number;
    static glGetVertexAttribLdv(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetVertexAttribLdv(paramarg0: number, paramarg1: number, paramarg2: DoubleBuffer): void;
    static glVertexArrayVertexAttribLOffsetEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    static glVertexAttribL1d(paramarg0: number, paramarg1: number): void;
    static glVertexAttribL1dv(paramarg0: number, paramarg1: number[]): void;
    static glVertexAttribL1dv(paramarg0: number, paramarg1: DoubleBuffer): void;
    static glVertexAttribL2d(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glVertexAttribL2dv(paramarg0: number, paramarg1: number[]): void;
    static glVertexAttribL2dv(paramarg0: number, paramarg1: DoubleBuffer): void;
    static glVertexAttribL3d(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static glVertexAttribL3dv(paramarg0: number, paramarg1: number[]): void;
    static glVertexAttribL3dv(paramarg0: number, paramarg1: DoubleBuffer): void;
    static glVertexAttribL4d(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static glVertexAttribL4dv(paramarg0: number, paramarg1: number[]): void;
    static glVertexAttribL4dv(paramarg0: number, paramarg1: DoubleBuffer): void;
    static glVertexAttribLPointer(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: ByteBuffer): void;
    static glVertexAttribLPointer(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static glVertexAttribLPointer(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: DoubleBuffer): void;
    static nglGetVertexAttribLdv(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglVertexAttribL1dv(paramarg0: number, paramarg1: number): void;
    static nglVertexAttribL2dv(paramarg0: number, paramarg1: number): void;
    static nglVertexAttribL3dv(paramarg0: number, paramarg1: number): void;
    static nglVertexAttribL4dv(paramarg0: number, paramarg1: number): void;
    static nglVertexAttribLPointer(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    constructor()
}