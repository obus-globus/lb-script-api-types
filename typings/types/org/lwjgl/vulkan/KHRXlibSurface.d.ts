import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkInstance } from '../../../org/lwjgl/vulkan/VkInstance.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
import type { VkXlibSurfaceCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkXlibSurfaceCreateInfoKHR.d.ts'
export class KHRXlibSurface extends Object {
    static VK_KHR_XLIB_SURFACE_EXTENSION_NAME: string;
    static VK_KHR_XLIB_SURFACE_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_XLIB_SURFACE_CREATE_INFO_KHR: number;
    static nvkCreateXlibSurfaceKHR(paramarg0: VkInstance, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static vkCreateXlibSurfaceKHR(paramarg0: VkInstance, paramarg1: VkXlibSurfaceCreateInfoKHR, paramarg2: VkAllocationCallbacks, paramarg3: LongBuffer): number;
    static vkCreateXlibSurfaceKHR(paramarg0: VkInstance, paramarg1: VkXlibSurfaceCreateInfoKHR, paramarg2: VkAllocationCallbacks, paramarg3: number[]): number;
    static vkGetPhysicalDeviceXlibPresentationSupportKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number, paramarg3: number): boolean;
    constructor()
}