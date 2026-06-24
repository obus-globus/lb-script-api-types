import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
import type { VkPhysicalDeviceVideoEncodeQualityLevelInfoKHR } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceVideoEncodeQualityLevelInfoKHR.d.ts'
import type { VkVideoEncodeInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeInfoKHR.d.ts'
import type { VkVideoEncodeQualityLevelPropertiesKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeQualityLevelPropertiesKHR.d.ts'
import type { VkVideoEncodeSessionParametersFeedbackInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeSessionParametersFeedbackInfoKHR.d.ts'
import type { VkVideoEncodeSessionParametersGetInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeSessionParametersGetInfoKHR.d.ts'
export class KHRVideoEncodeQueue extends Object {
    static VK_ACCESS_2_VIDEO_ENCODE_READ_BIT_KHR: number;
    static VK_ACCESS_2_VIDEO_ENCODE_WRITE_BIT_KHR: number;
    static VK_BUFFER_USAGE_VIDEO_ENCODE_DST_BIT_KHR: number;
    static VK_BUFFER_USAGE_VIDEO_ENCODE_SRC_BIT_KHR: number;
    static VK_ERROR_INVALID_VIDEO_STD_PARAMETERS_KHR: number;
    static VK_FORMAT_FEATURE_2_VIDEO_ENCODE_DPB_BIT_KHR: number;
    static VK_FORMAT_FEATURE_2_VIDEO_ENCODE_INPUT_BIT_KHR: number;
    static VK_FORMAT_FEATURE_VIDEO_ENCODE_DPB_BIT_KHR: number;
    static VK_FORMAT_FEATURE_VIDEO_ENCODE_INPUT_BIT_KHR: number;
    static VK_IMAGE_LAYOUT_VIDEO_ENCODE_DPB_KHR: number;
    static VK_IMAGE_LAYOUT_VIDEO_ENCODE_DST_KHR: number;
    static VK_IMAGE_LAYOUT_VIDEO_ENCODE_SRC_KHR: number;
    static VK_IMAGE_USAGE_VIDEO_ENCODE_DPB_BIT_KHR: number;
    static VK_IMAGE_USAGE_VIDEO_ENCODE_DST_BIT_KHR: number;
    static VK_IMAGE_USAGE_VIDEO_ENCODE_SRC_BIT_KHR: number;
    static VK_KHR_VIDEO_ENCODE_QUEUE_EXTENSION_NAME: string;
    static VK_KHR_VIDEO_ENCODE_QUEUE_SPEC_VERSION: number;
    static VK_PIPELINE_STAGE_2_VIDEO_ENCODE_BIT_KHR: number;
    static VK_QUERY_RESULT_STATUS_INSUFFICIENT_BITSTREAM_BUFFER_RANGE_KHR: number;
    static VK_QUERY_TYPE_VIDEO_ENCODE_FEEDBACK_KHR: number;
    static VK_QUEUE_VIDEO_ENCODE_BIT_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_VIDEO_ENCODE_QUALITY_LEVEL_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_QUERY_POOL_VIDEO_ENCODE_FEEDBACK_CREATE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_VIDEO_ENCODE_CAPABILITIES_KHR: number;
    static VK_STRUCTURE_TYPE_VIDEO_ENCODE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_VIDEO_ENCODE_QUALITY_LEVEL_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_VIDEO_ENCODE_QUALITY_LEVEL_PROPERTIES_KHR: number;
    static VK_STRUCTURE_TYPE_VIDEO_ENCODE_RATE_CONTROL_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_VIDEO_ENCODE_RATE_CONTROL_LAYER_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_VIDEO_ENCODE_SESSION_PARAMETERS_FEEDBACK_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_VIDEO_ENCODE_SESSION_PARAMETERS_GET_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_VIDEO_ENCODE_USAGE_INFO_KHR: number;
    static VK_VIDEO_CODING_CONTROL_ENCODE_QUALITY_LEVEL_BIT_KHR: number;
    static VK_VIDEO_CODING_CONTROL_ENCODE_RATE_CONTROL_BIT_KHR: number;
    static VK_VIDEO_ENCODE_CAPABILITY_INSUFFICIENT_BITSTREAM_BUFFER_RANGE_DETECTION_BIT_KHR: number;
    static VK_VIDEO_ENCODE_CAPABILITY_PRECEDING_EXTERNALLY_ENCODED_BYTES_BIT_KHR: number;
    static VK_VIDEO_ENCODE_CONTENT_CAMERA_BIT_KHR: number;
    static VK_VIDEO_ENCODE_CONTENT_DEFAULT_KHR: number;
    static VK_VIDEO_ENCODE_CONTENT_DESKTOP_BIT_KHR: number;
    static VK_VIDEO_ENCODE_CONTENT_RENDERED_BIT_KHR: number;
    static VK_VIDEO_ENCODE_FEEDBACK_BITSTREAM_BUFFER_OFFSET_BIT_KHR: number;
    static VK_VIDEO_ENCODE_FEEDBACK_BITSTREAM_BYTES_WRITTEN_BIT_KHR: number;
    static VK_VIDEO_ENCODE_FEEDBACK_BITSTREAM_HAS_OVERRIDES_BIT_KHR: number;
    static VK_VIDEO_ENCODE_RATE_CONTROL_MODE_CBR_BIT_KHR: number;
    static VK_VIDEO_ENCODE_RATE_CONTROL_MODE_DEFAULT_KHR: number;
    static VK_VIDEO_ENCODE_RATE_CONTROL_MODE_DISABLED_BIT_KHR: number;
    static VK_VIDEO_ENCODE_RATE_CONTROL_MODE_VBR_BIT_KHR: number;
    static VK_VIDEO_ENCODE_TUNING_MODE_DEFAULT_KHR: number;
    static VK_VIDEO_ENCODE_TUNING_MODE_HIGH_QUALITY_KHR: number;
    static VK_VIDEO_ENCODE_TUNING_MODE_LOSSLESS_KHR: number;
    static VK_VIDEO_ENCODE_TUNING_MODE_LOW_LATENCY_KHR: number;
    static VK_VIDEO_ENCODE_TUNING_MODE_ULTRA_LOW_LATENCY_KHR: number;
    static VK_VIDEO_ENCODE_USAGE_CONFERENCING_BIT_KHR: number;
    static VK_VIDEO_ENCODE_USAGE_DEFAULT_KHR: number;
    static VK_VIDEO_ENCODE_USAGE_RECORDING_BIT_KHR: number;
    static VK_VIDEO_ENCODE_USAGE_STREAMING_BIT_KHR: number;
    static VK_VIDEO_ENCODE_USAGE_TRANSCODING_BIT_KHR: number;
    static VK_VIDEO_SESSION_CREATE_ALLOW_ENCODE_PARAMETER_OPTIMIZATIONS_BIT_KHR: number;
    static nvkCmdEncodeVideoKHR(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static nvkGetEncodedVideoSessionParametersKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static nvkGetPhysicalDeviceVideoEncodeQualityLevelPropertiesKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number): number;
    static vkCmdEncodeVideoKHR(paramarg0: VkCommandBuffer, paramarg1: VkVideoEncodeInfoKHR): void;
    static vkGetEncodedVideoSessionParametersKHR(paramarg0: VkDevice, paramarg1: VkVideoEncodeSessionParametersGetInfoKHR, paramarg2: VkVideoEncodeSessionParametersFeedbackInfoKHR, paramarg3: PointerBuffer, paramarg4: ByteBuffer): number;
    static vkGetPhysicalDeviceVideoEncodeQualityLevelPropertiesKHR(paramarg0: VkPhysicalDevice, paramarg1: VkPhysicalDeviceVideoEncodeQualityLevelInfoKHR, paramarg2: VkVideoEncodeQualityLevelPropertiesKHR): number;
    constructor()
}