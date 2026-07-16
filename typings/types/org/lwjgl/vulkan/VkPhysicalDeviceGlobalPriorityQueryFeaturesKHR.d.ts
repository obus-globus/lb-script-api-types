import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceGlobalPriorityQueryFeatures } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceGlobalPriorityQueryFeatures.d.ts'
export class VkPhysicalDeviceGlobalPriorityQueryFeaturesKHR extends VkPhysicalDeviceGlobalPriorityQueryFeatures {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static GLOBALPRIORITYQUERY: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceGlobalPriorityQueryFeatures;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceGlobalPriorityQueryFeatures;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceGlobalPriorityQueryFeaturesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceGlobalPriorityQueryFeaturesKHR;
    static create(): VkPhysicalDeviceGlobalPriorityQueryFeatures;
    static create(paramarg0: number): VkPhysicalDeviceGlobalPriorityQueryFeatures;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceGlobalPriorityQueryFeaturesKHR;
    static create(paramarg0: number): VkPhysicalDeviceGlobalPriorityQueryFeaturesKHR;
    static createSafe(paramarg0: number): VkPhysicalDeviceGlobalPriorityQueryFeatures;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceGlobalPriorityQueryFeaturesKHR;
    static malloc(): VkPhysicalDeviceGlobalPriorityQueryFeatures;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceGlobalPriorityQueryFeatures;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceGlobalPriorityQueryFeaturesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceGlobalPriorityQueryFeaturesKHR;
    static nglobalPriorityQuery(paramarg0: number): number;
    static nglobalPriorityQuery(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceGlobalPriorityQueryFeaturesKHR;
    globalPriorityQuery(): boolean;
    globalPriorityQuery(arg0: boolean): VkPhysicalDeviceGlobalPriorityQueryFeaturesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceGlobalPriorityQueryFeaturesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceGlobalPriorityQueryFeaturesKHR;
    sType$Default(): VkPhysicalDeviceGlobalPriorityQueryFeaturesKHR;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDeviceGlobalPriorityQueryFeaturesKHR;
    set(arg0: VkPhysicalDeviceGlobalPriorityQueryFeatures): VkPhysicalDeviceGlobalPriorityQueryFeatures;
    set(arg0: VkPhysicalDeviceGlobalPriorityQueryFeaturesKHR): VkPhysicalDeviceGlobalPriorityQueryFeaturesKHR;
}