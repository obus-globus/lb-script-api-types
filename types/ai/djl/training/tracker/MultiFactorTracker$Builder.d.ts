import type { MultiFactorTracker } from '../../../../ai/djl/training/tracker/MultiFactorTracker.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MultiFactorTracker$Builder extends Object {
    private constructor()
    // private baseValue: number;
    // private factor: number;
    // private steps: number[];
    build(): MultiFactorTracker;
    optFactor(arg0: number): MultiFactorTracker$Builder;
    setBaseValue(arg0: number): MultiFactorTracker$Builder;
    setSteps(arg0: number[]): MultiFactorTracker$Builder;
}