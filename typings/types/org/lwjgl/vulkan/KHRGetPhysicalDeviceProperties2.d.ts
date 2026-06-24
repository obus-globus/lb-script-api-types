import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkFormatProperties2 } from '../../../org/lwjgl/vulkan/VkFormatProperties2.d.ts'
import type { VkImageFormatProperties2 } from '../../../org/lwjgl/vulkan/VkImageFormatProperties2.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
import type { VkPhysicalDeviceFeatures2 } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceFeatures2.d.ts'
import type { VkPhysicalDeviceImageFormatInfo2 } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceImageFormatInfo2.d.ts'
import type { VkPhysicalDeviceMemoryProperties2 } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceMemoryProperties2.d.ts'
import type { VkPhysicalDeviceProperties2 } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceProperties2.d.ts'
import type { VkPhysicalDeviceSparseImageFormatInfo2 } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceSparseImageFormatInfo2.d.ts'
export class KHRGetPhysicalDeviceProperties2 extends Object {
    static VK_KHR_GET_PHYSICAL_DEVICE_PROPERTIES_2_EXTENSION_NAME: string;
    static VK_KHR_GET_PHYSICAL_DEVICE_PROPERTIES_2_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_FORMAT_PROPERTIES_2_KHR: number;
    static VK_STRUCTURE_TYPE_IMAGE_FORMAT_PROPERTIES_2_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_FEATURES_2_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_IMAGE_FORMAT_INFO_2_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_MEMORY_PROPERTIES_2_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_PROPERTIES_2_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_SPARSE_IMAGE_FORMAT_INFO_2_KHR: number;
    static VK_STRUCTURE_TYPE_QUEUE_FAMILY_PROPERTIES_2_KHR: number;
    static VK_STRUCTURE_TYPE_SPARSE_IMAGE_FORMAT_PROPERTIES_2_KHR: number;
    static nvkGetPhysicalDeviceFeatures2KHR(paramarg0: VkPhysicalDevice, paramarg1: number): void;
    static nvkGetPhysicalDeviceFormatProperties2KHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number): void;
    static nvkGetPhysicalDeviceImageFormatProperties2KHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number): number;
    static nvkGetPhysicalDeviceMemoryProperties2KHR(paramarg0: VkPhysicalDevice, paramarg1: number): void;
    static nvkGetPhysicalDeviceProperties2KHR(paramarg0: VkPhysicalDevice, paramarg1: number): void;
    static nvkGetPhysicalDeviceQueueFamilyProperties2KHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number): void;
    static nvkGetPhysicalDeviceSparseImageFormatProperties2KHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static vkGetPhysicalDeviceFeatures2KHR(paramarg0: VkPhysicalDevice, paramarg1: VkPhysicalDeviceFeatures2): void;
    static vkGetPhysicalDeviceFormatProperties2KHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: VkFormatProperties2): void;
    static vkGetPhysicalDeviceImageFormatProperties2KHR(paramarg0: VkPhysicalDevice, paramarg1: VkPhysicalDeviceImageFormatInfo2, paramarg2: VkImageFormatProperties2): number;
    static vkGetPhysicalDeviceMemoryProperties2KHR(paramarg0: VkPhysicalDevice, paramarg1: VkPhysicalDeviceMemoryProperties2): void;
    static vkGetPhysicalDeviceProperties2KHR(paramarg0: VkPhysicalDevice, paramarg1: VkPhysicalDeviceProperties2): void;
    static vkGetPhysicalDeviceQueueFamilyProperties2KHR(paramarg0: VkPhysicalDevice, paramarg1: number[], paramarg2: (Object | null)[]): void;
    static vkGetPhysicalDeviceQueueFamilyProperties2KHR(paramarg0: VkPhysicalDevice, paramarg1: IntBuffer, paramarg2: (Object | null)[]): void;
    static vkGetPhysicalDeviceSparseImageFormatProperties2KHR(paramarg0: VkPhysicalDevice, paramarg1: VkPhysicalDeviceSparseImageFormatInfo2, paramarg2: number[], paramarg3: (Object | null)[]): void;
    static vkGetPhysicalDeviceSparseImageFormatProperties2KHR(paramarg0: VkPhysicalDevice, paramarg1: VkPhysicalDeviceSparseImageFormatInfo2, paramarg2: IntBuffer, paramarg3: (Object | null)[]): void;
    constructor()
}