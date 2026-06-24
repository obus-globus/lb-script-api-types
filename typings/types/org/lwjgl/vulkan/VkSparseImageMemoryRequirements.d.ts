import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkSparseImageFormatProperties } from '../../../org/lwjgl/vulkan/VkSparseImageFormatProperties.d.ts'
export class VkSparseImageMemoryRequirements extends Struct<VkSparseImageMemoryRequirements> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FORMATPROPERTIES: number;
    static IMAGEMIPTAILFIRSTLOD: number;
    static IMAGEMIPTAILOFFSET: number;
    static IMAGEMIPTAILSIZE: number;
    static IMAGEMIPTAILSTRIDE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): VkSparseImageMemoryRequirements;
    static calloc(paramarg0: MemoryStack): VkSparseImageMemoryRequirements;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSparseImageMemoryRequirements;
    static create(paramarg0: number): VkSparseImageMemoryRequirements;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSparseImageMemoryRequirements;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSparseImageMemoryRequirements;
    static malloc(paramarg0: MemoryStack): VkSparseImageMemoryRequirements;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nformatProperties(paramarg0: number): VkSparseImageFormatProperties;
    static nimageMipTailFirstLod(paramarg0: number): number;
    static nimageMipTailOffset(paramarg0: number): number;
    static nimageMipTailSize(paramarg0: number): number;
    static nimageMipTailStride(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkSparseImageMemoryRequirements;
    formatProperties(): VkSparseImageFormatProperties;
    imageMipTailFirstLod(): number;
    imageMipTailOffset(): number;
    imageMipTailSize(): number;
    imageMipTailStride(): number;
    sizeof(): number;
}