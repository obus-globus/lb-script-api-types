import type { Predictor } from '../../../../../ai/djl/inference/Predictor.d.ts'
import type { CausalLMOutput } from '../../../../../ai/djl/modality/nlp/generate/CausalLMOutput.d.ts'
import type { SearchConfig } from '../../../../../ai/djl/modality/nlp/generate/SearchConfig.d.ts'
import type { NDArray } from '../../../../../ai/djl/ndarray/NDArray.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TextGenerator extends Object {
    constructor(arg0: Predictor<(Object | null)[], CausalLMOutput>, arg1: string, arg2: SearchConfig)
    // private config: SearchConfig;
    readonly endPosition: number[];
    readonly positionOffset: NDArray;
    // private predictor: Predictor<(Object | null)[], CausalLMOutput>;
    // private searchName: string;
    beamSearch(arg0: NDArray): NDArray;
    contrastiveSearch(arg0: NDArray): NDArray;
    generate(arg0: NDArray): NDArray;
    getEndPosition(): number[];
    getPositionOffset(): NDArray;
    greedySearch(arg0: NDArray): NDArray;
    // private prepareAttentionMaskOffset(arg0: NDArray, arg1: SearchConfig): NDArray;
    // private prepareInput(arg0: NDArray, arg1: NDArray, arg2: number, arg3: number): (Object | null)[];
}