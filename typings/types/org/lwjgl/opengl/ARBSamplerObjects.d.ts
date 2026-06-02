import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBSamplerObjects extends Object {
    static GL_SAMPLER_BINDING: number;
    static glBindSampler(paramarg0: number, paramarg1: number): void;
    static glDeleteSamplers(paramarg0: number): void;
    static glDeleteSamplers(paramarg0: number[]): void;
    static glDeleteSamplers(paramarg0: IntBuffer): void;
    static glGenSamplers(): number;
    static glGenSamplers(paramarg0: number[]): void;
    static glGenSamplers(paramarg0: IntBuffer): void;
    static glGetSamplerParameterIi(paramarg0: number, paramarg1: number): number;
    static glGetSamplerParameterIiv(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetSamplerParameterIiv(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static glGetSamplerParameterIui(paramarg0: number, paramarg1: number): number;
    static glGetSamplerParameterIuiv(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetSamplerParameterIuiv(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static glGetSamplerParameterf(paramarg0: number, paramarg1: number): number;
    static glGetSamplerParameterfv(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetSamplerParameterfv(paramarg0: number, paramarg1: number, paramarg2: FloatBuffer): void;
    static glGetSamplerParameteri(paramarg0: number, paramarg1: number): number;
    static glGetSamplerParameteriv(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetSamplerParameteriv(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static glIsSampler(paramarg0: number): boolean;
    static glSamplerParameterIiv(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glSamplerParameterIiv(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static glSamplerParameterIuiv(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glSamplerParameterIuiv(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static glSamplerParameterf(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glSamplerParameterfv(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glSamplerParameterfv(paramarg0: number, paramarg1: number, paramarg2: FloatBuffer): void;
    static glSamplerParameteri(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glSamplerParameteriv(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glSamplerParameteriv(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static nglDeleteSamplers(paramarg0: number, paramarg1: number): void;
    static nglGenSamplers(paramarg0: number, paramarg1: number): void;
    static nglGetSamplerParameterIiv(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglGetSamplerParameterIuiv(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglGetSamplerParameterfv(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglGetSamplerParameteriv(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglSamplerParameterIiv(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglSamplerParameterIuiv(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglSamplerParameterfv(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglSamplerParameteriv(paramarg0: number, paramarg1: number, paramarg2: number): void;
    constructor()
}