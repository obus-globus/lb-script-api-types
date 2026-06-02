import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NVShadingRateImage extends Object {
    static GL_MAX_COARSE_FRAGMENT_SAMPLES_NV: number;
    static GL_SHADING_RATE_16_INVOCATIONS_PER_PIXEL_NV: number;
    static GL_SHADING_RATE_1_INVOCATION_PER_1X2_PIXELS_NV: number;
    static GL_SHADING_RATE_1_INVOCATION_PER_2X1_PIXELS_NV: number;
    static GL_SHADING_RATE_1_INVOCATION_PER_2X2_PIXELS_NV: number;
    static GL_SHADING_RATE_1_INVOCATION_PER_2X4_PIXELS_NV: number;
    static GL_SHADING_RATE_1_INVOCATION_PER_4X2_PIXELS_NV: number;
    static GL_SHADING_RATE_1_INVOCATION_PER_4X4_PIXELS_NV: number;
    static GL_SHADING_RATE_1_INVOCATION_PER_PIXEL_NV: number;
    static GL_SHADING_RATE_2_INVOCATIONS_PER_PIXEL_NV: number;
    static GL_SHADING_RATE_4_INVOCATIONS_PER_PIXEL_NV: number;
    static GL_SHADING_RATE_8_INVOCATIONS_PER_PIXEL_NV: number;
    static GL_SHADING_RATE_IMAGE_BINDING_NV: number;
    static GL_SHADING_RATE_IMAGE_NV: number;
    static GL_SHADING_RATE_IMAGE_PALETTE_SIZE_NV: number;
    static GL_SHADING_RATE_IMAGE_TEXEL_HEIGHT_NV: number;
    static GL_SHADING_RATE_IMAGE_TEXEL_WIDTH_NV: number;
    static GL_SHADING_RATE_NO_INVOCATIONS_NV: number;
    static GL_SHADING_RATE_SAMPLE_ORDER_DEFAULT_NV: number;
    static GL_SHADING_RATE_SAMPLE_ORDER_PIXEL_MAJOR_NV: number;
    static GL_SHADING_RATE_SAMPLE_ORDER_SAMPLE_MAJOR_NV: number;
    static glBindShadingRateImageNV(paramarg0: number): void;
    static glGetShadingRateImagePaletteNV(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetShadingRateImagePaletteNV(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static glGetShadingRateSampleLocationivNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static glGetShadingRateSampleLocationivNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer): void;
    static glShadingRateImageBarrierNV(paramarg0: boolean): void;
    static glShadingRateImagePaletteNV(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glShadingRateImagePaletteNV(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static glShadingRateSampleOrderCustomNV(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glShadingRateSampleOrderCustomNV(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static glShadingRateSampleOrderNV(paramarg0: number): void;
    static nglGetShadingRateImagePaletteNV(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglGetShadingRateSampleLocationivNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglShadingRateImagePaletteNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglShadingRateSampleOrderCustomNV(paramarg0: number, paramarg1: number, paramarg2: number): void;
    constructor()
}