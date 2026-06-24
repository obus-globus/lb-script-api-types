import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
export class KHRPresentWait extends Object {
    static VK_KHR_PRESENT_WAIT_EXTENSION_NAME: string;
    static VK_KHR_PRESENT_WAIT_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_PRESENT_WAIT_FEATURES_KHR: number;
    static vkWaitForPresentKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    constructor()
}