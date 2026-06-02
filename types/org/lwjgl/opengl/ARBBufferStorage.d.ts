import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { DoubleBuffer } from '../../../java/nio/DoubleBuffer.d.ts'
import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { ShortBuffer } from '../../../java/nio/ShortBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBBufferStorage extends Object {
    static GL_BUFFER_IMMUTABLE_STORAGE: number;
    static GL_BUFFER_STORAGE_FLAGS: number;
    static GL_CLIENT_MAPPED_BUFFER_BARRIER_BIT: number;
    static GL_CLIENT_STORAGE_BIT: number;
    static GL_DYNAMIC_STORAGE_BIT: number;
    static GL_MAP_COHERENT_BIT: number;
    static GL_MAP_PERSISTENT_BIT: number;
    static glBufferStorage(paramarg0: number, paramarg1: number[], paramarg2: number): void;
    static glBufferStorage(paramarg0: number, paramarg1: number[], paramarg2: number): void;
    static glBufferStorage(paramarg0: number, paramarg1: number[], paramarg2: number): void;
    static glBufferStorage(paramarg0: number, paramarg1: ByteBuffer, paramarg2: number): void;
    static glBufferStorage(paramarg0: number, paramarg1: DoubleBuffer, paramarg2: number): void;
    static glBufferStorage(paramarg0: number, paramarg1: FloatBuffer, paramarg2: number): void;
    static glBufferStorage(paramarg0: number, paramarg1: IntBuffer, paramarg2: number): void;
    static glBufferStorage(paramarg0: number, paramarg1: ShortBuffer, paramarg2: number): void;
    static glBufferStorage(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glBufferStorage(paramarg0: number, paramarg1: number[], paramarg2: number): void;
    static glNamedBufferStorageEXT(paramarg0: number, paramarg1: number[], paramarg2: number): void;
    static glNamedBufferStorageEXT(paramarg0: number, paramarg1: number[], paramarg2: number): void;
    static glNamedBufferStorageEXT(paramarg0: number, paramarg1: number[], paramarg2: number): void;
    static glNamedBufferStorageEXT(paramarg0: number, paramarg1: ByteBuffer, paramarg2: number): void;
    static glNamedBufferStorageEXT(paramarg0: number, paramarg1: DoubleBuffer, paramarg2: number): void;
    static glNamedBufferStorageEXT(paramarg0: number, paramarg1: FloatBuffer, paramarg2: number): void;
    static glNamedBufferStorageEXT(paramarg0: number, paramarg1: IntBuffer, paramarg2: number): void;
    static glNamedBufferStorageEXT(paramarg0: number, paramarg1: ShortBuffer, paramarg2: number): void;
    static glNamedBufferStorageEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glNamedBufferStorageEXT(paramarg0: number, paramarg1: number[], paramarg2: number): void;
    static nglBufferStorage(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglNamedBufferStorageEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    constructor()
}