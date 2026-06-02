import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBTextureStorageMultisample extends Object {
    static glTexStorage2DMultisample(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: boolean): void;
    static glTexStorage3DMultisample(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: boolean): void;
    static glTextureStorage2DMultisampleEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: boolean): void;
    static glTextureStorage3DMultisampleEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: boolean): void;
    constructor()
}