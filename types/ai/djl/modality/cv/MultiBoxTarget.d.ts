import type { MultiBoxTarget$Builder } from '../../../../ai/djl/modality/cv/MultiBoxTarget$Builder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MultiBoxTarget extends Object {
    static builder(): MultiBoxTarget$Builder;
    constructor(arg0: MultiBoxTarget$Builder)
    // private ignoreLabel: number;
    // private iouThreshold: number;
    // private minNegativeSamples: number;
    // private negativeMiningRatio: number;
    // private negativeMiningThreshold: number;
    target(arg0: (Object | null)[]): (Object | null)[];
}