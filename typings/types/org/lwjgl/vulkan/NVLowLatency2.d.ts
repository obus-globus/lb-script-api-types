import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkGetLatencyMarkerInfoNV } from '../../../org/lwjgl/vulkan/VkGetLatencyMarkerInfoNV.d.ts'
import type { VkLatencySleepInfoNV } from '../../../org/lwjgl/vulkan/VkLatencySleepInfoNV.d.ts'
import type { VkLatencySleepModeInfoNV } from '../../../org/lwjgl/vulkan/VkLatencySleepModeInfoNV.d.ts'
import type { VkOutOfBandQueueTypeInfoNV } from '../../../org/lwjgl/vulkan/VkOutOfBandQueueTypeInfoNV.d.ts'
import type { VkQueue } from '../../../org/lwjgl/vulkan/VkQueue.d.ts'
import type { VkSetLatencyMarkerInfoNV } from '../../../org/lwjgl/vulkan/VkSetLatencyMarkerInfoNV.d.ts'
export class NVLowLatency2 extends Object {
    static VK_LATENCY_MARKER_INPUT_SAMPLE_NV: number;
    static VK_LATENCY_MARKER_OUT_OF_BAND_PRESENT_END_NV: number;
    static VK_LATENCY_MARKER_OUT_OF_BAND_PRESENT_START_NV: number;
    static VK_LATENCY_MARKER_OUT_OF_BAND_RENDERSUBMIT_END_NV: number;
    static VK_LATENCY_MARKER_OUT_OF_BAND_RENDERSUBMIT_START_NV: number;
    static VK_LATENCY_MARKER_PRESENT_END_NV: number;
    static VK_LATENCY_MARKER_PRESENT_START_NV: number;
    static VK_LATENCY_MARKER_RENDERSUBMIT_END_NV: number;
    static VK_LATENCY_MARKER_RENDERSUBMIT_START_NV: number;
    static VK_LATENCY_MARKER_SIMULATION_END_NV: number;
    static VK_LATENCY_MARKER_SIMULATION_START_NV: number;
    static VK_LATENCY_MARKER_TRIGGER_FLASH_NV: number;
    static VK_NV_LOW_LATENCY_2_EXTENSION_NAME: string;
    static VK_NV_LOW_LATENCY_2_SPEC_VERSION: number;
    static VK_OUT_OF_BAND_QUEUE_TYPE_PRESENT_NV: number;
    static VK_OUT_OF_BAND_QUEUE_TYPE_RENDER_NV: number;
    static VK_STRUCTURE_TYPE_GET_LATENCY_MARKER_INFO_NV: number;
    static VK_STRUCTURE_TYPE_LATENCY_SLEEP_INFO_NV: number;
    static VK_STRUCTURE_TYPE_LATENCY_SLEEP_MODE_INFO_NV: number;
    static VK_STRUCTURE_TYPE_LATENCY_SUBMISSION_PRESENT_ID_NV: number;
    static VK_STRUCTURE_TYPE_LATENCY_SURFACE_CAPABILITIES_NV: number;
    static VK_STRUCTURE_TYPE_LATENCY_TIMINGS_FRAME_REPORT_NV: number;
    static VK_STRUCTURE_TYPE_OUT_OF_BAND_QUEUE_TYPE_INFO_NV: number;
    static VK_STRUCTURE_TYPE_SET_LATENCY_MARKER_INFO_NV: number;
    static VK_STRUCTURE_TYPE_SWAPCHAIN_LATENCY_CREATE_INFO_NV: number;
    static nvkGetLatencyTimingsNV(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static nvkLatencySleepNV(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkQueueNotifyOutOfBandNV(paramarg0: VkQueue, paramarg1: number): void;
    static nvkSetLatencyMarkerNV(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static nvkSetLatencySleepModeNV(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static vkGetLatencyTimingsNV(paramarg0: VkDevice, paramarg1: number, paramarg2: VkGetLatencyMarkerInfoNV): void;
    static vkLatencySleepNV(paramarg0: VkDevice, paramarg1: number, paramarg2: VkLatencySleepInfoNV): number;
    static vkQueueNotifyOutOfBandNV(paramarg0: VkQueue, paramarg1: VkOutOfBandQueueTypeInfoNV): void;
    static vkSetLatencyMarkerNV(paramarg0: VkDevice, paramarg1: number, paramarg2: VkSetLatencyMarkerInfoNV): void;
    static vkSetLatencySleepModeNV(paramarg0: VkDevice, paramarg1: number, paramarg2: VkLatencySleepModeInfoNV): number;
    constructor()
}