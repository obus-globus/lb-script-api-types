import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBMapBufferRange extends Object {
    static GL_MAP_FLUSH_EXPLICIT_BIT: number;
    static GL_MAP_INVALIDATE_BUFFER_BIT: number;
    static GL_MAP_INVALIDATE_RANGE_BIT: number;
    static GL_MAP_READ_BIT: number;
    static GL_MAP_UNSYNCHRONIZED_BIT: number;
    static GL_MAP_WRITE_BIT: number;
    static glFlushMappedBufferRange(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glMapBufferRange(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): ByteBuffer;
    static glMapBufferRange(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: ByteBuffer): ByteBuffer;
    static nglMapBufferRange(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    constructor()
}