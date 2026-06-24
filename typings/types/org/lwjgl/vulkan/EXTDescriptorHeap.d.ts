import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkBindHeapInfoEXT } from '../../../org/lwjgl/vulkan/VkBindHeapInfoEXT.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
import type { VkPushDataInfoEXT } from '../../../org/lwjgl/vulkan/VkPushDataInfoEXT.d.ts'
import type { VkSamplerCustomBorderColorCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkSamplerCustomBorderColorCreateInfoEXT.d.ts'
export class EXTDescriptorHeap extends Object {
    static VK_ACCESS_2_RESOURCE_HEAP_READ_BIT_EXT: number;
    static VK_ACCESS_2_SAMPLER_HEAP_READ_BIT_EXT: number;
    static VK_BUFFER_USAGE_2_DESCRIPTOR_HEAP_BIT_EXT: number;
    static VK_BUFFER_USAGE_DESCRIPTOR_HEAP_BIT_EXT: number;
    static VK_DESCRIPTOR_MAPPING_SOURCE_HEAP_WITH_CONSTANT_OFFSET_EXT: number;
    static VK_DESCRIPTOR_MAPPING_SOURCE_HEAP_WITH_INDIRECT_INDEX_ARRAY_EXT: number;
    static VK_DESCRIPTOR_MAPPING_SOURCE_HEAP_WITH_INDIRECT_INDEX_EXT: number;
    static VK_DESCRIPTOR_MAPPING_SOURCE_HEAP_WITH_PUSH_INDEX_EXT: number;
    static VK_DESCRIPTOR_MAPPING_SOURCE_HEAP_WITH_SHADER_RECORD_INDEX_EXT: number;
    static VK_DESCRIPTOR_MAPPING_SOURCE_INDIRECT_ADDRESS_EXT: number;
    static VK_DESCRIPTOR_MAPPING_SOURCE_PUSH_ADDRESS_EXT: number;
    static VK_DESCRIPTOR_MAPPING_SOURCE_PUSH_DATA_EXT: number;
    static VK_DESCRIPTOR_MAPPING_SOURCE_RESOURCE_HEAP_DATA_EXT: number;
    static VK_DESCRIPTOR_MAPPING_SOURCE_SHADER_RECORD_ADDRESS_EXT: number;
    static VK_DESCRIPTOR_MAPPING_SOURCE_SHADER_RECORD_DATA_EXT: number;
    static VK_EXT_DESCRIPTOR_HEAP_EXTENSION_NAME: string;
    static VK_EXT_DESCRIPTOR_HEAP_SPEC_VERSION: number;
    static VK_IMAGE_CREATE_DESCRIPTOR_HEAP_CAPTURE_REPLAY_BIT_EXT: number;
    static VK_INDIRECT_COMMANDS_TOKEN_TYPE_PUSH_DATA_EXT: number;
    static VK_INDIRECT_COMMANDS_TOKEN_TYPE_PUSH_DATA_NV: number;
    static VK_INDIRECT_COMMANDS_TOKEN_TYPE_PUSH_DATA_SEQUENCE_INDEX_EXT: number;
    static VK_PIPELINE_CREATE_2_DESCRIPTOR_HEAP_BIT_EXT: number;
    static VK_SHADER_CREATE_DESCRIPTOR_HEAP_BIT_EXT: number;
    static VK_SPIRV_RESOURCE_TYPE_ACCELERATION_STRUCTURE_BIT_EXT: number;
    static VK_SPIRV_RESOURCE_TYPE_ALL_EXT: number;
    static VK_SPIRV_RESOURCE_TYPE_COMBINED_SAMPLED_IMAGE_BIT_EXT: number;
    static VK_SPIRV_RESOURCE_TYPE_READ_ONLY_IMAGE_BIT_EXT: number;
    static VK_SPIRV_RESOURCE_TYPE_READ_ONLY_STORAGE_BUFFER_BIT_EXT: number;
    static VK_SPIRV_RESOURCE_TYPE_READ_WRITE_IMAGE_BIT_EXT: number;
    static VK_SPIRV_RESOURCE_TYPE_READ_WRITE_STORAGE_BUFFER_BIT_EXT: number;
    static VK_SPIRV_RESOURCE_TYPE_SAMPLED_IMAGE_BIT_EXT: number;
    static VK_SPIRV_RESOURCE_TYPE_SAMPLER_BIT_EXT: number;
    static VK_SPIRV_RESOURCE_TYPE_TENSOR_BIT_ARM: number;
    static VK_SPIRV_RESOURCE_TYPE_UNIFORM_BUFFER_BIT_EXT: number;
    static VK_STRUCTURE_TYPE_BIND_HEAP_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_COMMAND_BUFFER_INHERITANCE_DESCRIPTOR_HEAP_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_DESCRIPTOR_SET_AND_BINDING_MAPPING_EXT: number;
    static VK_STRUCTURE_TYPE_IMAGE_DESCRIPTOR_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_INDIRECT_COMMANDS_LAYOUT_PUSH_DATA_TOKEN_NV: number;
    static VK_STRUCTURE_TYPE_OPAQUE_CAPTURE_DATA_CREATE_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_DESCRIPTOR_HEAP_FEATURES_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_DESCRIPTOR_HEAP_PROPERTIES_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_DESCRIPTOR_HEAP_TENSOR_PROPERTIES_ARM: number;
    static VK_STRUCTURE_TYPE_PUSH_DATA_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_RESOURCE_DESCRIPTOR_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_SAMPLER_CUSTOM_BORDER_COLOR_INDEX_CREATE_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_SHADER_DESCRIPTOR_SET_AND_BINDING_MAPPING_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_SUBSAMPLED_IMAGE_FORMAT_PROPERTIES_EXT: number;
    static VK_STRUCTURE_TYPE_TEXEL_BUFFER_DESCRIPTOR_INFO_EXT: number;
    static VK_TENSOR_CREATE_DESCRIPTOR_HEAP_CAPTURE_REPLAY_BIT_ARM: number;
    static nvkCmdBindResourceHeapEXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static nvkCmdBindSamplerHeapEXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static nvkCmdPushDataEXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static nvkGetImageOpaqueCaptureDataEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkGetTensorOpaqueCaptureDataARM(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkRegisterCustomBorderColorEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkWriteResourceDescriptorsEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkWriteSamplerDescriptorsEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static vkCmdBindResourceHeapEXT(paramarg0: VkCommandBuffer, paramarg1: VkBindHeapInfoEXT): void;
    static vkCmdBindSamplerHeapEXT(paramarg0: VkCommandBuffer, paramarg1: VkBindHeapInfoEXT): void;
    static vkCmdPushDataEXT(paramarg0: VkCommandBuffer, paramarg1: VkPushDataInfoEXT): void;
    static vkGetImageOpaqueCaptureDataEXT(paramarg0: VkDevice, paramarg1: LongBuffer, paramarg2: (Object | null)[]): number;
    static vkGetImageOpaqueCaptureDataEXT(paramarg0: VkDevice, paramarg1: number[], paramarg2: (Object | null)[]): number;
    static vkGetPhysicalDeviceDescriptorSizeEXT(paramarg0: VkPhysicalDevice, paramarg1: number): number;
    static vkGetTensorOpaqueCaptureDataARM(paramarg0: VkDevice, paramarg1: LongBuffer, paramarg2: (Object | null)[]): number;
    static vkGetTensorOpaqueCaptureDataARM(paramarg0: VkDevice, paramarg1: number[], paramarg2: (Object | null)[]): number;
    static vkRegisterCustomBorderColorEXT(paramarg0: VkDevice, paramarg1: VkSamplerCustomBorderColorCreateInfoEXT, paramarg2: boolean, paramarg3: number[]): number;
    static vkRegisterCustomBorderColorEXT(paramarg0: VkDevice, paramarg1: VkSamplerCustomBorderColorCreateInfoEXT, paramarg2: boolean, paramarg3: IntBuffer): number;
    static vkUnregisterCustomBorderColorEXT(paramarg0: VkDevice, paramarg1: number): void;
    static vkWriteResourceDescriptorsEXT(paramarg0: VkDevice, paramarg1: (Object | null)[], paramarg2: (Object | null)[]): number;
    static vkWriteSamplerDescriptorsEXT(paramarg0: VkDevice, paramarg1: (Object | null)[], paramarg2: (Object | null)[]): number;
    constructor()
}