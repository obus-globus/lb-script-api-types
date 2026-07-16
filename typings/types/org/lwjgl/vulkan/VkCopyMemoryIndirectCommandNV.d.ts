import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkCopyMemoryIndirectCommandKHR } from '../../../org/lwjgl/vulkan/VkCopyMemoryIndirectCommandKHR.d.ts'
export class VkCopyMemoryIndirectCommandNV extends VkCopyMemoryIndirectCommandKHR {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DSTADDRESS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZE: number;
    static SIZEOF: number;
    static SRCADDRESS: number;
    static calloc(): VkCopyMemoryIndirectCommandKHR;
    static calloc(paramarg0: MemoryStack): VkCopyMemoryIndirectCommandKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkCopyMemoryIndirectCommandNV;
    static calloc(paramarg0: MemoryStack): VkCopyMemoryIndirectCommandNV;
    static create(): VkCopyMemoryIndirectCommandKHR;
    static create(paramarg0: number): VkCopyMemoryIndirectCommandKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkCopyMemoryIndirectCommandNV;
    static create(paramarg0: number): VkCopyMemoryIndirectCommandNV;
    static createSafe(paramarg0: number): VkCopyMemoryIndirectCommandKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkCopyMemoryIndirectCommandNV;
    static malloc(): VkCopyMemoryIndirectCommandKHR;
    static malloc(paramarg0: MemoryStack): VkCopyMemoryIndirectCommandKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkCopyMemoryIndirectCommandNV;
    static malloc(paramarg0: MemoryStack): VkCopyMemoryIndirectCommandNV;
    static ndstAddress(paramarg0: number): number;
    static ndstAddress(paramarg0: number, paramarg1: number): void;
    static nsize(paramarg0: number): number;
    static nsize(paramarg0: number, paramarg1: number): void;
    static nsrcAddress(paramarg0: number): number;
    static nsrcAddress(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkCopyMemoryIndirectCommandNV;
    dstAddress(): number;
    dstAddress(arg0: number): VkCopyMemoryIndirectCommandNV;
    set(arg0: number, arg1: number, arg2: number): VkCopyMemoryIndirectCommandNV;
    set(arg0: VkCopyMemoryIndirectCommandKHR): VkCopyMemoryIndirectCommandKHR;
    set(arg0: VkCopyMemoryIndirectCommandNV): VkCopyMemoryIndirectCommandNV;
    size(): number;
    size(arg0: number): VkCopyMemoryIndirectCommandNV;
    srcAddress(): number;
    srcAddress(arg0: number): VkCopyMemoryIndirectCommandNV;
}