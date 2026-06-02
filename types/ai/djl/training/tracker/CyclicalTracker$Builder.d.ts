import type { CyclicalTracker } from '../../../../ai/djl/training/tracker/CyclicalTracker.d.ts'
import type { CyclicalTracker$CyclicalMode } from '../../../../ai/djl/training/tracker/CyclicalTracker$CyclicalMode.d.ts'
import type { CyclicalTracker$ScaleFunction } from '../../../../ai/djl/training/tracker/CyclicalTracker$ScaleFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CyclicalTracker$Builder extends Object {
    private constructor()
    // private baseValue: number;
    // private gamma: number;
    // private maxValue: number;
    // private mode: CyclicalTracker$CyclicalMode;
    // private scaleFunction: CyclicalTracker$ScaleFunction;
    // private scaleModeCycle: boolean;
    // private stepSizeDown: number;
    // private stepSizeUp: number;
    build(): CyclicalTracker;
    optBaseValue(arg0: number): CyclicalTracker$Builder;
    optGamma(arg0: number): CyclicalTracker$Builder;
    optMaxValue(arg0: number): CyclicalTracker$Builder;
    optMode(arg0: CyclicalTracker$CyclicalMode): CyclicalTracker$Builder;
    optScaleFunction(arg0: CyclicalTracker$ScaleFunction): CyclicalTracker$Builder;
    optScaleModeCycle(arg0: boolean): CyclicalTracker$Builder;
    optStepSizeDown(arg0: number): CyclicalTracker$Builder;
    optStepSizeUp(arg0: number): CyclicalTracker$Builder;
}