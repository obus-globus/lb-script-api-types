import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkAccelerationStructureCaptureDescriptorDataInfoEXT } from '../../../org/lwjgl/vulkan/VkAccelerationStructureCaptureDescriptorDataInfoEXT.d.ts'
import type { VkBufferCaptureDescriptorDataInfoEXT } from '../../../org/lwjgl/vulkan/VkBufferCaptureDescriptorDataInfoEXT.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkDescriptorGetInfoEXT } from '../../../org/lwjgl/vulkan/VkDescriptorGetInfoEXT.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkImageCaptureDescriptorDataInfoEXT } from '../../../org/lwjgl/vulkan/VkImageCaptureDescriptorDataInfoEXT.d.ts'
import type { VkImageViewCaptureDescriptorDataInfoEXT } from '../../../org/lwjgl/vulkan/VkImageViewCaptureDescriptorDataInfoEXT.d.ts'
import type { VkSamplerCaptureDescriptorDataInfoEXT } from '../../../org/lwjgl/vulkan/VkSamplerCaptureDescriptorDataInfoEXT.d.ts'
export class EXTDescriptorBuffer extends Object {
    static VK_ACCELERATION_STRUCTURE_CREATE_DESCRIPTOR_BUFFER_CAPTURE_REPLAY_BIT_EXT: number;
    static VK_ACCESS_2_DESCRIPTOR_BUFFER_READ_BIT_EXT: number;
    static VK_BUFFER_CREATE_DESCRIPTOR_BUFFER_CAPTURE_REPLAY_BIT_EXT: number;
    static VK_BUFFER_USAGE_PUSH_DESCRIPTORS_DESCRIPTOR_BUFFER_BIT_EXT: number;
    static VK_BUFFER_USAGE_RESOURCE_DESCRIPTOR_BUFFER_BIT_EXT: number;
    static VK_BUFFER_USAGE_SAMPLER_DESCRIPTOR_BUFFER_BIT_EXT: number;
    static VK_DESCRIPTOR_SET_LAYOUT_CREATE_DESCRIPTOR_BUFFER_BIT_EXT: number;
    static VK_DESCRIPTOR_SET_LAYOUT_CREATE_EMBEDDED_IMMUTABLE_SAMPLERS_BIT_EXT: number;
    static VK_EXT_DESCRIPTOR_BUFFER_EXTENSION_NAME: string;
    static VK_EXT_DESCRIPTOR_BUFFER_SPEC_VERSION: number;
    static VK_IMAGE_CREATE_DESCRIPTOR_BUFFER_CAPTURE_REPLAY_BIT_EXT: number;
    static VK_IMAGE_VIEW_CREATE_DESCRIPTOR_BUFFER_CAPTURE_REPLAY_BIT_EXT: number;
    static VK_PIPELINE_CREATE_DESCRIPTOR_BUFFER_BIT_EXT: number;
    static VK_SAMPLER_CREATE_DESCRIPTOR_BUFFER_CAPTURE_REPLAY_BIT_EXT: number;
    static VK_STRUCTURE_TYPE_ACCELERATION_STRUCTURE_CAPTURE_DESCRIPTOR_DATA_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_BUFFER_CAPTURE_DESCRIPTOR_DATA_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_DESCRIPTOR_ADDRESS_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_DESCRIPTOR_BUFFER_BINDING_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_DESCRIPTOR_BUFFER_BINDING_PUSH_DESCRIPTOR_BUFFER_HANDLE_EXT: number;
    static VK_STRUCTURE_TYPE_DESCRIPTOR_GET_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_IMAGE_CAPTURE_DESCRIPTOR_DATA_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_IMAGE_VIEW_CAPTURE_DESCRIPTOR_DATA_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_OPAQUE_CAPTURE_DESCRIPTOR_DATA_CREATE_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_DESCRIPTOR_BUFFER_DENSITY_MAP_PROPERTIES_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_DESCRIPTOR_BUFFER_FEATURES_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_DESCRIPTOR_BUFFER_PROPERTIES_EXT: number;
    static VK_STRUCTURE_TYPE_SAMPLER_CAPTURE_DESCRIPTOR_DATA_INFO_EXT: number;
    static nvkCmdBindDescriptorBuffersEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number): void;
    static nvkCmdSetDescriptorBufferOffsetsEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    static nvkGetAccelerationStructureOpaqueCaptureDescriptorDataEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkGetBufferOpaqueCaptureDescriptorDataEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkGetDescriptorEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nvkGetDescriptorSetLayoutBindingOffsetEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nvkGetDescriptorSetLayoutSizeEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static nvkGetImageOpaqueCaptureDescriptorDataEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkGetImageViewOpaqueCaptureDescriptorDataEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkGetSamplerOpaqueCaptureDescriptorDataEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static vkCmdBindDescriptorBufferEmbeddedSamplersEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static vkCmdBindDescriptorBuffersEXT(paramarg0: VkCommandBuffer, paramarg1: (Object | null)[]): void;
    static vkCmdSetDescriptorBufferOffsetsEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number[], paramarg5: number[]): void;
    static vkCmdSetDescriptorBufferOffsetsEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: IntBuffer, paramarg5: LongBuffer): void;
    static vkGetAccelerationStructureOpaqueCaptureDescriptorDataEXT(paramarg0: VkDevice, paramarg1: VkAccelerationStructureCaptureDescriptorDataInfoEXT, paramarg2: ByteBuffer): number;
    static vkGetBufferOpaqueCaptureDescriptorDataEXT(paramarg0: VkDevice, paramarg1: VkBufferCaptureDescriptorDataInfoEXT, paramarg2: ByteBuffer): number;
    static vkGetDescriptorEXT(paramarg0: VkDevice, paramarg1: VkDescriptorGetInfoEXT, paramarg2: ByteBuffer): void;
    static vkGetDescriptorSetLayoutBindingOffsetEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: LongBuffer): void;
    static vkGetDescriptorSetLayoutBindingOffsetEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static vkGetDescriptorSetLayoutSizeEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: LongBuffer): void;
    static vkGetDescriptorSetLayoutSizeEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number[]): void;
    static vkGetImageOpaqueCaptureDescriptorDataEXT(paramarg0: VkDevice, paramarg1: VkImageCaptureDescriptorDataInfoEXT, paramarg2: ByteBuffer): number;
    static vkGetImageViewOpaqueCaptureDescriptorDataEXT(paramarg0: VkDevice, paramarg1: VkImageViewCaptureDescriptorDataInfoEXT, paramarg2: ByteBuffer): number;
    static vkGetSamplerOpaqueCaptureDescriptorDataEXT(paramarg0: VkDevice, paramarg1: VkSamplerCaptureDescriptorDataInfoEXT, paramarg2: ByteBuffer): number;
    constructor()
}