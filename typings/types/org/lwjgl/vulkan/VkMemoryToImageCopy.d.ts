import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExtent3D } from '../../../org/lwjgl/vulkan/VkExtent3D.d.ts'
import type { VkImageSubresourceLayers } from '../../../org/lwjgl/vulkan/VkImageSubresourceLayers.d.ts'
import type { VkOffset3D } from '../../../org/lwjgl/vulkan/VkOffset3D.d.ts'
export class VkMemoryToImageCopy extends Struct<VkMemoryToImageCopy> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static IMAGEEXTENT: number;
    static IMAGEOFFSET: number;
    static IMAGESUBRESOURCE: number;
    static MEMORYIMAGEHEIGHT: number;
    static MEMORYROWLENGTH: number;
    static PHOSTPOINTER: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkMemoryToImageCopy;
    static calloc(paramarg0: MemoryStack): VkMemoryToImageCopy;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkMemoryToImageCopy;
    static create(paramarg0: number): VkMemoryToImageCopy;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkMemoryToImageCopy;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkMemoryToImageCopy;
    static malloc(paramarg0: MemoryStack): VkMemoryToImageCopy;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nimageExtent(paramarg0: number): VkExtent3D;
    static nimageExtent(paramarg0: number, paramarg1: VkExtent3D): void;
    static nimageOffset(paramarg0: number): VkOffset3D;
    static nimageOffset(paramarg0: number, paramarg1: VkOffset3D): void;
    static nimageSubresource(paramarg0: number): VkImageSubresourceLayers;
    static nimageSubresource(paramarg0: number, paramarg1: VkImageSubresourceLayers): void;
    static nmemoryImageHeight(paramarg0: number): number;
    static nmemoryImageHeight(paramarg0: number, paramarg1: number): void;
    static nmemoryRowLength(paramarg0: number): number;
    static nmemoryRowLength(paramarg0: number, paramarg1: number): void;
    static npHostPointer(paramarg0: number): number;
    static npHostPointer(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkMemoryToImageCopy;
    imageExtent(): VkExtent3D;
    imageExtent(arg0: (param0: VkExtent3D) => void): VkMemoryToImageCopy;
    imageExtent(arg0: VkExtent3D): VkMemoryToImageCopy;
    imageOffset(): VkOffset3D;
    imageOffset(arg0: (param0: VkOffset3D) => void): VkMemoryToImageCopy;
    imageOffset(arg0: VkOffset3D): VkMemoryToImageCopy;
    imageSubresource(): VkImageSubresourceLayers;
    imageSubresource(arg0: (param0: VkImageSubresourceLayers) => void): VkMemoryToImageCopy;
    imageSubresource(arg0: VkImageSubresourceLayers): VkMemoryToImageCopy;
    memoryImageHeight(): number;
    memoryImageHeight(arg0: number): VkMemoryToImageCopy;
    memoryRowLength(): number;
    memoryRowLength(arg0: number): VkMemoryToImageCopy;
    pHostPointer(): number;
    pHostPointer(arg0: number): VkMemoryToImageCopy;
    pNext(): number;
    pNext(arg0: number): VkMemoryToImageCopy;
    sType(): number;
    sType(arg0: number): VkMemoryToImageCopy;
    sType$Default(): VkMemoryToImageCopy;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: VkImageSubresourceLayers, arg6: VkOffset3D, arg7: VkExtent3D): VkMemoryToImageCopy;
    set(arg0: VkMemoryToImageCopy): VkMemoryToImageCopy;
    sizeof(): number;
}