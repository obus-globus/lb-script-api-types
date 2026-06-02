import type { Adagrad } from '../../../../ai/djl/training/optimizer/Adagrad.d.ts'
import type { Optimizer$OptimizerBuilder } from '../../../../ai/djl/training/optimizer/Optimizer$OptimizerBuilder.d.ts'
import type { ParameterTracker } from '../../../../ai/djl/training/tracker/ParameterTracker.d.ts'
export class Adagrad$Builder extends Optimizer$OptimizerBuilder<Adagrad$Builder> {
    constructor()
    // private epsilon: number;
    // private learningRateTracker: ParameterTracker;
    build(): Adagrad;
    optEpsilon(arg0: number): Adagrad$Builder;
    optLearningRateTracker(arg0: ParameterTracker): Adagrad$Builder;
    self(): Adagrad$Builder;
}