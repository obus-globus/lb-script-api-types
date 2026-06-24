import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
export class KHRMaintenance1 extends Object {
    static VK_ERROR_OUT_OF_POOL_MEMORY_KHR: number;
    static VK_FORMAT_FEATURE_TRANSFER_DST_BIT_KHR: number;
    static VK_FORMAT_FEATURE_TRANSFER_SRC_BIT_KHR: number;
    static VK_IMAGE_CREATE_2D_ARRAY_COMPATIBLE_BIT_KHR: number;
    static VK_KHR_MAINTENANCE1_EXTENSION_NAME: string;
    static VK_KHR_MAINTENANCE1_SPEC_VERSION: number;
    static VK_KHR_MAINTENANCE_1_EXTENSION_NAME: string;
    static VK_KHR_MAINTENANCE_1_SPEC_VERSION: number;
    static vkTrimCommandPoolKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    constructor()
}