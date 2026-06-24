import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkBeginCustomResolveInfoEXT } from '../../../org/lwjgl/vulkan/VkBeginCustomResolveInfoEXT.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
export class EXTCustomResolve extends Object {
    static VK_EXT_CUSTOM_RESOLVE_EXTENSION_NAME: string;
    static VK_EXT_CUSTOM_RESOLVE_SPEC_VERSION: number;
    static VK_RENDERING_CUSTOM_RESOLVE_BIT_EXT: number;
    static VK_RENDERING_FRAGMENT_REGION_BIT_EXT: number;
    static VK_RESOLVE_MODE_CUSTOM_BIT_EXT: number;
    static VK_STRUCTURE_TYPE_BEGIN_CUSTOM_RESOLVE_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_CUSTOM_RESOLVE_CREATE_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_CUSTOM_RESOLVE_FEATURES_EXT: number;
    static VK_SUBPASS_DESCRIPTION_CUSTOM_RESOLVE_BIT_EXT: number;
    static VK_SUBPASS_DESCRIPTION_FRAGMENT_REGION_BIT_EXT: number;
    static nvkCmdBeginCustomResolveEXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdBeginCustomResolveEXT(paramarg0: VkCommandBuffer, paramarg1: VkBeginCustomResolveInfoEXT): void;
    constructor()
}