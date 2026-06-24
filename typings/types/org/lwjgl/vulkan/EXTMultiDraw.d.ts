import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
export class EXTMultiDraw extends Object {
    static VK_EXT_MULTI_DRAW_EXTENSION_NAME: string;
    static VK_EXT_MULTI_DRAW_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_MULTI_DRAW_FEATURES_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_MULTI_DRAW_PROPERTIES_EXT: number;
    static nvkCmdDrawMultiEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static nvkCmdDrawMultiIndexedEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    static vkCmdDrawMultiEXT(paramarg0: VkCommandBuffer, paramarg1: (Object | null)[], paramarg2: number, paramarg3: number, paramarg4: number): void;
    static vkCmdDrawMultiIndexedEXT(paramarg0: VkCommandBuffer, paramarg1: (Object | null)[], paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number[]): void;
    static vkCmdDrawMultiIndexedEXT(paramarg0: VkCommandBuffer, paramarg1: (Object | null)[], paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: IntBuffer): void;
    constructor()
}