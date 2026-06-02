import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBTextureMultisample extends Object {
    static GL_INT_SAMPLER_2D_MULTISAMPLE: number;
    static GL_INT_SAMPLER_2D_MULTISAMPLE_ARRAY: number;
    static GL_MAX_COLOR_TEXTURE_SAMPLES: number;
    static GL_MAX_DEPTH_TEXTURE_SAMPLES: number;
    static GL_MAX_INTEGER_SAMPLES: number;
    static GL_MAX_SAMPLE_MASK_WORDS: number;
    static GL_PROXY_TEXTURE_2D_MULTISAMPLE: number;
    static GL_PROXY_TEXTURE_2D_MULTISAMPLE_ARRAY: number;
    static GL_SAMPLER_2D_MULTISAMPLE: number;
    static GL_SAMPLER_2D_MULTISAMPLE_ARRAY: number;
    static GL_SAMPLE_MASK: number;
    static GL_SAMPLE_MASK_VALUE: number;
    static GL_SAMPLE_POSITION: number;
    static GL_TEXTURE_2D_MULTISAMPLE: number;
    static GL_TEXTURE_2D_MULTISAMPLE_ARRAY: number;
    static GL_TEXTURE_BINDING_2D_MULTISAMPLE: number;
    static GL_TEXTURE_BINDING_2D_MULTISAMPLE_ARRAY: number;
    static GL_TEXTURE_FIXED_SAMPLE_LOCATIONS: number;
    static GL_TEXTURE_SAMPLES: number;
    static GL_UNSIGNED_INT_SAMPLER_2D_MULTISAMPLE: number;
    static GL_UNSIGNED_INT_SAMPLER_2D_MULTISAMPLE_ARRAY: number;
    static glGetMultisamplef(paramarg0: number, paramarg1: number): number;
    static glGetMultisamplefv(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetMultisamplefv(paramarg0: number, paramarg1: number, paramarg2: FloatBuffer): void;
    static glSampleMaski(paramarg0: number, paramarg1: number): void;
    static glTexImage2DMultisample(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: boolean): void;
    static glTexImage3DMultisample(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: boolean): void;
    static nglGetMultisamplefv(paramarg0: number, paramarg1: number, paramarg2: number): void;
    constructor()
}