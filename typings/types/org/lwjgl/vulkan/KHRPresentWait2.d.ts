import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkPresentWait2InfoKHR } from '../../../org/lwjgl/vulkan/VkPresentWait2InfoKHR.d.ts'
export class KHRPresentWait2 extends Object {
    static VK_KHR_PRESENT_WAIT_2_EXTENSION_NAME: string;
    static VK_KHR_PRESENT_WAIT_2_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_PRESENT_WAIT_2_FEATURES_KHR: number;
    static VK_STRUCTURE_TYPE_PRESENT_WAIT_2_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_SURFACE_CAPABILITIES_PRESENT_WAIT_2_KHR: number;
    static VK_SWAPCHAIN_CREATE_PRESENT_WAIT_2_BIT_KHR: number;
    static nvkWaitForPresent2KHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static vkWaitForPresent2KHR(paramarg0: VkDevice, paramarg1: number, paramarg2: VkPresentWait2InfoKHR): number;
    constructor()
}