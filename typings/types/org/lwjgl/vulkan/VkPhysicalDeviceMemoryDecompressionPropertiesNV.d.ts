import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceMemoryDecompressionPropertiesEXT } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceMemoryDecompressionPropertiesEXT.d.ts'
export class VkPhysicalDeviceMemoryDecompressionPropertiesNV extends VkPhysicalDeviceMemoryDecompressionPropertiesEXT {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DECOMPRESSIONMETHODS: number;
    static MAXDECOMPRESSIONINDIRECTCOUNT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceMemoryDecompressionPropertiesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceMemoryDecompressionPropertiesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceMemoryDecompressionPropertiesNV;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceMemoryDecompressionPropertiesNV;
    static create(): VkPhysicalDeviceMemoryDecompressionPropertiesEXT;
    static create(paramarg0: number): VkPhysicalDeviceMemoryDecompressionPropertiesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceMemoryDecompressionPropertiesNV;
    static create(paramarg0: number): VkPhysicalDeviceMemoryDecompressionPropertiesNV;
    static createSafe(paramarg0: number): VkPhysicalDeviceMemoryDecompressionPropertiesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceMemoryDecompressionPropertiesNV;
    static malloc(): VkPhysicalDeviceMemoryDecompressionPropertiesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceMemoryDecompressionPropertiesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceMemoryDecompressionPropertiesNV;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceMemoryDecompressionPropertiesNV;
    static ndecompressionMethods(paramarg0: number): number;
    static nmaxDecompressionIndirectCount(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceMemoryDecompressionPropertiesNV;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceMemoryDecompressionPropertiesNV;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceMemoryDecompressionPropertiesNV;
    sType$Default(): VkPhysicalDeviceMemoryDecompressionPropertiesNV;
    set(arg0: number, arg1: number): VkPhysicalDeviceMemoryDecompressionPropertiesNV;
    set(arg0: VkPhysicalDeviceMemoryDecompressionPropertiesEXT): VkPhysicalDeviceMemoryDecompressionPropertiesEXT;
    set(arg0: VkPhysicalDeviceMemoryDecompressionPropertiesNV): VkPhysicalDeviceMemoryDecompressionPropertiesNV;
}