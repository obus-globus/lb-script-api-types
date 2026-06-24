import type { LinearTransformation$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { LinearTransformation } from '../../../../com/google/common/math/LinearTransformation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LinearTransformation$LinearTransformationBuilder extends Object {
    private constructor(x1: number, y1: number)
    constructor(arg0: number, arg1: number, arg2: LinearTransformation$1)
    // private x1: number;
    // private y1: number;
    and(x2: number, y2: number): LinearTransformation;
    withSlope(slope: number): LinearTransformation;
}