import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
export class NVFragmentShadingRateEnums extends Object {
    static VK_FRAGMENT_SHADING_RATE_16_INVOCATIONS_PER_PIXEL_NV: number;
    static VK_FRAGMENT_SHADING_RATE_1_INVOCATION_PER_1X2_PIXELS_NV: number;
    static VK_FRAGMENT_SHADING_RATE_1_INVOCATION_PER_2X1_PIXELS_NV: number;
    static VK_FRAGMENT_SHADING_RATE_1_INVOCATION_PER_2X2_PIXELS_NV: number;
    static VK_FRAGMENT_SHADING_RATE_1_INVOCATION_PER_2X4_PIXELS_NV: number;
    static VK_FRAGMENT_SHADING_RATE_1_INVOCATION_PER_4X2_PIXELS_NV: number;
    static VK_FRAGMENT_SHADING_RATE_1_INVOCATION_PER_4X4_PIXELS_NV: number;
    static VK_FRAGMENT_SHADING_RATE_1_INVOCATION_PER_PIXEL_NV: number;
    static VK_FRAGMENT_SHADING_RATE_2_INVOCATIONS_PER_PIXEL_NV: number;
    static VK_FRAGMENT_SHADING_RATE_4_INVOCATIONS_PER_PIXEL_NV: number;
    static VK_FRAGMENT_SHADING_RATE_8_INVOCATIONS_PER_PIXEL_NV: number;
    static VK_FRAGMENT_SHADING_RATE_NO_INVOCATIONS_NV: number;
    static VK_FRAGMENT_SHADING_RATE_TYPE_ENUMS_NV: number;
    static VK_FRAGMENT_SHADING_RATE_TYPE_FRAGMENT_SIZE_NV: number;
    static VK_NV_FRAGMENT_SHADING_RATE_ENUMS_EXTENSION_NAME: string;
    static VK_NV_FRAGMENT_SHADING_RATE_ENUMS_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_FRAGMENT_SHADING_RATE_ENUMS_FEATURES_NV: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_FRAGMENT_SHADING_RATE_ENUMS_PROPERTIES_NV: number;
    static VK_STRUCTURE_TYPE_PIPELINE_FRAGMENT_SHADING_RATE_ENUM_STATE_CREATE_INFO_NV: number;
    static nvkCmdSetFragmentShadingRateEnumNV(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number): void;
    static vkCmdSetFragmentShadingRateEnumNV(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number[]): void;
    static vkCmdSetFragmentShadingRateEnumNV(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: IntBuffer): void;
    constructor()
}