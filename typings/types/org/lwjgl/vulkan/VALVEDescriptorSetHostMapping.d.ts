import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { VkDescriptorSetBindingReferenceVALVE } from '../../../org/lwjgl/vulkan/VkDescriptorSetBindingReferenceVALVE.d.ts'
import type { VkDescriptorSetLayoutHostMappingInfoVALVE } from '../../../org/lwjgl/vulkan/VkDescriptorSetLayoutHostMappingInfoVALVE.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
export class VALVEDescriptorSetHostMapping extends Object {
    static VK_STRUCTURE_TYPE_DESCRIPTOR_SET_BINDING_REFERENCE_VALVE: number;
    static VK_STRUCTURE_TYPE_DESCRIPTOR_SET_LAYOUT_HOST_MAPPING_INFO_VALVE: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_DESCRIPTOR_SET_HOST_MAPPING_FEATURES_VALVE: number;
    static VK_VALVE_DESCRIPTOR_SET_HOST_MAPPING_EXTENSION_NAME: string;
    static VK_VALVE_DESCRIPTOR_SET_HOST_MAPPING_SPEC_VERSION: number;
    static nvkGetDescriptorSetHostMappingVALVE(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static nvkGetDescriptorSetLayoutHostMappingInfoVALVE(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static vkGetDescriptorSetHostMappingVALVE(paramarg0: VkDevice, paramarg1: number, paramarg2: PointerBuffer): void;
    static vkGetDescriptorSetLayoutHostMappingInfoVALVE(paramarg0: VkDevice, paramarg1: VkDescriptorSetBindingReferenceVALVE, paramarg2: VkDescriptorSetLayoutHostMappingInfoVALVE): void;
    constructor()
}