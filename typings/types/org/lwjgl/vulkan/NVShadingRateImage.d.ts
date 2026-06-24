import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
export class NVShadingRateImage extends Object {
    static VK_ACCESS_SHADING_RATE_IMAGE_READ_BIT_NV: number;
    static VK_COARSE_SAMPLE_ORDER_TYPE_CUSTOM_NV: number;
    static VK_COARSE_SAMPLE_ORDER_TYPE_DEFAULT_NV: number;
    static VK_COARSE_SAMPLE_ORDER_TYPE_PIXEL_MAJOR_NV: number;
    static VK_COARSE_SAMPLE_ORDER_TYPE_SAMPLE_MAJOR_NV: number;
    static VK_DYNAMIC_STATE_VIEWPORT_COARSE_SAMPLE_ORDER_NV: number;
    static VK_DYNAMIC_STATE_VIEWPORT_SHADING_RATE_PALETTE_NV: number;
    static VK_IMAGE_LAYOUT_SHADING_RATE_OPTIMAL_NV: number;
    static VK_IMAGE_USAGE_SHADING_RATE_IMAGE_BIT_NV: number;
    static VK_NV_SHADING_RATE_IMAGE_EXTENSION_NAME: string;
    static VK_NV_SHADING_RATE_IMAGE_SPEC_VERSION: number;
    static VK_PIPELINE_STAGE_SHADING_RATE_IMAGE_BIT_NV: number;
    static VK_SHADING_RATE_PALETTE_ENTRY_16_INVOCATIONS_PER_PIXEL_NV: number;
    static VK_SHADING_RATE_PALETTE_ENTRY_1_INVOCATION_PER_1X2_PIXELS_NV: number;
    static VK_SHADING_RATE_PALETTE_ENTRY_1_INVOCATION_PER_2X1_PIXELS_NV: number;
    static VK_SHADING_RATE_PALETTE_ENTRY_1_INVOCATION_PER_2X2_PIXELS_NV: number;
    static VK_SHADING_RATE_PALETTE_ENTRY_1_INVOCATION_PER_2X4_PIXELS_NV: number;
    static VK_SHADING_RATE_PALETTE_ENTRY_1_INVOCATION_PER_4X2_PIXELS_NV: number;
    static VK_SHADING_RATE_PALETTE_ENTRY_1_INVOCATION_PER_4X4_PIXELS_NV: number;
    static VK_SHADING_RATE_PALETTE_ENTRY_1_INVOCATION_PER_PIXEL_NV: number;
    static VK_SHADING_RATE_PALETTE_ENTRY_2_INVOCATIONS_PER_PIXEL_NV: number;
    static VK_SHADING_RATE_PALETTE_ENTRY_4_INVOCATIONS_PER_PIXEL_NV: number;
    static VK_SHADING_RATE_PALETTE_ENTRY_8_INVOCATIONS_PER_PIXEL_NV: number;
    static VK_SHADING_RATE_PALETTE_ENTRY_NO_INVOCATIONS_NV: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_SHADING_RATE_IMAGE_FEATURES_NV: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_SHADING_RATE_IMAGE_PROPERTIES_NV: number;
    static VK_STRUCTURE_TYPE_PIPELINE_VIEWPORT_COARSE_SAMPLE_ORDER_STATE_CREATE_INFO_NV: number;
    static VK_STRUCTURE_TYPE_PIPELINE_VIEWPORT_SHADING_RATE_IMAGE_STATE_CREATE_INFO_NV: number;
    static nvkCmdSetCoarseSampleOrderNV(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nvkCmdSetViewportShadingRatePaletteNV(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static vkCmdBindShadingRateImageNV(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number): void;
    static vkCmdSetCoarseSampleOrderNV(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: (Object | null)[]): void;
    static vkCmdSetViewportShadingRatePaletteNV(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: (Object | null)[]): void;
    constructor()
}