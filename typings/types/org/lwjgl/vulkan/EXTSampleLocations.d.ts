import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkMultisamplePropertiesEXT } from '../../../org/lwjgl/vulkan/VkMultisamplePropertiesEXT.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
import type { VkSampleLocationsInfoEXT } from '../../../org/lwjgl/vulkan/VkSampleLocationsInfoEXT.d.ts'
export class EXTSampleLocations extends Object {
    static VK_DYNAMIC_STATE_SAMPLE_LOCATIONS_EXT: number;
    static VK_EXT_SAMPLE_LOCATIONS_EXTENSION_NAME: string;
    static VK_EXT_SAMPLE_LOCATIONS_SPEC_VERSION: number;
    static VK_IMAGE_CREATE_SAMPLE_LOCATIONS_COMPATIBLE_DEPTH_BIT_EXT: number;
    static VK_STRUCTURE_TYPE_MULTISAMPLE_PROPERTIES_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_SAMPLE_LOCATIONS_PROPERTIES_EXT: number;
    static VK_STRUCTURE_TYPE_PIPELINE_SAMPLE_LOCATIONS_STATE_CREATE_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_RENDER_PASS_SAMPLE_LOCATIONS_BEGIN_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_SAMPLE_LOCATIONS_INFO_EXT: number;
    static nvkCmdSetSampleLocationsEXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static nvkGetPhysicalDeviceMultisamplePropertiesEXT(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number): void;
    static vkCmdSetSampleLocationsEXT(paramarg0: VkCommandBuffer, paramarg1: VkSampleLocationsInfoEXT): void;
    static vkGetPhysicalDeviceMultisamplePropertiesEXT(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: VkMultisamplePropertiesEXT): void;
    constructor()
}