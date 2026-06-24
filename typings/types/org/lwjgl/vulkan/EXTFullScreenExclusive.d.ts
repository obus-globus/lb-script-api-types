import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
import type { VkPhysicalDeviceSurfaceInfo2KHR } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceSurfaceInfo2KHR.d.ts'
export class EXTFullScreenExclusive extends Object {
    static VK_ERROR_FULL_SCREEN_EXCLUSIVE_MODE_LOST_EXT: number;
    static VK_EXT_FULL_SCREEN_EXCLUSIVE_EXTENSION_NAME: string;
    static VK_EXT_FULL_SCREEN_EXCLUSIVE_SPEC_VERSION: number;
    static VK_FULL_SCREEN_EXCLUSIVE_ALLOWED_EXT: number;
    static VK_FULL_SCREEN_EXCLUSIVE_APPLICATION_CONTROLLED_EXT: number;
    static VK_FULL_SCREEN_EXCLUSIVE_DEFAULT_EXT: number;
    static VK_FULL_SCREEN_EXCLUSIVE_DISALLOWED_EXT: number;
    static VK_STRUCTURE_TYPE_SURFACE_CAPABILITIES_FULL_SCREEN_EXCLUSIVE_EXT: number;
    static VK_STRUCTURE_TYPE_SURFACE_FULL_SCREEN_EXCLUSIVE_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_SURFACE_FULL_SCREEN_EXCLUSIVE_WIN32_INFO_EXT: number;
    static nvkGetDeviceGroupSurfacePresentModes2EXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkGetPhysicalDeviceSurfacePresentModes2EXT(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static vkAcquireFullScreenExclusiveModeEXT(paramarg0: VkDevice, paramarg1: number): number;
    static vkGetDeviceGroupSurfacePresentModes2EXT(paramarg0: VkDevice, paramarg1: VkPhysicalDeviceSurfaceInfo2KHR, paramarg2: number[]): number;
    static vkGetDeviceGroupSurfacePresentModes2EXT(paramarg0: VkDevice, paramarg1: VkPhysicalDeviceSurfaceInfo2KHR, paramarg2: IntBuffer): number;
    static vkGetPhysicalDeviceSurfacePresentModes2EXT(paramarg0: VkPhysicalDevice, paramarg1: VkPhysicalDeviceSurfaceInfo2KHR, paramarg2: number[], paramarg3: number[]): number;
    static vkGetPhysicalDeviceSurfacePresentModes2EXT(paramarg0: VkPhysicalDevice, paramarg1: VkPhysicalDeviceSurfaceInfo2KHR, paramarg2: IntBuffer, paramarg3: IntBuffer): number;
    static vkReleaseFullScreenExclusiveModeEXT(paramarg0: VkDevice, paramarg1: number): number;
    constructor()
}