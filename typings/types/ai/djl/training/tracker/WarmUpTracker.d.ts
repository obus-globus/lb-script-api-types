import type { CosineTracker$Builder } from '../../../../ai/djl/training/tracker/CosineTracker$Builder.d.ts'
import type { CyclicalTracker$Builder } from '../../../../ai/djl/training/tracker/CyclicalTracker$Builder.d.ts'
import type { FactorTracker$Builder } from '../../../../ai/djl/training/tracker/FactorTracker$Builder.d.ts'
import type { MultiFactorTracker$Builder } from '../../../../ai/djl/training/tracker/MultiFactorTracker$Builder.d.ts'
import type { Tracker } from '../../../../ai/djl/training/tracker/Tracker.d.ts'
import type { WarmUpTracker$Builder } from '../../../../ai/djl/training/tracker/WarmUpTracker$Builder.d.ts'
import type { WarmUpTracker$Mode } from '../../../../ai/djl/training/tracker/WarmUpTracker$Mode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class WarmUpTracker extends Object implements Tracker {
    static builder(): WarmUpTracker$Builder;
    static cosine(): CosineTracker$Builder;
    static cyclical(): CyclicalTracker$Builder;
    static factor(): FactorTracker$Builder;
    static fixed(paramarg0: number): Tracker;
    static multiFactor(): MultiFactorTracker$Builder;
    static warmUp(): WarmUpTracker$Builder;
    constructor(arg0: WarmUpTracker$Builder)
    // private mainTracker: Tracker;
    // private warmUpBeginValue: number;
    // private warmUpFinalValue: number;
    // private warmUpMode: WarmUpTracker$Mode;
    // private warmUpSteps: number;
    checkValue(arg0: number): void;
    getNewValue(arg0: string, arg1: number): number;
    getNewValue(arg0: number): number;
    getNewValue(arg0: string, arg1: number): number;
    getWarmUpValue(arg0: number): number;
}