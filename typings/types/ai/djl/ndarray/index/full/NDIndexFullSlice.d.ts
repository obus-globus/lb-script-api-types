import type { NDIndex } from '../../../../../ai/djl/ndarray/index/NDIndex.d.ts'
import type { Shape } from '../../../../../ai/djl/ndarray/types/Shape.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NDIndexFullSlice extends Object {
    static fromIndex(paramarg0: NDIndex, paramarg1: Shape): Optional<NDIndexFullSlice>;
    private constructor(arg0: number[], arg1: number[], arg2: number[], arg3: number[], arg4: Shape, arg5: Shape)
    readonly max: number[];
    readonly min: number[];
    readonly shape: Shape;
    readonly squeezedShape: Shape;
    readonly step: number[];
    readonly toSqueeze: number[];
    getMax(): number[];
    getMin(): number[];
    getShape(): Shape;
    getSqueezedShape(): Shape;
    getStep(): number[];
    getToSqueeze(): number[];
}