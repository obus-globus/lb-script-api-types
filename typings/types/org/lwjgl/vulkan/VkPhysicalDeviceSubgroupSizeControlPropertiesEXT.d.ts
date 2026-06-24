import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceSubgroupSizeControlProperties } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceSubgroupSizeControlProperties.d.ts'
export class VkPhysicalDeviceSubgroupSizeControlPropertiesEXT extends VkPhysicalDeviceSubgroupSizeControlProperties {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAXCOMPUTEWORKGROUPSUBGROUPS: number;
    static MAXSUBGROUPSIZE: number;
    static MINSUBGROUPSIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static REQUIREDSUBGROUPSIZESTAGES: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceSubgroupSizeControlProperties;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceSubgroupSizeControlProperties;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceSubgroupSizeControlPropertiesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceSubgroupSizeControlPropertiesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceSubgroupSizeControlProperties;
    static create(paramarg0: number): VkPhysicalDeviceSubgroupSizeControlProperties;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceSubgroupSizeControlPropertiesEXT;
    static create(paramarg0: number): VkPhysicalDeviceSubgroupSizeControlPropertiesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceSubgroupSizeControlProperties;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceSubgroupSizeControlPropertiesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceSubgroupSizeControlProperties;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceSubgroupSizeControlProperties;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceSubgroupSizeControlPropertiesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceSubgroupSizeControlPropertiesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmaxComputeWorkgroupSubgroups(paramarg0: number): number;
    static nmaxSubgroupSize(paramarg0: number): number;
    static nminSubgroupSize(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nrequiredSubgroupSizeStages(paramarg0: number): number;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceSubgroupSizeControlPropertiesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceSubgroupSizeControlPropertiesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceSubgroupSizeControlPropertiesEXT;
    sType$Default(): VkPhysicalDeviceSubgroupSizeControlPropertiesEXT;
    set(arg0: number, arg1: number): VkPhysicalDeviceSubgroupSizeControlPropertiesEXT;
    set(arg0: VkPhysicalDeviceSubgroupSizeControlProperties): VkPhysicalDeviceSubgroupSizeControlProperties;
    set(arg0: VkPhysicalDeviceSubgroupSizeControlPropertiesEXT): VkPhysicalDeviceSubgroupSizeControlPropertiesEXT;
}