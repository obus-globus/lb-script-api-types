import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBSparseBuffer extends Object {
    static GL_SPARSE_BUFFER_PAGE_SIZE_ARB: number;
    static GL_SPARSE_STORAGE_BIT_ARB: number;
    static glBufferPageCommitmentARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: boolean): void;
    static glNamedBufferPageCommitmentARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: boolean): void;
    static glNamedBufferPageCommitmentEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: boolean): void;
    constructor()
}