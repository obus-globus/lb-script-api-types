import type { DeviceType } from '../../../../com/mojang/blaze3d/systems/DeviceType.d.ts'
import type { IntIntPair } from '../../../../it/unimi/dsi/fastutil/ints/IntIntPair.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { VkPhysicalDevice } from '../../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
import type { VkPhysicalDeviceDriverProperties } from '../../../../org/lwjgl/vulkan/VkPhysicalDeviceDriverProperties.d.ts'
import type { VkPhysicalDeviceFeatures2 } from '../../../../org/lwjgl/vulkan/VkPhysicalDeviceFeatures2.d.ts'
import type { VkPhysicalDeviceMultiDrawPropertiesEXT } from '../../../../org/lwjgl/vulkan/VkPhysicalDeviceMultiDrawPropertiesEXT.d.ts'
import type { VkPhysicalDeviceProperties } from '../../../../org/lwjgl/vulkan/VkPhysicalDeviceProperties.d.ts'
import type { VkPhysicalDeviceProperties2 } from '../../../../org/lwjgl/vulkan/VkPhysicalDeviceProperties2.d.ts'
import type { VkPhysicalDeviceVulkan11Properties } from '../../../../org/lwjgl/vulkan/VkPhysicalDeviceVulkan11Properties.d.ts'
export class VulkanPhysicalDevice extends Object implements AutoCloseable {
    constructor(vkPhysicalDevice: VkPhysicalDevice)
    // private computeQueueFamilyAndIndex: IntIntPair;
    // private graphicsQueueFamilyAndIndex: IntIntPair;
    // private queueFamilyCreateInfoMap: { [key: string]: any };
    // private transferQueueFamilyAndIndex: IntIntPair;
    // private vkDeviceExtensions: (Object | null)[];
    // private vkPhysicalDevice: VkPhysicalDevice;
    // private vkPhysicalDeviceDriverProperties: VkPhysicalDeviceDriverProperties;
    // private vkPhysicalDeviceFeatures: VkPhysicalDeviceFeatures2;
    // private vkPhysicalDeviceMultiDrawPropertiesEXT: VkPhysicalDeviceMultiDrawPropertiesEXT;
    // private vkPhysicalDeviceProperties: VkPhysicalDeviceProperties2;
    // private vkPhysicalDeviceVulkan11Properties: VkPhysicalDeviceVulkan11Properties;
    close(): void;
    computeQueueFamilyAndIndex(): IntIntPair;
    deviceName(): string;
    deviceType(): DeviceType;
    driverInfo(): string;
    getMissingExtensions(required: string[]): string[];
    graphicsQueueFamilyAndIndex(): IntIntPair;
    hasDeviceExtension(name: string): boolean;
    queueFamilyCreateInfoMap(): { [key: string]: any };
    transferQueueFamilyAndIndex(): IntIntPair;
    vendorName(): string;
    vkPhysicalDevice(): VkPhysicalDevice;
    vkPhysicalDeviceDriverProperties(): VkPhysicalDeviceDriverProperties;
    vkPhysicalDeviceMultiDrawPropertiesEXT(): VkPhysicalDeviceMultiDrawPropertiesEXT;
    vkPhysicalDeviceProperties(): VkPhysicalDeviceProperties;
    vkPhysicalDeviceVulkan11Properties(): VkPhysicalDeviceVulkan11Properties;
}