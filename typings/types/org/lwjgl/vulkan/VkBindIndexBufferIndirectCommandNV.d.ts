import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkBindIndexBufferIndirectCommandNV extends Struct<VkBindIndexBufferIndirectCommandNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BUFFERADDRESS: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static INDEXTYPE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZE: number;
    static SIZEOF: number;
    static calloc(): VkBindIndexBufferIndirectCommandNV;
    static calloc(paramarg0: MemoryStack): VkBindIndexBufferIndirectCommandNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkBindIndexBufferIndirectCommandNV;
    static create(paramarg0: number): VkBindIndexBufferIndirectCommandNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkBindIndexBufferIndirectCommandNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkBindIndexBufferIndirectCommandNV;
    static malloc(paramarg0: MemoryStack): VkBindIndexBufferIndirectCommandNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbufferAddress(paramarg0: number): number;
    static nbufferAddress(paramarg0: number, paramarg1: number): void;
    static nindexType(paramarg0: number): number;
    static nindexType(paramarg0: number, paramarg1: number): void;
    static nsize(paramarg0: number): number;
    static nsize(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    bufferAddress(): number;
    bufferAddress(arg0: number): VkBindIndexBufferIndirectCommandNV;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkBindIndexBufferIndirectCommandNV;
    indexType(): number;
    indexType(arg0: number): VkBindIndexBufferIndirectCommandNV;
    set(arg0: number, arg1: number, arg2: number): VkBindIndexBufferIndirectCommandNV;
    set(arg0: VkBindIndexBufferIndirectCommandNV): VkBindIndexBufferIndirectCommandNV;
    size(): number;
    size(arg0: number): VkBindIndexBufferIndirectCommandNV;
    sizeof(): number;
}