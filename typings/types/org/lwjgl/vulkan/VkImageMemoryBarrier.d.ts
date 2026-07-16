import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExternalMemoryAcquireUnmodifiedEXT } from '../../../org/lwjgl/vulkan/VkExternalMemoryAcquireUnmodifiedEXT.d.ts'
import type { VkImageSubresourceRange } from '../../../org/lwjgl/vulkan/VkImageSubresourceRange.d.ts'
import type { VkSampleLocationsInfoEXT } from '../../../org/lwjgl/vulkan/VkSampleLocationsInfoEXT.d.ts'
export class VkImageMemoryBarrier extends Struct<VkImageMemoryBarrier> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DSTACCESSMASK: number;
    static DSTQUEUEFAMILYINDEX: number;
    static IMAGE: number;
    static NEWLAYOUT: number;
    static OLDLAYOUT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SRCACCESSMASK: number;
    static SRCQUEUEFAMILYINDEX: number;
    static STYPE: number;
    static SUBRESOURCERANGE: number;
    static calloc(): VkImageMemoryBarrier;
    static calloc(paramarg0: MemoryStack): VkImageMemoryBarrier;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkImageMemoryBarrier;
    static create(paramarg0: number): VkImageMemoryBarrier;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkImageMemoryBarrier;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkImageMemoryBarrier;
    static malloc(paramarg0: MemoryStack): VkImageMemoryBarrier;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndstAccessMask(paramarg0: number): number;
    static ndstAccessMask(paramarg0: number, paramarg1: number): void;
    static ndstQueueFamilyIndex(paramarg0: number): number;
    static ndstQueueFamilyIndex(paramarg0: number, paramarg1: number): void;
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
    static nsubresourceRange(paramarg0: number): VkImageSubresourceRange;
    static nsubresourceRange(paramarg0: number, paramarg1: VkImageSubresourceRange): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkImageMemoryBarrier;
    dstAccessMask(): number;
    dstAccessMask(arg0: number): VkImageMemoryBarrier;
    dstQueueFamilyIndex(): number;
    dstQueueFamilyIndex(arg0: number): VkImageMemoryBarrier;
    image(): number;
    image(arg0: number): VkImageMemoryBarrier;
    newLayout(): number;
    newLayout(arg0: number): VkImageMemoryBarrier;
    oldLayout(): number;
    oldLayout(arg0: number): VkImageMemoryBarrier;
    pNext(): number;
    pNext(arg0: number): VkImageMemoryBarrier;
    pNext(arg0: VkExternalMemoryAcquireUnmodifiedEXT): VkImageMemoryBarrier;
    pNext(arg0: VkSampleLocationsInfoEXT): VkImageMemoryBarrier;
    sType(): number;
    sType(arg0: number): VkImageMemoryBarrier;
    sType$Default(): VkImageMemoryBarrier;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: VkImageSubresourceRange): VkImageMemoryBarrier;
    set(arg0: VkImageMemoryBarrier): VkImageMemoryBarrier;
    sizeof(): number;
    srcAccessMask(): number;
    srcAccessMask(arg0: number): VkImageMemoryBarrier;
    srcQueueFamilyIndex(): number;
    srcQueueFamilyIndex(arg0: number): VkImageMemoryBarrier;
    subresourceRange(): VkImageSubresourceRange;
    subresourceRange(arg0: (param0: VkImageSubresourceRange) => void): VkImageMemoryBarrier;
    subresourceRange(arg0: VkImageSubresourceRange): VkImageMemoryBarrier;
}