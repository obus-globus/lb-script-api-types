import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NVVertexAttribInteger64bit extends Object {
    static GL_INT64_NV: number;
    static GL_UNSIGNED_INT64_NV: number;
    static glGetVertexAttribLi64NV(paramarg0: number, paramarg1: number): number;
    static glGetVertexAttribLi64vNV(paramarg0: number, paramarg1: number, paramarg2: LongBuffer): void;
    static glGetVertexAttribLi64vNV(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetVertexAttribLui64NV(paramarg0: number, paramarg1: number): number;
    static glGetVertexAttribLui64vNV(paramarg0: number, paramarg1: number, paramarg2: LongBuffer): void;
    static glGetVertexAttribLui64vNV(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glVertexAttribL1i64NV(paramarg0: number, paramarg1: number): void;
    static glVertexAttribL1i64vNV(paramarg0: number, paramarg1: LongBuffer): void;
    static glVertexAttribL1i64vNV(paramarg0: number, paramarg1: number[]): void;
    static glVertexAttribL1ui64NV(paramarg0: number, paramarg1: number): void;
    static glVertexAttribL1ui64vNV(paramarg0: number, paramarg1: LongBuffer): void;
    static glVertexAttribL1ui64vNV(paramarg0: number, paramarg1: number[]): void;
    static glVertexAttribL2i64NV(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glVertexAttribL2i64vNV(paramarg0: number, paramarg1: LongBuffer): void;
    static glVertexAttribL2i64vNV(paramarg0: number, paramarg1: number[]): void;
    static glVertexAttribL2ui64NV(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glVertexAttribL2ui64vNV(paramarg0: number, paramarg1: LongBuffer): void;
    static glVertexAttribL2ui64vNV(paramarg0: number, paramarg1: number[]): void;
    static glVertexAttribL3i64NV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static glVertexAttribL3i64vNV(paramarg0: number, paramarg1: LongBuffer): void;
    static glVertexAttribL3i64vNV(paramarg0: number, paramarg1: number[]): void;
    static glVertexAttribL3ui64NV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static glVertexAttribL3ui64vNV(paramarg0: number, paramarg1: LongBuffer): void;
    static glVertexAttribL3ui64vNV(paramarg0: number, paramarg1: number[]): void;
    static glVertexAttribL4i64NV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static glVertexAttribL4i64vNV(paramarg0: number, paramarg1: LongBuffer): void;
    static glVertexAttribL4i64vNV(paramarg0: number, paramarg1: number[]): void;
    static glVertexAttribL4ui64NV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static glVertexAttribL4ui64vNV(paramarg0: number, paramarg1: LongBuffer): void;
    static glVertexAttribL4ui64vNV(paramarg0: number, paramarg1: number[]): void;
    static glVertexAttribLFormatNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglGetVertexAttribLi64vNV(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglGetVertexAttribLui64vNV(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglVertexAttribL1i64vNV(paramarg0: number, paramarg1: number): void;
    static nglVertexAttribL1ui64vNV(paramarg0: number, paramarg1: number): void;
    static nglVertexAttribL2i64vNV(paramarg0: number, paramarg1: number): void;
    static nglVertexAttribL2ui64vNV(paramarg0: number, paramarg1: number): void;
    static nglVertexAttribL3i64vNV(paramarg0: number, paramarg1: number): void;
    static nglVertexAttribL3ui64vNV(paramarg0: number, paramarg1: number): void;
    static nglVertexAttribL4i64vNV(paramarg0: number, paramarg1: number): void;
    static nglVertexAttribL4ui64vNV(paramarg0: number, paramarg1: number): void;
    constructor()
}