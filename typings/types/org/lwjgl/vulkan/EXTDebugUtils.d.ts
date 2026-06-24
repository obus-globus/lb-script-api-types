import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkDebugUtilsLabelEXT } from '../../../org/lwjgl/vulkan/VkDebugUtilsLabelEXT.d.ts'
import type { VkDebugUtilsMessengerCallbackDataEXT } from '../../../org/lwjgl/vulkan/VkDebugUtilsMessengerCallbackDataEXT.d.ts'
import type { VkDebugUtilsMessengerCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkDebugUtilsMessengerCreateInfoEXT.d.ts'
import type { VkDebugUtilsObjectNameInfoEXT } from '../../../org/lwjgl/vulkan/VkDebugUtilsObjectNameInfoEXT.d.ts'
import type { VkDebugUtilsObjectTagInfoEXT } from '../../../org/lwjgl/vulkan/VkDebugUtilsObjectTagInfoEXT.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkInstance } from '../../../org/lwjgl/vulkan/VkInstance.d.ts'
import type { VkQueue } from '../../../org/lwjgl/vulkan/VkQueue.d.ts'
export class EXTDebugUtils extends Object {
    static VK_DEBUG_UTILS_MESSAGE_SEVERITY_ERROR_BIT_EXT: number;
    static VK_DEBUG_UTILS_MESSAGE_SEVERITY_INFO_BIT_EXT: number;
    static VK_DEBUG_UTILS_MESSAGE_SEVERITY_VERBOSE_BIT_EXT: number;
    static VK_DEBUG_UTILS_MESSAGE_SEVERITY_WARNING_BIT_EXT: number;
    static VK_DEBUG_UTILS_MESSAGE_TYPE_GENERAL_BIT_EXT: number;
    static VK_DEBUG_UTILS_MESSAGE_TYPE_PERFORMANCE_BIT_EXT: number;
    static VK_DEBUG_UTILS_MESSAGE_TYPE_VALIDATION_BIT_EXT: number;
    static VK_EXT_DEBUG_UTILS_EXTENSION_NAME: string;
    static VK_EXT_DEBUG_UTILS_SPEC_VERSION: number;
    static VK_OBJECT_TYPE_DEBUG_UTILS_MESSENGER_EXT: number;
    static VK_STRUCTURE_TYPE_DEBUG_UTILS_LABEL_EXT: number;
    static VK_STRUCTURE_TYPE_DEBUG_UTILS_MESSENGER_CALLBACK_DATA_EXT: number;
    static VK_STRUCTURE_TYPE_DEBUG_UTILS_MESSENGER_CREATE_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_DEBUG_UTILS_OBJECT_NAME_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_DEBUG_UTILS_OBJECT_TAG_INFO_EXT: number;
    static nvkCmdBeginDebugUtilsLabelEXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static nvkCmdInsertDebugUtilsLabelEXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static nvkCreateDebugUtilsMessengerEXT(paramarg0: VkInstance, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkDestroyDebugUtilsMessengerEXT(paramarg0: VkInstance, paramarg1: number, paramarg2: number): void;
    static nvkQueueBeginDebugUtilsLabelEXT(paramarg0: VkQueue, paramarg1: number): void;
    static nvkQueueInsertDebugUtilsLabelEXT(paramarg0: VkQueue, paramarg1: number): void;
    static nvkSetDebugUtilsObjectNameEXT(paramarg0: VkDevice, paramarg1: number): number;
    static nvkSetDebugUtilsObjectTagEXT(paramarg0: VkDevice, paramarg1: number): number;
    static nvkSubmitDebugUtilsMessageEXT(paramarg0: VkInstance, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static vkCmdBeginDebugUtilsLabelEXT(paramarg0: VkCommandBuffer, paramarg1: VkDebugUtilsLabelEXT): void;
    static vkCmdEndDebugUtilsLabelEXT(paramarg0: VkCommandBuffer): void;
    static vkCmdInsertDebugUtilsLabelEXT(paramarg0: VkCommandBuffer, paramarg1: VkDebugUtilsLabelEXT): void;
    static vkCreateDebugUtilsMessengerEXT(paramarg0: VkInstance, paramarg1: VkDebugUtilsMessengerCreateInfoEXT, paramarg2: VkAllocationCallbacks, paramarg3: LongBuffer): number;
    static vkCreateDebugUtilsMessengerEXT(paramarg0: VkInstance, paramarg1: VkDebugUtilsMessengerCreateInfoEXT, paramarg2: VkAllocationCallbacks, paramarg3: number[]): number;
    static vkDestroyDebugUtilsMessengerEXT(paramarg0: VkInstance, paramarg1: number, paramarg2: VkAllocationCallbacks): void;
    static vkQueueBeginDebugUtilsLabelEXT(paramarg0: VkQueue, paramarg1: VkDebugUtilsLabelEXT): void;
    static vkQueueEndDebugUtilsLabelEXT(paramarg0: VkQueue): void;
    static vkQueueInsertDebugUtilsLabelEXT(paramarg0: VkQueue, paramarg1: VkDebugUtilsLabelEXT): void;
    static vkSetDebugUtilsObjectNameEXT(paramarg0: VkDevice, paramarg1: VkDebugUtilsObjectNameInfoEXT): number;
    static vkSetDebugUtilsObjectTagEXT(paramarg0: VkDevice, paramarg1: VkDebugUtilsObjectTagInfoEXT): number;
    static vkSubmitDebugUtilsMessageEXT(paramarg0: VkInstance, paramarg1: number, paramarg2: number, paramarg3: VkDebugUtilsMessengerCallbackDataEXT): void;
    constructor()
}