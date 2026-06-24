import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
export class EXTLineRasterization extends Object {
    static VK_DYNAMIC_STATE_LINE_STIPPLE_EXT: number;
    static VK_EXT_LINE_RASTERIZATION_EXTENSION_NAME: string;
    static VK_EXT_LINE_RASTERIZATION_SPEC_VERSION: number;
    static VK_LINE_RASTERIZATION_MODE_BRESENHAM_EXT: number;
    static VK_LINE_RASTERIZATION_MODE_DEFAULT_EXT: number;
    static VK_LINE_RASTERIZATION_MODE_RECTANGULAR_EXT: number;
    static VK_LINE_RASTERIZATION_MODE_RECTANGULAR_SMOOTH_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_LINE_RASTERIZATION_FEATURES_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_LINE_RASTERIZATION_PROPERTIES_EXT: number;
    static VK_STRUCTURE_TYPE_PIPELINE_RASTERIZATION_LINE_STATE_CREATE_INFO_EXT: number;
    static vkCmdSetLineStippleEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number): void;
    constructor()
}