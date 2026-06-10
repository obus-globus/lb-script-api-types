import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDManager } from '../../../../ai/djl/ndarray/NDManager.d.ts'
import type { DataType } from '../../../../ai/djl/ndarray/types/DataType.d.ts'
import type { Shape } from '../../../../ai/djl/ndarray/types/Shape.d.ts'
import type { AbstractBlock } from '../../../../ai/djl/nn/AbstractBlock.d.ts'
import type { AbstractIndexedEmbedding } from '../../../../ai/djl/nn/core/AbstractIndexedEmbedding.d.ts'
import type { ParameterStore } from '../../../../ai/djl/training/ParameterStore.d.ts'
import type { Pair } from '../../../../ai/djl/util/Pair.d.ts'
import type { DataInputStream } from '../../../../java/io/DataInputStream.d.ts'
import type { DataOutputStream } from '../../../../java/io/DataOutputStream.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ConstantEmbedding extends AbstractBlock implements AbstractIndexedEmbedding<Object> {
    constructor(arg0: NDArray)
    // private embedding: NDArray;
    decode(arg0: number[]): Object;
    embed(arg0: NDManager, arg1: Object[]): NDArray;
    embed(arg0: Object): number;
    encode(arg0: Object): number[];
    forwardInternal(arg0: ParameterStore, arg1: (Object | null)[], arg2: (Object | null)[], arg3: Pair<string, Object>[]): (Object | null)[];
    forwardInternal(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean, arg3: Pair<string, Object>[]): (Object | null)[];
    getOutputShapes(arg0: Shape[]): Shape[];
    getOutputShapes(arg0: Shape[], arg1: DataType[]): Shape[];
    hasItem(arg0: Object): boolean;
    loadParameters(arg0: NDManager, arg1: DataInputStream): void;
    saveParameters(arg0: DataOutputStream): void;
    unembed(arg0: number): Optional<Object>;
}