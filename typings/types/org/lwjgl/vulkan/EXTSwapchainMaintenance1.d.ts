import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkReleaseSwapchainImagesInfoKHR } from '../../../org/lwjgl/vulkan/VkReleaseSwapchainImagesInfoKHR.d.ts'
export class EXTSwapchainMaintenance1 extends Object {
    static VK_EXT_SWAPCHAIN_MAINTENANCE_1_EXTENSION_NAME: string;
    static VK_EXT_SWAPCHAIN_MAINTENANCE_1_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_SWAPCHAIN_MAINTENANCE_1_FEATURES_EXT: number;
    static VK_STRUCTURE_TYPE_RELEASE_SWAPCHAIN_IMAGES_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_SWAPCHAIN_PRESENT_FENCE_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_SWAPCHAIN_PRESENT_MODES_CREATE_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_SWAPCHAIN_PRESENT_MODE_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_SWAPCHAIN_PRESENT_SCALING_CREATE_INFO_EXT: number;
    static VK_SWAPCHAIN_CREATE_DEFERRED_MEMORY_ALLOCATION_BIT_EXT: number;
    static nvkReleaseSwapchainImagesEXT(paramarg0: VkDevice, paramarg1: number): number;
    static vkReleaseSwapchainImagesEXT(paramarg0: VkDevice, paramarg1: VkReleaseSwapchainImagesInfoKHR): number;
    constructor()
}