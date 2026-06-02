import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NVShaderBufferLoad extends Object {
    static GL_BUFFER_GPU_ADDRESS_NV: number;
    static GL_GPU_ADDRESS_NV: number;
    static GL_MAX_SHADER_BUFFER_ADDRESS_NV: number;
    static glGetBufferParameterui64NV(paramarg0: number, paramarg1: number): number;
    static glGetBufferParameterui64vNV(paramarg0: number, paramarg1: number, paramarg2: LongBuffer): void;
    static glGetBufferParameterui64vNV(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetIntegerui64NV(paramarg0: number): number;
    static glGetIntegerui64vNV(paramarg0: number, paramarg1: LongBuffer): void;
    static glGetIntegerui64vNV(paramarg0: number, paramarg1: number[]): void;
    static glGetNamedBufferParameterui64NV(paramarg0: number, paramarg1: number): number;
    static glGetNamedBufferParameterui64vNV(paramarg0: number, paramarg1: number, paramarg2: LongBuffer): void;
    static glGetNamedBufferParameterui64vNV(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetUniformui64NV(paramarg0: number, paramarg1: number): number;
    static glGetUniformui64vNV(paramarg0: number, paramarg1: number, paramarg2: LongBuffer): void;
    static glGetUniformui64vNV(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glIsBufferResidentNV(paramarg0: number): boolean;
    static glIsNamedBufferResidentNV(paramarg0: number): boolean;
    static glMakeBufferNonResidentNV(paramarg0: number): void;
    static glMakeBufferResidentNV(paramarg0: number, paramarg1: number): void;
    static glMakeNamedBufferNonResidentNV(paramarg0: number): void;
    static glMakeNamedBufferResidentNV(paramarg0: number, paramarg1: number): void;
    static glProgramUniformui64NV(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glProgramUniformui64vNV(paramarg0: number, paramarg1: number, paramarg2: LongBuffer): void;
    static glProgramUniformui64vNV(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glUniformui64NV(paramarg0: number, paramarg1: number): void;
    static glUniformui64vNV(paramarg0: number, paramarg1: LongBuffer): void;
    static glUniformui64vNV(paramarg0: number, paramarg1: number[]): void;
    static nglGetBufferParameterui64vNV(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglGetIntegerui64vNV(paramarg0: number, paramarg1: number): void;
    static nglGetNamedBufferParameterui64vNV(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglGetUniformui64vNV(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglProgramUniformui64vNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglUniformui64vNV(paramarg0: number, paramarg1: number, paramarg2: number): void;
    constructor()
}