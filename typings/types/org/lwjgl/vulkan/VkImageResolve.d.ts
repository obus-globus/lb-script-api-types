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
export class VkImageResolve extends Struct<VkImageResolve> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DSTOFFSET: number;
    static DSTSUBRESOURCE: number;
    static EXTENT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SRCOFFSET: number;
    static SRCSUBRESOURCE: number;
    static calloc(): VkImageResolve;
    static calloc(paramarg0: MemoryStack): VkImageResolve;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkImageResolve;
    static create(paramarg0: number): VkImageResolve;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkImageResolve;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkImageResolve;
    static malloc(paramarg0: MemoryStack): VkImageResolve;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndstOffset(paramarg0: number): VkOffset3D;
    static ndstOffset(paramarg0: number, paramarg1: VkOffset3D): void;
    static ndstSubresource(paramarg0: number): VkImageSubresourceLayers;
    static ndstSubresource(paramarg0: number, paramarg1: VkImageSubresourceLayers): void;
    static nextent(paramarg0: number): VkExtent3D;
    static nextent(paramarg0: number, paramarg1: VkExtent3D): void;
    static nsrcOffset(paramarg0: number): VkOffset3D;
    static nsrcOffset(paramarg0: number, paramarg1: VkOffset3D): void;
    static nsrcSubresource(paramarg0: number): VkImageSubresourceLayers;
    static nsrcSubresource(paramarg0: number, paramarg1: VkImageSubresourceLayers): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkImageResolve;
    dstOffset(): VkOffset3D;
    dstOffset(arg0: (param0: VkOffset3D) => void): VkImageResolve;
    dstOffset(arg0: VkOffset3D): VkImageResolve;
    dstSubresource(): VkImageSubresourceLayers;
    dstSubresource(arg0: (param0: VkImageSubresourceLayers) => void): VkImageResolve;
    dstSubresource(arg0: VkImageSubresourceLayers): VkImageResolve;
    extent(): VkExtent3D;
    extent(arg0: (param0: VkExtent3D) => void): VkImageResolve;
    extent(arg0: VkExtent3D): VkImageResolve;
    set(arg0: VkImageResolve): VkImageResolve;
    set(arg0: VkImageSubresourceLayers, arg1: VkOffset3D, arg2: VkImageSubresourceLayers, arg3: VkOffset3D, arg4: VkExtent3D): VkImageResolve;
    sizeof(): number;
    srcOffset(): VkOffset3D;
    srcOffset(arg0: (param0: VkOffset3D) => void): VkImageResolve;
    srcOffset(arg0: VkOffset3D): VkImageResolve;
    srcSubresource(): VkImageSubresourceLayers;
    srcSubresource(arg0: (param0: VkImageSubresourceLayers) => void): VkImageResolve;
    srcSubresource(arg0: VkImageSubresourceLayers): VkImageResolve;
}