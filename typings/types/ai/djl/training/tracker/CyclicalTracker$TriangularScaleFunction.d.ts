import type { CyclicalTracker$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { CyclicalTracker$ScaleFunction } from '../../../../ai/djl/training/tracker/CyclicalTracker$ScaleFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CyclicalTracker$TriangularScaleFunction extends Object implements CyclicalTracker$ScaleFunction {
    private constructor()
    constructor(arg0: CyclicalTracker$1)
    func(arg0: number): number;
}