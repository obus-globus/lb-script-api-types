import type { Adam } from '../../../../ai/djl/training/optimizer/Adam.d.ts'
import type { Optimizer$OptimizerBuilder } from '../../../../ai/djl/training/optimizer/Optimizer$OptimizerBuilder.d.ts'
import type { ParameterTracker } from '../../../../ai/djl/training/tracker/ParameterTracker.d.ts'
export class Adam$Builder extends Optimizer$OptimizerBuilder<Adam$Builder> {
    constructor()
    // private beta1: number;
    // private beta2: number;
    // private epsilon: number;
    // private learningRateTracker: ParameterTracker;
    build(): Adam;
    optBeta1(arg0: number): Adam$Builder;
    optBeta2(arg0: number): Adam$Builder;
    optEpsilon(arg0: number): Adam$Builder;
    optLearningRateTracker(arg0: ParameterTracker): Adam$Builder;
    self(): Adam$Builder;
}