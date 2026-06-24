import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkSparseMemoryBind extends Struct<VkSparseMemoryBind> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static MEMORY: number;
    static MEMORYOFFSET: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RESOURCEOFFSET: number;
    static SIZE: number;
    static SIZEOF: number;
    static calloc(): VkSparseMemoryBind;
    static calloc(paramarg0: MemoryStack): VkSparseMemoryBind;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSparseMemoryBind;
    static create(paramarg0: number): VkSparseMemoryBind;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSparseMemoryBind;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSparseMemoryBind;
    static malloc(paramarg0: MemoryStack): VkSparseMemoryBind;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nmemory(paramarg0: number): number;
    static nmemory(paramarg0: number, paramarg1: number): void;
    static nmemoryOffset(paramarg0: number): number;
    static nmemoryOffset(paramarg0: number, paramarg1: number): void;
    static nresourceOffset(paramarg0: number): number;
    static nresourceOffset(paramarg0: number, paramarg1: number): void;
    static nsize(paramarg0: number): number;
    static nsize(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkSparseMemoryBind;
    flags(): number;
    flags(arg0: number): VkSparseMemoryBind;
    memory(): number;
    memory(arg0: number): VkSparseMemoryBind;
    memoryOffset(): number;
    memoryOffset(arg0: number): VkSparseMemoryBind;
    resourceOffset(): number;
    resourceOffset(arg0: number): VkSparseMemoryBind;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): VkSparseMemoryBind;
    set(arg0: VkSparseMemoryBind): VkSparseMemoryBind;
    size(): number;
    size(arg0: number): VkSparseMemoryBind;
    sizeof(): number;
}