import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceLineRasterizationProperties } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceLineRasterizationProperties.d.ts'
export class VkPhysicalDeviceLineRasterizationPropertiesKHR extends VkPhysicalDeviceLineRasterizationProperties {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static LINESUBPIXELPRECISIONBITS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceLineRasterizationProperties;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceLineRasterizationProperties;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceLineRasterizationPropertiesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceLineRasterizationPropertiesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceLineRasterizationProperties;
    static create(paramarg0: number): VkPhysicalDeviceLineRasterizationProperties;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceLineRasterizationPropertiesKHR;
    static create(paramarg0: number): VkPhysicalDeviceLineRasterizationPropertiesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceLineRasterizationProperties;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceLineRasterizationPropertiesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceLineRasterizationProperties;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceLineRasterizationProperties;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceLineRasterizationPropertiesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceLineRasterizationPropertiesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nlineSubPixelPrecisionBits(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceLineRasterizationPropertiesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceLineRasterizationPropertiesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceLineRasterizationPropertiesKHR;
    sType$Default(): VkPhysicalDeviceLineRasterizationPropertiesKHR;
    set(arg0: number, arg1: number): VkPhysicalDeviceLineRasterizationPropertiesKHR;
    set(arg0: VkPhysicalDeviceLineRasterizationProperties): VkPhysicalDeviceLineRasterizationProperties;
    set(arg0: VkPhysicalDeviceLineRasterizationPropertiesKHR): VkPhysicalDeviceLineRasterizationPropertiesKHR;
}