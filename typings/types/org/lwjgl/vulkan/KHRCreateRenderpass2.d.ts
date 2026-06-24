import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkRenderPassBeginInfo } from '../../../org/lwjgl/vulkan/VkRenderPassBeginInfo.d.ts'
import type { VkRenderPassCreateInfo2 } from '../../../org/lwjgl/vulkan/VkRenderPassCreateInfo2.d.ts'
import type { VkSubpassBeginInfo } from '../../../org/lwjgl/vulkan/VkSubpassBeginInfo.d.ts'
import type { VkSubpassEndInfo } from '../../../org/lwjgl/vulkan/VkSubpassEndInfo.d.ts'
export class KHRCreateRenderpass2 extends Object {
    static VK_KHR_CREATE_RENDERPASS_2_EXTENSION_NAME: string;
    static VK_KHR_CREATE_RENDERPASS_2_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_ATTACHMENT_DESCRIPTION_2_KHR: number;
    static VK_STRUCTURE_TYPE_ATTACHMENT_REFERENCE_2_KHR: number;
    static VK_STRUCTURE_TYPE_RENDER_PASS_CREATE_INFO_2_KHR: number;
    static VK_STRUCTURE_TYPE_SUBPASS_BEGIN_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_SUBPASS_DEPENDENCY_2_KHR: number;
    static VK_STRUCTURE_TYPE_SUBPASS_DESCRIPTION_2_KHR: number;
    static VK_STRUCTURE_TYPE_SUBPASS_END_INFO_KHR: number;
    static nvkCmdBeginRenderPass2KHR(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number): void;
    static nvkCmdEndRenderPass2KHR(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static nvkCmdNextSubpass2KHR(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number): void;
    static nvkCreateRenderPass2KHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static vkCmdBeginRenderPass2KHR(paramarg0: VkCommandBuffer, paramarg1: VkRenderPassBeginInfo, paramarg2: VkSubpassBeginInfo): void;
    static vkCmdEndRenderPass2KHR(paramarg0: VkCommandBuffer, paramarg1: VkSubpassEndInfo): void;
    static vkCmdNextSubpass2KHR(paramarg0: VkCommandBuffer, paramarg1: VkSubpassBeginInfo, paramarg2: VkSubpassEndInfo): void;
    static vkCreateRenderPass2KHR(paramarg0: VkDevice, paramarg1: VkRenderPassCreateInfo2, paramarg2: VkAllocationCallbacks, paramarg3: LongBuffer): number;
    static vkCreateRenderPass2KHR(paramarg0: VkDevice, paramarg1: VkRenderPassCreateInfo2, paramarg2: VkAllocationCallbacks, paramarg3: number[]): number;
    constructor()
}