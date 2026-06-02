import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBBindlessTexture extends Object {
    static GL_UNSIGNED_INT64_ARB: number;
    static glGetImageHandleARB(paramarg0: number, paramarg1: number, paramarg2: boolean, paramarg3: number, paramarg4: number): number;
    static glGetTextureHandleARB(paramarg0: number): number;
    static glGetTextureSamplerHandleARB(paramarg0: number, paramarg1: number): number;
    static glGetVertexAttribLui64ARB(paramarg0: number, paramarg1: number): number;
    static glGetVertexAttribLui64vARB(paramarg0: number, paramarg1: number, paramarg2: LongBuffer): void;
    static glGetVertexAttribLui64vARB(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glIsImageHandleResidentARB(paramarg0: number): boolean;
    static glIsTextureHandleResidentARB(paramarg0: number): boolean;
    static glMakeImageHandleNonResidentARB(paramarg0: number): void;
    static glMakeImageHandleResidentARB(paramarg0: number, paramarg1: number): void;
    static glMakeTextureHandleNonResidentARB(paramarg0: number): void;
    static glMakeTextureHandleResidentARB(paramarg0: number): void;
    static glProgramUniformHandleui64ARB(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glProgramUniformHandleui64vARB(paramarg0: number, paramarg1: number, paramarg2: LongBuffer): void;
    static glProgramUniformHandleui64vARB(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glUniformHandleui64ARB(paramarg0: number, paramarg1: number): void;
    static glUniformHandleui64vARB(paramarg0: number, paramarg1: LongBuffer): void;
    static glUniformHandleui64vARB(paramarg0: number, paramarg1: number[]): void;
    static glVertexAttribL1ui64ARB(paramarg0: number, paramarg1: number): void;
    static glVertexAttribL1ui64vARB(paramarg0: number, paramarg1: LongBuffer): void;
    static glVertexAttribL1ui64vARB(paramarg0: number, paramarg1: number[]): void;
    static nglGetVertexAttribLui64vARB(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglProgramUniformHandleui64vARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglUniformHandleui64vARB(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglVertexAttribL1ui64vARB(paramarg0: number, paramarg1: number): void;
    constructor()
}