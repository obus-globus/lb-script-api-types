import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExtent3D } from '../../../org/lwjgl/vulkan/VkExtent3D.d.ts'
import type { VkImageResolve2 } from '../../../org/lwjgl/vulkan/VkImageResolve2.d.ts'
import type { VkImageSubresourceLayers } from '../../../org/lwjgl/vulkan/VkImageSubresourceLayers.d.ts'
import type { VkOffset3D } from '../../../org/lwjgl/vulkan/VkOffset3D.d.ts'
export class VkImageResolve2KHR extends VkImageResolve2 {
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
    static calloc(): VkImageResolve2;
    static calloc(paramarg0: MemoryStack): VkImageResolve2;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkImageResolve2KHR;
    static calloc(paramarg0: MemoryStack): VkImageResolve2KHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkImageResolve2;
    static create(paramarg0: number): VkImageResolve2;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkImageResolve2KHR;
    static create(paramarg0: number): VkImageResolve2KHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkImageResolve2;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkImageResolve2KHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkImageResolve2;
    static malloc(paramarg0: MemoryStack): VkImageResolve2;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkImageResolve2KHR;
    static malloc(paramarg0: MemoryStack): VkImageResolve2KHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
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
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkImageResolve2KHR;
    dstOffset(): VkOffset3D;
    dstOffset(arg0: (param0: VkOffset3D) => void): VkImageResolve2KHR;
    dstOffset(arg0: VkOffset3D): VkImageResolve2KHR;
    dstSubresource(): VkImageSubresourceLayers;
    dstSubresource(arg0: (param0: VkImageSubresourceLayers) => void): VkImageResolve2KHR;
    dstSubresource(arg0: VkImageSubresourceLayers): VkImageResolve2KHR;
    extent(): VkExtent3D;
    extent(arg0: (param0: VkExtent3D) => void): VkImageResolve2KHR;
    extent(arg0: VkExtent3D): VkImageResolve2KHR;
    pNext(): number;
    pNext(arg0: number): VkImageResolve2KHR;
    sType(): number;
    sType(arg0: number): VkImageResolve2KHR;
    sType$Default(): VkImageResolve2KHR;
    set(arg0: number, arg1: number, arg2: VkImageSubresourceLayers, arg3: VkOffset3D, arg4: VkImageSubresourceLayers, arg5: VkOffset3D, arg6: VkExtent3D): VkImageResolve2KHR;
    set(arg0: VkImageResolve2): VkImageResolve2;
    set(arg0: VkImageResolve2KHR): VkImageResolve2KHR;
    srcOffset(): VkOffset3D;
    srcOffset(arg0: (param0: VkOffset3D) => void): VkImageResolve2KHR;
    srcOffset(arg0: VkOffset3D): VkImageResolve2KHR;
    srcSubresource(): VkImageSubresourceLayers;
    srcSubresource(arg0: (param0: VkImageSubresourceLayers) => void): VkImageResolve2KHR;
    srcSubresource(arg0: VkImageSubresourceLayers): VkImageResolve2KHR;
}