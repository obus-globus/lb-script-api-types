import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
export class KHRDisplaySwapchain extends Object {
    static VK_ERROR_INCOMPATIBLE_DISPLAY_KHR: number;
    static VK_KHR_DISPLAY_SWAPCHAIN_EXTENSION_NAME: string;
    static VK_KHR_DISPLAY_SWAPCHAIN_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_DISPLAY_PRESENT_INFO_KHR: number;
    static nvkCreateSharedSwapchainsKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static vkCreateSharedSwapchainsKHR(paramarg0: VkDevice, paramarg1: (Object | null)[], paramarg2: VkAllocationCallbacks, paramarg3: LongBuffer): number;
    static vkCreateSharedSwapchainsKHR(paramarg0: VkDevice, paramarg1: (Object | null)[], paramarg2: VkAllocationCallbacks, paramarg3: number[]): number;
    constructor()
}