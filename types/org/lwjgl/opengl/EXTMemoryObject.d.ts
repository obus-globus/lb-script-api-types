import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class EXTMemoryObject extends Object {
    static GL_DEDICATED_MEMORY_OBJECT_EXT: number;
    static GL_DEVICE_UUID_EXT: number;
    static GL_DRIVER_UUID_EXT: number;
    static GL_LINEAR_TILING_EXT: number;
    static GL_NUM_DEVICE_UUIDS_EXT: number;
    static GL_NUM_TILING_TYPES_EXT: number;
    static GL_OPTIMAL_TILING_EXT: number;
    static GL_TEXTURE_TILING_EXT: number;
    static GL_TILING_TYPES_EXT: number;
    static GL_UUID_SIZE_EXT: number;
    static glBufferStorageMemEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static glCreateMemoryObjectsEXT(): number;
    static glCreateMemoryObjectsEXT(paramarg0: number[]): void;
    static glCreateMemoryObjectsEXT(paramarg0: IntBuffer): void;
    static glDeleteMemoryObjectsEXT(paramarg0: number): void;
    static glDeleteMemoryObjectsEXT(paramarg0: number[]): void;
    static glDeleteMemoryObjectsEXT(paramarg0: IntBuffer): void;
    static glGetMemoryObjectParameteriEXT(paramarg0: number, paramarg1: number): number;
    static glGetMemoryObjectParameterivEXT(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetMemoryObjectParameterivEXT(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static glGetUnsignedBytei_vEXT(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer): void;
    static glGetUnsignedBytevEXT(paramarg0: number, paramarg1: ByteBuffer): void;
    static glIsMemoryObjectEXT(paramarg0: number): boolean;
    static glMemoryObjectParameteriEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glMemoryObjectParameterivEXT(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glMemoryObjectParameterivEXT(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static glNamedBufferStorageMemEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static glTexStorageMem1DEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static glTexStorageMem2DEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    static glTexStorageMem2DMultisampleEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: boolean, paramarg6: number, paramarg7: number): void;
    static glTexStorageMem3DEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number): void;
    static glTexStorageMem3DMultisampleEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: boolean, paramarg7: number, paramarg8: number): void;
    static glTextureStorageMem1DEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static glTextureStorageMem2DEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    static glTextureStorageMem2DMultisampleEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: boolean, paramarg6: number, paramarg7: number): void;
    static glTextureStorageMem3DEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number): void;
    static glTextureStorageMem3DMultisampleEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: boolean, paramarg7: number, paramarg8: number): void;
    static nglCreateMemoryObjectsEXT(paramarg0: number, paramarg1: number): void;
    static nglDeleteMemoryObjectsEXT(paramarg0: number, paramarg1: number): void;
    static nglGetMemoryObjectParameterivEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglGetUnsignedBytei_vEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglGetUnsignedBytevEXT(paramarg0: number, paramarg1: number): void;
    static nglMemoryObjectParameterivEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    constructor()
}