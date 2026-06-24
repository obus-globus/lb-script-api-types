import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
export class EXTCalibratedTimestamps extends Object {
    static VK_EXT_CALIBRATED_TIMESTAMPS_EXTENSION_NAME: string;
    static VK_EXT_CALIBRATED_TIMESTAMPS_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_CALIBRATED_TIMESTAMP_INFO_EXT: number;
    static VK_TIME_DOMAIN_CLOCK_MONOTONIC_EXT: number;
    static VK_TIME_DOMAIN_CLOCK_MONOTONIC_KHR: number;
    static VK_TIME_DOMAIN_CLOCK_MONOTONIC_RAW_EXT: number;
    static VK_TIME_DOMAIN_CLOCK_MONOTONIC_RAW_KHR: number;
    static VK_TIME_DOMAIN_DEVICE_EXT: number;
    static VK_TIME_DOMAIN_DEVICE_KHR: number;
    static VK_TIME_DOMAIN_QUERY_PERFORMANCE_COUNTER_EXT: number;
    static VK_TIME_DOMAIN_QUERY_PERFORMANCE_COUNTER_KHR: number;
    static nvkGetCalibratedTimestampsEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static nvkGetPhysicalDeviceCalibrateableTimeDomainsEXT(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number): number;
    static vkGetCalibratedTimestampsEXT(paramarg0: VkDevice, paramarg1: (Object | null)[], paramarg2: LongBuffer, paramarg3: LongBuffer): number;
    static vkGetCalibratedTimestampsEXT(paramarg0: VkDevice, paramarg1: (Object | null)[], paramarg2: number[], paramarg3: number[]): number;
    static vkGetPhysicalDeviceCalibrateableTimeDomainsEXT(paramarg0: VkPhysicalDevice, paramarg1: number[], paramarg2: number[]): number;
    static vkGetPhysicalDeviceCalibrateableTimeDomainsEXT(paramarg0: VkPhysicalDevice, paramarg1: IntBuffer, paramarg2: IntBuffer): number;
    constructor()
}