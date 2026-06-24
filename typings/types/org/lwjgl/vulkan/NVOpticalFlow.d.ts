import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkOpticalFlowExecuteInfoNV } from '../../../org/lwjgl/vulkan/VkOpticalFlowExecuteInfoNV.d.ts'
import type { VkOpticalFlowImageFormatInfoNV } from '../../../org/lwjgl/vulkan/VkOpticalFlowImageFormatInfoNV.d.ts'
import type { VkOpticalFlowSessionCreateInfoNV } from '../../../org/lwjgl/vulkan/VkOpticalFlowSessionCreateInfoNV.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
export class NVOpticalFlow extends Object {
    static VK_ACCESS_2_OPTICAL_FLOW_READ_BIT_NV: number;
    static VK_ACCESS_2_OPTICAL_FLOW_WRITE_BIT_NV: number;
    static VK_FORMAT_FEATURE_2_OPTICAL_FLOW_COST_BIT_NV: number;
    static VK_FORMAT_FEATURE_2_OPTICAL_FLOW_IMAGE_BIT_NV: number;
    static VK_FORMAT_FEATURE_2_OPTICAL_FLOW_VECTOR_BIT_NV: number;
    static VK_FORMAT_R16G16_S10_5_NV: number;
    static VK_FORMAT_R16G16_SFIXED5_NV: number;
    static VK_NV_OPTICAL_FLOW_EXTENSION_NAME: string;
    static VK_NV_OPTICAL_FLOW_SPEC_VERSION: number;
    static VK_OBJECT_TYPE_OPTICAL_FLOW_SESSION_NV: number;
    static VK_OPTICAL_FLOW_EXECUTE_DISABLE_TEMPORAL_HINTS_BIT_NV: number;
    static VK_OPTICAL_FLOW_GRID_SIZE_1X1_BIT_NV: number;
    static VK_OPTICAL_FLOW_GRID_SIZE_2X2_BIT_NV: number;
    static VK_OPTICAL_FLOW_GRID_SIZE_4X4_BIT_NV: number;
    static VK_OPTICAL_FLOW_GRID_SIZE_8X8_BIT_NV: number;
    static VK_OPTICAL_FLOW_GRID_SIZE_UNKNOWN_NV: number;
    static VK_OPTICAL_FLOW_PERFORMANCE_LEVEL_FAST_NV: number;
    static VK_OPTICAL_FLOW_PERFORMANCE_LEVEL_MEDIUM_NV: number;
    static VK_OPTICAL_FLOW_PERFORMANCE_LEVEL_SLOW_NV: number;
    static VK_OPTICAL_FLOW_PERFORMANCE_LEVEL_UNKNOWN_NV: number;
    static VK_OPTICAL_FLOW_SESSION_BINDING_POINT_BACKWARD_COST_NV: number;
    static VK_OPTICAL_FLOW_SESSION_BINDING_POINT_BACKWARD_FLOW_VECTOR_NV: number;
    static VK_OPTICAL_FLOW_SESSION_BINDING_POINT_COST_NV: number;
    static VK_OPTICAL_FLOW_SESSION_BINDING_POINT_FLOW_VECTOR_NV: number;
    static VK_OPTICAL_FLOW_SESSION_BINDING_POINT_GLOBAL_FLOW_NV: number;
    static VK_OPTICAL_FLOW_SESSION_BINDING_POINT_HINT_NV: number;
    static VK_OPTICAL_FLOW_SESSION_BINDING_POINT_INPUT_NV: number;
    static VK_OPTICAL_FLOW_SESSION_BINDING_POINT_REFERENCE_NV: number;
    static VK_OPTICAL_FLOW_SESSION_BINDING_POINT_UNKNOWN_NV: number;
    static VK_OPTICAL_FLOW_SESSION_CREATE_ALLOW_REGIONS_BIT_NV: number;
    static VK_OPTICAL_FLOW_SESSION_CREATE_BOTH_DIRECTIONS_BIT_NV: number;
    static VK_OPTICAL_FLOW_SESSION_CREATE_ENABLE_COST_BIT_NV: number;
    static VK_OPTICAL_FLOW_SESSION_CREATE_ENABLE_GLOBAL_FLOW_BIT_NV: number;
    static VK_OPTICAL_FLOW_SESSION_CREATE_ENABLE_HINT_BIT_NV: number;
    static VK_OPTICAL_FLOW_USAGE_COST_BIT_NV: number;
    static VK_OPTICAL_FLOW_USAGE_GLOBAL_FLOW_BIT_NV: number;
    static VK_OPTICAL_FLOW_USAGE_HINT_BIT_NV: number;
    static VK_OPTICAL_FLOW_USAGE_INPUT_BIT_NV: number;
    static VK_OPTICAL_FLOW_USAGE_OUTPUT_BIT_NV: number;
    static VK_OPTICAL_FLOW_USAGE_UNKNOWN_NV: number;
    static VK_PIPELINE_STAGE_2_OPTICAL_FLOW_BIT_NV: number;
    static VK_QUEUE_OPTICAL_FLOW_BIT_NV: number;
    static VK_STRUCTURE_TYPE_OPTICAL_FLOW_EXECUTE_INFO_NV: number;
    static VK_STRUCTURE_TYPE_OPTICAL_FLOW_IMAGE_FORMAT_INFO_NV: number;
    static VK_STRUCTURE_TYPE_OPTICAL_FLOW_IMAGE_FORMAT_PROPERTIES_NV: number;
    static VK_STRUCTURE_TYPE_OPTICAL_FLOW_SESSION_CREATE_INFO_NV: number;
    static VK_STRUCTURE_TYPE_OPTICAL_FLOW_SESSION_CREATE_PRIVATE_DATA_INFO_NV: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_OPTICAL_FLOW_FEATURES_NV: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_OPTICAL_FLOW_PROPERTIES_NV: number;
    static nvkCmdOpticalFlowExecuteNV(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number): void;
    static nvkCreateOpticalFlowSessionNV(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkDestroyOpticalFlowSessionNV(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static nvkGetPhysicalDeviceOpticalFlowImageFormatsNV(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static vkBindOpticalFlowSessionImageNV(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static vkCmdOpticalFlowExecuteNV(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: VkOpticalFlowExecuteInfoNV): void;
    static vkCreateOpticalFlowSessionNV(paramarg0: VkDevice, paramarg1: VkOpticalFlowSessionCreateInfoNV, paramarg2: VkAllocationCallbacks, paramarg3: LongBuffer): number;
    static vkCreateOpticalFlowSessionNV(paramarg0: VkDevice, paramarg1: VkOpticalFlowSessionCreateInfoNV, paramarg2: VkAllocationCallbacks, paramarg3: number[]): number;
    static vkDestroyOpticalFlowSessionNV(paramarg0: VkDevice, paramarg1: number, paramarg2: VkAllocationCallbacks): void;
    static vkGetPhysicalDeviceOpticalFlowImageFormatsNV(paramarg0: VkPhysicalDevice, paramarg1: VkOpticalFlowImageFormatInfoNV, paramarg2: number[], paramarg3: (Object | null)[]): number;
    static vkGetPhysicalDeviceOpticalFlowImageFormatsNV(paramarg0: VkPhysicalDevice, paramarg1: VkOpticalFlowImageFormatInfoNV, paramarg2: IntBuffer, paramarg3: (Object | null)[]): number;
    constructor()
}