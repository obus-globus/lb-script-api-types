import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBSparseTexture extends Object {
    static GL_MAX_SPARSE_3D_TEXTURE_SIZE_ARB: number;
    static GL_MAX_SPARSE_ARRAY_TEXTURE_LAYERS_ARB: number;
    static GL_MAX_SPARSE_TEXTURE_SIZE_ARB: number;
    static GL_NUM_SPARSE_LEVELS_ARB: number;
    static GL_NUM_VIRTUAL_PAGE_SIZES_ARB: number;
    static GL_SPARSE_TEXTURE_FULL_ARRAY_CUBE_MIPMAPS_ARB: number;
    static GL_TEXTURE_SPARSE_ARB: number;
    static GL_VIRTUAL_PAGE_SIZE_INDEX_ARB: number;
    static GL_VIRTUAL_PAGE_SIZE_X_ARB: number;
    static GL_VIRTUAL_PAGE_SIZE_Y_ARB: number;
    static GL_VIRTUAL_PAGE_SIZE_Z_ARB: number;
    static glTexPageCommitmentARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: boolean): void;
    static glTexturePageCommitmentEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: boolean): void;
    constructor()
}