import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
export class NVCoverageReductionMode extends Object {
    static VK_COVERAGE_REDUCTION_MODE_MERGE_NV: number;
    static VK_COVERAGE_REDUCTION_MODE_TRUNCATE_NV: number;
    static VK_NV_COVERAGE_REDUCTION_MODE_EXTENSION_NAME: string;
    static VK_NV_COVERAGE_REDUCTION_MODE_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_FRAMEBUFFER_MIXED_SAMPLES_COMBINATION_NV: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_COVERAGE_REDUCTION_MODE_FEATURES_NV: number;
    static VK_STRUCTURE_TYPE_PIPELINE_COVERAGE_REDUCTION_STATE_CREATE_INFO_NV: number;
    static nvkGetPhysicalDeviceSupportedFramebufferMixedSamplesCombinationsNV(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number): number;
    static vkGetPhysicalDeviceSupportedFramebufferMixedSamplesCombinationsNV(paramarg0: VkPhysicalDevice, paramarg1: number[], paramarg2: (Object | null)[]): number;
    static vkGetPhysicalDeviceSupportedFramebufferMixedSamplesCombinationsNV(paramarg0: VkPhysicalDevice, paramarg1: IntBuffer, paramarg2: (Object | null)[]): number;
    constructor()
}