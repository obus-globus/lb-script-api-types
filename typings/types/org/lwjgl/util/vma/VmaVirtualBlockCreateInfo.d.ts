import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkAllocationCallbacks } from '../../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
export class VmaVirtualBlockCreateInfo extends Struct<VmaVirtualBlockCreateInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static PALLOCATIONCALLBACKS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZE: number;
    static SIZEOF: number;
    static calloc(): VmaVirtualBlockCreateInfo;
    static calloc(paramarg0: MemoryStack): VmaVirtualBlockCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VmaVirtualBlockCreateInfo;
    static create(paramarg0: number): VmaVirtualBlockCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VmaVirtualBlockCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VmaVirtualBlockCreateInfo;
    static malloc(paramarg0: MemoryStack): VmaVirtualBlockCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npAllocationCallbacks(paramarg0: number): VkAllocationCallbacks;
    static npAllocationCallbacks(paramarg0: number, paramarg1: VkAllocationCallbacks): void;
    static nsize(paramarg0: number): number;
    static nsize(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VmaVirtualBlockCreateInfo;
    flags(): number;
    flags(arg0: number): VmaVirtualBlockCreateInfo;
    pAllocationCallbacks(): VkAllocationCallbacks;
    pAllocationCallbacks(arg0: VkAllocationCallbacks): VmaVirtualBlockCreateInfo;
    set(arg0: number, arg1: number, arg2: VkAllocationCallbacks): VmaVirtualBlockCreateInfo;
    set(arg0: VmaVirtualBlockCreateInfo): VmaVirtualBlockCreateInfo;
    size(): number;
    size(arg0: number): VmaVirtualBlockCreateInfo;
    sizeof(): number;
}