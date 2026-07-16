import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkImageSubresourceRange extends Struct<VkImageSubresourceRange> implements NativeResource {
    static ALIGNOF: number;
    static ASPECTMASK: number;
    static BASEARRAYLAYER: number;
    static BASEMIPLEVEL: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static LAYERCOUNT: number;
    static LEVELCOUNT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): VkImageSubresourceRange;
    static calloc(paramarg0: MemoryStack): VkImageSubresourceRange;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkImageSubresourceRange;
    static create(paramarg0: number): VkImageSubresourceRange;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkImageSubresourceRange;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkImageSubresourceRange;
    static malloc(paramarg0: MemoryStack): VkImageSubresourceRange;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static naspectMask(paramarg0: number): number;
    static naspectMask(paramarg0: number, paramarg1: number): void;
    static nbaseArrayLayer(paramarg0: number): number;
    static nbaseArrayLayer(paramarg0: number, paramarg1: number): void;
    static nbaseMipLevel(paramarg0: number): number;
    static nbaseMipLevel(paramarg0: number, paramarg1: number): void;
    static nlayerCount(paramarg0: number): number;
    static nlayerCount(paramarg0: number, paramarg1: number): void;
    static nlevelCount(paramarg0: number): number;
    static nlevelCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    aspectMask(): number;
    aspectMask(arg0: number): VkImageSubresourceRange;
    baseArrayLayer(): number;
    baseArrayLayer(arg0: number): VkImageSubresourceRange;
    baseMipLevel(): number;
    baseMipLevel(arg0: number): VkImageSubresourceRange;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkImageSubresourceRange;
    layerCount(): number;
    layerCount(arg0: number): VkImageSubresourceRange;
    levelCount(): number;
    levelCount(arg0: number): VkImageSubresourceRange;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): VkImageSubresourceRange;
    set(arg0: VkImageSubresourceRange): VkImageSubresourceRange;
    sizeof(): number;
}