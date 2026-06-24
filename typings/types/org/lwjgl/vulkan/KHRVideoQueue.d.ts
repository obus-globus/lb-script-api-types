import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
import type { VkPhysicalDeviceVideoFormatInfoKHR } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceVideoFormatInfoKHR.d.ts'
import type { VkVideoBeginCodingInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoBeginCodingInfoKHR.d.ts'
import type { VkVideoCapabilitiesKHR } from '../../../org/lwjgl/vulkan/VkVideoCapabilitiesKHR.d.ts'
import type { VkVideoCodingControlInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoCodingControlInfoKHR.d.ts'
import type { VkVideoEndCodingInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEndCodingInfoKHR.d.ts'
import type { VkVideoProfileInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoProfileInfoKHR.d.ts'
import type { VkVideoSessionCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoSessionCreateInfoKHR.d.ts'
import type { VkVideoSessionParametersCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoSessionParametersCreateInfoKHR.d.ts'
import type { VkVideoSessionParametersUpdateInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoSessionParametersUpdateInfoKHR.d.ts'
export class KHRVideoQueue extends Object {
    static VK_ERROR_IMAGE_USAGE_NOT_SUPPORTED_KHR: number;
    static VK_ERROR_VIDEO_PICTURE_LAYOUT_NOT_SUPPORTED_KHR: number;
    static VK_ERROR_VIDEO_PROFILE_CODEC_NOT_SUPPORTED_KHR: number;
    static VK_ERROR_VIDEO_PROFILE_FORMAT_NOT_SUPPORTED_KHR: number;
    static VK_ERROR_VIDEO_PROFILE_OPERATION_NOT_SUPPORTED_KHR: number;
    static VK_ERROR_VIDEO_STD_VERSION_NOT_SUPPORTED_KHR: number;
    static VK_KHR_VIDEO_QUEUE_EXTENSION_NAME: string;
    static VK_KHR_VIDEO_QUEUE_SPEC_VERSION: number;
    static VK_OBJECT_TYPE_VIDEO_SESSION_KHR: number;
    static VK_OBJECT_TYPE_VIDEO_SESSION_PARAMETERS_KHR: number;
    static VK_QUERY_RESULT_STATUS_COMPLETE_KHR: number;
    static VK_QUERY_RESULT_STATUS_ERROR_KHR: number;
    static VK_QUERY_RESULT_STATUS_NOT_READY_KHR: number;
    static VK_QUERY_RESULT_WITH_STATUS_BIT_KHR: number;
    static VK_QUERY_TYPE_RESULT_STATUS_ONLY_KHR: number;
    static VK_STRUCTURE_TYPE_BIND_VIDEO_SESSION_MEMORY_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_VIDEO_FORMAT_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_QUEUE_FAMILY_QUERY_RESULT_STATUS_PROPERTIES_KHR: number;
    static VK_STRUCTURE_TYPE_QUEUE_FAMILY_VIDEO_PROPERTIES_KHR: number;
    static VK_STRUCTURE_TYPE_VIDEO_BEGIN_CODING_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_VIDEO_CAPABILITIES_KHR: number;
    static VK_STRUCTURE_TYPE_VIDEO_CODING_CONTROL_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_VIDEO_END_CODING_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_VIDEO_FORMAT_PROPERTIES_KHR: number;
    static VK_STRUCTURE_TYPE_VIDEO_PICTURE_RESOURCE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_VIDEO_PROFILE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_VIDEO_PROFILE_LIST_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_VIDEO_REFERENCE_SLOT_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_VIDEO_SESSION_CREATE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_VIDEO_SESSION_MEMORY_REQUIREMENTS_KHR: number;
    static VK_STRUCTURE_TYPE_VIDEO_SESSION_PARAMETERS_CREATE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_VIDEO_SESSION_PARAMETERS_UPDATE_INFO_KHR: number;
    static VK_VIDEO_CAPABILITY_PROTECTED_CONTENT_BIT_KHR: number;
    static VK_VIDEO_CAPABILITY_SEPARATE_REFERENCE_IMAGES_BIT_KHR: number;
    static VK_VIDEO_CHROMA_SUBSAMPLING_420_BIT_KHR: number;
    static VK_VIDEO_CHROMA_SUBSAMPLING_422_BIT_KHR: number;
    static VK_VIDEO_CHROMA_SUBSAMPLING_444_BIT_KHR: number;
    static VK_VIDEO_CHROMA_SUBSAMPLING_INVALID_KHR: number;
    static VK_VIDEO_CHROMA_SUBSAMPLING_MONOCHROME_BIT_KHR: number;
    static VK_VIDEO_CODEC_OPERATION_NONE_KHR: number;
    static VK_VIDEO_CODING_CONTROL_RESET_BIT_KHR: number;
    static VK_VIDEO_COMPONENT_BIT_DEPTH_10_BIT_KHR: number;
    static VK_VIDEO_COMPONENT_BIT_DEPTH_12_BIT_KHR: number;
    static VK_VIDEO_COMPONENT_BIT_DEPTH_8_BIT_KHR: number;
    static VK_VIDEO_COMPONENT_BIT_DEPTH_INVALID_KHR: number;
    static VK_VIDEO_SESSION_CREATE_PROTECTED_CONTENT_BIT_KHR: number;
    static nvkBindVideoSessionMemoryKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkCmdBeginVideoCodingKHR(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static nvkCmdControlVideoCodingKHR(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static nvkCmdEndVideoCodingKHR(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static nvkCreateVideoSessionKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkCreateVideoSessionParametersKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkDestroyVideoSessionKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static nvkDestroyVideoSessionParametersKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static nvkGetPhysicalDeviceVideoCapabilitiesKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number): number;
    static nvkGetPhysicalDeviceVideoFormatPropertiesKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkGetVideoSessionMemoryRequirementsKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkUpdateVideoSessionParametersKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static vkBindVideoSessionMemoryKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: (Object | null)[]): number;
    static vkCmdBeginVideoCodingKHR(paramarg0: VkCommandBuffer, paramarg1: VkVideoBeginCodingInfoKHR): void;
    static vkCmdControlVideoCodingKHR(paramarg0: VkCommandBuffer, paramarg1: VkVideoCodingControlInfoKHR): void;
    static vkCmdEndVideoCodingKHR(paramarg0: VkCommandBuffer, paramarg1: VkVideoEndCodingInfoKHR): void;
    static vkCreateVideoSessionKHR(paramarg0: VkDevice, paramarg1: VkVideoSessionCreateInfoKHR, paramarg2: VkAllocationCallbacks, paramarg3: LongBuffer): number;
    static vkCreateVideoSessionKHR(paramarg0: VkDevice, paramarg1: VkVideoSessionCreateInfoKHR, paramarg2: VkAllocationCallbacks, paramarg3: number[]): number;
    static vkCreateVideoSessionParametersKHR(paramarg0: VkDevice, paramarg1: VkVideoSessionParametersCreateInfoKHR, paramarg2: VkAllocationCallbacks, paramarg3: LongBuffer): number;
    static vkCreateVideoSessionParametersKHR(paramarg0: VkDevice, paramarg1: VkVideoSessionParametersCreateInfoKHR, paramarg2: VkAllocationCallbacks, paramarg3: number[]): number;
    static vkDestroyVideoSessionKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: VkAllocationCallbacks): void;
    static vkDestroyVideoSessionParametersKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: VkAllocationCallbacks): void;
    static vkGetPhysicalDeviceVideoCapabilitiesKHR(paramarg0: VkPhysicalDevice, paramarg1: VkVideoProfileInfoKHR, paramarg2: VkVideoCapabilitiesKHR): number;
    static vkGetPhysicalDeviceVideoFormatPropertiesKHR(paramarg0: VkPhysicalDevice, paramarg1: VkPhysicalDeviceVideoFormatInfoKHR, paramarg2: number[], paramarg3: (Object | null)[]): number;
    static vkGetPhysicalDeviceVideoFormatPropertiesKHR(paramarg0: VkPhysicalDevice, paramarg1: VkPhysicalDeviceVideoFormatInfoKHR, paramarg2: IntBuffer, paramarg3: (Object | null)[]): number;
    static vkGetVideoSessionMemoryRequirementsKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number[], paramarg3: (Object | null)[]): number;
    static vkGetVideoSessionMemoryRequirementsKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: IntBuffer, paramarg3: (Object | null)[]): number;
    static vkUpdateVideoSessionParametersKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: VkVideoSessionParametersUpdateInfoKHR): number;
    constructor()
}