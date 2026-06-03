import type { CosineTracker$Builder } from '../../../../ai/djl/training/tracker/CosineTracker$Builder.d.ts'
import type { CyclicalTracker$Builder } from '../../../../ai/djl/training/tracker/CyclicalTracker$Builder.d.ts'
import type { FactorTracker$Builder } from '../../../../ai/djl/training/tracker/FactorTracker$Builder.d.ts'
import type { MultiFactorTracker$Builder } from '../../../../ai/djl/training/tracker/MultiFactorTracker$Builder.d.ts'
import type { PolynomialDecayTracker$Builder } from '../../../../ai/djl/training/tracker/PolynomialDecayTracker$Builder.d.ts'
import type { Tracker } from '../../../../ai/djl/training/tracker/Tracker.d.ts'
import type { WarmUpTracker$Builder } from '../../../../ai/djl/training/tracker/WarmUpTracker$Builder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolynomialDecayTracker extends Object implements Tracker {
    static builder(): PolynomialDecayTracker$Builder;
    static cosine(): CosineTracker$Builder;
    static cyclical(): CyclicalTracker$Builder;
    static factor(): FactorTracker$Builder;
    static fixed(paramarg0: number): Tracker;
    static multiFactor(): MultiFactorTracker$Builder;
    static warmUp(): WarmUpTracker$Builder;
    constructor(arg0: PolynomialDecayTracker$Builder)
    // private baseValue: number;
    // private decaySteps: number;
    // private endLearningRate: number;
    // private power: number;
    getNewValue(arg0: number): number;
    getNewValue(arg0: string, arg1: number): number;
    getNewValue(arg0: string, arg1: number): number;
}