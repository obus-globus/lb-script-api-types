import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceTimelineSemaphoreFeatures } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceTimelineSemaphoreFeatures.d.ts'
export class VkPhysicalDeviceTimelineSemaphoreFeaturesKHR extends VkPhysicalDeviceTimelineSemaphoreFeatures {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static TIMELINESEMAPHORE: number;
    static calloc(): VkPhysicalDeviceTimelineSemaphoreFeatures;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceTimelineSemaphoreFeatures;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceTimelineSemaphoreFeaturesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceTimelineSemaphoreFeaturesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceTimelineSemaphoreFeatures;
    static create(paramarg0: number): VkPhysicalDeviceTimelineSemaphoreFeatures;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceTimelineSemaphoreFeaturesKHR;
    static create(paramarg0: number): VkPhysicalDeviceTimelineSemaphoreFeaturesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceTimelineSemaphoreFeatures;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceTimelineSemaphoreFeaturesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceTimelineSemaphoreFeatures;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceTimelineSemaphoreFeatures;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceTimelineSemaphoreFeaturesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceTimelineSemaphoreFeaturesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static ntimelineSemaphore(paramarg0: number): number;
    static ntimelineSemaphore(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceTimelineSemaphoreFeaturesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceTimelineSemaphoreFeaturesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceTimelineSemaphoreFeaturesKHR;
    sType$Default(): VkPhysicalDeviceTimelineSemaphoreFeaturesKHR;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDeviceTimelineSemaphoreFeaturesKHR;
    set(arg0: VkPhysicalDeviceTimelineSemaphoreFeatures): VkPhysicalDeviceTimelineSemaphoreFeatures;
    set(arg0: VkPhysicalDeviceTimelineSemaphoreFeaturesKHR): VkPhysicalDeviceTimelineSemaphoreFeaturesKHR;
    timelineSemaphore(): boolean;
    timelineSemaphore(arg0: boolean): VkPhysicalDeviceTimelineSemaphoreFeaturesKHR;
}