import type { NDArray } from '../../../../../ai/djl/ndarray/NDArray.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CausalLMOutput extends Object {
    constructor(arg0: NDArray, arg1: NDArray, arg2: (Object | null)[])
    constructor(arg0: NDArray, arg1: (Object | null)[])
    // private hiddenStates: NDArray;
    readonly logits: NDArray;
    readonly pastKeyValuesList: (Object | null)[];
    getHiddenState(): NDArray;
    getLogits(): NDArray;
    getPastKeyValuesList(): (Object | null)[];
    setLogits(arg0: NDArray): void;
}