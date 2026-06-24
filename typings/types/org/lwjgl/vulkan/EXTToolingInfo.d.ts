import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
export class EXTToolingInfo extends Object {
    static VK_EXT_TOOLING_INFO_EXTENSION_NAME: string;
    static VK_EXT_TOOLING_INFO_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_TOOL_PROPERTIES_EXT: number;
    static VK_TOOL_PURPOSE_ADDITIONAL_FEATURES_BIT_EXT: number;
    static VK_TOOL_PURPOSE_DEBUG_MARKERS_BIT_EXT: number;
    static VK_TOOL_PURPOSE_DEBUG_REPORTING_BIT_EXT: number;
    static VK_TOOL_PURPOSE_MODIFYING_FEATURES_BIT_EXT: number;
    static VK_TOOL_PURPOSE_PROFILING_BIT_EXT: number;
    static VK_TOOL_PURPOSE_TRACING_BIT_EXT: number;
    static VK_TOOL_PURPOSE_VALIDATION_BIT_EXT: number;
    static nvkGetPhysicalDeviceToolPropertiesEXT(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number): number;
    static vkGetPhysicalDeviceToolPropertiesEXT(paramarg0: VkPhysicalDevice, paramarg1: number[], paramarg2: (Object | null)[]): number;
    static vkGetPhysicalDeviceToolPropertiesEXT(paramarg0: VkPhysicalDevice, paramarg1: IntBuffer, paramarg2: (Object | null)[]): number;
    constructor()
}