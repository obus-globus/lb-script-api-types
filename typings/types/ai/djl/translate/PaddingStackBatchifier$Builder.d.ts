import type { PaddingStackBatchifier$1 } from '../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { NDArray } from '../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDManager } from '../../../ai/djl/ndarray/NDManager.d.ts'
import type { NDArraySupplier } from '../../../ai/djl/translate/NDArraySupplier.d.ts'
import type { PaddingStackBatchifier } from '../../../ai/djl/translate/PaddingStackBatchifier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class PaddingStackBatchifier$Builder extends Object {
    private constructor()
    constructor(arg0: PaddingStackBatchifier$1)
    // private arraysToPad: number[];
    // private dimsToPad: number[];
    // private includeValidLengths: boolean;
    // private paddingSizes: number[];
    // private paddingSuppliers: (param0: NDManager) => NDArray[];
    addPad(arg0: number, arg1: number, arg2: (param0: NDManager) => NDArray): PaddingStackBatchifier$Builder;
    addPad(arg0: number, arg1: number, arg2: (param0: NDManager) => NDArray, arg3: number): PaddingStackBatchifier$Builder;
    build(): PaddingStackBatchifier;
    optIncludeValidLengths(arg0: boolean): PaddingStackBatchifier$Builder;
}