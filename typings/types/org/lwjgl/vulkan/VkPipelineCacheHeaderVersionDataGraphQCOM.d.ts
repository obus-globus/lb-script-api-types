import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPipelineCacheHeaderVersionDataGraphQCOM extends Struct<VkPipelineCacheHeaderVersionDataGraphQCOM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CACHETYPE: number;
    static CACHEVERSION: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static HEADERSIZE: number;
    static HEADERVERSION: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static TOOLCHAINVERSION: number;
    static calloc(): VkPipelineCacheHeaderVersionDataGraphQCOM;
    static calloc(paramarg0: MemoryStack): VkPipelineCacheHeaderVersionDataGraphQCOM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPipelineCacheHeaderVersionDataGraphQCOM;
    static create(paramarg0: number): VkPipelineCacheHeaderVersionDataGraphQCOM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineCacheHeaderVersionDataGraphQCOM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPipelineCacheHeaderVersionDataGraphQCOM;
    static malloc(paramarg0: MemoryStack): VkPipelineCacheHeaderVersionDataGraphQCOM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncacheType(paramarg0: number): number;
    static ncacheType(paramarg0: number, paramarg1: number): void;
    static ncacheVersion(paramarg0: number): number;
    static ncacheVersion(paramarg0: number, paramarg1: number): void;
    static nheaderSize(paramarg0: number): number;
    static nheaderSize(paramarg0: number, paramarg1: number): void;
    static nheaderVersion(paramarg0: number): number;
    static nheaderVersion(paramarg0: number, paramarg1: number): void;
    static ntoolchainVersion(paramarg0: number, paramarg1: number): number;
    static ntoolchainVersion(paramarg0: number): IntBuffer;
    static ntoolchainVersion(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static ntoolchainVersion(paramarg0: number, paramarg1: IntBuffer): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    cacheType(): number;
    cacheType(arg0: number): VkPipelineCacheHeaderVersionDataGraphQCOM;
    cacheVersion(): number;
    cacheVersion(arg0: number): VkPipelineCacheHeaderVersionDataGraphQCOM;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPipelineCacheHeaderVersionDataGraphQCOM;
    headerSize(): number;
    headerSize(arg0: number): VkPipelineCacheHeaderVersionDataGraphQCOM;
    headerVersion(): number;
    headerVersion(arg0: number): VkPipelineCacheHeaderVersionDataGraphQCOM;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: IntBuffer): VkPipelineCacheHeaderVersionDataGraphQCOM;
    set(arg0: VkPipelineCacheHeaderVersionDataGraphQCOM): VkPipelineCacheHeaderVersionDataGraphQCOM;
    sizeof(): number;
    toolchainVersion(): IntBuffer;
    toolchainVersion(arg0: IntBuffer): VkPipelineCacheHeaderVersionDataGraphQCOM;
    toolchainVersion(arg0: number): number;
    toolchainVersion(arg0: number, arg1: number): VkPipelineCacheHeaderVersionDataGraphQCOM;
}