import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkVideoDecodeInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoDecodeInfoKHR.d.ts'
export class KHRVideoDecodeQueue extends Object {
    static VK_ACCESS_2_VIDEO_DECODE_READ_BIT_KHR: number;
    static VK_ACCESS_2_VIDEO_DECODE_WRITE_BIT_KHR: number;
    static VK_BUFFER_USAGE_VIDEO_DECODE_DST_BIT_KHR: number;
    static VK_BUFFER_USAGE_VIDEO_DECODE_SRC_BIT_KHR: number;
    static VK_FORMAT_FEATURE_2_VIDEO_DECODE_DPB_BIT_KHR: number;
    static VK_FORMAT_FEATURE_2_VIDEO_DECODE_OUTPUT_BIT_KHR: number;
    static VK_FORMAT_FEATURE_VIDEO_DECODE_DPB_BIT_KHR: number;
    static VK_FORMAT_FEATURE_VIDEO_DECODE_OUTPUT_BIT_KHR: number;
    static VK_IMAGE_LAYOUT_VIDEO_DECODE_DPB_KHR: number;
    static VK_IMAGE_LAYOUT_VIDEO_DECODE_DST_KHR: number;
    static VK_IMAGE_LAYOUT_VIDEO_DECODE_SRC_KHR: number;
    static VK_IMAGE_USAGE_VIDEO_DECODE_DPB_BIT_KHR: number;
    static VK_IMAGE_USAGE_VIDEO_DECODE_DST_BIT_KHR: number;
    static VK_IMAGE_USAGE_VIDEO_DECODE_SRC_BIT_KHR: number;
    static VK_KHR_VIDEO_DECODE_QUEUE_EXTENSION_NAME: string;
    static VK_KHR_VIDEO_DECODE_QUEUE_SPEC_VERSION: number;
    static VK_PIPELINE_STAGE_2_VIDEO_DECODE_BIT_KHR: number;
    static VK_QUEUE_VIDEO_DECODE_BIT_KHR: number;
    static VK_STRUCTURE_TYPE_VIDEO_DECODE_CAPABILITIES_KHR: number;
    static VK_STRUCTURE_TYPE_VIDEO_DECODE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_VIDEO_DECODE_USAGE_INFO_KHR: number;
    static VK_VIDEO_DECODE_CAPABILITY_DPB_AND_OUTPUT_COINCIDE_BIT_KHR: number;
    static VK_VIDEO_DECODE_CAPABILITY_DPB_AND_OUTPUT_DISTINCT_BIT_KHR: number;
    static VK_VIDEO_DECODE_USAGE_DEFAULT_KHR: number;
    static VK_VIDEO_DECODE_USAGE_OFFLINE_BIT_KHR: number;
    static VK_VIDEO_DECODE_USAGE_STREAMING_BIT_KHR: number;
    static VK_VIDEO_DECODE_USAGE_TRANSCODING_BIT_KHR: number;
    static nvkCmdDecodeVideoKHR(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdDecodeVideoKHR(paramarg0: VkCommandBuffer, paramarg1: VkVideoDecodeInfoKHR): void;
    constructor()
}