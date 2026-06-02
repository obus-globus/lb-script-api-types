import type { HpSet } from '../../../../../ai/djl/training/hyperparameter/param/HpSet.d.ts'
import type { Pair } from '../../../../../ai/djl/util/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface HpOptimizer extends Object{
    getBest(): Pair<HpSet, number>;
    getLoss(arg0: HpSet): number;
    nextConfig(): HpSet;
    update(arg0: HpSet, arg1: number): void;
}