import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkImageDrmFormatModifierPropertiesEXT } from '../../../org/lwjgl/vulkan/VkImageDrmFormatModifierPropertiesEXT.d.ts'
export class EXTImageDrmFormatModifier extends Object {
    static VK_ERROR_INVALID_DRM_FORMAT_MODIFIER_PLANE_LAYOUT_EXT: number;
    static VK_EXT_IMAGE_DRM_FORMAT_MODIFIER_EXTENSION_NAME: string;
    static VK_EXT_IMAGE_DRM_FORMAT_MODIFIER_SPEC_VERSION: number;
    static VK_IMAGE_ASPECT_MEMORY_PLANE_0_BIT_EXT: number;
    static VK_IMAGE_ASPECT_MEMORY_PLANE_1_BIT_EXT: number;
    static VK_IMAGE_ASPECT_MEMORY_PLANE_2_BIT_EXT: number;
    static VK_IMAGE_ASPECT_MEMORY_PLANE_3_BIT_EXT: number;
    static VK_IMAGE_TILING_DRM_FORMAT_MODIFIER_EXT: number;
    static VK_STRUCTURE_TYPE_DRM_FORMAT_MODIFIER_PROPERTIES_LIST_2_EXT: number;
    static VK_STRUCTURE_TYPE_DRM_FORMAT_MODIFIER_PROPERTIES_LIST_EXT: number;
    static VK_STRUCTURE_TYPE_IMAGE_DRM_FORMAT_MODIFIER_EXPLICIT_CREATE_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_IMAGE_DRM_FORMAT_MODIFIER_LIST_CREATE_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_IMAGE_DRM_FORMAT_MODIFIER_PROPERTIES_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_IMAGE_DRM_FORMAT_MODIFIER_INFO_EXT: number;
    static nvkGetImageDrmFormatModifierPropertiesEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static vkGetImageDrmFormatModifierPropertiesEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: VkImageDrmFormatModifierPropertiesEXT): number;
    constructor()
}