import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkBufferImageCopy2 } from '../../../org/lwjgl/vulkan/VkBufferImageCopy2.d.ts'
import type { VkCopyCommandTransformInfoQCOM } from '../../../org/lwjgl/vulkan/VkCopyCommandTransformInfoQCOM.d.ts'
import type { VkExtent3D } from '../../../org/lwjgl/vulkan/VkExtent3D.d.ts'
import type { VkImageSubresourceLayers } from '../../../org/lwjgl/vulkan/VkImageSubresourceLayers.d.ts'
import type { VkOffset3D } from '../../../org/lwjgl/vulkan/VkOffset3D.d.ts'
export class VkBufferImageCopy2KHR extends VkBufferImageCopy2 {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BUFFERIMAGEHEIGHT: number;
    static BUFFEROFFSET: number;
    static BUFFERROWLENGTH: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static IMAGEEXTENT: number;
    static IMAGEOFFSET: number;
    static IMAGESUBRESOURCE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkBufferImageCopy2;
    static calloc(paramarg0: MemoryStack): VkBufferImageCopy2;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkBufferImageCopy2KHR;
    static calloc(paramarg0: MemoryStack): VkBufferImageCopy2KHR;
    static create(): VkBufferImageCopy2;
    static create(paramarg0: number): VkBufferImageCopy2;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkBufferImageCopy2KHR;
    static create(paramarg0: number): VkBufferImageCopy2KHR;
    static createSafe(paramarg0: number): VkBufferImageCopy2;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkBufferImageCopy2KHR;
    static malloc(): VkBufferImageCopy2;
    static malloc(paramarg0: MemoryStack): VkBufferImageCopy2;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkBufferImageCopy2KHR;
    static malloc(paramarg0: MemoryStack): VkBufferImageCopy2KHR;
    static nbufferImageHeight(paramarg0: number): number;
    static nbufferImageHeight(paramarg0: number, paramarg1: number): void;
    static nbufferOffset(paramarg0: number): number;
    static nbufferOffset(paramarg0: number, paramarg1: number): void;
    static nbufferRowLength(paramarg0: number): number;
    static nbufferRowLength(paramarg0: number, paramarg1: number): void;
    static nimageExtent(paramarg0: number): VkExtent3D;
    static nimageExtent(paramarg0: number, paramarg1: VkExtent3D): void;
    static nimageOffset(paramarg0: number): VkOffset3D;
    static nimageOffset(paramarg0: number, paramarg1: VkOffset3D): void;
    static nimageSubresource(paramarg0: number): VkImageSubresourceLayers;
    static nimageSubresource(paramarg0: number, paramarg1: VkImageSubresourceLayers): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    bufferImageHeight(): number;
    bufferImageHeight(arg0: number): VkBufferImageCopy2KHR;
    bufferOffset(): number;
    bufferOffset(arg0: number): VkBufferImageCopy2KHR;
    bufferRowLength(): number;
    bufferRowLength(arg0: number): VkBufferImageCopy2KHR;
    create(arg0: number, arg1: ByteBuffer): VkBufferImageCopy2KHR;
    imageExtent(): VkExtent3D;
    imageExtent(arg0: (param0: VkExtent3D) => void): VkBufferImageCopy2KHR;
    imageExtent(arg0: VkExtent3D): VkBufferImageCopy2KHR;
    imageOffset(): VkOffset3D;
    imageOffset(arg0: (param0: VkOffset3D) => void): VkBufferImageCopy2KHR;
    imageOffset(arg0: VkOffset3D): VkBufferImageCopy2KHR;
    imageSubresource(): VkImageSubresourceLayers;
    imageSubresource(arg0: (param0: VkImageSubresourceLayers) => void): VkBufferImageCopy2KHR;
    imageSubresource(arg0: VkImageSubresourceLayers): VkBufferImageCopy2KHR;
    pNext(): number;
    pNext(arg0: number): VkBufferImageCopy2KHR;
    pNext(arg0: VkCopyCommandTransformInfoQCOM): VkBufferImageCopy2;
    sType(): number;
    sType(arg0: number): VkBufferImageCopy2KHR;
    sType$Default(): VkBufferImageCopy2KHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: VkImageSubresourceLayers, arg6: VkOffset3D, arg7: VkExtent3D): VkBufferImageCopy2KHR;
    set(arg0: VkBufferImageCopy2): VkBufferImageCopy2;
    set(arg0: VkBufferImageCopy2KHR): VkBufferImageCopy2KHR;
}