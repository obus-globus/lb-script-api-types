import type { Object } from '../../../java/lang/Object.d.ts'
export class AMDFramebufferMultisampleAdvanced extends Object {
    static GL_MAX_COLOR_FRAMEBUFFER_SAMPLES_AMD: number;
    static GL_MAX_COLOR_FRAMEBUFFER_STORAGE_SAMPLES_AMD: number;
    static GL_MAX_DEPTH_STENCIL_FRAMEBUFFER_SAMPLES_AMD: number;
    static GL_NUM_SUPPORTED_MULTISAMPLE_MODES_AMD: number;
    static GL_RENDERBUFFER_STORAGE_SAMPLES_AMD: number;
    static GL_SUPPORTED_MULTISAMPLE_MODES_AMD: number;
    static glNamedRenderbufferStorageMultisampleAdvancedAMD(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static glRenderbufferStorageMultisampleAdvancedAMD(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    constructor()
}