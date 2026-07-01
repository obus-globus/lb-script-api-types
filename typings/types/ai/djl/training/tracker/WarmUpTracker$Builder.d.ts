import type { Tracker } from '../../../../ai/djl/training/tracker/Tracker.d.ts'
import type { WarmUpTracker } from '../../../../ai/djl/training/tracker/WarmUpTracker.d.ts'
import type { WarmUpTracker$Mode } from '../../../../ai/djl/training/tracker/WarmUpTracker$Mode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class WarmUpTracker$Builder extends Object {
    constructor(arg0: any)
    // private mainTracker: Tracker;
    // private warmUpBeginValue: number;
    // private warmUpMode: WarmUpTracker$Mode;
    // private warmUpSteps: number;
    build(): WarmUpTracker;
    optWarmUpBeginValue(arg0: number): WarmUpTracker$Builder;
    optWarmUpMode(arg0: WarmUpTracker$Mode): WarmUpTracker$Builder;
    optWarmUpSteps(arg0: number): WarmUpTracker$Builder;
    setMainTracker(arg0: Tracker): WarmUpTracker$Builder;
}