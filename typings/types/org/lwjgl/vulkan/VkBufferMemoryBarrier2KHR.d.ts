import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkBufferMemoryBarrier2 } from '../../../org/lwjgl/vulkan/VkBufferMemoryBarrier2.d.ts'
import type { VkExternalMemoryAcquireUnmodifiedEXT } from '../../../org/lwjgl/vulkan/VkExternalMemoryAcquireUnmodifiedEXT.d.ts'
import type { VkMemoryBarrierAccessFlags3KHR } from '../../../org/lwjgl/vulkan/VkMemoryBarrierAccessFlags3KHR.d.ts'
export class VkBufferMemoryBarrier2KHR extends VkBufferMemoryBarrier2 {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BUFFER: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DSTACCESSMASK: number;
    static DSTQUEUEFAMILYINDEX: number;
    static DSTSTAGEMASK: number;
    static OFFSET: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZE: number;
    static SIZEOF: number;
    static SRCACCESSMASK: number;
    static SRCQUEUEFAMILYINDEX: number;
    static SRCSTAGEMASK: number;
    static STYPE: number;
    static calloc(): VkBufferMemoryBarrier2;
    static calloc(paramarg0: MemoryStack): VkBufferMemoryBarrier2;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkBufferMemoryBarrier2KHR;
    static calloc(paramarg0: MemoryStack): VkBufferMemoryBarrier2KHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkBufferMemoryBarrier2;
    static create(paramarg0: number): VkBufferMemoryBarrier2;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkBufferMemoryBarrier2KHR;
    static create(paramarg0: number): VkBufferMemoryBarrier2KHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkBufferMemoryBarrier2;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkBufferMemoryBarrier2KHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkBufferMemoryBarrier2;
    static malloc(paramarg0: MemoryStack): VkBufferMemoryBarrier2;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkBufferMemoryBarrier2KHR;
    static malloc(paramarg0: MemoryStack): VkBufferMemoryBarrier2KHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbuffer(paramarg0: number): number;
    static nbuffer(paramarg0: number, paramarg1: number): void;
    static ndstAccessMask(paramarg0: number): number;
    static ndstAccessMask(paramarg0: number, paramarg1: number): void;
    static ndstQueueFamilyIndex(paramarg0: number): number;
    static ndstQueueFamilyIndex(paramarg0: number, paramarg1: number): void;
    static ndstStageMask(paramarg0: number): number;
    static ndstStageMask(paramarg0: number, paramarg1: number): void;
    static noffset(paramarg0: number): number;
    static noffset(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsize(paramarg0: number): number;
    static nsize(paramarg0: number, paramarg1: number): void;
    static nsrcAccessMask(paramarg0: number): number;
    static nsrcAccessMask(paramarg0: number, paramarg1: number): void;
    static nsrcQueueFamilyIndex(paramarg0: number): number;
    static nsrcQueueFamilyIndex(paramarg0: number, paramarg1: number): void;
    static nsrcStageMask(paramarg0: number): number;
    static nsrcStageMask(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    buffer(): number;
    buffer(arg0: number): VkBufferMemoryBarrier2KHR;
    create(arg0: number, arg1: ByteBuffer): VkBufferMemoryBarrier2KHR;
    dstAccessMask(): number;
    dstAccessMask(arg0: number): VkBufferMemoryBarrier2KHR;
    dstQueueFamilyIndex(): number;
    dstQueueFamilyIndex(arg0: number): VkBufferMemoryBarrier2KHR;
    dstStageMask(): number;
    dstStageMask(arg0: number): VkBufferMemoryBarrier2KHR;
    offset(): number;
    offset(arg0: number): VkBufferMemoryBarrier2KHR;
    pNext(): number;
    pNext(arg0: number): VkBufferMemoryBarrier2KHR;
    pNext(arg0: VkExternalMemoryAcquireUnmodifiedEXT): VkBufferMemoryBarrier2;
    pNext(arg0: VkMemoryBarrierAccessFlags3KHR): VkBufferMemoryBarrier2;
    sType(): number;
    sType(arg0: number): VkBufferMemoryBarrier2KHR;
    sType$Default(): VkBufferMemoryBarrier2KHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): VkBufferMemoryBarrier2KHR;
    set(arg0: VkBufferMemoryBarrier2): VkBufferMemoryBarrier2;
    set(arg0: VkBufferMemoryBarrier2KHR): VkBufferMemoryBarrier2KHR;
    size(): number;
    size(arg0: number): VkBufferMemoryBarrier2KHR;
    srcAccessMask(): number;
    srcAccessMask(arg0: number): VkBufferMemoryBarrier2KHR;
    srcQueueFamilyIndex(): number;
    srcQueueFamilyIndex(arg0: number): VkBufferMemoryBarrier2KHR;
    srcStageMask(): number;
    srcStageMask(arg0: number): VkBufferMemoryBarrier2KHR;
}