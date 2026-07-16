import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDecompressMemoryRegionNV extends Struct<VkDecompressMemoryRegionNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COMPRESSEDSIZE: number;
    static DECOMPRESSEDSIZE: number;
    static DECOMPRESSIONMETHOD: number;
    static DSTADDRESS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SRCADDRESS: number;
    static calloc(): VkDecompressMemoryRegionNV;
    static calloc(paramarg0: MemoryStack): VkDecompressMemoryRegionNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDecompressMemoryRegionNV;
    static create(paramarg0: number): VkDecompressMemoryRegionNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDecompressMemoryRegionNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDecompressMemoryRegionNV;
    static malloc(paramarg0: MemoryStack): VkDecompressMemoryRegionNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncompressedSize(paramarg0: number): number;
    static ncompressedSize(paramarg0: number, paramarg1: number): void;
    static ndecompressedSize(paramarg0: number): number;
    static ndecompressedSize(paramarg0: number, paramarg1: number): void;
    static ndecompressionMethod(paramarg0: number): number;
    static ndecompressionMethod(paramarg0: number, paramarg1: number): void;
    static ndstAddress(paramarg0: number): number;
    static ndstAddress(paramarg0: number, paramarg1: number): void;
    static nsrcAddress(paramarg0: number): number;
    static nsrcAddress(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    compressedSize(): number;
    compressedSize(arg0: number): VkDecompressMemoryRegionNV;
    create(arg0: number, arg1: ByteBuffer): VkDecompressMemoryRegionNV;
    decompressedSize(): number;
    decompressedSize(arg0: number): VkDecompressMemoryRegionNV;
    decompressionMethod(): number;
    decompressionMethod(arg0: number): VkDecompressMemoryRegionNV;
    dstAddress(): number;
    dstAddress(arg0: number): VkDecompressMemoryRegionNV;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): VkDecompressMemoryRegionNV;
    set(arg0: VkDecompressMemoryRegionNV): VkDecompressMemoryRegionNV;
    sizeof(): number;
    srcAddress(): number;
    srcAddress(arg0: number): VkDecompressMemoryRegionNV;
}