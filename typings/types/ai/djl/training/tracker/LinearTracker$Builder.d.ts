import type { LinearTracker$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { LinearTracker } from '../../../../ai/djl/training/tracker/LinearTracker.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LinearTracker$Builder extends Object {
    private constructor()
    constructor(arg0: LinearTracker$1)
    // private baseValue: number;
    // private max: number;
    // private maxUpdates: number;
    // private min: number;
    // private slope: number;
    build(): LinearTracker;
    optMaxUpdates(arg0: number): LinearTracker$Builder;
    optMaxValue(arg0: number): LinearTracker$Builder;
    optMinValue(arg0: number): LinearTracker$Builder;
    optSlope(arg0: number): LinearTracker$Builder;
    setBaseValue(arg0: number): LinearTracker$Builder;
}