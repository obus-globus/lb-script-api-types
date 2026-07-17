import type { MultiFactorTracker$Builder } from '../../../../ai/djl/training/tracker/MultiFactorTracker$Builder.d.ts'
import type { Tracker } from '../../../../ai/djl/training/tracker/Tracker.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MultiFactorTracker extends Object implements Tracker {
    static builder(): MultiFactorTracker$Builder;
    constructor(arg0: MultiFactorTracker$Builder)
    // private baseValue: number;
    // private factor: number;
    // private stepIndex: number;
    // private steps: number[];
    getNewValue(arg0: number): number;
    getNewValue(arg0: string, arg1: number): number;
}