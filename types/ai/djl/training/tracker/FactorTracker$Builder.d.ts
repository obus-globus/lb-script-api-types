import type { FactorTracker } from '../../../../ai/djl/training/tracker/FactorTracker.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FactorTracker$Builder extends Object {
    private constructor()
    // private baseValue: number;
    // private factor: number;
    // private maxUpdates: number;
    // private min: number;
    build(): FactorTracker;
    optMaxUpdates(arg0: number): FactorTracker$Builder;
    optMinValue(arg0: number): FactorTracker$Builder;
    setBaseValue(arg0: number): FactorTracker$Builder;
    setFactor(arg0: number): FactorTracker$Builder;
}