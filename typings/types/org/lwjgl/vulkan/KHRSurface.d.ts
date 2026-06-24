import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkInstance } from '../../../org/lwjgl/vulkan/VkInstance.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
import type { VkSurfaceCapabilitiesKHR } from '../../../org/lwjgl/vulkan/VkSurfaceCapabilitiesKHR.d.ts'
export class KHRSurface extends Object {
    static VK_COLORSPACE_SRGB_NONLINEAR_KHR: number;
    static VK_COLOR_SPACE_SRGB_NONLINEAR_KHR: number;
    static VK_COMPOSITE_ALPHA_INHERIT_BIT_KHR: number;
    static VK_COMPOSITE_ALPHA_OPAQUE_BIT_KHR: number;
    static VK_COMPOSITE_ALPHA_POST_MULTIPLIED_BIT_KHR: number;
    static VK_COMPOSITE_ALPHA_PRE_MULTIPLIED_BIT_KHR: number;
    static VK_ERROR_NATIVE_WINDOW_IN_USE_KHR: number;
    static VK_ERROR_SURFACE_LOST_KHR: number;
    static VK_KHR_SURFACE_EXTENSION_NAME: string;
    static VK_KHR_SURFACE_SPEC_VERSION: number;
    static VK_OBJECT_TYPE_SURFACE_KHR: number;
    static VK_PRESENT_MODE_FIFO_KHR: number;
    static VK_PRESENT_MODE_FIFO_RELAXED_KHR: number;
    static VK_PRESENT_MODE_IMMEDIATE_KHR: number;
    static VK_PRESENT_MODE_MAILBOX_KHR: number;
    static VK_SURFACE_TRANSFORM_HORIZONTAL_MIRROR_BIT_KHR: number;
    static VK_SURFACE_TRANSFORM_HORIZONTAL_MIRROR_ROTATE_180_BIT_KHR: number;
    static VK_SURFACE_TRANSFORM_HORIZONTAL_MIRROR_ROTATE_270_BIT_KHR: number;
    static VK_SURFACE_TRANSFORM_HORIZONTAL_MIRROR_ROTATE_90_BIT_KHR: number;
    static VK_SURFACE_TRANSFORM_IDENTITY_BIT_KHR: number;
    static VK_SURFACE_TRANSFORM_INHERIT_BIT_KHR: number;
    static VK_SURFACE_TRANSFORM_ROTATE_180_BIT_KHR: number;
    static VK_SURFACE_TRANSFORM_ROTATE_270_BIT_KHR: number;
    static VK_SURFACE_TRANSFORM_ROTATE_90_BIT_KHR: number;
    static nvkDestroySurfaceKHR(paramarg0: VkInstance, paramarg1: number, paramarg2: number): void;
    static nvkGetPhysicalDeviceSurfaceCapabilitiesKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number): number;
    static nvkGetPhysicalDeviceSurfaceFormatsKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkGetPhysicalDeviceSurfacePresentModesKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkGetPhysicalDeviceSurfaceSupportKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static vkDestroySurfaceKHR(paramarg0: VkInstance, paramarg1: number, paramarg2: VkAllocationCallbacks): void;
    static vkGetPhysicalDeviceSurfaceCapabilitiesKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: VkSurfaceCapabilitiesKHR): number;
    static vkGetPhysicalDeviceSurfaceFormatsKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number[], paramarg3: (Object | null)[]): number;
    static vkGetPhysicalDeviceSurfaceFormatsKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: IntBuffer, paramarg3: (Object | null)[]): number;
    static vkGetPhysicalDeviceSurfacePresentModesKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number[], paramarg3: number[]): number;
    static vkGetPhysicalDeviceSurfacePresentModesKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: IntBuffer, paramarg3: IntBuffer): number;
    static vkGetPhysicalDeviceSurfaceSupportKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number, paramarg3: number[]): number;
    static vkGetPhysicalDeviceSurfaceSupportKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number, paramarg3: IntBuffer): number;
    constructor()
}