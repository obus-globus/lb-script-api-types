import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
export class EXTTransformFeedback extends Object {
    static VK_ACCESS_TRANSFORM_FEEDBACK_COUNTER_READ_BIT_EXT: number;
    static VK_ACCESS_TRANSFORM_FEEDBACK_COUNTER_WRITE_BIT_EXT: number;
    static VK_ACCESS_TRANSFORM_FEEDBACK_WRITE_BIT_EXT: number;
    static VK_BUFFER_USAGE_TRANSFORM_FEEDBACK_BUFFER_BIT_EXT: number;
    static VK_BUFFER_USAGE_TRANSFORM_FEEDBACK_COUNTER_BUFFER_BIT_EXT: number;
    static VK_EXT_TRANSFORM_FEEDBACK_EXTENSION_NAME: string;
    static VK_EXT_TRANSFORM_FEEDBACK_SPEC_VERSION: number;
    static VK_PIPELINE_STAGE_TRANSFORM_FEEDBACK_BIT_EXT: number;
    static VK_QUERY_TYPE_TRANSFORM_FEEDBACK_STREAM_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_TRANSFORM_FEEDBACK_FEATURES_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_TRANSFORM_FEEDBACK_PROPERTIES_EXT: number;
    static VK_STRUCTURE_TYPE_PIPELINE_RASTERIZATION_STATE_STREAM_CREATE_INFO_EXT: number;
    static nvkCmdBeginTransformFeedbackEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nvkCmdBindTransformFeedbackBuffersEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static nvkCmdEndTransformFeedbackEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static vkCmdBeginQueryIndexedEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static vkCmdBeginTransformFeedbackEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: LongBuffer, paramarg3: LongBuffer): void;
    static vkCmdBeginTransformFeedbackEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number[], paramarg3: number[]): void;
    static vkCmdBindTransformFeedbackBuffersEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: LongBuffer, paramarg3: LongBuffer, paramarg4: LongBuffer): void;
    static vkCmdBindTransformFeedbackBuffersEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number[], paramarg3: number[], paramarg4: number[]): void;
    static vkCmdDrawIndirectByteCountEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    static vkCmdEndQueryIndexedEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static vkCmdEndTransformFeedbackEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: LongBuffer, paramarg3: LongBuffer): void;
    static vkCmdEndTransformFeedbackEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number[], paramarg3: number[]): void;
    constructor()
}