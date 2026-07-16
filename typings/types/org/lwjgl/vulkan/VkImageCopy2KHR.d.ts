import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExtent3D } from '../../../org/lwjgl/vulkan/VkExtent3D.d.ts'
import type { VkImageCopy2 } from '../../../org/lwjgl/vulkan/VkImageCopy2.d.ts'
import type { VkImageSubresourceLayers } from '../../../org/lwjgl/vulkan/VkImageSubresourceLayers.d.ts'
import type { VkOffset3D } from '../../../org/lwjgl/vulkan/VkOffset3D.d.ts'
export class VkImageCopy2KHR extends VkImageCopy2 {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DSTOFFSET: number;
    static DSTSUBRESOURCE: number;
    static EXTENT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SRCOFFSET: number;
    static SRCSUBRESOURCE: number;
    static STYPE: number;
    static calloc(): VkImageCopy2;
    static calloc(paramarg0: MemoryStack): VkImageCopy2;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkImageCopy2KHR;
    static calloc(paramarg0: MemoryStack): VkImageCopy2KHR;
    static create(): VkImageCopy2;
    static create(paramarg0: number): VkImageCopy2;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkImageCopy2KHR;
    static create(paramarg0: number): VkImageCopy2KHR;
    static createSafe(paramarg0: number): VkImageCopy2;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkImageCopy2KHR;
    static malloc(): VkImageCopy2;
    static malloc(paramarg0: MemoryStack): VkImageCopy2;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkImageCopy2KHR;
    static malloc(paramarg0: MemoryStack): VkImageCopy2KHR;
    static ndstOffset(paramarg0: number): VkOffset3D;
    static ndstOffset(paramarg0: number, paramarg1: VkOffset3D): void;
    static ndstSubresource(paramarg0: number): VkImageSubresourceLayers;
    static ndstSubresource(paramarg0: number, paramarg1: VkImageSubresourceLayers): void;
    static nextent(paramarg0: number): VkExtent3D;
    static nextent(paramarg0: number, paramarg1: VkExtent3D): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsrcOffset(paramarg0: number): VkOffset3D;
    static nsrcOffset(paramarg0: number, paramarg1: VkOffset3D): void;
    static nsrcSubresource(paramarg0: number): VkImageSubresourceLayers;
    static nsrcSubresource(paramarg0: number, paramarg1: VkImageSubresourceLayers): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkImageCopy2KHR;
    dstOffset(): VkOffset3D;
    dstOffset(arg0: (param0: VkOffset3D) => void): VkImageCopy2KHR;
    dstOffset(arg0: VkOffset3D): VkImageCopy2KHR;
    dstSubresource(): VkImageSubresourceLayers;
    dstSubresource(arg0: (param0: VkImageSubresourceLayers) => void): VkImageCopy2KHR;
    dstSubresource(arg0: VkImageSubresourceLayers): VkImageCopy2KHR;
    extent(): VkExtent3D;
    extent(arg0: (param0: VkExtent3D) => void): VkImageCopy2KHR;
    extent(arg0: VkExtent3D): VkImageCopy2KHR;
    pNext(): number;
    pNext(arg0: number): VkImageCopy2KHR;
    sType(): number;
    sType(arg0: number): VkImageCopy2KHR;
    sType$Default(): VkImageCopy2KHR;
    set(arg0: number, arg1: number, arg2: VkImageSubresourceLayers, arg3: VkOffset3D, arg4: VkImageSubresourceLayers, arg5: VkOffset3D, arg6: VkExtent3D): VkImageCopy2KHR;
    set(arg0: VkImageCopy2): VkImageCopy2;
    set(arg0: VkImageCopy2KHR): VkImageCopy2KHR;
    srcOffset(): VkOffset3D;
    srcOffset(arg0: (param0: VkOffset3D) => void): VkImageCopy2KHR;
    srcOffset(arg0: VkOffset3D): VkImageCopy2KHR;
    srcSubresource(): VkImageSubresourceLayers;
    srcSubresource(arg0: (param0: VkImageSubresourceLayers) => void): VkImageCopy2KHR;
    srcSubresource(arg0: VkImageSubresourceLayers): VkImageCopy2KHR;
}