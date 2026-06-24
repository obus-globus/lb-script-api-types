import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkPastPresentationTimingInfoEXT } from '../../../org/lwjgl/vulkan/VkPastPresentationTimingInfoEXT.d.ts'
import type { VkPastPresentationTimingPropertiesEXT } from '../../../org/lwjgl/vulkan/VkPastPresentationTimingPropertiesEXT.d.ts'
import type { VkSwapchainTimeDomainPropertiesEXT } from '../../../org/lwjgl/vulkan/VkSwapchainTimeDomainPropertiesEXT.d.ts'
import type { VkSwapchainTimingPropertiesEXT } from '../../../org/lwjgl/vulkan/VkSwapchainTimingPropertiesEXT.d.ts'
export class EXTPresentTiming extends Object {
    static VK_ERROR_PRESENT_TIMING_QUEUE_FULL_EXT: number;
    static VK_EXT_PRESENT_TIMING_EXTENSION_NAME: string;
    static VK_EXT_PRESENT_TIMING_SPEC_VERSION: number;
    static VK_PAST_PRESENTATION_TIMING_ALLOW_OUT_OF_ORDER_RESULTS_BIT_EXT: number;
    static VK_PAST_PRESENTATION_TIMING_ALLOW_PARTIAL_RESULTS_BIT_EXT: number;
    static VK_PRESENT_STAGE_IMAGE_FIRST_PIXEL_OUT_BIT_EXT: number;
    static VK_PRESENT_STAGE_IMAGE_FIRST_PIXEL_VISIBLE_BIT_EXT: number;
    static VK_PRESENT_STAGE_QUEUE_OPERATIONS_END_BIT_EXT: number;
    static VK_PRESENT_STAGE_REQUEST_DEQUEUED_BIT_EXT: number;
    static VK_PRESENT_TIMING_INFO_PRESENT_AT_NEAREST_REFRESH_CYCLE_BIT_EXT: number;
    static VK_PRESENT_TIMING_INFO_PRESENT_AT_RELATIVE_TIME_BIT_EXT: number;
    static VK_STRUCTURE_TYPE_PAST_PRESENTATION_TIMING_EXT: number;
    static VK_STRUCTURE_TYPE_PAST_PRESENTATION_TIMING_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_PAST_PRESENTATION_TIMING_PROPERTIES_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_PRESENT_TIMING_FEATURES_EXT: number;
    static VK_STRUCTURE_TYPE_PRESENT_TIMINGS_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_PRESENT_TIMING_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_PRESENT_TIMING_SURFACE_CAPABILITIES_EXT: number;
    static VK_STRUCTURE_TYPE_SWAPCHAIN_CALIBRATED_TIMESTAMP_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_SWAPCHAIN_TIME_DOMAIN_PROPERTIES_EXT: number;
    static VK_STRUCTURE_TYPE_SWAPCHAIN_TIMING_PROPERTIES_EXT: number;
    static VK_SWAPCHAIN_CREATE_PRESENT_TIMING_BIT_EXT: number;
    static VK_TIME_DOMAIN_PRESENT_STAGE_LOCAL_EXT: number;
    static VK_TIME_DOMAIN_SWAPCHAIN_LOCAL_EXT: number;
    static nvkGetPastPresentationTimingEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkGetSwapchainTimeDomainPropertiesEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkGetSwapchainTimingPropertiesEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static vkGetPastPresentationTimingEXT(paramarg0: VkDevice, paramarg1: VkPastPresentationTimingInfoEXT, paramarg2: VkPastPresentationTimingPropertiesEXT): number;
    static vkGetSwapchainTimeDomainPropertiesEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: VkSwapchainTimeDomainPropertiesEXT, paramarg3: LongBuffer): number;
    static vkGetSwapchainTimeDomainPropertiesEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: VkSwapchainTimeDomainPropertiesEXT, paramarg3: number[]): number;
    static vkGetSwapchainTimingPropertiesEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: VkSwapchainTimingPropertiesEXT, paramarg3: LongBuffer): number;
    static vkGetSwapchainTimingPropertiesEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: VkSwapchainTimingPropertiesEXT, paramarg3: number[]): number;
    static vkSetSwapchainPresentTimingQueueSizeEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    constructor()
}