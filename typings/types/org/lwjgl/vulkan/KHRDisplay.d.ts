import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkDisplayModeCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkDisplayModeCreateInfoKHR.d.ts'
import type { VkDisplayPlaneCapabilitiesKHR } from '../../../org/lwjgl/vulkan/VkDisplayPlaneCapabilitiesKHR.d.ts'
import type { VkDisplaySurfaceCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkDisplaySurfaceCreateInfoKHR.d.ts'
import type { VkInstance } from '../../../org/lwjgl/vulkan/VkInstance.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
export class KHRDisplay extends Object {
    static VK_DISPLAY_PLANE_ALPHA_GLOBAL_BIT_KHR: number;
    static VK_DISPLAY_PLANE_ALPHA_OPAQUE_BIT_KHR: number;
    static VK_DISPLAY_PLANE_ALPHA_PER_PIXEL_BIT_KHR: number;
    static VK_DISPLAY_PLANE_ALPHA_PER_PIXEL_PREMULTIPLIED_BIT_KHR: number;
    static VK_KHR_DISPLAY_EXTENSION_NAME: string;
    static VK_KHR_DISPLAY_SPEC_VERSION: number;
    static VK_OBJECT_TYPE_DISPLAY_KHR: number;
    static VK_OBJECT_TYPE_DISPLAY_MODE_KHR: number;
    static VK_STRUCTURE_TYPE_DISPLAY_MODE_CREATE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_DISPLAY_SURFACE_CREATE_INFO_KHR: number;
    static nvkCreateDisplayModeKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static nvkCreateDisplayPlaneSurfaceKHR(paramarg0: VkInstance, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkGetDisplayModePropertiesKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkGetDisplayPlaneCapabilitiesKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkGetDisplayPlaneSupportedDisplaysKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkGetPhysicalDeviceDisplayPlanePropertiesKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number): number;
    static nvkGetPhysicalDeviceDisplayPropertiesKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number): number;
    static vkCreateDisplayModeKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: VkDisplayModeCreateInfoKHR, paramarg3: VkAllocationCallbacks, paramarg4: LongBuffer): number;
    static vkCreateDisplayModeKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: VkDisplayModeCreateInfoKHR, paramarg3: VkAllocationCallbacks, paramarg4: number[]): number;
    static vkCreateDisplayPlaneSurfaceKHR(paramarg0: VkInstance, paramarg1: VkDisplaySurfaceCreateInfoKHR, paramarg2: VkAllocationCallbacks, paramarg3: LongBuffer): number;
    static vkCreateDisplayPlaneSurfaceKHR(paramarg0: VkInstance, paramarg1: VkDisplaySurfaceCreateInfoKHR, paramarg2: VkAllocationCallbacks, paramarg3: number[]): number;
    static vkGetDisplayModePropertiesKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number[], paramarg3: (Object | null)[]): number;
    static vkGetDisplayModePropertiesKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: IntBuffer, paramarg3: (Object | null)[]): number;
    static vkGetDisplayPlaneCapabilitiesKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number, paramarg3: VkDisplayPlaneCapabilitiesKHR): number;
    static vkGetDisplayPlaneSupportedDisplaysKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number[], paramarg3: number[]): number;
    static vkGetDisplayPlaneSupportedDisplaysKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: IntBuffer, paramarg3: LongBuffer): number;
    static vkGetPhysicalDeviceDisplayPlanePropertiesKHR(paramarg0: VkPhysicalDevice, paramarg1: number[], paramarg2: (Object | null)[]): number;
    static vkGetPhysicalDeviceDisplayPlanePropertiesKHR(paramarg0: VkPhysicalDevice, paramarg1: IntBuffer, paramarg2: (Object | null)[]): number;
    static vkGetPhysicalDeviceDisplayPropertiesKHR(paramarg0: VkPhysicalDevice, paramarg1: number[], paramarg2: (Object | null)[]): number;
    static vkGetPhysicalDeviceDisplayPropertiesKHR(paramarg0: VkPhysicalDevice, paramarg1: IntBuffer, paramarg2: (Object | null)[]): number;
    constructor()
}