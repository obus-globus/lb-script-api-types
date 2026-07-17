import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { BatchTensorList } from '../../../../../ai/djl/modality/nlp/generate/BatchTensorList.d.ts'
import type { NDArray } from '../../../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDManager } from '../../../../../ai/djl/ndarray/NDManager.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SeqBatcher extends Object {
    constructor(arg0: BatchTensorList, arg1: NDArray, arg2: NDArray, arg3: NDManager)
    // private batchSize: number;
    // private batchUid: NDArray;
    data: BatchTensorList;
    // private exitIndexEndPosition: JavaMap<number, number>;
    // private manager: NDManager;
    // private offSets: NDArray;
    // private seqLength: number;
    addBatch(arg0: SeqBatcher): void;
    collectAndTrim(): JavaMap<number, NDArray>;
    exitCriteria(arg0: NDArray, arg1: number, arg2: number): void;
    getData(): BatchTensorList;
    // private merge(arg0: SeqBatcher, arg1: SeqBatcher, arg2: number): void;
    sequenceComplete(): boolean;
}