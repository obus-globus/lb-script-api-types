import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
export class AMDDrawIndirectCount extends Object {
    static VK_AMD_DRAW_INDIRECT_COUNT_EXTENSION_NAME: string;
    static VK_AMD_DRAW_INDIRECT_COUNT_SPEC_VERSION: number;
    static vkCmdDrawIndexedIndirectCountAMD(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    static vkCmdDrawIndirectCountAMD(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    constructor()
}