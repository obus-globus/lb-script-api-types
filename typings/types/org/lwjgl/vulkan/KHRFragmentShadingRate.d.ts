import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkExtent2D } from '../../../org/lwjgl/vulkan/VkExtent2D.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
export class KHRFragmentShadingRate extends Object {
    static VK_ACCESS_FRAGMENT_SHADING_RATE_ATTACHMENT_READ_BIT_KHR: number;
    static VK_DYNAMIC_STATE_FRAGMENT_SHADING_RATE_KHR: number;
    static VK_FORMAT_FEATURE_2_FRAGMENT_SHADING_RATE_ATTACHMENT_BIT_KHR: number;
    static VK_FORMAT_FEATURE_FRAGMENT_SHADING_RATE_ATTACHMENT_BIT_KHR: number;
    static VK_FRAGMENT_SHADING_RATE_COMBINER_OP_KEEP_KHR: number;
    static VK_FRAGMENT_SHADING_RATE_COMBINER_OP_MAX_KHR: number;
    static VK_FRAGMENT_SHADING_RATE_COMBINER_OP_MIN_KHR: number;
    static VK_FRAGMENT_SHADING_RATE_COMBINER_OP_MUL_KHR: number;
    static VK_FRAGMENT_SHADING_RATE_COMBINER_OP_REPLACE_KHR: number;
    static VK_IMAGE_LAYOUT_FRAGMENT_SHADING_RATE_ATTACHMENT_OPTIMAL_KHR: number;
    static VK_IMAGE_USAGE_FRAGMENT_SHADING_RATE_ATTACHMENT_BIT_KHR: number;
    static VK_KHR_FRAGMENT_SHADING_RATE_EXTENSION_NAME: string;
    static VK_KHR_FRAGMENT_SHADING_RATE_SPEC_VERSION: number;
    static VK_PIPELINE_CREATE_RENDERING_FRAGMENT_SHADING_RATE_ATTACHMENT_BIT_KHR: number;
    static VK_PIPELINE_RASTERIZATION_STATE_CREATE_FRAGMENT_SHADING_RATE_ATTACHMENT_BIT_KHR: number;
    static VK_PIPELINE_STAGE_FRAGMENT_SHADING_RATE_ATTACHMENT_BIT_KHR: number;
    static VK_STRUCTURE_TYPE_FRAGMENT_SHADING_RATE_ATTACHMENT_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_FRAGMENT_SHADING_RATE_FEATURES_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_FRAGMENT_SHADING_RATE_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_FRAGMENT_SHADING_RATE_PROPERTIES_KHR: number;
    static VK_STRUCTURE_TYPE_PIPELINE_FRAGMENT_SHADING_RATE_STATE_CREATE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_RENDERING_FRAGMENT_SHADING_RATE_ATTACHMENT_INFO_KHR: number;
    static nvkCmdSetFragmentShadingRateKHR(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number): void;
    static nvkGetPhysicalDeviceFragmentShadingRatesKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number): number;
    static vkCmdSetFragmentShadingRateKHR(paramarg0: VkCommandBuffer, paramarg1: VkExtent2D, paramarg2: number[]): void;
    static vkCmdSetFragmentShadingRateKHR(paramarg0: VkCommandBuffer, paramarg1: VkExtent2D, paramarg2: IntBuffer): void;
    static vkGetPhysicalDeviceFragmentShadingRatesKHR(paramarg0: VkPhysicalDevice, paramarg1: number[], paramarg2: (Object | null)[]): number;
    static vkGetPhysicalDeviceFragmentShadingRatesKHR(paramarg0: VkPhysicalDevice, paramarg1: IntBuffer, paramarg2: (Object | null)[]): number;
    constructor()
}