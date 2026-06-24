import type { CosineTracker$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { CosineTracker } from '../../../../ai/djl/training/tracker/CosineTracker.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CosineTracker$Builder extends Object {
    private constructor()
    constructor(arg0: CosineTracker$1)
    // private baseValue: number;
    // private finalValue: number;
    // private maxUpdates: number;
    build(): CosineTracker;
    optFinalValue(arg0: number): CosineTracker$Builder;
    setBaseValue(arg0: number): CosineTracker$Builder;
    setMaxUpdates(arg0: number): CosineTracker$Builder;
}