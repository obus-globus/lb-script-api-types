import type { AdamW } from '../../../../ai/djl/training/optimizer/AdamW.d.ts'
import type { Optimizer$OptimizerBuilder } from '../../../../ai/djl/training/optimizer/Optimizer$OptimizerBuilder.d.ts'
import type { ParameterTracker } from '../../../../ai/djl/training/tracker/ParameterTracker.d.ts'
export class AdamW$Builder extends Optimizer$OptimizerBuilder<AdamW$Builder> {
    constructor()
    // private beta1: number;
    // private beta2: number;
    // private epsilon: number;
    // private learningRateTracker: ParameterTracker;
    build(): AdamW;
    optBeta1(arg0: number): AdamW$Builder;
    optBeta2(arg0: number): AdamW$Builder;
    optEpsilon(arg0: number): AdamW$Builder;
    optLearningRateTracker(arg0: ParameterTracker): AdamW$Builder;
    self(): AdamW$Builder;
}