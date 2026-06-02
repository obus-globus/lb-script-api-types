import type { NDArray } from '../../../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDIndex } from '../../../../../ai/djl/ndarray/index/NDIndex.d.ts'
import type { Shape } from '../../../../../ai/djl/ndarray/types/Shape.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NDIndexFullPick extends Object {
    static fromIndex(paramarg0: NDIndex, paramarg1: Shape): Optional<NDIndexFullPick>;
    private constructor(arg0: NDArray, arg1: number)
    readonly axis: number;
    readonly indices: NDArray;
    getAxis(): number;
    getIndices(): NDArray;
}