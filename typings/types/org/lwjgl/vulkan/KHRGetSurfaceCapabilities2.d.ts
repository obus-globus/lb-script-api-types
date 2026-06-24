import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
import type { VkPhysicalDeviceSurfaceInfo2KHR } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceSurfaceInfo2KHR.d.ts'
import type { VkSurfaceCapabilities2KHR } from '../../../org/lwjgl/vulkan/VkSurfaceCapabilities2KHR.d.ts'
export class KHRGetSurfaceCapabilities2 extends Object {
    static VK_KHR_GET_SURFACE_CAPABILITIES_2_EXTENSION_NAME: string;
    static VK_KHR_GET_SURFACE_CAPABILITIES_2_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_SURFACE_INFO_2_KHR: number;
    static VK_STRUCTURE_TYPE_SURFACE_CAPABILITIES_2_KHR: number;
    static VK_STRUCTURE_TYPE_SURFACE_FORMAT_2_KHR: number;
    static nvkGetPhysicalDeviceSurfaceCapabilities2KHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number): number;
    static nvkGetPhysicalDeviceSurfaceFormats2KHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static vkGetPhysicalDeviceSurfaceCapabilities2KHR(paramarg0: VkPhysicalDevice, paramarg1: VkPhysicalDeviceSurfaceInfo2KHR, paramarg2: VkSurfaceCapabilities2KHR): number;
    static vkGetPhysicalDeviceSurfaceFormats2KHR(paramarg0: VkPhysicalDevice, paramarg1: VkPhysicalDeviceSurfaceInfo2KHR, paramarg2: number[], paramarg3: (Object | null)[]): number;
    static vkGetPhysicalDeviceSurfaceFormats2KHR(paramarg0: VkPhysicalDevice, paramarg1: VkPhysicalDeviceSurfaceInfo2KHR, paramarg2: IntBuffer, paramarg3: (Object | null)[]): number;
    constructor()
}