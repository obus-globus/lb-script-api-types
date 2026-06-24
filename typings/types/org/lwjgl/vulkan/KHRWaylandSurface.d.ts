import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkInstance } from '../../../org/lwjgl/vulkan/VkInstance.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
import type { VkWaylandSurfaceCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkWaylandSurfaceCreateInfoKHR.d.ts'
export class KHRWaylandSurface extends Object {
    static VK_KHR_WAYLAND_SURFACE_EXTENSION_NAME: string;
    static VK_KHR_WAYLAND_SURFACE_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_WAYLAND_SURFACE_CREATE_INFO_KHR: number;
    static nvkCreateWaylandSurfaceKHR(paramarg0: VkInstance, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static vkCreateWaylandSurfaceKHR(paramarg0: VkInstance, paramarg1: VkWaylandSurfaceCreateInfoKHR, paramarg2: VkAllocationCallbacks, paramarg3: LongBuffer): number;
    static vkCreateWaylandSurfaceKHR(paramarg0: VkInstance, paramarg1: VkWaylandSurfaceCreateInfoKHR, paramarg2: VkAllocationCallbacks, paramarg3: number[]): number;
    static vkGetPhysicalDeviceWaylandPresentationSupportKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number): boolean;
    constructor()
}