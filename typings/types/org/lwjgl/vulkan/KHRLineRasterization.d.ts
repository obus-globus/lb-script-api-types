import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
export class KHRLineRasterization extends Object {
    static VK_DYNAMIC_STATE_LINE_STIPPLE_KHR: number;
    static VK_KHR_LINE_RASTERIZATION_EXTENSION_NAME: string;
    static VK_KHR_LINE_RASTERIZATION_SPEC_VERSION: number;
    static VK_LINE_RASTERIZATION_MODE_BRESENHAM_KHR: number;
    static VK_LINE_RASTERIZATION_MODE_DEFAULT_KHR: number;
    static VK_LINE_RASTERIZATION_MODE_RECTANGULAR_KHR: number;
    static VK_LINE_RASTERIZATION_MODE_RECTANGULAR_SMOOTH_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_LINE_RASTERIZATION_FEATURES_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_LINE_RASTERIZATION_PROPERTIES_KHR: number;
    static VK_STRUCTURE_TYPE_PIPELINE_RASTERIZATION_LINE_STATE_CREATE_INFO_KHR: number;
    static vkCmdSetLineStippleKHR(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number): void;
    constructor()
}