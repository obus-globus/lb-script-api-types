import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
export class KHRCalibratedTimestamps extends Object {
    static VK_KHR_CALIBRATED_TIMESTAMPS_EXTENSION_NAME: string;
    static VK_KHR_CALIBRATED_TIMESTAMPS_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_CALIBRATED_TIMESTAMP_INFO_KHR: number;
    static nvkGetCalibratedTimestampsKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static nvkGetPhysicalDeviceCalibrateableTimeDomainsKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number): number;
    static vkGetCalibratedTimestampsKHR(paramarg0: VkDevice, paramarg1: (Object | null)[], paramarg2: LongBuffer, paramarg3: LongBuffer): number;
    static vkGetCalibratedTimestampsKHR(paramarg0: VkDevice, paramarg1: (Object | null)[], paramarg2: number[], paramarg3: number[]): number;
    static vkGetPhysicalDeviceCalibrateableTimeDomainsKHR(paramarg0: VkPhysicalDevice, paramarg1: number[], paramarg2: number[]): number;
    static vkGetPhysicalDeviceCalibrateableTimeDomainsKHR(paramarg0: VkPhysicalDevice, paramarg1: IntBuffer, paramarg2: IntBuffer): number;
    constructor()
}