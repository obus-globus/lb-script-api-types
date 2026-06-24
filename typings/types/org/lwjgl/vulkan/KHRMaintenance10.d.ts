import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkRenderingEndInfoKHR } from '../../../org/lwjgl/vulkan/VkRenderingEndInfoKHR.d.ts'
export class KHRMaintenance10 extends Object {
    static VK_ATTACHMENT_DESCRIPTION_RESOLVE_ENABLE_TRANSFER_FUNCTION_BIT_KHR: number;
    static VK_ATTACHMENT_DESCRIPTION_RESOLVE_SKIP_TRANSFER_FUNCTION_BIT_KHR: number;
    static VK_FORMAT_FEATURE_2_DEPTH_COPY_ON_COMPUTE_QUEUE_BIT_KHR: number;
    static VK_FORMAT_FEATURE_2_DEPTH_COPY_ON_TRANSFER_QUEUE_BIT_KHR: number;
    static VK_FORMAT_FEATURE_2_STENCIL_COPY_ON_COMPUTE_QUEUE_BIT_KHR: number;
    static VK_FORMAT_FEATURE_2_STENCIL_COPY_ON_TRANSFER_QUEUE_BIT_KHR: number;
    static VK_KHR_MAINTENANCE_10_EXTENSION_NAME: string;
    static VK_KHR_MAINTENANCE_10_SPEC_VERSION: number;
    static VK_RENDERING_ATTACHMENT_INPUT_ATTACHMENT_FEEDBACK_BIT_KHR: number;
    static VK_RENDERING_ATTACHMENT_RESOLVE_ENABLE_TRANSFER_FUNCTION_BIT_KHR: number;
    static VK_RENDERING_ATTACHMENT_RESOLVE_SKIP_TRANSFER_FUNCTION_BIT_KHR: number;
    static VK_RENDERING_LOCAL_READ_CONCURRENT_ACCESS_CONTROL_BIT_KHR: number;
    static VK_RESOLVE_IMAGE_ENABLE_TRANSFER_FUNCTION_BIT_KHR: number;
    static VK_RESOLVE_IMAGE_SKIP_TRANSFER_FUNCTION_BIT_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_MAINTENANCE_10_FEATURES_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_MAINTENANCE_10_PROPERTIES_KHR: number;
    static VK_STRUCTURE_TYPE_RENDERING_ATTACHMENT_FLAGS_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_RENDERING_END_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_RESOLVE_IMAGE_MODE_INFO_KHR: number;
    static nvkCmdEndRendering2KHR(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdEndRendering2KHR(paramarg0: VkCommandBuffer, paramarg1: VkRenderingEndInfoKHR): void;
    constructor()
}