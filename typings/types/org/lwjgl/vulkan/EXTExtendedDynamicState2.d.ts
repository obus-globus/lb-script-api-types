import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
export class EXTExtendedDynamicState2 extends Object {
    static VK_DYNAMIC_STATE_DEPTH_BIAS_ENABLE_EXT: number;
    static VK_DYNAMIC_STATE_LOGIC_OP_EXT: number;
    static VK_DYNAMIC_STATE_PATCH_CONTROL_POINTS_EXT: number;
    static VK_DYNAMIC_STATE_PRIMITIVE_RESTART_ENABLE_EXT: number;
    static VK_DYNAMIC_STATE_RASTERIZER_DISCARD_ENABLE_EXT: number;
    static VK_EXT_EXTENDED_DYNAMIC_STATE_2_EXTENSION_NAME: string;
    static VK_EXT_EXTENDED_DYNAMIC_STATE_2_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_EXTENDED_DYNAMIC_STATE_2_FEATURES_EXT: number;
    static vkCmdSetDepthBiasEnableEXT(paramarg0: VkCommandBuffer, paramarg1: boolean): void;
    static vkCmdSetLogicOpEXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdSetPatchControlPointsEXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdSetPrimitiveRestartEnableEXT(paramarg0: VkCommandBuffer, paramarg1: boolean): void;
    static vkCmdSetRasterizerDiscardEnableEXT(paramarg0: VkCommandBuffer, paramarg1: boolean): void;
    constructor()
}