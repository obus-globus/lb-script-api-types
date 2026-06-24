import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
import type { VkSurfaceCapabilities2EXT } from '../../../org/lwjgl/vulkan/VkSurfaceCapabilities2EXT.d.ts'
export class EXTDisplaySurfaceCounter extends Object {
    static VK_EXT_DISPLAY_SURFACE_COUNTER_EXTENSION_NAME: string;
    static VK_EXT_DISPLAY_SURFACE_COUNTER_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_SURFACE_CAPABILITIES2_EXT: number;
    static VK_STRUCTURE_TYPE_SURFACE_CAPABILITIES_2_EXT: number;
    static VK_SURFACE_COUNTER_VBLANK_BIT_EXT: number;
    static VK_SURFACE_COUNTER_VBLANK_EXT: number;
    static nvkGetPhysicalDeviceSurfaceCapabilities2EXT(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number): number;
    static vkGetPhysicalDeviceSurfaceCapabilities2EXT(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: VkSurfaceCapabilities2EXT): number;
    constructor()
}