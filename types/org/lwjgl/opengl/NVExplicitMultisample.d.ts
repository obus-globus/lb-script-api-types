import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NVExplicitMultisample extends Object {
    static GL_INT_SAMPLER_RENDERBUFFER_NV: number;
    static GL_MAX_SAMPLE_MASK_WORDS_NV: number;
    static GL_SAMPLER_RENDERBUFFER_NV: number;
    static GL_SAMPLE_MASK_NV: number;
    static GL_SAMPLE_MASK_VALUE_NV: number;
    static GL_SAMPLE_POSITION_NV: number;
    static GL_TEXTURE_BINDING_RENDERBUFFER_NV: number;
    static GL_TEXTURE_RENDERBUFFER_DATA_STORE_BINDING_NV: number;
    static GL_TEXTURE_RENDERBUFFER_NV: number;
    static GL_UNSIGNED_INT_SAMPLER_RENDERBUFFER_NV: number;
    static glGetMultisamplefvNV(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetMultisamplefvNV(paramarg0: number, paramarg1: number, paramarg2: FloatBuffer): void;
    static glSampleMaskIndexedNV(paramarg0: number, paramarg1: number): void;
    static glTexRenderbufferNV(paramarg0: number, paramarg1: number): void;
    static nglGetMultisamplefvNV(paramarg0: number, paramarg1: number, paramarg2: number): void;
    constructor()
}