import type { Nag } from '../../../../ai/djl/training/optimizer/Nag.d.ts'
import type { Optimizer$OptimizerBuilder } from '../../../../ai/djl/training/optimizer/Optimizer$OptimizerBuilder.d.ts'
import type { ParameterTracker } from '../../../../ai/djl/training/tracker/ParameterTracker.d.ts'
export class Nag$Builder extends Optimizer$OptimizerBuilder<Nag$Builder> {
    constructor()
    // private learningRateTracker: ParameterTracker;
    // private momentum: number;
    build(): Nag;
    self(): Nag$Builder;
    setLearningRateTracker(arg0: ParameterTracker): Nag$Builder;
    setMomentum(arg0: number): Nag$Builder;
}