import type { CosineTracker } from '../../../../ai/djl/training/tracker/CosineTracker.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CosineTracker$Builder extends Object {
    constructor(arg0: any)
    // private baseValue: number;
    // private finalValue: number;
    // private maxUpdates: number;
    build(): CosineTracker;
    optFinalValue(arg0: number): CosineTracker$Builder;
    setBaseValue(arg0: number): CosineTracker$Builder;
    setMaxUpdates(arg0: number): CosineTracker$Builder;
}