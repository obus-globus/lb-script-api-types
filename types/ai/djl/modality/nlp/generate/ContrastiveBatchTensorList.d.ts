import type { BatchTensorList } from '../../../../../ai/djl/modality/nlp/generate/BatchTensorList.d.ts'
import type { NDArray } from '../../../../../ai/djl/ndarray/NDArray.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ContrastiveBatchTensorList extends BatchTensorList {
    constructor()
    constructor(arg0: NDArray, arg1: NDArray, arg2: NDArray, arg3: NDArray, arg4: (Object | null)[], arg5: number[])
    constructor(arg0: (Object | null)[], arg1: number[])
    readonly logits: NDArray;
    readonly pastHiddenStates: NDArray;
    fromList(arg0: (Object | null)[], arg1: number[]): ContrastiveBatchTensorList;
    getList(): (Object | null)[];
    getLogits(): NDArray;
    getPastHiddenStates(): NDArray;
    setLogits(arg0: NDArray): void;
    setPastHiddenStates(arg0: NDArray): void;
}