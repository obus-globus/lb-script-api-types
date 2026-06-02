import type { Predictor } from '../../../../../ai/djl/inference/Predictor.d.ts'
import type { CausalLMOutput } from '../../../../../ai/djl/modality/nlp/generate/CausalLMOutput.d.ts'
import type { SearchConfig } from '../../../../../ai/djl/modality/nlp/generate/SearchConfig.d.ts'
import type { SeqBatchScheduler } from '../../../../../ai/djl/modality/nlp/generate/SeqBatchScheduler.d.ts'
import type { SeqBatcher } from '../../../../../ai/djl/modality/nlp/generate/SeqBatcher.d.ts'
import type { NDArray } from '../../../../../ai/djl/ndarray/NDArray.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ContrastiveSeqBatchScheduler extends SeqBatchScheduler {
    constructor(arg0: Predictor<(Object | null)[], CausalLMOutput>, arg1: SearchConfig)
    inferenceCall(): NDArray;
    initForward(arg0: NDArray, arg1: NDArray): SeqBatcher;
}