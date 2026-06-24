import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkCopyTensorInfoARM } from '../../../org/lwjgl/vulkan/VkCopyTensorInfoARM.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkDeviceTensorMemoryRequirementsARM } from '../../../org/lwjgl/vulkan/VkDeviceTensorMemoryRequirementsARM.d.ts'
import type { VkExternalTensorPropertiesARM } from '../../../org/lwjgl/vulkan/VkExternalTensorPropertiesARM.d.ts'
import type { VkMemoryRequirements2 } from '../../../org/lwjgl/vulkan/VkMemoryRequirements2.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
import type { VkPhysicalDeviceExternalTensorInfoARM } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceExternalTensorInfoARM.d.ts'
import type { VkTensorCaptureDescriptorDataInfoARM } from '../../../org/lwjgl/vulkan/VkTensorCaptureDescriptorDataInfoARM.d.ts'
import type { VkTensorCreateInfoARM } from '../../../org/lwjgl/vulkan/VkTensorCreateInfoARM.d.ts'
import type { VkTensorMemoryRequirementsInfoARM } from '../../../org/lwjgl/vulkan/VkTensorMemoryRequirementsInfoARM.d.ts'
import type { VkTensorViewCaptureDescriptorDataInfoARM } from '../../../org/lwjgl/vulkan/VkTensorViewCaptureDescriptorDataInfoARM.d.ts'
import type { VkTensorViewCreateInfoARM } from '../../../org/lwjgl/vulkan/VkTensorViewCreateInfoARM.d.ts'
export class ARMTensors extends Object {
    static VK_ARM_TENSORS_EXTENSION_NAME: string;
    static VK_ARM_TENSORS_SPEC_VERSION: number;
    static VK_DESCRIPTOR_TYPE_TENSOR_ARM: number;
    static VK_FORMAT_FEATURE_2_TENSOR_IMAGE_ALIASING_BIT_ARM: number;
    static VK_FORMAT_FEATURE_2_TENSOR_SHADER_BIT_ARM: number;
    static VK_FORMAT_R8_BOOL_ARM: number;
    static VK_IMAGE_LAYOUT_TENSOR_ALIASING_ARM: number;
    static VK_IMAGE_USAGE_TENSOR_ALIASING_BIT_ARM: number;
    static VK_OBJECT_TYPE_TENSOR_ARM: number;
    static VK_OBJECT_TYPE_TENSOR_VIEW_ARM: number;
    static VK_STRUCTURE_TYPE_BIND_TENSOR_MEMORY_INFO_ARM: number;
    static VK_STRUCTURE_TYPE_COPY_TENSOR_INFO_ARM: number;
    static VK_STRUCTURE_TYPE_DESCRIPTOR_GET_TENSOR_INFO_ARM: number;
    static VK_STRUCTURE_TYPE_DEVICE_TENSOR_MEMORY_REQUIREMENTS_ARM: number;
    static VK_STRUCTURE_TYPE_EXTERNAL_MEMORY_TENSOR_CREATE_INFO_ARM: number;
    static VK_STRUCTURE_TYPE_EXTERNAL_TENSOR_PROPERTIES_ARM: number;
    static VK_STRUCTURE_TYPE_FRAME_BOUNDARY_TENSORS_ARM: number;
    static VK_STRUCTURE_TYPE_MEMORY_DEDICATED_ALLOCATE_INFO_TENSOR_ARM: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_DESCRIPTOR_BUFFER_TENSOR_FEATURES_ARM: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_DESCRIPTOR_BUFFER_TENSOR_PROPERTIES_ARM: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_EXTERNAL_TENSOR_INFO_ARM: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_TENSOR_FEATURES_ARM: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_TENSOR_PROPERTIES_ARM: number;
    static VK_STRUCTURE_TYPE_TENSOR_CAPTURE_DESCRIPTOR_DATA_INFO_ARM: number;
    static VK_STRUCTURE_TYPE_TENSOR_COPY_ARM: number;
    static VK_STRUCTURE_TYPE_TENSOR_CREATE_INFO_ARM: number;
    static VK_STRUCTURE_TYPE_TENSOR_DEPENDENCY_INFO_ARM: number;
    static VK_STRUCTURE_TYPE_TENSOR_DESCRIPTION_ARM: number;
    static VK_STRUCTURE_TYPE_TENSOR_FORMAT_PROPERTIES_ARM: number;
    static VK_STRUCTURE_TYPE_TENSOR_MEMORY_BARRIER_ARM: number;
    static VK_STRUCTURE_TYPE_TENSOR_MEMORY_REQUIREMENTS_INFO_ARM: number;
    static VK_STRUCTURE_TYPE_TENSOR_VIEW_CAPTURE_DESCRIPTOR_DATA_INFO_ARM: number;
    static VK_STRUCTURE_TYPE_TENSOR_VIEW_CREATE_INFO_ARM: number;
    static VK_STRUCTURE_TYPE_WRITE_DESCRIPTOR_SET_TENSOR_ARM: number;
    static VK_TENSOR_CREATE_DESCRIPTOR_BUFFER_CAPTURE_REPLAY_BIT_ARM: number;
    static VK_TENSOR_CREATE_MUTABLE_FORMAT_BIT_ARM: number;
    static VK_TENSOR_CREATE_PROTECTED_BIT_ARM: number;
    static VK_TENSOR_TILING_LINEAR_ARM: number;
    static VK_TENSOR_TILING_OPTIMAL_ARM: number;
    static VK_TENSOR_USAGE_IMAGE_ALIASING_BIT_ARM: number;
    static VK_TENSOR_USAGE_SHADER_BIT_ARM: number;
    static VK_TENSOR_USAGE_TRANSFER_DST_BIT_ARM: number;
    static VK_TENSOR_USAGE_TRANSFER_SRC_BIT_ARM: number;
    static VK_TENSOR_VIEW_CREATE_DESCRIPTOR_BUFFER_CAPTURE_REPLAY_BIT_ARM: number;
    static nvkBindTensorMemoryARM(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkCmdCopyTensorARM(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static nvkCreateTensorARM(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkCreateTensorViewARM(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkDestroyTensorARM(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static nvkDestroyTensorViewARM(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static nvkGetDeviceTensorMemoryRequirementsARM(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static nvkGetPhysicalDeviceExternalTensorPropertiesARM(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number): void;
    static nvkGetTensorMemoryRequirementsARM(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static nvkGetTensorOpaqueCaptureDescriptorDataARM(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkGetTensorViewOpaqueCaptureDescriptorDataARM(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static vkBindTensorMemoryARM(paramarg0: VkDevice, paramarg1: (Object | null)[]): number;
    static vkCmdCopyTensorARM(paramarg0: VkCommandBuffer, paramarg1: VkCopyTensorInfoARM): void;
    static vkCreateTensorARM(paramarg0: VkDevice, paramarg1: VkTensorCreateInfoARM, paramarg2: VkAllocationCallbacks, paramarg3: LongBuffer): number;
    static vkCreateTensorARM(paramarg0: VkDevice, paramarg1: VkTensorCreateInfoARM, paramarg2: VkAllocationCallbacks, paramarg3: number[]): number;
    static vkCreateTensorViewARM(paramarg0: VkDevice, paramarg1: VkTensorViewCreateInfoARM, paramarg2: VkAllocationCallbacks, paramarg3: LongBuffer): number;
    static vkCreateTensorViewARM(paramarg0: VkDevice, paramarg1: VkTensorViewCreateInfoARM, paramarg2: VkAllocationCallbacks, paramarg3: number[]): number;
    static vkDestroyTensorARM(paramarg0: VkDevice, paramarg1: number, paramarg2: VkAllocationCallbacks): void;
    static vkDestroyTensorViewARM(paramarg0: VkDevice, paramarg1: number, paramarg2: VkAllocationCallbacks): void;
    static vkGetDeviceTensorMemoryRequirementsARM(paramarg0: VkDevice, paramarg1: VkDeviceTensorMemoryRequirementsARM, paramarg2: VkMemoryRequirements2): void;
    static vkGetPhysicalDeviceExternalTensorPropertiesARM(paramarg0: VkPhysicalDevice, paramarg1: VkPhysicalDeviceExternalTensorInfoARM, paramarg2: VkExternalTensorPropertiesARM): void;
    static vkGetTensorMemoryRequirementsARM(paramarg0: VkDevice, paramarg1: VkTensorMemoryRequirementsInfoARM, paramarg2: VkMemoryRequirements2): void;
    static vkGetTensorOpaqueCaptureDescriptorDataARM(paramarg0: VkDevice, paramarg1: VkTensorCaptureDescriptorDataInfoARM, paramarg2: ByteBuffer): number;
    static vkGetTensorViewOpaqueCaptureDescriptorDataARM(paramarg0: VkDevice, paramarg1: VkTensorViewCaptureDescriptorDataInfoARM, paramarg2: ByteBuffer): number;
    constructor()
}