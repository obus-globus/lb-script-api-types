import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDManager } from '../../../../ai/djl/ndarray/NDManager.d.ts'
import type { DataType } from '../../../../ai/djl/ndarray/types/DataType.d.ts'
import type { Shape } from '../../../../ai/djl/ndarray/types/Shape.d.ts'
import type { AbstractBlock } from '../../../../ai/djl/nn/AbstractBlock.d.ts'
import type { Parameter } from '../../../../ai/djl/nn/Parameter.d.ts'
import type { Linear } from '../../../../ai/djl/nn/core/Linear.d.ts'
import type { BatchNorm } from '../../../../ai/djl/nn/norm/BatchNorm.d.ts'
import type { Dropout } from '../../../../ai/djl/nn/norm/Dropout.d.ts'
import type { BertBlock$Builder } from '../../../../ai/djl/nn/transformer/BertBlock$Builder.d.ts'
import type { IdEmbedding } from '../../../../ai/djl/nn/transformer/IdEmbedding.d.ts'
import type { TransformerEncoderBlock } from '../../../../ai/djl/nn/transformer/TransformerEncoderBlock.d.ts'
import type { ParameterStore } from '../../../../ai/djl/training/ParameterStore.d.ts'
import type { Pair } from '../../../../ai/djl/util/Pair.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BertBlock extends AbstractBlock {
    static builder(): BertBlock$Builder;
    static createAttentionMaskFromInputMask(paramarg0: NDArray, paramarg1: NDArray): NDArray;
    private constructor(arg0: BertBlock$Builder)
    // private embeddingDropout: Dropout;
    // private embeddingNorm: BatchNorm;
    readonly embeddingSize: number;
    // private pooling: Linear;
    // private positionEmebdding: Parameter;
    readonly tokenDictionarySize: number;
    readonly tokenEmbedding: IdEmbedding;
    // private transformerEncoderBlocks: TransformerEncoderBlock[];
    readonly typeDictionarySize: number;
    // private typeEmbedding: IdEmbedding;
    forwardInternal(arg0: ParameterStore, arg1: (Object | null)[], arg2: (Object | null)[], arg3: Pair<string, Object>[]): (Object | null)[];
    forwardInternal(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean, arg3: Pair<string, Object>[]): (Object | null)[];
    getEmbeddingSize(): number;
    getOutputShapes(arg0: Shape[]): Shape[];
    getOutputShapes(arg0: Shape[], arg1: DataType[]): Shape[];
    getTokenDictionarySize(): number;
    getTokenEmbedding(): IdEmbedding;
    getTypeDictionarySize(): number;
    initializeChildBlocks(arg0: NDManager, arg1: DataType, ...arg2: Shape[]): void;
}