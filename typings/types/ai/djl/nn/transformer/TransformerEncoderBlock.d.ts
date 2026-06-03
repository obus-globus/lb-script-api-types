import type { NDManager } from '../../../../ai/djl/ndarray/NDManager.d.ts'
import type { DataType } from '../../../../ai/djl/ndarray/types/DataType.d.ts'
import type { Shape } from '../../../../ai/djl/ndarray/types/Shape.d.ts'
import type { AbstractBlock } from '../../../../ai/djl/nn/AbstractBlock.d.ts'
import type { BatchNorm } from '../../../../ai/djl/nn/norm/BatchNorm.d.ts'
import type { Dropout } from '../../../../ai/djl/nn/norm/Dropout.d.ts'
import type { PointwiseFeedForwardBlock } from '../../../../ai/djl/nn/transformer/PointwiseFeedForwardBlock.d.ts'
import type { ScaledDotProductAttentionBlock } from '../../../../ai/djl/nn/transformer/ScaledDotProductAttentionBlock.d.ts'
import type { ParameterStore } from '../../../../ai/djl/training/ParameterStore.d.ts'
import type { Pair } from '../../../../ai/djl/util/Pair.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TransformerEncoderBlock extends AbstractBlock {
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: (param0: (Object | null)[]) => (Object | null)[])
    // private attentionNorm: BatchNorm;
    // private fullyConnectedDropout: Dropout;
    // private outputNorm: BatchNorm;
    // private pointWisefullyConnected: PointwiseFeedForwardBlock;
    // private selfAttentionBlock: ScaledDotProductAttentionBlock;
    // private selfAttentionDropout: Dropout;
    forwardInternal(arg0: ParameterStore, arg1: (Object | null)[], arg2: (Object | null)[], arg3: Pair<K, V>[]): (Object | null)[];
    forwardInternal(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean, arg3: Pair<K, V>[]): (Object | null)[];
    getOutputShapes(arg0: Shape[]): Shape[];
    getOutputShapes(arg0: Shape[], arg1: DataType[]): Shape[];
    initializeChildBlocks(arg0: NDManager, arg1: DataType, arg2: Shape[]): void;
}