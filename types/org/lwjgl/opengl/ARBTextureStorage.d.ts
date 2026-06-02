import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBTextureStorage extends Object {
    static GL_TEXTURE_IMMUTABLE_FORMAT: number;
    static glTexStorage1D(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static glTexStorage2D(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static glTexStorage3D(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static glTextureStorage1DEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static glTextureStorage2DEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static glTextureStorage3DEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    constructor()
}