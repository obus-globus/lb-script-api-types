import type { CyclicalTracker$Builder } from '../../../../ai/djl/training/tracker/CyclicalTracker$Builder.d.ts'
import type { CyclicalTracker$ScaleFunction } from '../../../../ai/djl/training/tracker/CyclicalTracker$ScaleFunction.d.ts'
import type { Tracker } from '../../../../ai/djl/training/tracker/Tracker.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CyclicalTracker extends Object implements Tracker {
    static builder(): CyclicalTracker$Builder;
    constructor(arg0: CyclicalTracker$Builder)
    // private baseValue: number;
    // private maxValue: number;
    // private scaleFunction: CyclicalTracker$ScaleFunction;
    // private scaleModeCycle: boolean;
    // private stepRatio: number;
    // private stepSizeDown: number;
    // private stepSizeUp: number;
    // private totalSize: number;
    getNewValue(arg0: number): number;
    getNewValue(arg0: string, arg1: number): number;
}