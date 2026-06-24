import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkImageSubresourceLayers } from '../../../org/lwjgl/vulkan/VkImageSubresourceLayers.d.ts'
import type { VkOffset3D } from '../../../org/lwjgl/vulkan/VkOffset3D.d.ts'
export class VkImageBlit extends Struct<VkImageBlit> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DSTOFFSETS: number;
    static DSTSUBRESOURCE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SRCOFFSETS: number;
    static SRCSUBRESOURCE: number;
    static calloc(): VkImageBlit;
    static calloc(paramarg0: MemoryStack): VkImageBlit;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkImageBlit;
    static create(paramarg0: number): VkImageBlit;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkImageBlit;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkImageBlit;
    static malloc(paramarg0: MemoryStack): VkImageBlit;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndstOffsets(paramarg0: number, paramarg1: number): VkOffset3D;
    static ndstOffsets(paramarg0: number): (Object | null)[];
    static ndstOffsets(paramarg0: number, paramarg1: number, paramarg2: VkOffset3D): void;
    static ndstOffsets(paramarg0: number, paramarg1: (Object | null)[]): void;
    static ndstSubresource(paramarg0: number): VkImageSubresourceLayers;
    static ndstSubresource(paramarg0: number, paramarg1: VkImageSubresourceLayers): void;
    static nsrcOffsets(paramarg0: number, paramarg1: number): VkOffset3D;
    static nsrcOffsets(paramarg0: number): (Object | null)[];
    static nsrcOffsets(paramarg0: number, paramarg1: number, paramarg2: VkOffset3D): void;
    static nsrcOffsets(paramarg0: number, paramarg1: (Object | null)[]): void;
    static nsrcSubresource(paramarg0: number): VkImageSubresourceLayers;
    static nsrcSubresource(paramarg0: number, paramarg1: VkImageSubresourceLayers): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkImageBlit;
    dstOffsets(): (Object | null)[];
    dstOffsets(arg0: (param0: (Object | null)[]) => void): VkImageBlit;
    dstOffsets(arg0: number): VkOffset3D;
    dstOffsets(arg0: number, arg1: (param0: VkOffset3D) => void): VkImageBlit;
    dstOffsets(arg0: number, arg1: VkOffset3D): VkImageBlit;
    dstOffsets(arg0: (Object | null)[]): VkImageBlit;
    dstSubresource(): VkImageSubresourceLayers;
    dstSubresource(arg0: (param0: VkImageSubresourceLayers) => void): VkImageBlit;
    dstSubresource(arg0: VkImageSubresourceLayers): VkImageBlit;
    set(arg0: VkImageBlit): VkImageBlit;
    set(arg0: VkImageSubresourceLayers, arg1: (Object | null)[], arg2: VkImageSubresourceLayers, arg3: (Object | null)[]): VkImageBlit;
    sizeof(): number;
    srcOffsets(): (Object | null)[];
    srcOffsets(arg0: (param0: (Object | null)[]) => void): VkImageBlit;
    srcOffsets(arg0: number): VkOffset3D;
    srcOffsets(arg0: number, arg1: (param0: VkOffset3D) => void): VkImageBlit;
    srcOffsets(arg0: number, arg1: VkOffset3D): VkImageBlit;
    srcOffsets(arg0: (Object | null)[]): VkImageBlit;
    srcSubresource(): VkImageSubresourceLayers;
    srcSubresource(arg0: (param0: VkImageSubresourceLayers) => void): VkImageBlit;
    srcSubresource(arg0: VkImageSubresourceLayers): VkImageBlit;
}