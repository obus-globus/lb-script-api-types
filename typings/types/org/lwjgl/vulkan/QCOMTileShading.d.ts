import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkDispatchTileInfoQCOM } from '../../../org/lwjgl/vulkan/VkDispatchTileInfoQCOM.d.ts'
import type { VkPerTileBeginInfoQCOM } from '../../../org/lwjgl/vulkan/VkPerTileBeginInfoQCOM.d.ts'
import type { VkPerTileEndInfoQCOM } from '../../../org/lwjgl/vulkan/VkPerTileEndInfoQCOM.d.ts'
export class QCOMTileShading extends Object {
    static VK_ACCESS_2_SHADER_TILE_ATTACHMENT_READ_BIT_QCOM: number;
    static VK_ACCESS_2_SHADER_TILE_ATTACHMENT_WRITE_BIT_QCOM: number;
    static VK_QCOM_TILE_SHADING_EXTENSION_NAME: string;
    static VK_QCOM_TILE_SHADING_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_DISPATCH_TILE_INFO_QCOM: number;
    static VK_STRUCTURE_TYPE_PER_TILE_BEGIN_INFO_QCOM: number;
    static VK_STRUCTURE_TYPE_PER_TILE_END_INFO_QCOM: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_TILE_SHADING_FEATURES_QCOM: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_TILE_SHADING_PROPERTIES_QCOM: number;
    static VK_STRUCTURE_TYPE_RENDER_PASS_TILE_SHADING_CREATE_INFO_QCOM: number;
    static VK_SUBPASS_DESCRIPTION_TILE_SHADING_APRON_BIT_QCOM: number;
    static VK_TILE_SHADING_RENDER_PASS_ENABLE_BIT_QCOM: number;
    static VK_TILE_SHADING_RENDER_PASS_PER_TILE_EXECUTION_BIT_QCOM: number;
    static nvkCmdBeginPerTileExecutionQCOM(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static nvkCmdDispatchTileQCOM(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static nvkCmdEndPerTileExecutionQCOM(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdBeginPerTileExecutionQCOM(paramarg0: VkCommandBuffer, paramarg1: VkPerTileBeginInfoQCOM): void;
    static vkCmdDispatchTileQCOM(paramarg0: VkCommandBuffer, paramarg1: VkDispatchTileInfoQCOM): void;
    static vkCmdEndPerTileExecutionQCOM(paramarg0: VkCommandBuffer, paramarg1: VkPerTileEndInfoQCOM): void;
    constructor()
}