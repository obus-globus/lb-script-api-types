import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkReleaseSwapchainImagesInfoKHR } from '../../../org/lwjgl/vulkan/VkReleaseSwapchainImagesInfoKHR.d.ts'
export class KHRSwapchainMaintenance1 extends Object {
    static VK_KHR_SWAPCHAIN_MAINTENANCE_1_EXTENSION_NAME: string;
    static VK_KHR_SWAPCHAIN_MAINTENANCE_1_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_SWAPCHAIN_MAINTENANCE_1_FEATURES_KHR: number;
    static VK_STRUCTURE_TYPE_RELEASE_SWAPCHAIN_IMAGES_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_SWAPCHAIN_PRESENT_FENCE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_SWAPCHAIN_PRESENT_MODES_CREATE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_SWAPCHAIN_PRESENT_MODE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_SWAPCHAIN_PRESENT_SCALING_CREATE_INFO_KHR: number;
    static VK_SWAPCHAIN_CREATE_DEFERRED_MEMORY_ALLOCATION_BIT_KHR: number;
    static nvkReleaseSwapchainImagesKHR(paramarg0: VkDevice, paramarg1: number): number;
    static vkReleaseSwapchainImagesKHR(paramarg0: VkDevice, paramarg1: VkReleaseSwapchainImagesInfoKHR): number;
    constructor()
}