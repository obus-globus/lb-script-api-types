import type { FactorTracker$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { FactorTracker } from '../../../../ai/djl/training/tracker/FactorTracker.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FactorTracker$Builder extends Object {
    private constructor()
    constructor(arg0: FactorTracker$1)
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