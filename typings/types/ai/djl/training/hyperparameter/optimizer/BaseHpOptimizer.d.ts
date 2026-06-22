import type { HpOptimizer } from '../../../../../ai/djl/training/hyperparameter/optimizer/HpOptimizer.d.ts'
import type { HpSet } from '../../../../../ai/djl/training/hyperparameter/param/HpSet.d.ts'
import type { Pair } from '../../../../../ai/djl/util/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class BaseHpOptimizer extends Object implements HpOptimizer {
    constructor(arg0: HpSet)
    // private hyperParams: HpSet;
    // private results: Map<HpSet, number>;
    getBest(): Pair<HpSet, number>;
    getLoss(arg0: HpSet): number;
    nextConfig(): HpSet;
    update(arg0: HpSet, arg1: number): void;
}