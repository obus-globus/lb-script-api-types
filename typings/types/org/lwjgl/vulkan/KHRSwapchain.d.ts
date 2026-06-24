import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkAcquireNextImageInfoKHR } from '../../../org/lwjgl/vulkan/VkAcquireNextImageInfoKHR.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkDeviceGroupPresentCapabilitiesKHR } from '../../../org/lwjgl/vulkan/VkDeviceGroupPresentCapabilitiesKHR.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
import type { VkPresentInfoKHR } from '../../../org/lwjgl/vulkan/VkPresentInfoKHR.d.ts'
import type { VkQueue } from '../../../org/lwjgl/vulkan/VkQueue.d.ts'
import type { VkSwapchainCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkSwapchainCreateInfoKHR.d.ts'
export class KHRSwapchain extends Object {
    static VK_DEVICE_GROUP_PRESENT_MODE_LOCAL_BIT_KHR: number;
    static VK_DEVICE_GROUP_PRESENT_MODE_LOCAL_MULTI_DEVICE_BIT_KHR: number;
    static VK_DEVICE_GROUP_PRESENT_MODE_REMOTE_BIT_KHR: number;
    static VK_DEVICE_GROUP_PRESENT_MODE_SUM_BIT_KHR: number;
    static VK_ERROR_OUT_OF_DATE_KHR: number;
    static VK_IMAGE_LAYOUT_PRESENT_SRC_KHR: number;
    static VK_KHR_SWAPCHAIN_EXTENSION_NAME: string;
    static VK_KHR_SWAPCHAIN_SPEC_VERSION: number;
    static VK_OBJECT_TYPE_SWAPCHAIN_KHR: number;
    static VK_STRUCTURE_TYPE_ACQUIRE_NEXT_IMAGE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_BIND_IMAGE_MEMORY_SWAPCHAIN_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_DEVICE_GROUP_PRESENT_CAPABILITIES_KHR: number;
    static VK_STRUCTURE_TYPE_DEVICE_GROUP_PRESENT_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_DEVICE_GROUP_SWAPCHAIN_CREATE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_IMAGE_SWAPCHAIN_CREATE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_PRESENT_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_SWAPCHAIN_CREATE_INFO_KHR: number;
    static VK_SUBOPTIMAL_KHR: number;
    static VK_SWAPCHAIN_CREATE_PROTECTED_BIT_KHR: number;
    static VK_SWAPCHAIN_CREATE_SPLIT_INSTANCE_BIND_REGIONS_BIT_KHR: number;
    static nvkAcquireNextImage2KHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkAcquireNextImageKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static nvkCreateSwapchainKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkDestroySwapchainKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static nvkGetDeviceGroupPresentCapabilitiesKHR(paramarg0: VkDevice, paramarg1: number): number;
    static nvkGetDeviceGroupSurfacePresentModesKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkGetPhysicalDevicePresentRectanglesKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkGetSwapchainImagesKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkQueuePresentKHR(paramarg0: VkQueue, paramarg1: number): number;
    static vkAcquireNextImage2KHR(paramarg0: VkDevice, paramarg1: VkAcquireNextImageInfoKHR, paramarg2: number[]): number;
    static vkAcquireNextImage2KHR(paramarg0: VkDevice, paramarg1: VkAcquireNextImageInfoKHR, paramarg2: IntBuffer): number;
    static vkAcquireNextImageKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number[]): number;
    static vkAcquireNextImageKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: IntBuffer): number;
    static vkCreateSwapchainKHR(paramarg0: VkDevice, paramarg1: VkSwapchainCreateInfoKHR, paramarg2: VkAllocationCallbacks, paramarg3: LongBuffer): number;
    static vkCreateSwapchainKHR(paramarg0: VkDevice, paramarg1: VkSwapchainCreateInfoKHR, paramarg2: VkAllocationCallbacks, paramarg3: number[]): number;
    static vkDestroySwapchainKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: VkAllocationCallbacks): void;
    static vkGetDeviceGroupPresentCapabilitiesKHR(paramarg0: VkDevice, paramarg1: VkDeviceGroupPresentCapabilitiesKHR): number;
    static vkGetDeviceGroupSurfacePresentModesKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number[]): number;
    static vkGetDeviceGroupSurfacePresentModesKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: IntBuffer): number;
    static vkGetPhysicalDevicePresentRectanglesKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number[], paramarg3: (Object | null)[]): number;
    static vkGetPhysicalDevicePresentRectanglesKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: IntBuffer, paramarg3: (Object | null)[]): number;
    static vkGetSwapchainImagesKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number[], paramarg3: number[]): number;
    static vkGetSwapchainImagesKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: IntBuffer, paramarg3: LongBuffer): number;
    static vkQueuePresentKHR(paramarg0: VkQueue, paramarg1: VkPresentInfoKHR): number;
    constructor()
}