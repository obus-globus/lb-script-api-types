import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkSubresourceLayout extends Struct<VkSubresourceLayout> implements NativeResource {
    static ALIGNOF: number;
    static ARRAYPITCH: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DEPTHPITCH: number;
    static OFFSET: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static ROWPITCH: number;
    static SIZE: number;
    static SIZEOF: number;
    static calloc(): VkSubresourceLayout;
    static calloc(paramarg0: MemoryStack): VkSubresourceLayout;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSubresourceLayout;
    static create(paramarg0: number): VkSubresourceLayout;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSubresourceLayout;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSubresourceLayout;
    static malloc(paramarg0: MemoryStack): VkSubresourceLayout;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static narrayPitch(paramarg0: number): number;
    static narrayPitch(paramarg0: number, paramarg1: number): void;
    static ndepthPitch(paramarg0: number): number;
    static ndepthPitch(paramarg0: number, paramarg1: number): void;
    static noffset(paramarg0: number): number;
    static noffset(paramarg0: number, paramarg1: number): void;
    static nrowPitch(paramarg0: number): number;
    static nrowPitch(paramarg0: number, paramarg1: number): void;
    static nsize(paramarg0: number): number;
    static nsize(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    arrayPitch(): number;
    arrayPitch(arg0: number): VkSubresourceLayout;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkSubresourceLayout;
    depthPitch(): number;
    depthPitch(arg0: number): VkSubresourceLayout;
    offset(): number;
    offset(arg0: number): VkSubresourceLayout;
    rowPitch(): number;
    rowPitch(arg0: number): VkSubresourceLayout;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): VkSubresourceLayout;
    set(arg0: VkSubresourceLayout): VkSubresourceLayout;
    size(): number;
    size(arg0: number): VkSubresourceLayout;
    sizeof(): number;
}