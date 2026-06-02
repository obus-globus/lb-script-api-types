import type { IdEmbedding } from '../../../../ai/djl/nn/transformer/IdEmbedding.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class IdEmbedding$Builder extends Object {
    constructor()
    // private dictionarySize: number;
    // private embeddingSize: number;
    build(): IdEmbedding;
    setDictionarySize(arg0: number): IdEmbedding$Builder;
    setEmbeddingSize(arg0: number): IdEmbedding$Builder;
}