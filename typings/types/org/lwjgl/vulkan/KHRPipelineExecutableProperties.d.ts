import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkPipelineExecutableInfoKHR } from '../../../org/lwjgl/vulkan/VkPipelineExecutableInfoKHR.d.ts'
import type { VkPipelineInfoKHR } from '../../../org/lwjgl/vulkan/VkPipelineInfoKHR.d.ts'
export class KHRPipelineExecutableProperties extends Object {
    static VK_KHR_PIPELINE_EXECUTABLE_PROPERTIES_EXTENSION_NAME: string;
    static VK_KHR_PIPELINE_EXECUTABLE_PROPERTIES_SPEC_VERSION: number;
    static VK_PIPELINE_CREATE_CAPTURE_INTERNAL_REPRESENTATIONS_BIT_KHR: number;
    static VK_PIPELINE_CREATE_CAPTURE_STATISTICS_BIT_KHR: number;
    static VK_PIPELINE_EXECUTABLE_STATISTIC_FORMAT_BOOL32_KHR: number;
    static VK_PIPELINE_EXECUTABLE_STATISTIC_FORMAT_FLOAT64_KHR: number;
    static VK_PIPELINE_EXECUTABLE_STATISTIC_FORMAT_INT64_KHR: number;
    static VK_PIPELINE_EXECUTABLE_STATISTIC_FORMAT_UINT64_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_PIPELINE_EXECUTABLE_PROPERTIES_FEATURES_KHR: number;
    static VK_STRUCTURE_TYPE_PIPELINE_EXECUTABLE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_PIPELINE_EXECUTABLE_INTERNAL_REPRESENTATION_KHR: number;
    static VK_STRUCTURE_TYPE_PIPELINE_EXECUTABLE_PROPERTIES_KHR: number;
    static VK_STRUCTURE_TYPE_PIPELINE_EXECUTABLE_STATISTIC_KHR: number;
    static VK_STRUCTURE_TYPE_PIPELINE_INFO_KHR: number;
    static nvkGetPipelineExecutableInternalRepresentationsKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkGetPipelineExecutablePropertiesKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkGetPipelineExecutableStatisticsKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static vkGetPipelineExecutableInternalRepresentationsKHR(paramarg0: VkDevice, paramarg1: VkPipelineExecutableInfoKHR, paramarg2: number[], paramarg3: (Object | null)[]): number;
    static vkGetPipelineExecutableInternalRepresentationsKHR(paramarg0: VkDevice, paramarg1: VkPipelineExecutableInfoKHR, paramarg2: IntBuffer, paramarg3: (Object | null)[]): number;
    static vkGetPipelineExecutablePropertiesKHR(paramarg0: VkDevice, paramarg1: VkPipelineInfoKHR, paramarg2: number[], paramarg3: (Object | null)[]): number;
    static vkGetPipelineExecutablePropertiesKHR(paramarg0: VkDevice, paramarg1: VkPipelineInfoKHR, paramarg2: IntBuffer, paramarg3: (Object | null)[]): number;
    static vkGetPipelineExecutableStatisticsKHR(paramarg0: VkDevice, paramarg1: VkPipelineExecutableInfoKHR, paramarg2: number[], paramarg3: (Object | null)[]): number;
    static vkGetPipelineExecutableStatisticsKHR(paramarg0: VkDevice, paramarg1: VkPipelineExecutableInfoKHR, paramarg2: IntBuffer, paramarg3: (Object | null)[]): number;
    constructor()
}