import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkRenderingEndInfoKHR } from '../../../org/lwjgl/vulkan/VkRenderingEndInfoKHR.d.ts'
export class EXTFragmentDensityMapOffset extends Object {
    static VK_EXT_FRAGMENT_DENSITY_MAP_OFFSET_EXTENSION_NAME: string;
    static VK_EXT_FRAGMENT_DENSITY_MAP_OFFSET_SPEC_VERSION: number;
    static VK_IMAGE_CREATE_FRAGMENT_DENSITY_MAP_OFFSET_BIT_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_FRAGMENT_DENSITY_MAP_OFFSET_FEATURES_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_FRAGMENT_DENSITY_MAP_OFFSET_PROPERTIES_EXT: number;
    static VK_STRUCTURE_TYPE_RENDERING_END_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_RENDER_PASS_FRAGMENT_DENSITY_MAP_OFFSET_END_INFO_EXT: number;
    static nvkCmdEndRendering2EXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdEndRendering2EXT(paramarg0: VkCommandBuffer, paramarg1: VkRenderingEndInfoKHR): void;
    constructor()
}