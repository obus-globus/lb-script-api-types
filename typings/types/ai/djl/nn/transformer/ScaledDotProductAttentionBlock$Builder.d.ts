import type { ScaledDotProductAttentionBlock$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { ScaledDotProductAttentionBlock } from '../../../../ai/djl/nn/transformer/ScaledDotProductAttentionBlock.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ScaledDotProductAttentionBlock$Builder extends Object {
    private constructor()
    constructor(arg0: ScaledDotProductAttentionBlock$1)
    // private attentionProbsDropoutProb: number;
    // private embeddingSize: number;
    // private headCount: number;
    build(): ScaledDotProductAttentionBlock;
    optAttentionProbsDropoutProb(arg0: number): ScaledDotProductAttentionBlock$Builder;
    setEmbeddingSize(arg0: number): ScaledDotProductAttentionBlock$Builder;
    setHeadCount(arg0: number): ScaledDotProductAttentionBlock$Builder;
}