import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkAcquireProfilingLockInfoKHR } from '../../../org/lwjgl/vulkan/VkAcquireProfilingLockInfoKHR.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
import type { VkQueryPoolPerformanceCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkQueryPoolPerformanceCreateInfoKHR.d.ts'
export class KHRPerformanceQuery extends Object {
    static VK_KHR_PERFORMANCE_QUERY_EXTENSION_NAME: string;
    static VK_KHR_PERFORMANCE_QUERY_SPEC_VERSION: number;
    static VK_PERFORMANCE_COUNTER_DESCRIPTION_CONCURRENTLY_IMPACTED_BIT_KHR: number;
    static VK_PERFORMANCE_COUNTER_DESCRIPTION_CONCURRENTLY_IMPACTED_KHR: number;
    static VK_PERFORMANCE_COUNTER_DESCRIPTION_PERFORMANCE_IMPACTING_BIT_KHR: number;
    static VK_PERFORMANCE_COUNTER_DESCRIPTION_PERFORMANCE_IMPACTING_KHR: number;
    static VK_PERFORMANCE_COUNTER_SCOPE_COMMAND_BUFFER_KHR: number;
    static VK_PERFORMANCE_COUNTER_SCOPE_COMMAND_KHR: number;
    static VK_PERFORMANCE_COUNTER_SCOPE_RENDER_PASS_KHR: number;
    static VK_PERFORMANCE_COUNTER_STORAGE_FLOAT32_KHR: number;
    static VK_PERFORMANCE_COUNTER_STORAGE_FLOAT64_KHR: number;
    static VK_PERFORMANCE_COUNTER_STORAGE_INT32_KHR: number;
    static VK_PERFORMANCE_COUNTER_STORAGE_INT64_KHR: number;
    static VK_PERFORMANCE_COUNTER_STORAGE_UINT32_KHR: number;
    static VK_PERFORMANCE_COUNTER_STORAGE_UINT64_KHR: number;
    static VK_PERFORMANCE_COUNTER_UNIT_AMPS_KHR: number;
    static VK_PERFORMANCE_COUNTER_UNIT_BYTES_KHR: number;
    static VK_PERFORMANCE_COUNTER_UNIT_BYTES_PER_SECOND_KHR: number;
    static VK_PERFORMANCE_COUNTER_UNIT_CYCLES_KHR: number;
    static VK_PERFORMANCE_COUNTER_UNIT_GENERIC_KHR: number;
    static VK_PERFORMANCE_COUNTER_UNIT_HERTZ_KHR: number;
    static VK_PERFORMANCE_COUNTER_UNIT_KELVIN_KHR: number;
    static VK_PERFORMANCE_COUNTER_UNIT_NANOSECONDS_KHR: number;
    static VK_PERFORMANCE_COUNTER_UNIT_PERCENTAGE_KHR: number;
    static VK_PERFORMANCE_COUNTER_UNIT_VOLTS_KHR: number;
    static VK_PERFORMANCE_COUNTER_UNIT_WATTS_KHR: number;
    static VK_QUERY_SCOPE_COMMAND_BUFFER_KHR: number;
    static VK_QUERY_SCOPE_COMMAND_KHR: number;
    static VK_QUERY_SCOPE_RENDER_PASS_KHR: number;
    static VK_QUERY_TYPE_PERFORMANCE_QUERY_KHR: number;
    static VK_STRUCTURE_TYPE_ACQUIRE_PROFILING_LOCK_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_PERFORMANCE_COUNTER_DESCRIPTION_KHR: number;
    static VK_STRUCTURE_TYPE_PERFORMANCE_COUNTER_KHR: number;
    static VK_STRUCTURE_TYPE_PERFORMANCE_QUERY_SUBMIT_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_PERFORMANCE_QUERY_FEATURES_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_PERFORMANCE_QUERY_PROPERTIES_KHR: number;
    static VK_STRUCTURE_TYPE_QUERY_POOL_PERFORMANCE_CREATE_INFO_KHR: number;
    static nvkAcquireProfilingLockKHR(paramarg0: VkDevice, paramarg1: number): number;
    static nvkEnumeratePhysicalDeviceQueueFamilyPerformanceQueryCountersKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static nvkGetPhysicalDeviceQueueFamilyPerformanceQueryPassesKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number): void;
    static vkAcquireProfilingLockKHR(paramarg0: VkDevice, paramarg1: VkAcquireProfilingLockInfoKHR): number;
    static vkEnumeratePhysicalDeviceQueueFamilyPerformanceQueryCountersKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number[], paramarg3: (Object | null)[], paramarg4: (Object | null)[]): number;
    static vkEnumeratePhysicalDeviceQueueFamilyPerformanceQueryCountersKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: IntBuffer, paramarg3: (Object | null)[], paramarg4: (Object | null)[]): number;
    static vkGetPhysicalDeviceQueueFamilyPerformanceQueryPassesKHR(paramarg0: VkPhysicalDevice, paramarg1: VkQueryPoolPerformanceCreateInfoKHR, paramarg2: number[]): void;
    static vkGetPhysicalDeviceQueueFamilyPerformanceQueryPassesKHR(paramarg0: VkPhysicalDevice, paramarg1: VkQueryPoolPerformanceCreateInfoKHR, paramarg2: IntBuffer): void;
    static vkReleaseProfilingLockKHR(paramarg0: VkDevice): void;
    constructor()
}