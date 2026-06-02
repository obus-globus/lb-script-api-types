import type { BaseHpOptimizer } from '../../../../../ai/djl/training/hyperparameter/optimizer/BaseHpOptimizer.d.ts'
import type { HpSet } from '../../../../../ai/djl/training/hyperparameter/param/HpSet.d.ts'
export class HpORandom extends BaseHpOptimizer {
    constructor(arg0: HpSet)
    nextConfig(): HpSet;
}