import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExtent3D } from '../../../org/lwjgl/vulkan/VkExtent3D.d.ts'
export class VkSparseImageFormatProperties extends Struct<VkSparseImageFormatProperties> implements NativeResource {
    static ALIGNOF: number;
    static ASPECTMASK: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static IMAGEGRANULARITY: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): VkSparseImageFormatProperties;
    static calloc(paramarg0: MemoryStack): VkSparseImageFormatProperties;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSparseImageFormatProperties;
    static create(paramarg0: number): VkSparseImageFormatProperties;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSparseImageFormatProperties;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSparseImageFormatProperties;
    static malloc(paramarg0: MemoryStack): VkSparseImageFormatProperties;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static naspectMask(paramarg0: number): number;
    static nflags(paramarg0: number): number;
    static nimageGranularity(paramarg0: number): VkExtent3D;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    aspectMask(): number;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkSparseImageFormatProperties;
    flags(): number;
    imageGranularity(): VkExtent3D;
    sizeof(): number;
}