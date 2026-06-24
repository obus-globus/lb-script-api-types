import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkBaseOutStructure } from '../../../org/lwjgl/vulkan/VkBaseOutStructure.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkPipelineInfoEXT } from '../../../org/lwjgl/vulkan/VkPipelineInfoEXT.d.ts'
export class EXTPipelineProperties extends Object {
    static VK_EXT_PIPELINE_PROPERTIES_EXTENSION_NAME: string;
    static VK_EXT_PIPELINE_PROPERTIES_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_PIPELINE_PROPERTIES_FEATURES_EXT: number;
    static VK_STRUCTURE_TYPE_PIPELINE_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_PIPELINE_PROPERTIES_IDENTIFIER_EXT: number;
    static nvkGetPipelinePropertiesEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static vkGetPipelinePropertiesEXT(paramarg0: VkDevice, paramarg1: VkPipelineInfoEXT, paramarg2: VkBaseOutStructure): number;
    constructor()
}