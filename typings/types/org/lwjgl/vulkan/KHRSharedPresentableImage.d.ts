import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
export class KHRSharedPresentableImage extends Object {
    static VK_IMAGE_LAYOUT_SHARED_PRESENT_KHR: number;
    static VK_KHR_SHARED_PRESENTABLE_IMAGE_EXTENSION_NAME: string;
    static VK_KHR_SHARED_PRESENTABLE_IMAGE_SPEC_VERSION: number;
    static VK_PRESENT_MODE_SHARED_CONTINUOUS_REFRESH_KHR: number;
    static VK_PRESENT_MODE_SHARED_DEMAND_REFRESH_KHR: number;
    static VK_STRUCTURE_TYPE_SHARED_PRESENT_SURFACE_CAPABILITIES_KHR: number;
    static vkGetSwapchainStatusKHR(paramarg0: VkDevice, paramarg1: number): number;
    constructor()
}