import type { MultiBoxPrior$Builder } from '../../../../ai/djl/modality/cv/MultiBoxPrior$Builder.d.ts'
import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MultiBoxPrior extends Object {
    static builder(): MultiBoxPrior$Builder;
    constructor(arg0: MultiBoxPrior$Builder)
    // private clip: boolean;
    // private offsets: number[];
    // private ratios: number[];
    // private sizes: number[];
    // private steps: number[];
    generateAnchorBoxes(arg0: NDArray): NDArray;
}