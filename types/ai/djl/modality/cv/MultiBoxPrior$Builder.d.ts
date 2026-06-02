import type { MultiBoxPrior } from '../../../../ai/djl/modality/cv/MultiBoxPrior.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MultiBoxPrior$Builder extends Object {
    constructor()
    // private clip: boolean;
    // private offsets: number[];
    // private ratios: number[];
    // private sizes: number[];
    // private steps: number[];
    build(): MultiBoxPrior;
    optClip(arg0: boolean): MultiBoxPrior$Builder;
    optOffsets(arg0: number[]): MultiBoxPrior$Builder;
    optSteps(arg0: number[]): MultiBoxPrior$Builder;
    setRatios(arg0: number[]): MultiBoxPrior$Builder;
    setSizes(arg0: number[]): MultiBoxPrior$Builder;
}