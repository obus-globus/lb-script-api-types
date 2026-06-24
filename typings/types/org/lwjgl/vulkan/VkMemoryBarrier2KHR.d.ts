import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkMemoryBarrier2 } from '../../../org/lwjgl/vulkan/VkMemoryBarrier2.d.ts'
export class VkMemoryBarrier2KHR extends VkMemoryBarrier2 {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DSTACCESSMASK: number;
    static DSTSTAGEMASK: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SRCACCESSMASK: number;
    static SRCSTAGEMASK: number;
    static STYPE: number;
    static calloc(): VkMemoryBarrier2;
    static calloc(paramarg0: MemoryStack): VkMemoryBarrier2;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkMemoryBarrier2KHR;
    static calloc(paramarg0: MemoryStack): VkMemoryBarrier2KHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkMemoryBarrier2;
    static create(paramarg0: number): VkMemoryBarrier2;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkMemoryBarrier2KHR;
    static create(paramarg0: number): VkMemoryBarrier2KHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkMemoryBarrier2;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkMemoryBarrier2KHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkMemoryBarrier2;
    static malloc(paramarg0: MemoryStack): VkMemoryBarrier2;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkMemoryBarrier2KHR;
    static malloc(paramarg0: MemoryStack): VkMemoryBarrier2KHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndstAccessMask(paramarg0: number): number;
    static ndstAccessMask(paramarg0: number, paramarg1: number): void;
    static ndstStageMask(paramarg0: number): number;
    static ndstStageMask(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsrcAccessMask(paramarg0: number): number;
    static nsrcAccessMask(paramarg0: number, paramarg1: number): void;
    static nsrcStageMask(paramarg0: number): number;
    static nsrcStageMask(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkMemoryBarrier2KHR;
    dstAccessMask(): number;
    dstAccessMask(arg0: number): VkMemoryBarrier2KHR;
    dstStageMask(): number;
    dstStageMask(arg0: number): VkMemoryBarrier2KHR;
    pNext(): number;
    pNext(arg0: number): VkMemoryBarrier2KHR;
    sType(): number;
    sType(arg0: number): VkMemoryBarrier2KHR;
    sType$Default(): VkMemoryBarrier2KHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): VkMemoryBarrier2KHR;
    set(arg0: VkMemoryBarrier2): VkMemoryBarrier2;
    set(arg0: VkMemoryBarrier2KHR): VkMemoryBarrier2KHR;
    srcAccessMask(): number;
    srcAccessMask(arg0: number): VkMemoryBarrier2KHR;
    srcStageMask(): number;
    srcStageMask(arg0: number): VkMemoryBarrier2KHR;
}