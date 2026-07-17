import type { Tracker } from '../../../../ai/djl/training/tracker/Tracker.d.ts'
import type { WarmUpTracker$Builder } from '../../../../ai/djl/training/tracker/WarmUpTracker$Builder.d.ts'
import type { WarmUpTracker$Mode } from '../../../../ai/djl/training/tracker/WarmUpTracker$Mode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class WarmUpTracker extends Object implements Tracker {
    static builder(): WarmUpTracker$Builder;
    constructor(arg0: WarmUpTracker$Builder)
    // private mainTracker: Tracker;
    // private warmUpBeginValue: number;
    // private warmUpFinalValue: number;
    // private warmUpMode: WarmUpTracker$Mode;
    // private warmUpSteps: number;
    checkValue(arg0: number): void;
    getNewValue(arg0: string, arg1: number): number;
    getNewValue(arg0: number): number;
    getWarmUpValue(arg0: number): number;
}