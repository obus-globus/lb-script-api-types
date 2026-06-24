import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceMaintenance4Features } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceMaintenance4Features.d.ts'
export class VkPhysicalDeviceMaintenance4FeaturesKHR extends VkPhysicalDeviceMaintenance4Features {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAINTENANCE4: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceMaintenance4Features;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceMaintenance4Features;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceMaintenance4FeaturesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceMaintenance4FeaturesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceMaintenance4Features;
    static create(paramarg0: number): VkPhysicalDeviceMaintenance4Features;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceMaintenance4FeaturesKHR;
    static create(paramarg0: number): VkPhysicalDeviceMaintenance4FeaturesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceMaintenance4Features;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceMaintenance4FeaturesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceMaintenance4Features;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceMaintenance4Features;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceMaintenance4FeaturesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceMaintenance4FeaturesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmaintenance4(paramarg0: number): number;
    static nmaintenance4(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceMaintenance4FeaturesKHR;
    maintenance4(): boolean;
    maintenance4(arg0: boolean): VkPhysicalDeviceMaintenance4FeaturesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceMaintenance4FeaturesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceMaintenance4FeaturesKHR;
    sType$Default(): VkPhysicalDeviceMaintenance4FeaturesKHR;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDeviceMaintenance4FeaturesKHR;
    set(arg0: VkPhysicalDeviceMaintenance4Features): VkPhysicalDeviceMaintenance4Features;
    set(arg0: VkPhysicalDeviceMaintenance4FeaturesKHR): VkPhysicalDeviceMaintenance4FeaturesKHR;
}