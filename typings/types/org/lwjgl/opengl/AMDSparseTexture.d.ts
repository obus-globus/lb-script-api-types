import type { Object } from '../../../java/lang/Object.d.ts'
export class AMDSparseTexture extends Object {
    static GL_MAX_SPARSE_3D_TEXTURE_SIZE_AMD: number;
    static GL_MAX_SPARSE_ARRAY_TEXTURE_LAYERS: number;
    static GL_MAX_SPARSE_TEXTURE_SIZE_AMD: number;
    static GL_MIN_LOD_WARNING_AMD: number;
    static GL_MIN_SPARSE_LEVEL_AMD: number;
    static GL_TEXTURE_STORAGE_SPARSE_BIT_AMD: number;
    static GL_VIRTUAL_PAGE_SIZE_X_AMD: number;
    static GL_VIRTUAL_PAGE_SIZE_Y_AMD: number;
    static GL_VIRTUAL_PAGE_SIZE_Z_AMD: number;
    static glTexStorageSparseAMD(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    static glTextureStorageSparseAMD(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number): void;
    constructor()
}