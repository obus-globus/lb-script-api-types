import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
export class NVClipSpaceWScaling extends Object {
    static VK_DYNAMIC_STATE_VIEWPORT_W_SCALING_NV: number;
    static VK_NV_CLIP_SPACE_W_SCALING_EXTENSION_NAME: string;
    static VK_NV_CLIP_SPACE_W_SCALING_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_PIPELINE_VIEWPORT_W_SCALING_STATE_CREATE_INFO_NV: number;
    static nvkCmdSetViewportWScalingNV(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static vkCmdSetViewportWScalingNV(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: (Object | null)[]): void;
    constructor()
}