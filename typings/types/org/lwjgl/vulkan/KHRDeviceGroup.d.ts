import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkAcquireNextImageInfoKHR } from '../../../org/lwjgl/vulkan/VkAcquireNextImageInfoKHR.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkDeviceGroupPresentCapabilitiesKHR } from '../../../org/lwjgl/vulkan/VkDeviceGroupPresentCapabilitiesKHR.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
export class KHRDeviceGroup extends Object {
    static VK_DEPENDENCY_DEVICE_GROUP_BIT_KHR: number;
    static VK_IMAGE_CREATE_SPLIT_INSTANCE_BIND_REGIONS_BIT_KHR: number;
    static VK_KHR_DEVICE_GROUP_EXTENSION_NAME: string;
    static VK_KHR_DEVICE_GROUP_SPEC_VERSION: number;
    static VK_MEMORY_ALLOCATE_DEVICE_MASK_BIT_KHR: number;
    static VK_PEER_MEMORY_FEATURE_COPY_DST_BIT_KHR: number;
    static VK_PEER_MEMORY_FEATURE_COPY_SRC_BIT_KHR: number;
    static VK_PEER_MEMORY_FEATURE_GENERIC_DST_BIT_KHR: number;
    static VK_PEER_MEMORY_FEATURE_GENERIC_SRC_BIT_KHR: number;
    static VK_PIPELINE_CREATE_DISPATCH_BASE_BIT_KHR: number;
    static VK_PIPELINE_CREATE_DISPATCH_BASE_KHR: number;
    static VK_PIPELINE_CREATE_VIEW_INDEX_FROM_DEVICE_INDEX_BIT_KHR: number;
    static VK_STRUCTURE_TYPE_ACQUIRE_NEXT_IMAGE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_BIND_BUFFER_MEMORY_DEVICE_GROUP_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_BIND_IMAGE_MEMORY_DEVICE_GROUP_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_BIND_IMAGE_MEMORY_SWAPCHAIN_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_DEVICE_GROUP_BIND_SPARSE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_DEVICE_GROUP_COMMAND_BUFFER_BEGIN_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_DEVICE_GROUP_PRESENT_CAPABILITIES_KHR: number;
    static VK_STRUCTURE_TYPE_DEVICE_GROUP_PRESENT_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_DEVICE_GROUP_RENDER_PASS_BEGIN_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_DEVICE_GROUP_SUBMIT_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_DEVICE_GROUP_SWAPCHAIN_CREATE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_IMAGE_SWAPCHAIN_CREATE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_MEMORY_ALLOCATE_FLAGS_INFO_KHR: number;
    static VK_SWAPCHAIN_CREATE_SPLIT_INSTANCE_BIND_REGIONS_BIT_KHR: number;
    static nvkAcquireNextImage2KHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkGetDeviceGroupPeerMemoryFeaturesKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nvkGetDeviceGroupPresentCapabilitiesKHR(paramarg0: VkDevice, paramarg1: number): number;
    static nvkGetDeviceGroupSurfacePresentModesKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkGetPhysicalDevicePresentRectanglesKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static vkAcquireNextImage2KHR(paramarg0: VkDevice, paramarg1: VkAcquireNextImageInfoKHR, paramarg2: number[]): number;
    static vkAcquireNextImage2KHR(paramarg0: VkDevice, paramarg1: VkAcquireNextImageInfoKHR, paramarg2: IntBuffer): number;
    static vkCmdDispatchBaseKHR(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    static vkCmdSetDeviceMaskKHR(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkGetDeviceGroupPeerMemoryFeaturesKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number[]): void;
    static vkGetDeviceGroupPeerMemoryFeaturesKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: IntBuffer): void;
    static vkGetDeviceGroupPresentCapabilitiesKHR(paramarg0: VkDevice, paramarg1: VkDeviceGroupPresentCapabilitiesKHR): number;
    static vkGetDeviceGroupSurfacePresentModesKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number[]): number;
    static vkGetDeviceGroupSurfacePresentModesKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: IntBuffer): number;
    static vkGetPhysicalDevicePresentRectanglesKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number[], paramarg3: (Object | null)[]): number;
    static vkGetPhysicalDevicePresentRectanglesKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: IntBuffer, paramarg3: (Object | null)[]): number;
    constructor()
}