import type { Adadelta } from '../../../../ai/djl/training/optimizer/Adadelta.d.ts'
import type { Optimizer$OptimizerBuilder } from '../../../../ai/djl/training/optimizer/Optimizer$OptimizerBuilder.d.ts'
export class Adadelta$Builder extends Optimizer$OptimizerBuilder<Adadelta$Builder> {
    constructor()
    // private epsilon: number;
    // private rho: number;
    build(): Adadelta;
    optEpsilon(arg0: number): Adadelta$Builder;
    optRho(arg0: number): Adadelta$Builder;
    self(): Adadelta$Builder;
}