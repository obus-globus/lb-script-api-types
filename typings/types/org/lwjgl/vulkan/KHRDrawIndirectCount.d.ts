import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
export class KHRDrawIndirectCount extends Object {
    static VK_KHR_DRAW_INDIRECT_COUNT_EXTENSION_NAME: string;
    static VK_KHR_DRAW_INDIRECT_COUNT_SPEC_VERSION: number;
    static vkCmdDrawIndexedIndirectCountKHR(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    static vkCmdDrawIndirectCountKHR(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    constructor()
}