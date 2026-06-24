import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkInstance } from '../../../org/lwjgl/vulkan/VkInstance.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
import type { VkWin32SurfaceCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkWin32SurfaceCreateInfoKHR.d.ts'
export class KHRWin32Surface extends Object {
    static VK_KHR_WIN32_SURFACE_EXTENSION_NAME: string;
    static VK_KHR_WIN32_SURFACE_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_WIN32_SURFACE_CREATE_INFO_KHR: number;
    static nvkCreateWin32SurfaceKHR(paramarg0: VkInstance, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static vkCreateWin32SurfaceKHR(paramarg0: VkInstance, paramarg1: VkWin32SurfaceCreateInfoKHR, paramarg2: VkAllocationCallbacks, paramarg3: LongBuffer): number;
    static vkCreateWin32SurfaceKHR(paramarg0: VkInstance, paramarg1: VkWin32SurfaceCreateInfoKHR, paramarg2: VkAllocationCallbacks, paramarg3: number[]): number;
    static vkGetPhysicalDeviceWin32PresentationSupportKHR(paramarg0: VkPhysicalDevice, paramarg1: number): boolean;
    constructor()
}