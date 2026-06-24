import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExtent3D } from '../../../org/lwjgl/vulkan/VkExtent3D.d.ts'
export class VkImageFormatProperties extends Struct<VkImageFormatProperties> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAXARRAYLAYERS: number;
    static MAXEXTENT: number;
    static MAXMIPLEVELS: number;
    static MAXRESOURCESIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SAMPLECOUNTS: number;
    static SIZEOF: number;
    static calloc(): VkImageFormatProperties;
    static calloc(paramarg0: MemoryStack): VkImageFormatProperties;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkImageFormatProperties;
    static create(paramarg0: number): VkImageFormatProperties;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkImageFormatProperties;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkImageFormatProperties;
    static malloc(paramarg0: MemoryStack): VkImageFormatProperties;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmaxArrayLayers(paramarg0: number): number;
    static nmaxExtent(paramarg0: number): VkExtent3D;
    static nmaxMipLevels(paramarg0: number): number;
    static nmaxResourceSize(paramarg0: number): number;
    static nsampleCounts(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkImageFormatProperties;
    maxArrayLayers(): number;
    maxExtent(): VkExtent3D;
    maxMipLevels(): number;
    maxResourceSize(): number;
    sampleCounts(): number;
    sizeof(): number;
}