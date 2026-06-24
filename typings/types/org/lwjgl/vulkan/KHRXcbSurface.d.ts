import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkInstance } from '../../../org/lwjgl/vulkan/VkInstance.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
import type { VkXcbSurfaceCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkXcbSurfaceCreateInfoKHR.d.ts'
export class KHRXcbSurface extends Object {
    static VK_KHR_XCB_SURFACE_EXTENSION_NAME: string;
    static VK_KHR_XCB_SURFACE_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_XCB_SURFACE_CREATE_INFO_KHR: number;
    static nvkCreateXcbSurfaceKHR(paramarg0: VkInstance, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static vkCreateXcbSurfaceKHR(paramarg0: VkInstance, paramarg1: VkXcbSurfaceCreateInfoKHR, paramarg2: VkAllocationCallbacks, paramarg3: LongBuffer): number;
    static vkCreateXcbSurfaceKHR(paramarg0: VkInstance, paramarg1: VkXcbSurfaceCreateInfoKHR, paramarg2: VkAllocationCallbacks, paramarg3: number[]): number;
    static vkGetPhysicalDeviceXcbPresentationSupportKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number, paramarg3: number): boolean;
    constructor()
}