import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceVulkanMemoryModelFeatures } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceVulkanMemoryModelFeatures.d.ts'
export class VkPhysicalDeviceVulkanMemoryModelFeaturesKHR extends VkPhysicalDeviceVulkanMemoryModelFeatures {
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
    static VULKANMEMORYMODEL: number;
    static VULKANMEMORYMODELAVAILABILITYVISIBILITYCHAINS: number;
    static VULKANMEMORYMODELDEVICESCOPE: number;
    static calloc(): VkPhysicalDeviceVulkanMemoryModelFeatures;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceVulkanMemoryModelFeatures;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPhysicalDeviceVulkanMemoryModelFeaturesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceVulkanMemoryModelFeaturesKHR;
    static create(): VkPhysicalDeviceVulkanMemoryModelFeatures;
    static create(paramarg0: number): VkPhysicalDeviceVulkanMemoryModelFeatures;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPhysicalDeviceVulkanMemoryModelFeaturesKHR;
    static create(paramarg0: number): VkPhysicalDeviceVulkanMemoryModelFeaturesKHR;
    static createSafe(paramarg0: number): VkPhysicalDeviceVulkanMemoryModelFeatures;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceVulkanMemoryModelFeaturesKHR;
    static malloc(): VkPhysicalDeviceVulkanMemoryModelFeatures;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceVulkanMemoryModelFeatures;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPhysicalDeviceVulkanMemoryModelFeaturesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceVulkanMemoryModelFeaturesKHR;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nvulkanMemoryModel(paramarg0: number): number;
    static nvulkanMemoryModel(paramarg0: number, paramarg1: number): void;
    static nvulkanMemoryModelAvailabilityVisibilityChains(paramarg0: number): number;
    static nvulkanMemoryModelAvailabilityVisibilityChains(paramarg0: number, paramarg1: number): void;
    static nvulkanMemoryModelDeviceScope(paramarg0: number): number;
    static nvulkanMemoryModelDeviceScope(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceVulkanMemoryModelFeaturesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceVulkanMemoryModelFeaturesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceVulkanMemoryModelFeaturesKHR;
    sType$Default(): VkPhysicalDeviceVulkanMemoryModelFeaturesKHR;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean): VkPhysicalDeviceVulkanMemoryModelFeaturesKHR;
    set(arg0: VkPhysicalDeviceVulkanMemoryModelFeatures): VkPhysicalDeviceVulkanMemoryModelFeatures;
    set(arg0: VkPhysicalDeviceVulkanMemoryModelFeaturesKHR): VkPhysicalDeviceVulkanMemoryModelFeaturesKHR;
    vulkanMemoryModel(): boolean;
    vulkanMemoryModel(arg0: boolean): VkPhysicalDeviceVulkanMemoryModelFeaturesKHR;
    vulkanMemoryModelAvailabilityVisibilityChains(): boolean;
    vulkanMemoryModelAvailabilityVisibilityChains(arg0: boolean): VkPhysicalDeviceVulkanMemoryModelFeaturesKHR;
    vulkanMemoryModelDeviceScope(): boolean;
    vulkanMemoryModelDeviceScope(arg0: boolean): VkPhysicalDeviceVulkanMemoryModelFeaturesKHR;
}