import type { CosineTracker$Builder } from '../../../../ai/djl/training/tracker/CosineTracker$Builder.d.ts'
import type { Tracker } from '../../../../ai/djl/training/tracker/Tracker.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CosineTracker extends Object implements Tracker {
    static builder(): CosineTracker$Builder;
    constructor(arg0: CosineTracker$Builder)
    // private baseValue: number;
    // private finalValue: number;
    // private maxUpdates: number;
    getNewValue(arg0: number): number;
    getNewValue(arg0: string, arg1: number): number;
}