import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
export class EXTDirectModeDisplay extends Object {
    static VK_EXT_DIRECT_MODE_DISPLAY_EXTENSION_NAME: string;
    static VK_EXT_DIRECT_MODE_DISPLAY_SPEC_VERSION: number;
    static vkReleaseDisplayEXT(paramarg0: VkPhysicalDevice, paramarg1: number): number;
    constructor()
}