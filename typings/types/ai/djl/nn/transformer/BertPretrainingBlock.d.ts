import type { NDManager } from '../../../../ai/djl/ndarray/NDManager.d.ts'
import type { DataType } from '../../../../ai/djl/ndarray/types/DataType.d.ts'
import type { Shape } from '../../../../ai/djl/ndarray/types/Shape.d.ts'
import type { AbstractBlock } from '../../../../ai/djl/nn/AbstractBlock.d.ts'
import type { BertBlock } from '../../../../ai/djl/nn/transformer/BertBlock.d.ts'
import type { BertBlock$Builder } from '../../../../ai/djl/nn/transformer/BertBlock$Builder.d.ts'
import type { BertMaskedLanguageModelBlock } from '../../../../ai/djl/nn/transformer/BertMaskedLanguageModelBlock.d.ts'
import type { BertNextSentenceBlock } from '../../../../ai/djl/nn/transformer/BertNextSentenceBlock.d.ts'
import type { ParameterStore } from '../../../../ai/djl/training/ParameterStore.d.ts'
import type { Pair } from '../../../../ai/djl/util/Pair.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BertPretrainingBlock extends AbstractBlock {
    constructor(arg0: BertBlock$Builder)
    // private bertBlock: BertBlock;
    // private mlBlock: BertMaskedLanguageModelBlock;
    // private nsBlock: BertNextSentenceBlock;
    forwardInternal(arg0: ParameterStore, arg1: (Object | null)[], arg2: (Object | null)[], arg3: Pair<K, V>[]): (Object | null)[];
    forwardInternal(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean, arg3: Pair<K, V>[]): (Object | null)[];
    getOutputShapes(arg0: Shape[]): Shape[];
    getOutputShapes(arg0: Shape[], arg1: DataType[]): Shape[];
    initializeChildBlocks(arg0: NDManager, arg1: DataType, arg2: Shape[]): void;
}