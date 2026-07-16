import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceMaintenance6Properties } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceMaintenance6Properties.d.ts'
export class VkPhysicalDeviceMaintenance6PropertiesKHR extends VkPhysicalDeviceMaintenance6Properties {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BLOCKTEXELVIEWCOMPATIBLEMULTIPLELAYERS: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FRAGMENTSHADINGRATECLAMPCOMBINERINPUTS: number;
    static MAXCOMBINEDIMAGESAMPLERDESCRIPTORCOUNT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceMaintenance6Properties;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceMaintenance6Properties;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceMaintenance6PropertiesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceMaintenance6PropertiesKHR;
    static create(): VkPhysicalDeviceMaintenance6Properties;
    static create(paramarg0: number): VkPhysicalDeviceMaintenance6Properties;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceMaintenance6PropertiesKHR;
    static create(paramarg0: number): VkPhysicalDeviceMaintenance6PropertiesKHR;
    static createSafe(paramarg0: number): VkPhysicalDeviceMaintenance6Properties;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceMaintenance6PropertiesKHR;
    static malloc(): VkPhysicalDeviceMaintenance6Properties;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceMaintenance6Properties;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceMaintenance6PropertiesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceMaintenance6PropertiesKHR;
    static nblockTexelViewCompatibleMultipleLayers(paramarg0: number): number;
    static nfragmentShadingRateClampCombinerInputs(paramarg0: number): number;
    static nmaxCombinedImageSamplerDescriptorCount(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceMaintenance6PropertiesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceMaintenance6PropertiesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceMaintenance6PropertiesKHR;
    sType$Default(): VkPhysicalDeviceMaintenance6PropertiesKHR;
    set(arg0: number, arg1: number): VkPhysicalDeviceMaintenance6PropertiesKHR;
    set(arg0: VkPhysicalDeviceMaintenance6Properties): VkPhysicalDeviceMaintenance6Properties;
    set(arg0: VkPhysicalDeviceMaintenance6PropertiesKHR): VkPhysicalDeviceMaintenance6PropertiesKHR;
}