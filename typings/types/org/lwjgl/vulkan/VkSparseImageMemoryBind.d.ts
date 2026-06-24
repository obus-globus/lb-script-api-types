import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExtent3D } from '../../../org/lwjgl/vulkan/VkExtent3D.d.ts'
import type { VkImageSubresource } from '../../../org/lwjgl/vulkan/VkImageSubresource.d.ts'
import type { VkOffset3D } from '../../../org/lwjgl/vulkan/VkOffset3D.d.ts'
export class VkSparseImageMemoryBind extends Struct<VkSparseImageMemoryBind> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static EXTENT: number;
    static FLAGS: number;
    static MEMORY: number;
    static MEMORYOFFSET: number;
    static OFFSET: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SUBRESOURCE: number;
    static calloc(): VkSparseImageMemoryBind;
    static calloc(paramarg0: MemoryStack): VkSparseImageMemoryBind;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSparseImageMemoryBind;
    static create(paramarg0: number): VkSparseImageMemoryBind;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSparseImageMemoryBind;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSparseImageMemoryBind;
    static malloc(paramarg0: MemoryStack): VkSparseImageMemoryBind;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nextent(paramarg0: number): VkExtent3D;
    static nextent(paramarg0: number, paramarg1: VkExtent3D): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nmemory(paramarg0: number): number;
    static nmemory(paramarg0: number, paramarg1: number): void;
    static nmemoryOffset(paramarg0: number): number;
    static nmemoryOffset(paramarg0: number, paramarg1: number): void;
    static noffset(paramarg0: number): VkOffset3D;
    static noffset(paramarg0: number, paramarg1: VkOffset3D): void;
    static nsubresource(paramarg0: number): VkImageSubresource;
    static nsubresource(paramarg0: number, paramarg1: VkImageSubresource): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkSparseImageMemoryBind;
    extent(): VkExtent3D;
    extent(arg0: (param0: VkExtent3D) => void): VkSparseImageMemoryBind;
    extent(arg0: VkExtent3D): VkSparseImageMemoryBind;
    flags(): number;
    flags(arg0: number): VkSparseImageMemoryBind;
    memory(): number;
    memory(arg0: number): VkSparseImageMemoryBind;
    memoryOffset(): number;
    memoryOffset(arg0: number): VkSparseImageMemoryBind;
    offset(): VkOffset3D;
    offset(arg0: (param0: VkOffset3D) => void): VkSparseImageMemoryBind;
    offset(arg0: VkOffset3D): VkSparseImageMemoryBind;
    set(arg0: VkImageSubresource, arg1: VkOffset3D, arg2: VkExtent3D, arg3: number, arg4: number, arg5: number): VkSparseImageMemoryBind;
    set(arg0: VkSparseImageMemoryBind): VkSparseImageMemoryBind;
    sizeof(): number;
    subresource(): VkImageSubresource;
    subresource(arg0: (param0: VkImageSubresource) => void): VkSparseImageMemoryBind;
    subresource(arg0: VkImageSubresource): VkSparseImageMemoryBind;
}