import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class EXTFragmentShadingRate extends Object {
    static GL_FRAGMENT_SHADING_RATE_ATTACHMENT_WITH_DEFAULT_FRAMEBUFFER_SUPPORTED_EXT: number;
    static GL_FRAGMENT_SHADING_RATE_COMBINER_OP_KEEP_EXT: number;
    static GL_FRAGMENT_SHADING_RATE_COMBINER_OP_MAX_EXT: number;
    static GL_FRAGMENT_SHADING_RATE_COMBINER_OP_MIN_EXT: number;
    static GL_FRAGMENT_SHADING_RATE_COMBINER_OP_MUL_EXT: number;
    static GL_FRAGMENT_SHADING_RATE_COMBINER_OP_REPLACE_EXT: number;
    static GL_FRAGMENT_SHADING_RATE_NON_TRIVIAL_COMBINERS_SUPPORTED_EXT: number;
    static GL_FRAGMENT_SHADING_RATE_PRIMITIVE_RATE_WITH_MULTI_VIEWPORT_SUPPORTED_EXT: number;
    static GL_FRAGMENT_SHADING_RATE_WITH_SAMPLE_MASK_SUPPORTED_EXT: number;
    static GL_FRAGMENT_SHADING_RATE_WITH_SHADER_DEPTH_STENCIL_WRITES_SUPPORTED_EXT: number;
    static GL_MAX_FRAGMENT_SHADING_RATE_ATTACHMENT_LAYERS_EXT: number;
    static GL_MAX_FRAGMENT_SHADING_RATE_ATTACHMENT_TEXEL_ASPECT_RATIO_EXT: number;
    static GL_MAX_FRAGMENT_SHADING_RATE_ATTACHMENT_TEXEL_HEIGHT_EXT: number;
    static GL_MAX_FRAGMENT_SHADING_RATE_ATTACHMENT_TEXEL_WIDTH_EXT: number;
    static GL_MIN_FRAGMENT_SHADING_RATE_ATTACHMENT_TEXEL_HEIGHT_EXT: number;
    static GL_MIN_FRAGMENT_SHADING_RATE_ATTACHMENT_TEXEL_WIDTH_EXT: number;
    static GL_SHADING_RATE_1X1_PIXELS_EXT: number;
    static GL_SHADING_RATE_1X2_PIXELS_EXT: number;
    static GL_SHADING_RATE_1X4_PIXELS_EXT: number;
    static GL_SHADING_RATE_2X1_PIXELS_EXT: number;
    static GL_SHADING_RATE_2X2_PIXELS_EXT: number;
    static GL_SHADING_RATE_2X4_PIXELS_EXT: number;
    static GL_SHADING_RATE_4X1_PIXELS_EXT: number;
    static GL_SHADING_RATE_4X2_PIXELS_EXT: number;
    static GL_SHADING_RATE_4X4_PIXELS_EXT: number;
    static GL_SHADING_RATE_ATTACHMENT_EXT: number;
    static GL_SHADING_RATE_EXT: number;
    static glFramebufferShadingRateEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    static glGetFragmentShadingRatesEXT(paramarg0: number, paramarg1: number[], paramarg2: number[]): void;
    static glGetFragmentShadingRatesEXT(paramarg0: number, paramarg1: IntBuffer, paramarg2: IntBuffer): void;
    static glShadingRateCombinerOpsEXT(paramarg0: number, paramarg1: number): void;
    static glShadingRateEXT(paramarg0: number): void;
    static nglGetFragmentShadingRatesEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    constructor()
}