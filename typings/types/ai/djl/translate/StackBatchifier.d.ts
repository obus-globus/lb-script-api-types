import type { NDArray } from '../../../ai/djl/ndarray/NDArray.d.ts'
import type { Batchifier } from '../../../ai/djl/translate/Batchifier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class StackBatchifier extends Object implements Batchifier {
    static STACK: Batchifier;
    constructor()
    batchify(arg0: (Object | null)[][]): (Object | null)[];
    split(arg0: (Object | null)[], arg1: number, arg2: boolean): (Object | null)[][];
    // private split(arg0: NDArray, arg1: number, arg2: boolean): (Object | null)[];
    unbatchify(arg0: (Object | null)[]): (Object | null)[][];
}