import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
export class EXTVertexInputDynamicState extends Object {
    static VK_DYNAMIC_STATE_VERTEX_INPUT_EXT: number;
    static VK_EXT_VERTEX_INPUT_DYNAMIC_STATE_EXTENSION_NAME: string;
    static VK_EXT_VERTEX_INPUT_DYNAMIC_STATE_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_VERTEX_INPUT_DYNAMIC_STATE_FEATURES_EXT: number;
    static VK_STRUCTURE_TYPE_VERTEX_INPUT_ATTRIBUTE_DESCRIPTION_2_EXT: number;
    static VK_STRUCTURE_TYPE_VERTEX_INPUT_BINDING_DESCRIPTION_2_EXT: number;
    static nvkCmdSetVertexInputEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static vkCmdSetVertexInputEXT(paramarg0: VkCommandBuffer, paramarg1: (Object | null)[], paramarg2: (Object | null)[]): void;
    constructor()
}