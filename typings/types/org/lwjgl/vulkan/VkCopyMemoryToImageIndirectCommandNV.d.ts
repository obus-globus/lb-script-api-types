import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkCopyMemoryToImageIndirectCommandKHR } from '../../../org/lwjgl/vulkan/VkCopyMemoryToImageIndirectCommandKHR.d.ts'
import type { VkExtent3D } from '../../../org/lwjgl/vulkan/VkExtent3D.d.ts'
import type { VkImageSubresourceLayers } from '../../../org/lwjgl/vulkan/VkImageSubresourceLayers.d.ts'
import type { VkOffset3D } from '../../../org/lwjgl/vulkan/VkOffset3D.d.ts'
export class VkCopyMemoryToImageIndirectCommandNV extends VkCopyMemoryToImageIndirectCommandKHR {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BUFFERIMAGEHEIGHT: number;
    static BUFFERROWLENGTH: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static IMAGEEXTENT: number;
    static IMAGEOFFSET: number;
    static IMAGESUBRESOURCE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SRCADDRESS: number;
    static calloc(): VkCopyMemoryToImageIndirectCommandKHR;
    static calloc(paramarg0: MemoryStack): VkCopyMemoryToImageIndirectCommandKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkCopyMemoryToImageIndirectCommandNV;
    static calloc(paramarg0: MemoryStack): VkCopyMemoryToImageIndirectCommandNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkCopyMemoryToImageIndirectCommandKHR;
    static create(paramarg0: number): VkCopyMemoryToImageIndirectCommandKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkCopyMemoryToImageIndirectCommandNV;
    static create(paramarg0: number): VkCopyMemoryToImageIndirectCommandNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkCopyMemoryToImageIndirectCommandKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkCopyMemoryToImageIndirectCommandNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkCopyMemoryToImageIndirectCommandKHR;
    static malloc(paramarg0: MemoryStack): VkCopyMemoryToImageIndirectCommandKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkCopyMemoryToImageIndirectCommandNV;
    static malloc(paramarg0: MemoryStack): VkCopyMemoryToImageIndirectCommandNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbufferImageHeight(paramarg0: number): number;
    static nbufferImageHeight(paramarg0: number, paramarg1: number): void;
    static nbufferRowLength(paramarg0: number): number;
    static nbufferRowLength(paramarg0: number, paramarg1: number): void;
    static nimageExtent(paramarg0: number): VkExtent3D;
    static nimageExtent(paramarg0: number, paramarg1: VkExtent3D): void;
    static nimageOffset(paramarg0: number): VkOffset3D;
    static nimageOffset(paramarg0: number, paramarg1: VkOffset3D): void;
    static nimageSubresource(paramarg0: number): VkImageSubresourceLayers;
    static nimageSubresource(paramarg0: number, paramarg1: VkImageSubresourceLayers): void;
    static nsrcAddress(paramarg0: number): number;
    static nsrcAddress(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    bufferImageHeight(): number;
    bufferImageHeight(arg0: number): VkCopyMemoryToImageIndirectCommandNV;
    bufferRowLength(): number;
    bufferRowLength(arg0: number): VkCopyMemoryToImageIndirectCommandNV;
    create(arg0: number, arg1: ByteBuffer): VkCopyMemoryToImageIndirectCommandNV;
    imageExtent(): VkExtent3D;
    imageExtent(arg0: (param0: VkExtent3D) => void): VkCopyMemoryToImageIndirectCommandNV;
    imageExtent(arg0: VkExtent3D): VkCopyMemoryToImageIndirectCommandNV;
    imageOffset(): VkOffset3D;
    imageOffset(arg0: (param0: VkOffset3D) => void): VkCopyMemoryToImageIndirectCommandNV;
    imageOffset(arg0: VkOffset3D): VkCopyMemoryToImageIndirectCommandNV;
    imageSubresource(): VkImageSubresourceLayers;
    imageSubresource(arg0: (param0: VkImageSubresourceLayers) => void): VkCopyMemoryToImageIndirectCommandNV;
    imageSubresource(arg0: VkImageSubresourceLayers): VkCopyMemoryToImageIndirectCommandNV;
    set(arg0: number, arg1: number, arg2: number, arg3: VkImageSubresourceLayers, arg4: VkOffset3D, arg5: VkExtent3D): VkCopyMemoryToImageIndirectCommandNV;
    set(arg0: VkCopyMemoryToImageIndirectCommandKHR): VkCopyMemoryToImageIndirectCommandKHR;
    set(arg0: VkCopyMemoryToImageIndirectCommandNV): VkCopyMemoryToImageIndirectCommandNV;
    srcAddress(): number;
    srcAddress(arg0: number): VkCopyMemoryToImageIndirectCommandNV;
}