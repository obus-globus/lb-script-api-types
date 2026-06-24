import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
export class EXTDiscardRectangles extends Object {
    static VK_DISCARD_RECTANGLE_MODE_EXCLUSIVE_EXT: number;
    static VK_DISCARD_RECTANGLE_MODE_INCLUSIVE_EXT: number;
    static VK_DYNAMIC_STATE_DISCARD_RECTANGLE_ENABLE_EXT: number;
    static VK_DYNAMIC_STATE_DISCARD_RECTANGLE_EXT: number;
    static VK_DYNAMIC_STATE_DISCARD_RECTANGLE_MODE_EXT: number;
    static VK_EXT_DISCARD_RECTANGLES_EXTENSION_NAME: string;
    static VK_EXT_DISCARD_RECTANGLES_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_DISCARD_RECTANGLE_PROPERTIES_EXT: number;
    static VK_STRUCTURE_TYPE_PIPELINE_DISCARD_RECTANGLE_STATE_CREATE_INFO_EXT: number;
    static nvkCmdSetDiscardRectangleEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static vkCmdSetDiscardRectangleEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: (Object | null)[]): void;
    static vkCmdSetDiscardRectangleEnableEXT(paramarg0: VkCommandBuffer, paramarg1: boolean): void;
    static vkCmdSetDiscardRectangleModeEXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    constructor()
}