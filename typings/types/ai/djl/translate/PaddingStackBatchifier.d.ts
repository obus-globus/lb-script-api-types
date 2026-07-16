import type { NDArray } from '../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDManager } from '../../../ai/djl/ndarray/NDManager.d.ts'
import type { Batchifier } from '../../../ai/djl/translate/Batchifier.d.ts'
import type { NDArraySupplier } from '../../../ai/djl/translate/NDArraySupplier.d.ts'
import type { PaddingStackBatchifier$Builder } from '../../../ai/djl/translate/PaddingStackBatchifier$Builder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class PaddingStackBatchifier extends Object implements Batchifier {
    static STACK: Batchifier;
    static builder(): PaddingStackBatchifier$Builder;
    static findMaxSize(paramarg0: (Object | null)[][], paramarg1: number, paramarg2: number): number;
    static fromString(paramarg0: string): Batchifier;
    static padArrays(paramarg0: (Object | null)[][], paramarg1: number, paramarg2: number, paramarg3: NDArray, paramarg4: number): number[];
    constructor(arg0: PaddingStackBatchifier$Builder, arg1: any)
    // private arraysToPad: number[];
    // private dimsToPad: number[];
    // private includeValidLengths: boolean;
    // private paddingSizes: number[];
    // private paddingSuppliers: (param0: NDManager) => NDArray[];
    batchify(arg0: (Object | null)[][]): (Object | null)[];
    split(arg0: (Object | null)[], arg1: number, arg2: boolean): (Object | null)[][];
    unbatchify(arg0: (Object | null)[]): (Object | null)[][];
}