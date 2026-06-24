import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
export class ARMPerformanceCountersByRegion extends Object {
    static VK_ARM_PERFORMANCE_COUNTERS_BY_REGION_EXTENSION_NAME: string;
    static VK_ARM_PERFORMANCE_COUNTERS_BY_REGION_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_PERFORMANCE_COUNTER_ARM: number;
    static VK_STRUCTURE_TYPE_PERFORMANCE_COUNTER_DESCRIPTION_ARM: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_PERFORMANCE_COUNTERS_BY_REGION_FEATURES_ARM: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_PERFORMANCE_COUNTERS_BY_REGION_PROPERTIES_ARM: number;
    static VK_STRUCTURE_TYPE_RENDER_PASS_PERFORMANCE_COUNTERS_BY_REGION_BEGIN_INFO_ARM: number;
    static nvkEnumeratePhysicalDeviceQueueFamilyPerformanceCountersByRegionARM(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static vkEnumeratePhysicalDeviceQueueFamilyPerformanceCountersByRegionARM(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number[], paramarg3: (Object | null)[], paramarg4: (Object | null)[]): number;
    static vkEnumeratePhysicalDeviceQueueFamilyPerformanceCountersByRegionARM(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: IntBuffer, paramarg3: (Object | null)[], paramarg4: (Object | null)[]): number;
    constructor()
}