import type { LinearTracker } from '../../../../ai/djl/training/tracker/LinearTracker.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LinearTracker$Builder extends Object {
    private constructor()
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