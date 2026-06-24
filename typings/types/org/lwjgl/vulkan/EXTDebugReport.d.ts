import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkDebugReportCallbackCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkDebugReportCallbackCreateInfoEXT.d.ts'
import type { VkInstance } from '../../../org/lwjgl/vulkan/VkInstance.d.ts'
export class EXTDebugReport extends Object {
    static VK_DEBUG_REPORT_DEBUG_BIT_EXT: number;
    static VK_DEBUG_REPORT_ERROR_BIT_EXT: number;
    static VK_DEBUG_REPORT_INFORMATION_BIT_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_BUFFER_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_BUFFER_VIEW_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_COMMAND_BUFFER_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_COMMAND_POOL_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_DEBUG_REPORT_CALLBACK_EXT_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_DEBUG_REPORT_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_DESCRIPTOR_POOL_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_DESCRIPTOR_SET_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_DESCRIPTOR_SET_LAYOUT_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_DESCRIPTOR_UPDATE_TEMPLATE_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_DEVICE_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_DEVICE_MEMORY_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_DISPLAY_KHR_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_DISPLAY_MODE_KHR_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_EVENT_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_FENCE_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_FRAMEBUFFER_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_IMAGE_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_IMAGE_VIEW_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_INSTANCE_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_PHYSICAL_DEVICE_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_PIPELINE_CACHE_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_PIPELINE_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_PIPELINE_LAYOUT_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_QUERY_POOL_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_QUEUE_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_RENDER_PASS_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_SAMPLER_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_SAMPLER_YCBCR_CONVERSION_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_SEMAPHORE_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_SHADER_MODULE_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_SURFACE_KHR_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_SWAPCHAIN_KHR_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_UNKNOWN_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_VALIDATION_CACHE_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_VALIDATION_CACHE_EXT_EXT: number;
    static VK_DEBUG_REPORT_PERFORMANCE_WARNING_BIT_EXT: number;
    static VK_DEBUG_REPORT_WARNING_BIT_EXT: number;
    static VK_ERROR_VALIDATION_FAILED_EXT: number;
    static VK_EXT_DEBUG_REPORT_EXTENSION_NAME: string;
    static VK_EXT_DEBUG_REPORT_SPEC_VERSION: number;
    static VK_OBJECT_TYPE_DEBUG_REPORT_CALLBACK_EXT: number;
    static VK_STRUCTURE_TYPE_DEBUG_REPORT_CALLBACK_CREATE_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_DEBUG_REPORT_CREATE_INFO_EXT: number;
    static nvkCreateDebugReportCallbackEXT(paramarg0: VkInstance, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkDebugReportMessageEXT(paramarg0: VkInstance, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number): void;
    static nvkDestroyDebugReportCallbackEXT(paramarg0: VkInstance, paramarg1: number, paramarg2: number): void;
    static vkCreateDebugReportCallbackEXT(paramarg0: VkInstance, paramarg1: VkDebugReportCallbackCreateInfoEXT, paramarg2: VkAllocationCallbacks, paramarg3: LongBuffer): number;
    static vkCreateDebugReportCallbackEXT(paramarg0: VkInstance, paramarg1: VkDebugReportCallbackCreateInfoEXT, paramarg2: VkAllocationCallbacks, paramarg3: number[]): number;
    static vkDebugReportMessageEXT(paramarg0: VkInstance, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: CharSequence, paramarg7: CharSequence): void;
    static vkDebugReportMessageEXT(paramarg0: VkInstance, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: ByteBuffer, paramarg7: ByteBuffer): void;
    static vkDestroyDebugReportCallbackEXT(paramarg0: VkInstance, paramarg1: number, paramarg2: VkAllocationCallbacks): void;
    constructor()
}