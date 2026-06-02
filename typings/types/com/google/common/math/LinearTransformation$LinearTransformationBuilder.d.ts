import type { LinearTransformation } from '../../../../com/google/common/math/LinearTransformation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LinearTransformation$LinearTransformationBuilder extends Object {
    private constructor(x1: number, y1: number)
    // private x1: number;
    // private y1: number;
    and(x2: number, y2: number): LinearTransformation;
    withSlope(slope: number): LinearTransformation;
}