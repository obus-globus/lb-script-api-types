import type { LinearTracker$Builder } from '../../../../ai/djl/training/tracker/LinearTracker$Builder.d.ts'
import type { Tracker } from '../../../../ai/djl/training/tracker/Tracker.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LinearTracker extends Object implements Tracker {
    static builder(): LinearTracker$Builder;
    constructor(arg0: LinearTracker$Builder)
    // private baseValue: number;
    // private maxUpdates: number;
    // private slope: number;
    getNewValue(arg0: number): number;
    getNewValue(arg0: string, arg1: number): number;
}