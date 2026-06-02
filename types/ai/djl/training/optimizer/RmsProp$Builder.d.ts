import type { Optimizer$OptimizerBuilder } from '../../../../ai/djl/training/optimizer/Optimizer$OptimizerBuilder.d.ts'
import type { RmsProp } from '../../../../ai/djl/training/optimizer/RmsProp.d.ts'
import type { ParameterTracker } from '../../../../ai/djl/training/tracker/ParameterTracker.d.ts'
export class RmsProp$Builder extends Optimizer$OptimizerBuilder<RmsProp$Builder> {
    constructor()
    // private centered: boolean;
    // private epsilon: number;
    // private learningRateTracker: ParameterTracker;
    // private momentum: number;
    // private rho: number;
    build(): RmsProp;
    optCentered(arg0: boolean): RmsProp$Builder;
    optEpsilon(arg0: number): RmsProp$Builder;
    optLearningRateTracker(arg0: ParameterTracker): RmsProp$Builder;
    optMomentum(arg0: number): RmsProp$Builder;
    optRho(arg0: number): RmsProp$Builder;
    self(): RmsProp$Builder;
}