import type { Predictor } from '../../../../../ai/djl/inference/Predictor.d.ts'
import type { CausalLMOutput } from '../../../../../ai/djl/modality/nlp/generate/CausalLMOutput.d.ts'
import type { SearchConfig } from '../../../../../ai/djl/modality/nlp/generate/SearchConfig.d.ts'
import type { SeqBatcher } from '../../../../../ai/djl/modality/nlp/generate/SeqBatcher.d.ts'
import type { NDArray } from '../../../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDManager } from '../../../../../ai/djl/ndarray/NDManager.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class SeqBatchScheduler extends Object {
    constructor(arg0: Predictor<(Object | null)[], CausalLMOutput>, arg1: SearchConfig)
    // private config: SearchConfig;
    // private manager: NDManager;
    // private predictor: Predictor<(Object | null)[], CausalLMOutput>;
    // private results: { [key: number]: NDArray };
    // private seqBatcher: SeqBatcher;
    addRequest(arg0: NDArray, arg1: NDArray): void;
    collectResults(): { [key: number]: NDArray };
    incrementForward(arg0: number): boolean;
    inferenceCall(): NDArray;
    initForward(arg0: NDArray, arg1: NDArray): SeqBatcher;
}