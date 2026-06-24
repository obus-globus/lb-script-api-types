import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkDepthClampRangeEXT } from '../../../org/lwjgl/vulkan/VkDepthClampRangeEXT.d.ts'
export class EXTDepthClampControl extends Object {
    static VK_DYNAMIC_STATE_DEPTH_CLAMP_RANGE_EXT: number;
    static VK_EXT_DEPTH_CLAMP_CONTROL_EXTENSION_NAME: string;
    static VK_EXT_DEPTH_CLAMP_CONTROL_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_DEPTH_CLAMP_CONTROL_FEATURES_EXT: number;
    static VK_STRUCTURE_TYPE_PIPELINE_VIEWPORT_DEPTH_CLAMP_CONTROL_CREATE_INFO_EXT: number;
    static nvkCmdSetDepthClampRangeEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number): void;
    static vkCmdSetDepthClampRangeEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: VkDepthClampRangeEXT): void;
    constructor()
}