import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NVVertexArrayRange extends Object {
    static GL_MAX_VERTEX_ARRAY_RANGE_ELEMENT_NV: number;
    static GL_VERTEX_ARRAY_RANGE_LENGTH_NV: number;
    static GL_VERTEX_ARRAY_RANGE_NV: number;
    static GL_VERTEX_ARRAY_RANGE_POINTER_NV: number;
    static GL_VERTEX_ARRAY_RANGE_VALID_NV: number;
    static glFlushVertexArrayRangeNV(): void;
    static glVertexArrayRangeNV(paramarg0: ByteBuffer): void;
    static nglVertexArrayRangeNV(paramarg0: number, paramarg1: number): void;
    constructor()
}