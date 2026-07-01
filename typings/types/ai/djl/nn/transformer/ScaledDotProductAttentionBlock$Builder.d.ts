import type { ScaledDotProductAttentionBlock } from '../../../../ai/djl/nn/transformer/ScaledDotProductAttentionBlock.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ScaledDotProductAttentionBlock$Builder extends Object {
    constructor(arg0: any)
    // private attentionProbsDropoutProb: number;
    // private embeddingSize: number;
    // private headCount: number;
    build(): ScaledDotProductAttentionBlock;
    optAttentionProbsDropoutProb(arg0: number): ScaledDotProductAttentionBlock$Builder;
    setEmbeddingSize(arg0: number): ScaledDotProductAttentionBlock$Builder;
    setHeadCount(arg0: number): ScaledDotProductAttentionBlock$Builder;
}