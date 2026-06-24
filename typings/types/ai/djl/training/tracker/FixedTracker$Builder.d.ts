import type { FixedTracker$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { FixedTracker } from '../../../../ai/djl/training/tracker/FixedTracker.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FixedTracker$Builder extends Object {
    private constructor()
    constructor(arg0: FixedTracker$1)
    // private value: number;
    build(): FixedTracker;
    setValue(arg0: number): FixedTracker$Builder;
}