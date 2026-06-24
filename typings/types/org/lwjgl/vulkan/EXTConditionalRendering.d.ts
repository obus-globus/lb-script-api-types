import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkConditionalRenderingBeginInfoEXT } from '../../../org/lwjgl/vulkan/VkConditionalRenderingBeginInfoEXT.d.ts'
export class EXTConditionalRendering extends Object {
    static VK_ACCESS_CONDITIONAL_RENDERING_READ_BIT_EXT: number;
    static VK_BUFFER_USAGE_CONDITIONAL_RENDERING_BIT_EXT: number;
    static VK_CONDITIONAL_RENDERING_INVERTED_BIT_EXT: number;
    static VK_EXT_CONDITIONAL_RENDERING_EXTENSION_NAME: string;
    static VK_EXT_CONDITIONAL_RENDERING_SPEC_VERSION: number;
    static VK_PIPELINE_STAGE_CONDITIONAL_RENDERING_BIT_EXT: number;
    static VK_STRUCTURE_TYPE_COMMAND_BUFFER_INHERITANCE_CONDITIONAL_RENDERING_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_CONDITIONAL_RENDERING_BEGIN_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_CONDITIONAL_RENDERING_FEATURES_EXT: number;
    static nvkCmdBeginConditionalRenderingEXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdBeginConditionalRenderingEXT(paramarg0: VkCommandBuffer, paramarg1: VkConditionalRenderingBeginInfoEXT): void;
    static vkCmdEndConditionalRenderingEXT(paramarg0: VkCommandBuffer): void;
    constructor()
}