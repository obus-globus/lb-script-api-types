import type { FixedTracker$Builder } from '../../../../ai/djl/training/tracker/FixedTracker$Builder.d.ts'
import type { Tracker } from '../../../../ai/djl/training/tracker/Tracker.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FixedTracker extends Object implements Tracker {
    static builder(): FixedTracker$Builder;
    constructor(arg0: FixedTracker$Builder)
    // private value: number;
    getNewValue(arg0: number): number;
    getNewValue(arg0: string, arg1: number): number;
}