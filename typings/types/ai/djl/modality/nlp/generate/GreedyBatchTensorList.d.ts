import type { BatchTensorList } from '../../../../../ai/djl/modality/nlp/generate/BatchTensorList.d.ts'
import type { NDArray } from '../../../../../ai/djl/ndarray/NDArray.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class GreedyBatchTensorList extends BatchTensorList {
    constructor()
    constructor(arg0: NDArray, arg1: NDArray, arg2: (Object | null)[], arg3: NDArray)
    readonly nextInputIds: NDArray;
    readonly pastAttentionMask: NDArray;
    readonly pastKeyValues: (Object | null)[];
    readonly pastOutputIds: NDArray;
    fromList(arg0: (Object | null)[], arg1: number[]): BatchTensorList;
    getList(): (Object | null)[];
    getNextInputIds(): NDArray;
    getPastAttentionMask(): NDArray;
    getPastKeyValues(): (Object | null)[];
    getPastOutputIds(): NDArray;
    setNextInputIds(arg0: NDArray): void;
    setPastAttentionMask(arg0: NDArray): void;
    setPastKeyValues(arg0: (Object | null)[]): void;
    setPastOutputIds(arg0: NDArray): void;
}