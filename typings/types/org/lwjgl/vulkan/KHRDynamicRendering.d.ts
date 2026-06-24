import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkRenderingInfo } from '../../../org/lwjgl/vulkan/VkRenderingInfo.d.ts'
export class KHRDynamicRendering extends Object {
    static VK_ATTACHMENT_STORE_OP_NONE_KHR: number;
    static VK_KHR_DYNAMIC_RENDERING_EXTENSION_NAME: string;
    static VK_KHR_DYNAMIC_RENDERING_SPEC_VERSION: number;
    static VK_RENDERING_CONTENTS_SECONDARY_COMMAND_BUFFERS_BIT_KHR: number;
    static VK_RENDERING_RESUMING_BIT_KHR: number;
    static VK_RENDERING_SUSPENDING_BIT_KHR: number;
    static VK_STRUCTURE_TYPE_COMMAND_BUFFER_INHERITANCE_RENDERING_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_DYNAMIC_RENDERING_FEATURES_KHR: number;
    static VK_STRUCTURE_TYPE_PIPELINE_RENDERING_CREATE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_RENDERING_ATTACHMENT_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_RENDERING_INFO_KHR: number;
    static nvkCmdBeginRenderingKHR(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdBeginRenderingKHR(paramarg0: VkCommandBuffer, paramarg1: VkRenderingInfo): void;
    static vkCmdEndRenderingKHR(paramarg0: VkCommandBuffer): void;
    constructor()
}