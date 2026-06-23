import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDManager } from '../../../../ai/djl/ndarray/NDManager.d.ts'
import type { DataType } from '../../../../ai/djl/ndarray/types/DataType.d.ts'
import type { Shape } from '../../../../ai/djl/ndarray/types/Shape.d.ts'
import type { SparseFormat } from '../../../../ai/djl/ndarray/types/SparseFormat.d.ts'
import type { AbstractBlock } from '../../../../ai/djl/nn/AbstractBlock.d.ts'
import type { Parameter } from '../../../../ai/djl/nn/Parameter.d.ts'
import type { AbstractIndexedEmbedding } from '../../../../ai/djl/nn/core/AbstractIndexedEmbedding.d.ts'
import type { Embedding$BaseBuilder } from '../../../../ai/djl/nn/core/Embedding$BaseBuilder.d.ts'
import type { ParameterStore } from '../../../../ai/djl/training/ParameterStore.d.ts'
import type { Pair } from '../../../../ai/djl/util/Pair.d.ts'
import type { DataInputStream } from '../../../../java/io/DataInputStream.d.ts'
import type { DataOutputStream } from '../../../../java/io/DataOutputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Embedding<T extends unknown> extends AbstractBlock implements AbstractIndexedEmbedding<T> {
    static embedding(paramarg0: NDArray, paramarg1: NDArray, paramarg2: SparseFormat): (Object | null)[];
    constructor(arg0: NDArray)
    constructor(arg0: NDArray, arg1: SparseFormat)
    constructor(arg0: Embedding$BaseBuilder<T, any>)
    // private embedding: Parameter;
    // private embeddingSize: number;
    // private fallthroughEmbedding: AbstractIndexedEmbedding<T>;
    // private numEmbeddings: number;
    // private sparseFormat: SparseFormat;
    embed(arg0: NDManager, arg1: T[]): NDArray;
    forwardInternal(arg0: ParameterStore, arg1: (Object | null)[], arg2: (Object | null)[], arg3: Pair<string, Object>[]): (Object | null)[];
    forwardInternal(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean, arg3: Pair<string, Object>[]): (Object | null)[];
    getOutputShapes(arg0: Shape[]): Shape[];
    getOutputShapes(arg0: Shape[], arg1: DataType[]): Shape[];
    loadParameters(arg0: NDManager, arg1: DataInputStream): void;
    prepare(arg0: Shape[]): void;
    saveParameters(arg0: DataOutputStream): void;
}