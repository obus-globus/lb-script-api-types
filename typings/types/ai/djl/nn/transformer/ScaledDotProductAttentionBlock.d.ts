import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDManager } from '../../../../ai/djl/ndarray/NDManager.d.ts'
import type { DataType } from '../../../../ai/djl/ndarray/types/DataType.d.ts'
import type { Shape } from '../../../../ai/djl/ndarray/types/Shape.d.ts'
import type { AbstractBlock } from '../../../../ai/djl/nn/AbstractBlock.d.ts'
import type { Linear } from '../../../../ai/djl/nn/core/Linear.d.ts'
import type { Dropout } from '../../../../ai/djl/nn/norm/Dropout.d.ts'
import type { ScaledDotProductAttentionBlock$Builder } from '../../../../ai/djl/nn/transformer/ScaledDotProductAttentionBlock$Builder.d.ts'
import type { ParameterStore } from '../../../../ai/djl/training/ParameterStore.d.ts'
import type { Pair } from '../../../../ai/djl/util/Pair.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ScaledDotProductAttentionBlock extends AbstractBlock {
    static builder(): ScaledDotProductAttentionBlock$Builder;
    private constructor(arg0: ScaledDotProductAttentionBlock$Builder)
    // private attentionProbsDropout: Dropout;
    // private embeddingSize: number;
    // private headCount: number;
    readonly keyProjection: Linear;
    readonly queryProjection: Linear;
    readonly resultProjection: Linear;
    readonly valueProjection: Linear;
    // private buildProjection(): Linear;
    // private createAttentionHeadsFromEmbeddings(arg0: NDArray, arg1: number, arg2: number, arg3: number, arg4: number): NDArray;
    forwardInternal(arg0: ParameterStore, arg1: (Object | null)[], arg2: (Object | null)[], arg3: Pair<string, Object>[]): (Object | null)[];
    forwardInternal(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean, arg3: Pair<string, Object>[]): (Object | null)[];
    getKeyProjection(): Linear;
    getOutputShapes(arg0: Shape[]): Shape[];
    getOutputShapes(arg0: Shape[], arg1: DataType[]): Shape[];
    getQueryProjection(): Linear;
    getResultProjection(): Linear;
    getValueProjection(): Linear;
    initializeChildBlocks(arg0: NDManager, arg1: DataType, arg2: Shape[]): void;
}