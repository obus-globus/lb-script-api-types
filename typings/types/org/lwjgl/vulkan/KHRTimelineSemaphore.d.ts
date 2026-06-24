import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkSemaphoreSignalInfo } from '../../../org/lwjgl/vulkan/VkSemaphoreSignalInfo.d.ts'
import type { VkSemaphoreWaitInfo } from '../../../org/lwjgl/vulkan/VkSemaphoreWaitInfo.d.ts'
export class KHRTimelineSemaphore extends Object {
    static VK_KHR_TIMELINE_SEMAPHORE_EXTENSION_NAME: string;
    static VK_KHR_TIMELINE_SEMAPHORE_SPEC_VERSION: number;
    static VK_SEMAPHORE_TYPE_BINARY_KHR: number;
    static VK_SEMAPHORE_TYPE_TIMELINE_KHR: number;
    static VK_SEMAPHORE_WAIT_ANY_BIT_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_TIMELINE_SEMAPHORE_FEATURES_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_TIMELINE_SEMAPHORE_PROPERTIES_KHR: number;
    static VK_STRUCTURE_TYPE_SEMAPHORE_SIGNAL_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_SEMAPHORE_TYPE_CREATE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_SEMAPHORE_WAIT_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_TIMELINE_SEMAPHORE_SUBMIT_INFO_KHR: number;
    static nvkGetSemaphoreCounterValueKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkSignalSemaphoreKHR(paramarg0: VkDevice, paramarg1: number): number;
    static nvkWaitSemaphoresKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static vkGetSemaphoreCounterValueKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: LongBuffer): number;
    static vkGetSemaphoreCounterValueKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number[]): number;
    static vkSignalSemaphoreKHR(paramarg0: VkDevice, paramarg1: VkSemaphoreSignalInfo): number;
    static vkWaitSemaphoresKHR(paramarg0: VkDevice, paramarg1: VkSemaphoreWaitInfo, paramarg2: number): number;
    constructor()
}