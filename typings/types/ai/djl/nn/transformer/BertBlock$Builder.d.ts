import type { BertBlock$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { BertBlock } from '../../../../ai/djl/nn/transformer/BertBlock.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BertBlock$Builder extends Object {
    private constructor()
    constructor(arg0: BertBlock$1)
    // private attentionHeadCount: number;
    // private embeddingSize: number;
    // private hiddenDropoutProbability: number;
    // private hiddenSize: number;
    // private maxSequenceLength: number;
    // private tokenDictionarySize: number;
    // private transformerBlockCount: number;
    // private typeDictionarySize: number;
    base(): BertBlock$Builder;
    build(): BertBlock;
    large(): BertBlock$Builder;
    micro(): BertBlock$Builder;
    nano(): BertBlock$Builder;
    optAttentionHeadCount(arg0: number): BertBlock$Builder;
    optEmbeddingSize(arg0: number): BertBlock$Builder;
    optHiddenDropoutProbability(arg0: number): BertBlock$Builder;
    optHiddenSize(arg0: number): BertBlock$Builder;
    optMaxSequenceLength(arg0: number): BertBlock$Builder;
    optTransformerBlockCount(arg0: number): BertBlock$Builder;
    optTypeDictionarySize(arg0: number): BertBlock$Builder;
    setTokenDictionarySize(arg0: number): BertBlock$Builder;
}