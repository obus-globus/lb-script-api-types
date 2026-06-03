import type { CosineTracker$Builder } from '../../../../ai/djl/training/tracker/CosineTracker$Builder.d.ts'
import type { CyclicalTracker$Builder } from '../../../../ai/djl/training/tracker/CyclicalTracker$Builder.d.ts'
import type { CyclicalTracker$ScaleFunction } from '../../../../ai/djl/training/tracker/CyclicalTracker$ScaleFunction.d.ts'
import type { FactorTracker$Builder } from '../../../../ai/djl/training/tracker/FactorTracker$Builder.d.ts'
import type { MultiFactorTracker$Builder } from '../../../../ai/djl/training/tracker/MultiFactorTracker$Builder.d.ts'
import type { Tracker } from '../../../../ai/djl/training/tracker/Tracker.d.ts'
import type { WarmUpTracker$Builder } from '../../../../ai/djl/training/tracker/WarmUpTracker$Builder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CyclicalTracker extends Object implements Tracker {
    static builder(): CyclicalTracker$Builder;
    static cosine(): CosineTracker$Builder;
    static cyclical(): CyclicalTracker$Builder;
    static factor(): FactorTracker$Builder;
    static fixed(paramarg0: number): Tracker;
    static multiFactor(): MultiFactorTracker$Builder;
    static warmUp(): WarmUpTracker$Builder;
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
    getNewValue(arg0: string, arg1: number): number;
}