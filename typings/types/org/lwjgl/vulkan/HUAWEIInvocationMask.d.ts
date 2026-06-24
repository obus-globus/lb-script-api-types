import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
export class HUAWEIInvocationMask extends Object {
    static VK_ACCESS_2_INVOCATION_MASK_READ_BIT_HUAWEI: number;
    static VK_HUAWEI_INVOCATION_MASK_EXTENSION_NAME: string;
    static VK_HUAWEI_INVOCATION_MASK_SPEC_VERSION: number;
    static VK_IMAGE_USAGE_INVOCATION_MASK_BIT_HUAWEI: number;
    static VK_PIPELINE_STAGE_2_INVOCATION_MASK_BIT_HUAWEI: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_INVOCATION_MASK_FEATURES_HUAWEI: number;
    static vkCmdBindInvocationMaskHUAWEI(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number): void;
    constructor()
}