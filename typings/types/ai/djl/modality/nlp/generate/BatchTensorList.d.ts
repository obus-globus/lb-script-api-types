import type { NDArray } from '../../../../../ai/djl/ndarray/NDArray.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class BatchTensorList extends Object {
    constructor()
    constructor(arg0: NDArray, arg1: NDArray, arg2: (Object | null)[], arg3: number[])
    constructor(arg0: (Object | null)[], arg1: number[])
    readonly pastAttentionMask: NDArray;
    readonly pastKeyValues: (Object | null)[];
    readonly pastOutputIds: NDArray;
    readonly seqDimOrder: number[];
    fromList(arg0: (Object | null)[], arg1: number[]): BatchTensorList;
    getList(): (Object | null)[];
    getPastAttentionMask(): NDArray;
    getPastKeyValues(): (Object | null)[];
    getPastOutputIds(): NDArray;
    getSeqDimOrder(): number[];
    setPastAttentionMask(arg0: NDArray): void;
    setPastKeyValues(arg0: (Object | null)[]): void;
    setPastOutputIds(arg0: NDArray): void;
    setSeqDimOrder(arg0: number[]): void;
}