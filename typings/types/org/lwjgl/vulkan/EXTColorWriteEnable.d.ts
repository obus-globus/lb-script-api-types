import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
export class EXTColorWriteEnable extends Object {
    static VK_DYNAMIC_STATE_COLOR_WRITE_ENABLE_EXT: number;
    static VK_EXT_COLOR_WRITE_ENABLE_EXTENSION_NAME: string;
    static VK_EXT_COLOR_WRITE_ENABLE_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_COLOR_WRITE_ENABLE_FEATURES_EXT: number;
    static VK_STRUCTURE_TYPE_PIPELINE_COLOR_WRITE_CREATE_INFO_EXT: number;
    static nvkCmdSetColorWriteEnableEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number): void;
    static vkCmdSetColorWriteEnableEXT(paramarg0: VkCommandBuffer, paramarg1: number[]): void;
    static vkCmdSetColorWriteEnableEXT(paramarg0: VkCommandBuffer, paramarg1: IntBuffer): void;
    constructor()
}