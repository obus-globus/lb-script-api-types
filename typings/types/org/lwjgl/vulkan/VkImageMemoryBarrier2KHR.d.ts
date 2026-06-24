import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExternalMemoryAcquireUnmodifiedEXT } from '../../../org/lwjgl/vulkan/VkExternalMemoryAcquireUnmodifiedEXT.d.ts'
import type { VkImageMemoryBarrier2 } from '../../../org/lwjgl/vulkan/VkImageMemoryBarrier2.d.ts'
import type { VkImageSubresourceRange } from '../../../org/lwjgl/vulkan/VkImageSubresourceRange.d.ts'
import type { VkMemoryBarrierAccessFlags3KHR } from '../../../org/lwjgl/vulkan/VkMemoryBarrierAccessFlags3KHR.d.ts'
import type { VkSampleLocationsInfoEXT } from '../../../org/lwjgl/vulkan/VkSampleLocationsInfoEXT.d.ts'
export class VkImageMemoryBarrier2KHR extends VkImageMemoryBarrier2 {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DSTACCESSMASK: number;
    static DSTQUEUEFAMILYINDEX: number;
    static DSTSTAGEMASK: number;
    static IMAGE: number;
    static NEWLAYOUT: number;
    static OLDLAYOUT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SRCACCESSMASK: number;
    static SRCQUEUEFAMILYINDEX: number;
    static SRCSTAGEMASK: number;
    static STYPE: number;
    static SUBRESOURCERANGE: number;
    static calloc(): VkImageMemoryBarrier2;
    static calloc(paramarg0: MemoryStack): VkImageMemoryBarrier2;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkImageMemoryBarrier2KHR;
    static calloc(paramarg0: MemoryStack): VkImageMemoryBarrier2KHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkImageMemoryBarrier2;
    static create(paramarg0: number): VkImageMemoryBarrier2;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkImageMemoryBarrier2KHR;
    static create(paramarg0: number): VkImageMemoryBarrier2KHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkImageMemoryBarrier2;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkImageMemoryBarrier2KHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkImageMemoryBarrier2;
    static malloc(paramarg0: MemoryStack): VkImageMemoryBarrier2;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkImageMemoryBarrier2KHR;
    static malloc(paramarg0: MemoryStack): VkImageMemoryBarrier2KHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndstAccessMask(paramarg0: number): number;
    static ndstAccessMask(paramarg0: number, paramarg1: number): void;
    static ndstQueueFamilyIndex(paramarg0: number): number;
    static ndstQueueFamilyIndex(paramarg0: number, paramarg1: number): void;
    static ndstStageMask(paramarg0: number): number;
    static ndstStageMask(paramarg0: number, paramarg1: number): void;
    static nimage(paramarg0: number): number;
    static nimage(paramarg0: number, paramarg1: number): void;
    static nnewLayout(paramarg0: number): number;
    static nnewLayout(paramarg0: number, paramarg1: number): void;
    static noldLayout(paramarg0: number): number;
    static noldLayout(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsrcAccessMask(paramarg0: number): number;
    static nsrcAccessMask(paramarg0: number, paramarg1: number): void;
    static nsrcQueueFamilyIndex(paramarg0: number): number;
    static nsrcQueueFamilyIndex(paramarg0: number, paramarg1: number): void;
    static nsrcStageMask(paramarg0: number): number;
    static nsrcStageMask(paramarg0: number, paramarg1: number): void;
    static nsubresourceRange(paramarg0: number): VkImageSubresourceRange;
    static nsubresourceRange(paramarg0: number, paramarg1: VkImageSubresourceRange): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkImageMemoryBarrier2KHR;
    dstAccessMask(): number;
    dstAccessMask(arg0: number): VkImageMemoryBarrier2KHR;
    dstQueueFamilyIndex(): number;
    dstQueueFamilyIndex(arg0: number): VkImageMemoryBarrier2KHR;
    dstStageMask(): number;
    dstStageMask(arg0: number): VkImageMemoryBarrier2KHR;
    image(): number;
    image(arg0: number): VkImageMemoryBarrier2KHR;
    newLayout(): number;
    newLayout(arg0: number): VkImageMemoryBarrier2KHR;
    oldLayout(): number;
    oldLayout(arg0: number): VkImageMemoryBarrier2KHR;
    pNext(): number;
    pNext(arg0: number): VkImageMemoryBarrier2KHR;
    pNext(arg0: VkExternalMemoryAcquireUnmodifiedEXT): VkImageMemoryBarrier2;
    pNext(arg0: VkMemoryBarrierAccessFlags3KHR): VkImageMemoryBarrier2;
    pNext(arg0: VkSampleLocationsInfoEXT): VkImageMemoryBarrier2;
    sType(): number;
    sType(arg0: number): VkImageMemoryBarrier2KHR;
    sType$Default(): VkImageMemoryBarrier2KHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: VkImageSubresourceRange): VkImageMemoryBarrier2KHR;
    set(arg0: VkImageMemoryBarrier2): VkImageMemoryBarrier2;
    set(arg0: VkImageMemoryBarrier2KHR): VkImageMemoryBarrier2KHR;
    srcAccessMask(): number;
    srcAccessMask(arg0: number): VkImageMemoryBarrier2KHR;
    srcQueueFamilyIndex(): number;
    srcQueueFamilyIndex(arg0: number): VkImageMemoryBarrier2KHR;
    srcStageMask(): number;
    srcStageMask(arg0: number): VkImageMemoryBarrier2KHR;
    subresourceRange(): VkImageSubresourceRange;
    subresourceRange(arg0: (param0: VkImageSubresourceRange) => void): VkImageMemoryBarrier2KHR;
    subresourceRange(arg0: VkImageSubresourceRange): VkImageMemoryBarrier2KHR;
}