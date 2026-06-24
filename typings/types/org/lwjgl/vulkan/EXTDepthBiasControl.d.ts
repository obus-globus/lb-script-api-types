import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkDepthBiasInfoEXT } from '../../../org/lwjgl/vulkan/VkDepthBiasInfoEXT.d.ts'
export class EXTDepthBiasControl extends Object {
    static VK_DEPTH_BIAS_REPRESENTATION_FLOAT_EXT: number;
    static VK_DEPTH_BIAS_REPRESENTATION_LEAST_REPRESENTABLE_VALUE_FORCE_UNORM_EXT: number;
    static VK_DEPTH_BIAS_REPRESENTATION_LEAST_REPRESENTABLE_VALUE_FORMAT_EXT: number;
    static VK_EXT_DEPTH_BIAS_CONTROL_EXTENSION_NAME: string;
    static VK_EXT_DEPTH_BIAS_CONTROL_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_DEPTH_BIAS_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_DEPTH_BIAS_REPRESENTATION_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_DEPTH_BIAS_CONTROL_FEATURES_EXT: number;
    static nvkCmdSetDepthBias2EXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdSetDepthBias2EXT(paramarg0: VkCommandBuffer, paramarg1: VkDepthBiasInfoEXT): void;
    constructor()
}