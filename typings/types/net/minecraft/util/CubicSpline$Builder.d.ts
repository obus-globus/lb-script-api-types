import type { Float2FloatFunction } from '../../../it/unimi/dsi/fastutil/floats/Float2FloatFunction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { BoundedFloatFunction } from '../../../net/minecraft/util/BoundedFloatFunction.d.ts'
import type { CubicSpline } from '../../../net/minecraft/util/CubicSpline.d.ts'
export class CubicSpline$Builder<I extends BoundedFloatFunction<Object>> extends Object {
    private constructor(coordinate: I)
    private constructor(coordinate: I, valueTransformer: (param0: number) => number)
    // private coordinate: I;
    // private derivatives: (Object | null)[];
    // private locations: (Object | null)[];
    // private valueTransformer: (param0: number) => number;
    // private values: CubicSpline<I>[];
    addPoint(location: number, value: number): CubicSpline$Builder<I>;
    addPoint(location: number, value: number, derivative: number): CubicSpline$Builder<I>;
    addPoint(location: number, sampler: CubicSpline<I>): CubicSpline$Builder<I>;
    // private addPoint(location: number, sampler: CubicSpline<I>, derivative: number): CubicSpline$Builder<I>;
    build(): CubicSpline<I>;
}