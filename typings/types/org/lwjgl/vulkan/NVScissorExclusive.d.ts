import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
export class NVScissorExclusive extends Object {
    static VK_DYNAMIC_STATE_EXCLUSIVE_SCISSOR_ENABLE_NV: number;
    static VK_DYNAMIC_STATE_EXCLUSIVE_SCISSOR_NV: number;
    static VK_NV_SCISSOR_EXCLUSIVE_EXTENSION_NAME: string;
    static VK_NV_SCISSOR_EXCLUSIVE_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_EXCLUSIVE_SCISSOR_FEATURES_NV: number;
    static VK_STRUCTURE_TYPE_PIPELINE_VIEWPORT_EXCLUSIVE_SCISSOR_STATE_CREATE_INFO_NV: number;
    static nvkCmdSetExclusiveScissorEnableNV(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nvkCmdSetExclusiveScissorNV(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static vkCmdSetExclusiveScissorEnableNV(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number[]): void;
    static vkCmdSetExclusiveScissorEnableNV(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: IntBuffer): void;
    static vkCmdSetExclusiveScissorNV(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: (Object | null)[]): void;
    constructor()
}