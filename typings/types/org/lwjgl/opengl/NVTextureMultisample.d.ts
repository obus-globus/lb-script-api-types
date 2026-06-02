import type { Object } from '../../../java/lang/Object.d.ts'
export class NVTextureMultisample extends Object {
    static GL_TEXTURE_COLOR_SAMPLES_NV: number;
    static GL_TEXTURE_COVERAGE_SAMPLES_NV: number;
    static glTexImage2DMultisampleCoverageNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: boolean): void;
    static glTexImage3DMultisampleCoverageNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: boolean): void;
    static glTextureImage2DMultisampleCoverageNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: boolean): void;
    static glTextureImage2DMultisampleNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: boolean): void;
    static glTextureImage3DMultisampleCoverageNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: boolean): void;
    static glTextureImage3DMultisampleNV(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: boolean): void;
    constructor()
}