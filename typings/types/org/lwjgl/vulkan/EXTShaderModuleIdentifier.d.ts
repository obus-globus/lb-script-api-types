import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkShaderModuleCreateInfo } from '../../../org/lwjgl/vulkan/VkShaderModuleCreateInfo.d.ts'
import type { VkShaderModuleIdentifierEXT } from '../../../org/lwjgl/vulkan/VkShaderModuleIdentifierEXT.d.ts'
export class EXTShaderModuleIdentifier extends Object {
    static VK_EXT_SHADER_MODULE_IDENTIFIER_EXTENSION_NAME: string;
    static VK_EXT_SHADER_MODULE_IDENTIFIER_SPEC_VERSION: number;
    static VK_MAX_SHADER_MODULE_IDENTIFIER_SIZE_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_SHADER_MODULE_IDENTIFIER_FEATURES_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_SHADER_MODULE_IDENTIFIER_PROPERTIES_EXT: number;
    static VK_STRUCTURE_TYPE_PIPELINE_SHADER_STAGE_MODULE_IDENTIFIER_CREATE_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_SHADER_MODULE_IDENTIFIER_EXT: number;
    static nvkGetShaderModuleCreateInfoIdentifierEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static nvkGetShaderModuleIdentifierEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static vkGetShaderModuleCreateInfoIdentifierEXT(paramarg0: VkDevice, paramarg1: VkShaderModuleCreateInfo, paramarg2: VkShaderModuleIdentifierEXT): void;
    static vkGetShaderModuleIdentifierEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: VkShaderModuleIdentifierEXT): void;
    constructor()
}