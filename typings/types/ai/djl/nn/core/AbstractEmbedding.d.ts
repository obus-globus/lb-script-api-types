import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDManager } from '../../../../ai/djl/ndarray/NDManager.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface AbstractEmbedding<T extends Object | number | string | boolean> extends Object{
    embed(arg0: NDManager, arg1: T[]): NDArray;
    hasItem(arg0: T): boolean;
}