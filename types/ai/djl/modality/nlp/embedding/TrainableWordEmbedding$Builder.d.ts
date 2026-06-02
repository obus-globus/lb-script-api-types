import type { Vocabulary } from '../../../../../ai/djl/modality/nlp/Vocabulary.d.ts'
import type { TrainableWordEmbedding } from '../../../../../ai/djl/modality/nlp/embedding/TrainableWordEmbedding.d.ts'
import type { Embedding$BaseBuilder } from '../../../../../ai/djl/nn/core/Embedding$BaseBuilder.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class TrainableWordEmbedding$Builder extends Embedding$BaseBuilder<string, TrainableWordEmbedding$Builder> {
    constructor()
    // private vocabulary: Vocabulary;
    build(): TrainableWordEmbedding;
    optUnknownToken(arg0: string): TrainableWordEmbedding$Builder;
    self(): TrainableWordEmbedding$Builder;
    setType(arg0: Class<string>): TrainableWordEmbedding$Builder;
    setVocabulary(arg0: Vocabulary): TrainableWordEmbedding$Builder;
}