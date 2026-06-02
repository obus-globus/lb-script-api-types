import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDManager } from '../../../../ai/djl/ndarray/NDManager.d.ts'
import type { AbstractIndexedEmbedding } from '../../../../ai/djl/nn/core/AbstractIndexedEmbedding.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Embedding$DefaultItem extends Object implements AbstractIndexedEmbedding<T> {
    constructor(null_: Embedding$DefaultItem)
    // private defaultItem: T;
    decode<T extends Object | number | string | boolean>(arg0: number[]): T;
    embed<T extends Object | number | string | boolean>(arg0: T): number;
    embed(arg0: NDManager, arg1: T[]): NDArray;
    encode<T extends Object | number | string | boolean>(arg0: T): number[];
    hasItem<T extends Object | number | string | boolean>(arg0: T): boolean;
    unembed(arg0: number): Optional<T>;
}