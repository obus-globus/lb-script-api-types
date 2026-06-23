import type { Object } from '../../../java/lang/Object.d.ts'
import type { BoundedFloatFunction } from '../../../net/minecraft/util/BoundedFloatFunction.d.ts'
import type { CubicSpline } from '../../../net/minecraft/util/CubicSpline.d.ts'
export class CubicSpline$Builder<C extends unknown, I extends BoundedFloatFunction<C>> extends Object {
    constructor(coordinate: I)
    constructor(coordinate: I, valueTransformer: BoundedFloatFunction<number>)
    // private coordinate: I;
    // private derivatives: (Object | null)[];
    // private locations: (Object | null)[];
    // private valueTransformer: BoundedFloatFunction<number>;
    // private values: CubicSpline<C, I>[];
    addPoint(location: number, value: number): CubicSpline$Builder<C, I>;
    addPoint(location: number, value: number, derivative: number): CubicSpline$Builder<C, I>;
    addPoint(location: number, sampler: CubicSpline<C, I>): CubicSpline$Builder<C, I>;
    // private addPoint(location: number, sampler: CubicSpline<C, I>, derivative: number): CubicSpline$Builder<C, I>;
    build(): CubicSpline<C, I>;
}