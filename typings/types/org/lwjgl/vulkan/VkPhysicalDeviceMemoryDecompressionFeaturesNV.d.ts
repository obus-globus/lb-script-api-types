import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceMemoryDecompressionFeaturesEXT } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceMemoryDecompressionFeaturesEXT.d.ts'
export class VkPhysicalDeviceMemoryDecompressionFeaturesNV extends VkPhysicalDeviceMemoryDecompressionFeaturesEXT {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MEMORYDECOMPRESSION: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceMemoryDecompressionFeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceMemoryDecompressionFeaturesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceMemoryDecompressionFeaturesNV;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceMemoryDecompressionFeaturesNV;
    static create(): VkPhysicalDeviceMemoryDecompressionFeaturesEXT;
    static create(paramarg0: number): VkPhysicalDeviceMemoryDecompressionFeaturesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceMemoryDecompressionFeaturesNV;
    static create(paramarg0: number): VkPhysicalDeviceMemoryDecompressionFeaturesNV;
    static createSafe(paramarg0: number): VkPhysicalDeviceMemoryDecompressionFeaturesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceMemoryDecompressionFeaturesNV;
    static malloc(): VkPhysicalDeviceMemoryDecompressionFeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceMemoryDecompressionFeaturesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceMemoryDecompressionFeaturesNV;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceMemoryDecompressionFeaturesNV;
    static nmemoryDecompression(paramarg0: number): number;
    static nmemoryDecompression(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceMemoryDecompressionFeaturesNV;
    memoryDecompression(): boolean;
    memoryDecompression(arg0: boolean): VkPhysicalDeviceMemoryDecompressionFeaturesNV;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceMemoryDecompressionFeaturesNV;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceMemoryDecompressionFeaturesNV;
    sType$Default(): VkPhysicalDeviceMemoryDecompressionFeaturesNV;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDeviceMemoryDecompressionFeaturesNV;
    set(arg0: VkPhysicalDeviceMemoryDecompressionFeaturesEXT): VkPhysicalDeviceMemoryDecompressionFeaturesEXT;
    set(arg0: VkPhysicalDeviceMemoryDecompressionFeaturesNV): VkPhysicalDeviceMemoryDecompressionFeaturesNV;
}