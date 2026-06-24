import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceMaintenance5Features } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceMaintenance5Features.d.ts'
export class VkPhysicalDeviceMaintenance5FeaturesKHR extends VkPhysicalDeviceMaintenance5Features {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAINTENANCE5: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceMaintenance5Features;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceMaintenance5Features;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceMaintenance5FeaturesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceMaintenance5FeaturesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceMaintenance5Features;
    static create(paramarg0: number): VkPhysicalDeviceMaintenance5Features;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceMaintenance5FeaturesKHR;
    static create(paramarg0: number): VkPhysicalDeviceMaintenance5FeaturesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceMaintenance5Features;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceMaintenance5FeaturesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceMaintenance5Features;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceMaintenance5Features;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceMaintenance5FeaturesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceMaintenance5FeaturesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmaintenance5(paramarg0: number): number;
    static nmaintenance5(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceMaintenance5FeaturesKHR;
    maintenance5(): boolean;
    maintenance5(arg0: boolean): VkPhysicalDeviceMaintenance5FeaturesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceMaintenance5FeaturesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceMaintenance5FeaturesKHR;
    sType$Default(): VkPhysicalDeviceMaintenance5FeaturesKHR;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDeviceMaintenance5FeaturesKHR;
    set(arg0: VkPhysicalDeviceMaintenance5Features): VkPhysicalDeviceMaintenance5Features;
    set(arg0: VkPhysicalDeviceMaintenance5FeaturesKHR): VkPhysicalDeviceMaintenance5FeaturesKHR;
}