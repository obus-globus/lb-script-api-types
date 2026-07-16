import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceTimelineSemaphoreProperties } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceTimelineSemaphoreProperties.d.ts'
export class VkPhysicalDeviceTimelineSemaphorePropertiesKHR extends VkPhysicalDeviceTimelineSemaphoreProperties {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAXTIMELINESEMAPHOREVALUEDIFFERENCE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceTimelineSemaphoreProperties;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceTimelineSemaphoreProperties;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceTimelineSemaphorePropertiesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceTimelineSemaphorePropertiesKHR;
    static create(): VkPhysicalDeviceTimelineSemaphoreProperties;
    static create(paramarg0: number): VkPhysicalDeviceTimelineSemaphoreProperties;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceTimelineSemaphorePropertiesKHR;
    static create(paramarg0: number): VkPhysicalDeviceTimelineSemaphorePropertiesKHR;
    static createSafe(paramarg0: number): VkPhysicalDeviceTimelineSemaphoreProperties;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceTimelineSemaphorePropertiesKHR;
    static malloc(): VkPhysicalDeviceTimelineSemaphoreProperties;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceTimelineSemaphoreProperties;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceTimelineSemaphorePropertiesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceTimelineSemaphorePropertiesKHR;
    static nmaxTimelineSemaphoreValueDifference(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceTimelineSemaphorePropertiesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceTimelineSemaphorePropertiesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceTimelineSemaphorePropertiesKHR;
    sType$Default(): VkPhysicalDeviceTimelineSemaphorePropertiesKHR;
    set(arg0: number, arg1: number): VkPhysicalDeviceTimelineSemaphorePropertiesKHR;
    set(arg0: VkPhysicalDeviceTimelineSemaphoreProperties): VkPhysicalDeviceTimelineSemaphoreProperties;
    set(arg0: VkPhysicalDeviceTimelineSemaphorePropertiesKHR): VkPhysicalDeviceTimelineSemaphorePropertiesKHR;
}