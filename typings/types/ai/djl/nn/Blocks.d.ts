import type { NDArray } from '../../../ai/djl/ndarray/NDArray.d.ts'
import type { DataType } from '../../../ai/djl/ndarray/types/DataType.d.ts'
import type { Shape } from '../../../ai/djl/ndarray/types/Shape.d.ts'
import type { Block } from '../../../ai/djl/nn/Block.d.ts'
import type { Pair } from '../../../ai/djl/util/Pair.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Blocks extends Object {
    static batchFlatten(paramarg0: NDArray): NDArray;
    static batchFlatten(paramarg0: NDArray, paramarg1: number): NDArray;
    static batchFlattenBlock(): Block;
    static batchFlattenBlock(paramarg0: number): Block;
    static describe(paramarg0: Block, paramarg1: string, paramarg2: number): string;
    static identityBlock(): Block;
    static onesBlock(paramarg0: Pair<DataType, Shape>[], paramarg1: string[]): Block;
    private constructor()
}