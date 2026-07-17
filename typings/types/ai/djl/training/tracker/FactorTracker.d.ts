import type { FactorTracker$Builder } from '../../../../ai/djl/training/tracker/FactorTracker$Builder.d.ts'
import type { Tracker } from '../../../../ai/djl/training/tracker/Tracker.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FactorTracker extends Object implements Tracker {
    static builder(): FactorTracker$Builder;
    constructor(arg0: FactorTracker$Builder)
    // private baseValue: number;
    // private factor: number;
    // private maxUpdates: number;
    getNewValue(arg0: number): number;
    getNewValue(arg0: string, arg1: number): number;
}