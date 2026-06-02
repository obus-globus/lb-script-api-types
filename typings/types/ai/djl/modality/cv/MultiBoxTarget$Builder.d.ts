import type { MultiBoxTarget } from '../../../../ai/djl/modality/cv/MultiBoxTarget.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MultiBoxTarget$Builder extends Object {
    constructor()
    // private ignoreLabel: number;
    // private iouThreshold: number;
    // private minNegativeSamples: number;
    // private negativeMinigRatio: number;
    // private negativeMiningThreshold: number;
    build(): MultiBoxTarget;
    optIgnoreLabel(arg0: number): MultiBoxTarget$Builder;
    optIouThreshold(arg0: number): MultiBoxTarget$Builder;
    optMinNegativeSamples(arg0: number): MultiBoxTarget$Builder;
    optNegativeMinigRatio(arg0: number): MultiBoxTarget$Builder;
    optNegativeMiningThreshold(arg0: number): MultiBoxTarget$Builder;
}