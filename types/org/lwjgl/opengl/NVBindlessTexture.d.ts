import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NVBindlessTexture extends Object {
    static glGetImageHandleNV(paramarg0: number, paramarg1: number, paramarg2: boolean, paramarg3: number, paramarg4: number): number;
    static glGetTextureHandleNV(paramarg0: number): number;
    static glGetTextureSamplerHandleNV(paramarg0: number, paramarg1: number): number;
    static glIsImageHandleResidentNV(paramarg0: number): boolean;
    static glIsTextureHandleResidentNV(paramarg0: number): boolean;
    static glMakeImageHandleNonResidentNV(paramarg0: number): void;
    static glMakeImageHandleResidentNV(paramarg0: number, paramarg1: number): void;
    static glMakeTextureHandleNonResidentNV(paramarg0: number): void;
    static glMakeTextureHandleResidentNV(paramarg0: number): void;
    static glProgramUniformHandleui64NV(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glProgramUniformHandleui64vNV(paramarg0: number, paramarg1: number, paramarg2: LongBuffer): void;
    static glProgramUniformHandleui64vNV(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glUniformHandleui64NV(paramarg0: number, paramarg1: number): void;
    static glUniformHandleui64vNV(paramarg0: number, paramarg1: LongBuffer): void;
    static glUniformHandleui64vNV(paramarg0: number, paramarg1: number[]): void;
    static nglProgramUniformHandleui64vNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglUniformHandleui64vNV(paramarg0: number, paramarg1: number, paramarg2: number): void;
    constructor()
}