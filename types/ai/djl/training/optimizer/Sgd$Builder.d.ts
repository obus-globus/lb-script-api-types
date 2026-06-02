import type { Optimizer$OptimizerBuilder } from '../../../../ai/djl/training/optimizer/Optimizer$OptimizerBuilder.d.ts'
import type { Sgd } from '../../../../ai/djl/training/optimizer/Sgd.d.ts'
import type { ParameterTracker } from '../../../../ai/djl/training/tracker/ParameterTracker.d.ts'
export class Sgd$Builder extends Optimizer$OptimizerBuilder<Sgd$Builder> {
    constructor()
    // private learningRateTracker: ParameterTracker;
    // private momentum: number;
    build(): Sgd;
    optMomentum(arg0: number): Sgd$Builder;
    self(): Sgd$Builder;
    setLearningRateTracker(arg0: ParameterTracker): Sgd$Builder;
}