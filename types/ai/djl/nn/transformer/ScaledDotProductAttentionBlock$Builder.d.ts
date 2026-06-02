import type { ScaledDotProductAttentionBlock } from '../../../../ai/djl/nn/transformer/ScaledDotProductAttentionBlock.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ScaledDotProductAttentionBlock$Builder extends Object {
    private constructor()
    // private attentionProbsDropoutProb: number;
    // private embeddingSize: number;
    // private headCount: number;
    build(): ScaledDotProductAttentionBlock;
    optAttentionProbsDropoutProb(arg0: number): ScaledDotProductAttentionBlock$Builder;
    setEmbeddingSize(arg0: number): ScaledDotProductAttentionBlock$Builder;
    setHeadCount(arg0: number): ScaledDotProductAttentionBlock$Builder;
}