import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkImageSubresourceLayers extends Struct<VkImageSubresourceLayers> implements NativeResource {
    static ALIGNOF: number;
    static ASPECTMASK: number;
    static BASEARRAYLAYER: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static LAYERCOUNT: number;
    static MIPLEVEL: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): VkImageSubresourceLayers;
    static calloc(paramarg0: MemoryStack): VkImageSubresourceLayers;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkImageSubresourceLayers;
    static create(paramarg0: number): VkImageSubresourceLayers;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkImageSubresourceLayers;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkImageSubresourceLayers;
    static malloc(paramarg0: MemoryStack): VkImageSubresourceLayers;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static naspectMask(paramarg0: number): number;
    static naspectMask(paramarg0: number, paramarg1: number): void;
    static nbaseArrayLayer(paramarg0: number): number;
    static nbaseArrayLayer(paramarg0: number, paramarg1: number): void;
    static nlayerCount(paramarg0: number): number;
    static nlayerCount(paramarg0: number, paramarg1: number): void;
    static nmipLevel(paramarg0: number): number;
    static nmipLevel(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    aspectMask(): number;
    aspectMask(arg0: number): VkImageSubresourceLayers;
    baseArrayLayer(): number;
    baseArrayLayer(arg0: number): VkImageSubresourceLayers;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkImageSubresourceLayers;
    layerCount(): number;
    layerCount(arg0: number): VkImageSubresourceLayers;
    mipLevel(): number;
    mipLevel(arg0: number): VkImageSubresourceLayers;
    set(arg0: number, arg1: number, arg2: number, arg3: number): VkImageSubresourceLayers;
    set(arg0: VkImageSubresourceLayers): VkImageSubresourceLayers;
    sizeof(): number;
}