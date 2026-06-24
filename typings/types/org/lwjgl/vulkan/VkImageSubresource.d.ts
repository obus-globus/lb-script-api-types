import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkImageSubresource extends Struct<VkImageSubresource> implements NativeResource {
    static ALIGNOF: number;
    static ARRAYLAYER: number;
    static ASPECTMASK: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MIPLEVEL: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): VkImageSubresource;
    static calloc(paramarg0: MemoryStack): VkImageSubresource;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkImageSubresource;
    static create(paramarg0: number): VkImageSubresource;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkImageSubresource;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkImageSubresource;
    static malloc(paramarg0: MemoryStack): VkImageSubresource;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static narrayLayer(paramarg0: number): number;
    static narrayLayer(paramarg0: number, paramarg1: number): void;
    static naspectMask(paramarg0: number): number;
    static naspectMask(paramarg0: number, paramarg1: number): void;
    static nmipLevel(paramarg0: number): number;
    static nmipLevel(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    arrayLayer(): number;
    arrayLayer(arg0: number): VkImageSubresource;
    aspectMask(): number;
    aspectMask(arg0: number): VkImageSubresource;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkImageSubresource;
    mipLevel(): number;
    mipLevel(arg0: number): VkImageSubresource;
    set(arg0: number, arg1: number, arg2: number): VkImageSubresource;
    set(arg0: VkImageSubresource): VkImageSubresource;
    sizeof(): number;
}