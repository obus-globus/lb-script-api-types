import type { Device } from '../../../../ai/djl/Device.d.ts'
import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDManager } from '../../../../ai/djl/ndarray/NDManager.d.ts'
import type { DataType } from '../../../../ai/djl/ndarray/types/DataType.d.ts'
import type { Shape } from '../../../../ai/djl/ndarray/types/Shape.d.ts'
import type { AbstractBlock } from '../../../../ai/djl/nn/AbstractBlock.d.ts'
import type { Parameter } from '../../../../ai/djl/nn/Parameter.d.ts'
import type { IdEmbedding$Builder } from '../../../../ai/djl/nn/transformer/IdEmbedding$Builder.d.ts'
import type { ParameterStore } from '../../../../ai/djl/training/ParameterStore.d.ts'
import type { Pair } from '../../../../ai/djl/util/Pair.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class IdEmbedding extends AbstractBlock {
    private constructor(arg0: IdEmbedding$Builder)
    // private dictionarySize: number;
    // private embedding: Parameter;
    // private embeddingSize: number;
    forwardInternal(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean, arg3: Pair<K, V>[]): (Object | null)[];
    getOutputShapes(arg0: Shape[]): Shape[];
    getValue(arg0: ParameterStore, arg1: Device, arg2: boolean): NDArray;
    initializeChildBlocks(arg0: NDManager, arg1: DataType, arg2: Shape[]): void;
    probabilities(arg0: ParameterStore, arg1: NDArray, arg2: boolean): NDArray;
}