import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkDeviceImageSubresourceInfo } from '../../../org/lwjgl/vulkan/VkDeviceImageSubresourceInfo.d.ts'
import type { VkExtent2D } from '../../../org/lwjgl/vulkan/VkExtent2D.d.ts'
import type { VkImageSubresource2 } from '../../../org/lwjgl/vulkan/VkImageSubresource2.d.ts'
import type { VkRenderingAreaInfo } from '../../../org/lwjgl/vulkan/VkRenderingAreaInfo.d.ts'
import type { VkSubresourceLayout2 } from '../../../org/lwjgl/vulkan/VkSubresourceLayout2.d.ts'
export class KHRMaintenance5 extends Object {
    static VK_BUFFER_USAGE_2_ACCELERATION_STRUCTURE_BUILD_INPUT_READ_ONLY_BIT_KHR: number;
    static VK_BUFFER_USAGE_2_ACCELERATION_STRUCTURE_STORAGE_BIT_KHR: number;
    static VK_BUFFER_USAGE_2_CONDITIONAL_RENDERING_BIT_EXT: number;
    static VK_BUFFER_USAGE_2_INDEX_BUFFER_BIT_KHR: number;
    static VK_BUFFER_USAGE_2_INDIRECT_BUFFER_BIT_KHR: number;
    static VK_BUFFER_USAGE_2_MICROMAP_BUILD_INPUT_READ_ONLY_BIT_EXT: number;
    static VK_BUFFER_USAGE_2_MICROMAP_STORAGE_BIT_EXT: number;
    static VK_BUFFER_USAGE_2_PUSH_DESCRIPTORS_DESCRIPTOR_BUFFER_BIT_EXT: number;
    static VK_BUFFER_USAGE_2_RAY_TRACING_BIT_NV: number;
    static VK_BUFFER_USAGE_2_RESOURCE_DESCRIPTOR_BUFFER_BIT_EXT: number;
    static VK_BUFFER_USAGE_2_SAMPLER_DESCRIPTOR_BUFFER_BIT_EXT: number;
    static VK_BUFFER_USAGE_2_SHADER_BINDING_TABLE_BIT_KHR: number;
    static VK_BUFFER_USAGE_2_SHADER_DEVICE_ADDRESS_BIT_KHR: number;
    static VK_BUFFER_USAGE_2_STORAGE_BUFFER_BIT_KHR: number;
    static VK_BUFFER_USAGE_2_STORAGE_TEXEL_BUFFER_BIT_KHR: number;
    static VK_BUFFER_USAGE_2_TRANSFER_DST_BIT_KHR: number;
    static VK_BUFFER_USAGE_2_TRANSFER_SRC_BIT_KHR: number;
    static VK_BUFFER_USAGE_2_TRANSFORM_FEEDBACK_BUFFER_BIT_EXT: number;
    static VK_BUFFER_USAGE_2_TRANSFORM_FEEDBACK_COUNTER_BUFFER_BIT_EXT: number;
    static VK_BUFFER_USAGE_2_UNIFORM_BUFFER_BIT_KHR: number;
    static VK_BUFFER_USAGE_2_UNIFORM_TEXEL_BUFFER_BIT_KHR: number;
    static VK_BUFFER_USAGE_2_VERTEX_BUFFER_BIT_KHR: number;
    static VK_BUFFER_USAGE_2_VIDEO_DECODE_DST_BIT_KHR: number;
    static VK_BUFFER_USAGE_2_VIDEO_DECODE_SRC_BIT_KHR: number;
    static VK_BUFFER_USAGE_2_VIDEO_ENCODE_DST_BIT_KHR: number;
    static VK_BUFFER_USAGE_2_VIDEO_ENCODE_SRC_BIT_KHR: number;
    static VK_FORMAT_A1B5G5R5_UNORM_PACK16_KHR: number;
    static VK_FORMAT_A8_UNORM_KHR: number;
    static VK_KHR_MAINTENANCE_5_EXTENSION_NAME: string;
    static VK_KHR_MAINTENANCE_5_SPEC_VERSION: number;
    static VK_PIPELINE_CREATE_2_ALLOW_DERIVATIVES_BIT_KHR: number;
    static VK_PIPELINE_CREATE_2_CAPTURE_INTERNAL_REPRESENTATIONS_BIT_KHR: number;
    static VK_PIPELINE_CREATE_2_CAPTURE_STATISTICS_BIT_KHR: number;
    static VK_PIPELINE_CREATE_2_COLOR_ATTACHMENT_FEEDBACK_LOOP_BIT_EXT: number;
    static VK_PIPELINE_CREATE_2_DEFER_COMPILE_BIT_NV: number;
    static VK_PIPELINE_CREATE_2_DEPTH_STENCIL_ATTACHMENT_FEEDBACK_LOOP_BIT_EXT: number;
    static VK_PIPELINE_CREATE_2_DERIVATIVE_BIT_KHR: number;
    static VK_PIPELINE_CREATE_2_DESCRIPTOR_BUFFER_BIT_EXT: number;
    static VK_PIPELINE_CREATE_2_DISABLE_OPTIMIZATION_BIT_KHR: number;
    static VK_PIPELINE_CREATE_2_DISALLOW_OPACITY_MICROMAP_BIT_ARM: number;
    static VK_PIPELINE_CREATE_2_DISPATCH_BASE_BIT_KHR: number;
    static VK_PIPELINE_CREATE_2_EARLY_RETURN_ON_FAILURE_BIT_KHR: number;
    static VK_PIPELINE_CREATE_2_FAIL_ON_PIPELINE_COMPILE_REQUIRED_BIT_KHR: number;
    static VK_PIPELINE_CREATE_2_INDIRECT_BINDABLE_BIT_NV: number;
    static VK_PIPELINE_CREATE_2_LIBRARY_BIT_KHR: number;
    static VK_PIPELINE_CREATE_2_LINK_TIME_OPTIMIZATION_BIT_EXT: number;
    static VK_PIPELINE_CREATE_2_NO_PROTECTED_ACCESS_BIT_EXT: number;
    static VK_PIPELINE_CREATE_2_PROTECTED_ACCESS_ONLY_BIT_EXT: number;
    static VK_PIPELINE_CREATE_2_RAY_TRACING_ALLOW_MOTION_BIT_NV: number;
    static VK_PIPELINE_CREATE_2_RAY_TRACING_DISPLACEMENT_MICROMAP_BIT_NV: number;
    static VK_PIPELINE_CREATE_2_RAY_TRACING_NO_NULL_ANY_HIT_SHADERS_BIT_KHR: number;
    static VK_PIPELINE_CREATE_2_RAY_TRACING_NO_NULL_CLOSEST_HIT_SHADERS_BIT_KHR: number;
    static VK_PIPELINE_CREATE_2_RAY_TRACING_NO_NULL_INTERSECTION_SHADERS_BIT_KHR: number;
    static VK_PIPELINE_CREATE_2_RAY_TRACING_NO_NULL_MISS_SHADERS_BIT_KHR: number;
    static VK_PIPELINE_CREATE_2_RAY_TRACING_OPACITY_MICROMAP_BIT_EXT: number;
    static VK_PIPELINE_CREATE_2_RAY_TRACING_SHADER_GROUP_HANDLE_CAPTURE_REPLAY_BIT_KHR: number;
    static VK_PIPELINE_CREATE_2_RAY_TRACING_SKIP_AABBS_BIT_KHR: number;
    static VK_PIPELINE_CREATE_2_RAY_TRACING_SKIP_TRIANGLES_BIT_KHR: number;
    static VK_PIPELINE_CREATE_2_RENDERING_FRAGMENT_DENSITY_MAP_ATTACHMENT_BIT_EXT: number;
    static VK_PIPELINE_CREATE_2_RENDERING_FRAGMENT_SHADING_RATE_ATTACHMENT_BIT_KHR: number;
    static VK_PIPELINE_CREATE_2_RETAIN_LINK_TIME_OPTIMIZATION_INFO_BIT_EXT: number;
    static VK_PIPELINE_CREATE_2_VIEW_INDEX_FROM_DEVICE_INDEX_BIT_KHR: number;
    static VK_STRUCTURE_TYPE_BUFFER_USAGE_FLAGS_2_CREATE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_DEVICE_IMAGE_SUBRESOURCE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_IMAGE_SUBRESOURCE_2_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_MAINTENANCE_5_FEATURES_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_MAINTENANCE_5_PROPERTIES_KHR: number;
    static VK_STRUCTURE_TYPE_PIPELINE_CREATE_FLAGS_2_CREATE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_RENDERING_AREA_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_SUBRESOURCE_LAYOUT_2_KHR: number;
    static nvkGetDeviceImageSubresourceLayoutKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static nvkGetImageSubresourceLayout2KHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nvkGetRenderingAreaGranularityKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static vkCmdBindIndexBuffer2KHR(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static vkGetDeviceImageSubresourceLayoutKHR(paramarg0: VkDevice, paramarg1: VkDeviceImageSubresourceInfo, paramarg2: VkSubresourceLayout2): void;
    static vkGetImageSubresourceLayout2KHR(paramarg0: VkDevice, paramarg1: number, paramarg2: VkImageSubresource2, paramarg3: VkSubresourceLayout2): void;
    static vkGetRenderingAreaGranularityKHR(paramarg0: VkDevice, paramarg1: VkRenderingAreaInfo, paramarg2: VkExtent2D): void;
    constructor()
}