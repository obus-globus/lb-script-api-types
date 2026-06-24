import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkDisplayPlaneCapabilities2KHR } from '../../../org/lwjgl/vulkan/VkDisplayPlaneCapabilities2KHR.d.ts'
import type { VkDisplayPlaneInfo2KHR } from '../../../org/lwjgl/vulkan/VkDisplayPlaneInfo2KHR.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
export class KHRGetDisplayProperties2 extends Object {
    static VK_KHR_GET_DISPLAY_PROPERTIES_2_EXTENSION_NAME: string;
    static VK_KHR_GET_DISPLAY_PROPERTIES_2_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_DISPLAY_MODE_PROPERTIES_2_KHR: number;
    static VK_STRUCTURE_TYPE_DISPLAY_PLANE_CAPABILITIES_2_KHR: number;
    static VK_STRUCTURE_TYPE_DISPLAY_PLANE_INFO_2_KHR: number;
    static VK_STRUCTURE_TYPE_DISPLAY_PLANE_PROPERTIES_2_KHR: number;
    static VK_STRUCTURE_TYPE_DISPLAY_PROPERTIES_2_KHR: number;
    static nvkGetDisplayModeProperties2KHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkGetDisplayPlaneCapabilities2KHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number): number;
    static nvkGetPhysicalDeviceDisplayPlaneProperties2KHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number): number;
    static nvkGetPhysicalDeviceDisplayProperties2KHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number): number;
    static vkGetDisplayModeProperties2KHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number[], paramarg3: (Object | null)[]): number;
    static vkGetDisplayModeProperties2KHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: IntBuffer, paramarg3: (Object | null)[]): number;
    static vkGetDisplayPlaneCapabilities2KHR(paramarg0: VkPhysicalDevice, paramarg1: VkDisplayPlaneInfo2KHR, paramarg2: VkDisplayPlaneCapabilities2KHR): number;
    static vkGetPhysicalDeviceDisplayPlaneProperties2KHR(paramarg0: VkPhysicalDevice, paramarg1: number[], paramarg2: (Object | null)[]): number;
    static vkGetPhysicalDeviceDisplayPlaneProperties2KHR(paramarg0: VkPhysicalDevice, paramarg1: IntBuffer, paramarg2: (Object | null)[]): number;
    static vkGetPhysicalDeviceDisplayProperties2KHR(paramarg0: VkPhysicalDevice, paramarg1: number[], paramarg2: (Object | null)[]): number;
    static vkGetPhysicalDeviceDisplayProperties2KHR(paramarg0: VkPhysicalDevice, paramarg1: IntBuffer, paramarg2: (Object | null)[]): number;
    constructor()
}